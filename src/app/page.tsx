import Brands from "./components/brands";
import FloatingButton from "./components/floating-button";
import HeroGallery from "./components/hero-gallery";
import Header from "./components/header";
import Hero from "./components/hero";
import PromoSection from "./components/promo";

export default function Home() {
  return (
   <div>
    <Header/>
    <div className="max-w-240 mx-auto relative">
    <PromoSection/>
    <FloatingButton/>
    <Hero/>
    <Brands/>
    <HeroGallery/>
    </div>
   </div>
  );
}
