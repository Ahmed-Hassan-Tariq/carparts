import "./globals.css";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "Auto Rent",
  description: "Country's best auto rental business",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
