import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "../components/Hero";
import FAQ from "@/components/FAQ";
import Head from "next/head";
import Blocks from "./info/Blocks";
import WhySoGreat from "./info/WhySoGreat";
import Connect from "@/components/Connect";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div className=" bg-gradient-to-br from-[#dea2f9] to-[#d0a9ff]">
            <Head>
                <title>Home | RTLT</title>
            </Head>
            <Hero />
            <Blocks/>
            <WhySoGreat/>
            <Connect/>
            <FAQ />
        </div>
    );
}
