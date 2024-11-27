"use client"
import Image from "next/image";
import Banner from "./components/Banner";
import FAQ from "./components/Faq";
import Roadmap from "./components/Roadmap";
import BecomeLockhunter from "./components/BecomeLockhunter";
import ExclusiveEvents from "./components/ExclusiveEvents";
import Comparison from "./components/Comparison";
import Presale from "./components/Presale";
import FeaturedIn from "./components/FeaturedIn";
import PersonalizeCasino from "./components/PersonalizeCasino";
import LuckhunterMetaverse from "./components/LuckhunterMetaverse";
import Token from "./components/token/Token";
import HowItWorks from "./components/HowitWorks";
import ExploreCities from "./components/ExploreCities";

export default function Home() {
  return (
    <>
    <Banner/>
    <Presale/>
    <LuckhunterMetaverse/>
    <HowItWorks/>
    <ExploreCities/>
    <PersonalizeCasino/>
    <BecomeLockhunter/>
    <ExclusiveEvents/>
    <Token/>
    <Roadmap/>
    <FeaturedIn/>
    <Comparison/>
    <FAQ/>
    </>
  );
}
