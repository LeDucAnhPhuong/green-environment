import MuseumModule from "@/components/modules/Museum";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Triển lãm - 25 Năm FPT Education",
  description: "Generated by create next app",
};

export default function MuseumPage() {
  return <MuseumModule />;
}