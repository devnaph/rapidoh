import { Marcellus, Montserrat } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import CursorProvider from "@/components/CursorContext";
import Transitions from "@/components/Transitions";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";

const marcellus = Marcellus({ 
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-marcellus",
 });

 const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800", "900"],
  variable: "--font-montserrat",
 });

export const metadata = {
  title: "Rapidoh Empire Salon",
  description: "Elite Beauty Salon | Nairobi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-screen">
      <body className={`${marcellus.variable} ${montserrat.variable} bg-[#FFD8A9] overflow-x-hidden`}>
        <CursorProvider>
          <Transitions />
          <Header />
          <PageTransition>
            {children}
          </PageTransition>
          <Footer />
        </CursorProvider>
      </body>
    </html> 
  );
}


