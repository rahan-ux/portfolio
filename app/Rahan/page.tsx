import type { Metadata } from "next";
import FounderPortfolioView from "@/components/FounderPortfolioPage";

export const metadata: Metadata = {
  title: "Rahan Santhosh | Founder & CEO – Personal Portfolio",
  description:
    "Official website of Rahan Santhosh, Founder & CEO of FUNDAUX. Quantitative financial strategist, NISM certified professional, and capital preservation architect.",
  openGraph: {
    title: "Rahan Santhosh | Founder & CEO Portfolio",
    description:
      "Disciplined wealth architecture, risk-managed derivatives execution, and strategic vision by Rahan Santhosh.",
    url: "https://fundaux.in/Rahan",
    type: "profile",
    images: [
      {
        url: "/founder.jpg",
        width: 800,
        height: 800,
        alt: "Rahan Santhosh – Founder & CEO",
      },
    ],
  },
};

export default function LowercaseRahanPage() {
  return <FounderPortfolioView />;
}
