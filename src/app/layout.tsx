import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "@fontsource-variable/plus-jakarta-sans";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";
import { COMMUNITY_NAME, SITE_URL } from "@/lib/constants";
import { META_PIXEL_ID } from "@/lib/analytics";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${COMMUNITY_NAME} | Join Our Telegram Community`,
  description:
    "Join EARN like a pro on Telegram and discover useful insights, opportunities and resources.",
  openGraph: {
    title: `${COMMUNITY_NAME} | Join Our Telegram Community`,
    description:
      "Join EARN like a pro on Telegram and discover useful insights, opportunities and resources.",
    url: SITE_URL,
    siteName: COMMUNITY_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMMUNITY_NAME} | Join Our Telegram Community`,
    description:
      "Join EARN like a pro on Telegram and discover useful insights, opportunities and resources.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050608",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        {META_PIXEL_ID ? (
          <Script id="meta-pixel-base" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${META_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
        ) : null}
      </body>
    </html>
  );
}
