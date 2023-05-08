import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "../components/Hero";
import FAQ from "@/components/FAQ";
import Head from "next/head";
import Blocks from "./info/Blocks";
import WhySoGreat from "./info/WhySoGreat";
import Connect from "@/components/Connect";
import MainHero from "@/components/MainHero";
import ConnectAs from "../components/ConnectAs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <div className=" bg-white bg-gradient-to-br from-[#d0d5ff] to-[#ffc2ff]">
                <Head>
                    <title>Home | RTLT</title>
                </Head>
                <MainHero />
                <Hero />
                <Blocks />
                <WhySoGreat />
            </div>
            <ConnectAs />
            <div className=" bg-white bg-gradient-to-br from-[#d0d5ff] to-[#ffc2ff]">
                <FAQ />
            </div>
        </>
    );
}
