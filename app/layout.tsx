import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";

export const metadata: Metadata = {
    title: "Getaway Rentals",
    description: "Quick and easy rental for your next getaway",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="relative">
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
