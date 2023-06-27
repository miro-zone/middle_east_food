import "./globals.scss";

import classes from "./layout.module.scss";
import Navbar from "@/components/navbar/Navbar";
import { AuthProvider } from "@/contexts/auth-context";
import { CartProvider } from "@/contexts/cart-context";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={classes.body}>
        <AuthProvider>
          <CartProvider>
            <Navbar />
            {children}
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
