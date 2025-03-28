import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Toaster } from "sonner";


export const metadata: Metadata = {
  title: "Hangouts",
  description: "Find Your Perfect Hangout Partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>

      </body>
    </html>
  );
}
