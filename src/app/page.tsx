import FloatingButton from "./components/floating-button";
import Header from "./components/header";
import PromoSection from "./components/promo";

export default function Home() {
  return (
   <div>
    <Header/>
    <div className="max-w-240 mx-auto relative">
    <PromoSection/>
    <FloatingButton/>
    </div>
   </div>
  );
}
