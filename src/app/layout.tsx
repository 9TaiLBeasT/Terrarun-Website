import type { Metadata } from "next";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "TerraRun - Walk. Capture. Conquer.",
  description: "Turn your neighborhood into a real-time strategy game. Walk or run to capture hexagonal territories, earn coins, and compete on leaderboards.",
  icons: {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/6e638708-7b5c-42f2-ae57-9360b8e0b380/AppIcon-1767425534524.png?width=8000&height=8000&resize=contain",
    shortcut: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/6e638708-7b5c-42f2-ae57-9360b8e0b380/AppIcon-1767425534524.png?width=8000&height=8000&resize=contain",
    apple: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/6e638708-7b5c-42f2-ae57-9360b8e0b380/AppIcon-1767425534524.png?width=8000&height=8000&resize=contain",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
        <Analytics />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
