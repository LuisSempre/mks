import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    
    <main className={montserrat.className}>
    <Component {...pageProps} />;
  </main>;
    )
}

export default MyApp;
