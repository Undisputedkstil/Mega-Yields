CREATE POLICY "Admins can read news images"
ON storage.objects FOR SELECT TO authenticated
USING (bucket_id = 'news-images' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can upload news images"
ON storage.objects FOR INSERT TO authenticated
WITH CHECK (bucket_id = 'news-images' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update news images"
ON storage.objects FOR UPDATE TO authenticated
USING (bucket_id = 'news-images' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete news images"
ON storage.objects FOR DELETE TO authenticated
USING (bucket_id = 'news-images' AND public.has_role(auth.uid(), 'admin'));