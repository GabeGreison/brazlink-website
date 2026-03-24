import Brands from "./components/brands";
import FloatingButton from "./components/floating-button";
import HeroGallery from "./components/hero-gallery";
import Header from "./components/header";
import Hero from "./components/hero";
import PromoSection from "./components/promo";
import GalleryCarousel from "./components/gallery-carousel";
import SolutionsSection from "./components/solutions-section";
import ProductsSection from "./components/products-section";
import ContactUs from "./components/contact-us";
import ValuesHero from "./components/values-hero";

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
    <SolutionsSection/>
    <ProductsSection />
    <ValuesHero/>
    <ContactUs/>
    <FloatingButton/>
    </div>
   </div>
  );
}
