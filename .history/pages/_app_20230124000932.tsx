import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MontSerrat, Montserrat } from "@next/font/google";

const MontSerrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
});

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
