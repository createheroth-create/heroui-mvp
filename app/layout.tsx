import "./globals.css";
import {HeroUIProvider} from "@heroui/react";

export const metadata = {
  title: "Beauty & Anti-Aging AI — MVP",
  description: "Scan → Advise → Offer → Book → ROAS"
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="th">
      <body>
        <HeroUIProvider>{children}</HeroUIProvider>
      </body>
    </html>
  );
}
