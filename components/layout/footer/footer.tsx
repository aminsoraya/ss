"use client";
import React from "react";
import Features from "./features";
import Contact from "./contact";
import { Footer } from "@/types/footer";

interface IProps {
  footers: Footer;
}
export default function FooterComponent({ footers }: IProps) {
  return (
    <>
      <Features />
      <Contact
        email={footers.email}
        phone={footers.phone}
        timesWork={footers.timesWork}
      />
    </>
  );
}
