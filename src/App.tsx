import { Container } from "@mui/material";
import "./App.css";
import HeroSection from "./sections/HeroSection";
import EmpowerSection from "./sections/EmpowerSection";
import Banner from "./sections/Banner";
import GrowthToolsSection from "./sections/GrowthToolsSection";
import TestimonialSlider from "./sections/TestimonialSlider";
import Footer from "./sections/Footer";
import Navbar from "./sections/Navbar";
// import electronicImage from "../assets/electronic.jpg";

function App() {
  const BannerInfoOne = {
    title:
      "Largest number of products & categories of medical devices on a single place - 1mdm.com",
    description:
      "Connect with buyers worldwide for your product & start selling now.",
  };
  const bannerInfoTwo = {
    title: "Ready to Grow Your Business?",
  };
  return (
    <>
      <Navbar />
      <Container>
        <HeroSection />
        <EmpowerSection />
      </Container>
      <Banner
        description={BannerInfoOne.description}
        title={BannerInfoOne.title}
        actionButton={false}
      />
      <Container>
        <GrowthToolsSection />
        {/* <SliderSection /> */}
        <TestimonialSlider />
      </Container>
      <Banner title={bannerInfoTwo.title} actionButton={true} description="" />
      <Footer />
    </>
  );
}

export default App;
