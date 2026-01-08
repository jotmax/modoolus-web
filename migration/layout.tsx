import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

// Load Inter for body text
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

// Load Poppins for headings
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Modoolus - Where Africa's Next Tech Talent Begins",
  description: "Level up with hands-on training, mentorship, and real opportunities. Join Africa's fastest-growing tech community and transform your future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
        <body className={`${inter.className} antialiased`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
