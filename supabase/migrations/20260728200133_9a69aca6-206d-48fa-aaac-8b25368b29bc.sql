CREATE TYPE public.app_role AS ENUM ('admin', 'editor', 'user');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

CREATE POLICY "Users can read their own roles"
ON public.user_roles FOR SELECT TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Admins can read all roles"
ON public.user_roles FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE TABLE public.articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  title text NOT NULL,
  category text NOT NULL DEFAULT 'Updates',
  excerpt text NOT NULL DEFAULT '',
  content text NOT NULL DEFAULT '',
  hero_image_url text,
  published boolean NOT NULL DEFAULT false,
  published_at timestamptz NOT NULL DEFAULT now(),
  author_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX articles_published_at_idx ON public.articles (published, published_at DESC);

GRANT SELECT ON public.articles TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.articles TO authenticated;
GRANT ALL ON public.articles TO service_role;

ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Published articles are publicly readable"
ON public.articles FOR SELECT TO anon, authenticated
USING (published = true);

CREATE POLICY "Admins can read all articles"
ON public.articles FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert articles"
ON public.articles FOR INSERT TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update articles"
ON public.articles FOR UPDATE TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete articles"
ON public.articles FOR DELETE TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER articles_set_updated_at
BEFORE UPDATE ON public.articles
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- The first account to sign up becomes an admin so the CMS is usable immediately.
CREATE OR REPLACE FUNCTION public.grant_first_user_admin()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM public.user_roles WHERE role = 'admin') THEN
    INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'admin');
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created_grant_admin
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.grant_first_user_admin();

INSERT INTO public.articles (slug, title, category, excerpt, content, published, published_at)
VALUES
('chilli-production-scaled-400-percent', 'Chilli production scaled by 400%', 'Production', 'Our cayenne chilli operation reached full commercial output this season, proving the viability of our production systems at scale.', E'Our cayenne chilli operation reached full commercial output this season.\n\nSystematic bed preparation, drip irrigation scheduling and a disciplined harvest calendar allowed us to scale production by 400% without compromising grade consistency.\n\nWhat changed:\n\n- Tightened irrigation cycles based on soil moisture readings\n- Staggered planting to smooth weekly harvest volumes\n- Improved post-harvest sorting and cold handling\n\nThe result is a reliable weekly supply line our commercial buyers can plan around.', true, now() - interval '10 days'),
('new-wholesale-supply-partnerships', 'New wholesale supply partnerships', 'Partnerships', 'We have onboarded additional wholesale and food service partners across Gauteng, expanding our committed offtake for the coming season.', E'We have onboarded additional wholesale and food service partners across Gauteng.\n\nThese agreements expand our committed offtake for the coming season and give our production team firm volume targets to plan against.\n\nIf your business needs a consistent fresh produce supplier, our team is open to new supply conversations.', true, now() - interval '4 days'),
('soil-health-programme-update', 'Soil health programme update', 'Sustainability', 'Cover cropping and organic matter recycling are now standard across our production blocks, improving water retention and long-term soil structure.', E'Cover cropping and organic matter recycling are now standard practice across our production blocks.\n\nThe programme focuses on three outcomes: improved water retention, healthier soil structure and reduced reliance on synthetic inputs over time.\n\nWe measure results block by block and adjust each season.', true, now() - interval '1 day');