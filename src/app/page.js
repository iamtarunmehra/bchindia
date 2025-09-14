import BannerSlider from "./homePageComponents/BannerSlider";
import AboutUs from "./homePageComponents/AboutUs";
import NewsSection from "./homePageComponents/NewsSection";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <BannerSlider />
      <AboutUs />
      <NewsSection/>
      
    </div>
  );
}
