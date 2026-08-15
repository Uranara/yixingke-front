
import type { Metadata } from "next";
import "./globals.css";
import {TooltipProvider} from "@/components/ui/tooltip";
import {ThemeProvider} from "@/components/ui/theme-provider";


export const metadata: Metadata = {
  title: "翼客行",
  description: "无人机管理平台",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange  >
      <TooltipProvider>
        {children}
      </TooltipProvider>
      </ThemeProvider>
      </body>
    </html>
  );
}
