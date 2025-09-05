import { Inter } from "next/font/google";
import "../assets/sass/style.sass";
import "../assets/css/fontawesome-5.14.0.min.css";
import "../assets/css/flaticon.min.css";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Mavani Sahil k",
    description: "Good design is expensive, bad design costs a fortune!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="bg-lines">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
