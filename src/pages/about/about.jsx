import { DetailsContainer } from "../../components/content/about/detailContainer/detailsContainer";
import { GetQuoteList } from "../../components/getQuoteContainer/getQuoteList";
import { AboutHero } from "../../components/hero/about/aboutHero";

const About = () => {
  return (
    <div>
      <AboutHero />
      <DetailsContainer />
      <GetQuoteList />
    </div>
  );
};

export default About;
