"use client";
import { Footer } from "@/types/footer";
import Features from "./features";
import Contact from "./contact";
import GarantyAndPolicy from "./garantyAndPolicy";
import SocialMediaAndStore from "./socialMediaAndStore";
import About from "./about";
import LinksAndCopyWrite from "./linksAndCopyWrite";

type FooterProps = {
  footers: Footer;
};

export default function FooterComponent({
  footers: { email, phone, timesWork, appsDownload, social,about },
}: FooterProps) {
  return (
    <footer>
      <Features />
      <Contact email={email} phone={phone} timesWork={timesWork} />
      <GarantyAndPolicy />
      <SocialMediaAndStore appsDownload={appsDownload} social={social} />
      <About about={about} />
      <LinksAndCopyWrite/>
    </footer>
  );
}
