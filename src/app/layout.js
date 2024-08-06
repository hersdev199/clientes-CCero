import Lato from "./ui/font.js";
import "./globals.css";

export const metadata = {
  title: "TMS CCero",
  description: "TMS-CRM-PMV para el manejo de Puntos de venta",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Lato.className}>{children}</body>
    </html>
  );
}
