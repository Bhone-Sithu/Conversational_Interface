import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Provider } from "react-redux";
import StoreProvider from "./StoreProvider";
import { store } from "../lib/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Conversational Interface",
    template: "%s | Conversational Interface",
  },
  description: "This project is developed for a technical test.",
  openGraph: {
    title: "Conversational Interface",
    description: "This project is developed for a technical test.",
    url: "https://chat.bhonesithu.tech",
    siteName: "Conversational Interface",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  manifest: "/manifest.webmanifest",
  keywords: [
    "conversational interface",
    "chat",
    "ai",
    "ai assitance",
    "conversation",
  ],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  generator: "Next.js",
  icons: [
    { rel: "apple-touch-icon", url: "icon-images/icon-128x128.png" },
    { rel: "icon", url: "icon-images/icon-128x128.png" },
    { rel: "shortcut", url: "favicon.png" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </AppRouterCacheProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
