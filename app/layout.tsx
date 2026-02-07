import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Loading from "@/components/layout/Loading";
import { CartProvider } from "@/lib/cart-context";
import { CartDrawerProvider } from "@/lib/cart-drawer-context";
import CartDrawer from "@/components/cart/CartDrawer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AIR BENJEL 27 - Équipementier sportif",
    template: "%s | AIR BENJEL 27",
  },
  description:
    "AIR BENJEL 27 - Équipementier sportif spécialisé dans la conception, la fabrication et la commercialisation d'articles de sport, de vêtements et d'accessoires de mode, la construction de sites sportifs et le consulting.",
  icons: {
    icon: "/logo1.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body>
        <Loading />
        <CartProvider>
          <CartDrawerProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
              <CartDrawer />
            </div>
          </CartDrawerProvider>
        </CartProvider>
      </body>
    </html>
  );
}
