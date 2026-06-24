import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import PopularAirlines from "@/components/PopularAirlines";
import SeatMapPreview from "@/components/SeatMapPreview";
import PopularAircraft from "@/components/Compare";
import WorldBestCabins from "@/components/WorldBestCabins";
import BeyondSeatMap from "@/components/BeyondSeatMap";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import About from "@/components/About";
import FadeIn from "@/components/ui/FadeIn";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col min-h-[100dvh] w-full">
        <FadeIn delay={100} className="flex flex-col flex-1"><Hero /></FadeIn>
        <FadeIn delay={200}><TrustSection /></FadeIn>
      </div>
      <FadeIn delay={300}><PopularAirlines /></FadeIn>
      <FadeIn><SeatMapPreview /></FadeIn>
      <FadeIn><PopularAircraft /></FadeIn>
      <FadeIn><WorldBestCabins /></FadeIn>
      <FadeIn><BeyondSeatMap /></FadeIn>
      <FadeIn><About /></FadeIn>
      <FadeIn><FAQ /></FadeIn>
      <FadeIn><CTA /></FadeIn>
    </div>
  );
}
