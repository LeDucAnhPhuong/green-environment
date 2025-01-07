import HomePageModule from "@/components/modules/HomePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trang chủ - 25 Năm FPT Education ",
  description: "Generated by create next app",
  icons: "/images/logo.png"
};

export default function HomePage() {
  return <HomePageModule />;
}