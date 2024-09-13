import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SidebarProvider } from "./providers";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Movie App",
  description: "A movie App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>
        <Navbar />
        
        <div className="min-h-screen">
        {children}

        </div>

      <Footer />
      </SidebarProvider>
        </body>
    </html>
  );
}
