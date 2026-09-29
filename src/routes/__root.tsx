import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import { Toaster } from "@/components/ui/sonner";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

/**
 * If someone visits a route that doesn't exist,
 * automatically send them back to the home page.
 */
function NotFoundComponent() {
  const router = useRouter();

  useEffect(() => {
    router.navigate({
      to: "/",
      replace: true,
    });
  }, [router]);

  return null;
}

/**
 * Error screen for genuine application errors.
 */
function ErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error(error);

  const router = useRouter();

  useEffect(() => {
    reportLovableError(error, {
      boundary: "tanstack_root_error_component",
    });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="mb-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <span className="text-2xl">!</span>
          </div>
        </div>

        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>

        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Something went wrong while loading this page. You can try again or
          return to the MegaYield Farms home page.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>

          <button
            onClick={() => {
              router.navigate({
                to: "/",
                replace: true,
              });
            }}
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
}

export const Route =
  createRootRouteWithContext<{ queryClient: QueryClient }>()({
    head: () => ({
      meta: [
        {
          charSet: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          name: "author",
          content: "MegaYield Farms (Pty) Ltd",
        },
        {
          name: "description",
          content:
            "MegaYield Farms is a South African agricultural company growing chilli peppers, tomatoes and pilot crops for commercial fresh-produce supply.",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:site_name",
          content: "MegaYield Farms",
        },
        {
          property: "og:title",
          content: "MegaYield Farms | Growing With Purpose",
        },
        {
          property: "og:description",
          content:
            "South African agriculture focused on fresh produce, sustainable farming and reliable commercial supply.",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
      ],

      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "",
        },
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap",
        },
      ],

      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "MegaYield Farms (Pty) Ltd",
            url: "https://megayieldfarms.co.za",
            description:
              "South African agricultural company growing chilli peppers, tomatoes and pilot crops for commercial fresh-produce supply.",
          }),
        },
      ],
    }),

    shellComponent: RootShell,
    component: RootComponent,

    // Automatically redirect unknown pages to Home.
    notFoundComponent: NotFoundComponent,

    errorComponent: ErrorComponent,
  });

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>

      <body>
        {children}

        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. */}
      <Outlet />

      <Toaster
        position="top-right"
        richColors
      />
    </QueryClientProvider>
  );
}
