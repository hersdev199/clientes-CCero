// font.js
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"], // Asegúrate de usar 'weight' en singular
  display: "swap",
});

export default lato;
