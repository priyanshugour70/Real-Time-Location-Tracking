import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "../components/Hero";
import FAQ from "@/components/FAQ";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>Home | RTLT</title>
            </Head>
            <Hero />
            <FAQ />
        </>
    );
}
