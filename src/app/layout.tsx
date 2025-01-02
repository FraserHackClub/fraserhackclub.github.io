import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import "@/ui/styles/tailwind.css";
import Navbar from "@/ui/components/Navbar";

const plus = Plus_Jakarta_Sans({ subsets: ["latin"] });

const identity = {
  title: "Fraser Hack Club",
  description:
    "A community of middle/high school students who code and learn together, based in Tri-Cities, BC.",
};

export const metadata: Metadata = {
  title: identity.title,
  description: identity.description,
  openGraph: {
    ...identity,
    url: "https://fraser.hackclub.com",
    siteName: "Fraser Hack Club",
    locale: "en_CA",
    type: "website",
    images: [{ url: "https://bcydc.ca/banners/embed.png" }],
  },
  twitter: {
    ...identity,
    card: "summary_large_image",
    images: ["https://bcydc.ca/banners/embed.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.15.4/css/all.css"
        />
      </head>
      <body className={`${plus.className}`}>
        <div className="bg-gradient-to-r from-b-900 to-m-900 flex h-full w-full flex-col items-center overflow-y-hidden">
          <div className="flex h-full min-h-screen w-full max-w-[1024px] flex-col items-center px-4 md:w-[1024px] md:max-w-[1024px] md:px-0">
            <Navbar />
            {children}
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-E9N10N52TY" />
            <Script id="google-analytics">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-E9N10N52TY');
              `}
            </Script>
          </div>
        </div>
      </body>
    </html>
  );
}
