import Footer from "@/components/Footer/Footer";
import { Inter } from "next/font/google";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Toaster } from "sonner";
import "./globals.css";
import Providers from "../utils/Providers";

import CustomCursor from "@/components/CustomCursor/CustomCursor";
import { SocketProvider } from "@/context/socket";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "solvemeet",
  description: "Medical & health Information Technology Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* font awesome  */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <Providers>
        <body className={inter.className}>
          <CustomCursor />
          <p id="cursor"></p>
          <SocketProvider>{children}</SocketProvider>
          <Toaster position="top-right" richColors />
        </body>
      </Providers>
    </html>
  );
}
