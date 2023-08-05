import type { Metadata } from "next";
import { Mukta } from "next/font/google";

const mukta = Mukta({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Journal | Era of Blogging",
  description: "Step into the modern era of blogging",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mukta.className}>{children}</body>
    </html>
  );
}
