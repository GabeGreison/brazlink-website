import Brands from "./components/brands";
import FloatingButton from "./components/floating-button";
import HeroGallery from "./components/hero-gallery";
import Header from "./components/header";
import Hero from "./components/hero";
import PromoSection from "./components/promo";
import GalleryCarousel from "./components/gallery-carousel";

export default function Home() {
  return (
   <div>
    <Header/>
    <div className="max-w-240 mx-auto relative bg-transparent">
    <PromoSection/>
    <Hero/>
    <Brands/>
    <HeroGallery/>
    <GalleryCarousel />
    <FloatingButton/>
    </div>
   </div>
  );
}
