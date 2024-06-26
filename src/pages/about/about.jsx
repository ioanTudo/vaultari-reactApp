import { DetailsContainer1 } from "../../components/content/about/detailContainer1/detailsContainer1.jsx";
import { DetailsContainer2 } from "../../components/content/about/detailsContainer2/detailsContainer2.jsx";
import { DetailsContainer3 } from "../../components/content/about/detailsContainer3/detailsContainer3.jsx";

import { GetQuoteList } from "../../components/getQuoteContainer/getQuoteList";
import { AboutHero } from "../../components/hero/about/aboutHero";

const About = () => {
  return (
    <>
      <AboutHero />
      <DetailsContainer1 />
      <DetailsContainer2 />
      <DetailsContainer3 />
      <GetQuoteList />
    </>
  );
};

export default About;
