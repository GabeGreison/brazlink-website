import Footer from "../components/footer";
import Header from "../components/header";
import BrazlinkFaq from "../components/brazlink-faq";

export default function Faq() {
  return (
   <div>
    <Header/>
    <div className="max-w-240 mx-auto relative bg-transparent">
    <BrazlinkFaq />
    <Footer/>
    </div>
   </div>
  );
}
