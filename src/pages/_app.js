import "@/styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </ThemeProvider>
    );
}
