import localFont  from "next/font/local";
import "./globals.css";

const sharpGrotesk = localFont({
  variable: "--font-sg",
  src: [
    {
      weight: '100',
      path: "./fonts/SG_Thin.ttf"
    },
    {
      weight: '300',
      path: "./fonts/SG_Light.ttf"
    },
    {
      weight: '400',
      path: "./fonts/SG_Book.ttf"
    },
    {
      weight: '500',
      path: "./fonts/SG_Medium.ttf"
    },
    {
      weight: '600',
      path: "./fonts/SG_SemiBold.ttf"
    },
    {
      weight: '700',
      path: "./fonts/SG_Bold.ttf"
    },
    {
      weight: '800',
      path: "./fonts/SG_Black.ttf"
    },
    // Now italic fonts
    {
      weight: '100',
      path: "./fonts/SG_ThinItalic.ttf",
      style: "italic"
    },
    {
      weight: '300',
      path: "./fonts/SG_LightItalic.ttf",
      style: "italic"
    },
    {
      weight: '400',
      path: "./fonts/SG_Italic.ttf",
      style: "italic"
    },
    {
      weight: '500',
      path: "./fonts/SG_MediumItalic.ttf",
      style: "italic"
    },
    {
      weight: '600',
      path: "./fonts/SG_SemiBoldItalic.ttf",
      style: "italic"
    },
    {
      weight: '700',
      path: "./fonts/SG_BoldItalic.ttf",
      style: "italic"
    },
    {
      weight: '800',
      path: "./fonts/SG_BlackItalic.ttf",
      style: "italic"
    }
  ]
})

//const geistSans = Geist({
//  variable: "--font-geist-sans",
//  subsets: ["latin"],
//});
//
//const geistMono = Geist_Mono({
//  variable: "--font-geist-mono",
//  subsets: ["latin"],
//});

export const metadata = {
  title: "Qurrat",
  description: "Portfolio of Qurrat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sharpGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
