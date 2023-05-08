import "@/styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PopUp from "../components/PopUp.js"

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <Header />
            <Component {...pageProps} />
            <div className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6">
            <PopUp />
            </div>
            <Footer />
        </ThemeProvider>
    );
}
