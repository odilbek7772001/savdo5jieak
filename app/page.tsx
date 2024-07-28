import Image from "next/image";

// components
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/hero";
import Main from "@/components/Main/Main";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
   <>
   <Header/>
    <Hero/>
    <Main/>
   <Footer/>
   </>
  );
}
