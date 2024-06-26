import { HomeContent } from "../../components/content/home/homeContent";
import HomePageHero from "../../components/hero/home/homePageHero";

const Home = () => {
  return (
    <div key="home">
      <HomePageHero />
      <HomeContent />
    </div>
  );
};

export default Home;
