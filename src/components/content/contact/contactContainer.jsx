import { Link } from "react-router-dom";
import { contactContainerData } from "./contactContainer.js";
import style from "./contactContainer.module.css";
import { ContactForm } from "./contactContainerForm.jsx";

export const ContactContainer = () => {
  return contactContainerData.map((contactData) => (
    <div key={contactData.id} className={style.contactContainerGridWrapper}>
      <div className={style.descriptionContentContainer}>
        <h1>{contactData.headingDescription}</h1>
        <p>{contactData.descriptionContent}</p>

        <h2>{contactData.subtitle1TextAdress}</h2>
        <p>{contactData.adress}</p>

        <h2>{contactData.subtitle1TextPhoneNo}</h2>
        <p>{contactData.phoneNo}</p>

        <h2>{contactData.subtitleTextEmail}</h2>
        <p>{contactData.email}</p>

        <h2>{contactData.subtitleTextSocialMedia}</h2>
        <div className={style.socialContainerFlexWrapper}>
          <Link>
            <img src={contactData.facebookImg} alt="facebook logo" />
          </Link>

          <Link>
            <img src={contactData.twitterImg} alt="twitter logo" />
          </Link>

          <Link>
            <img src={contactData.linkedInImg} alt="linkedIn logo" />
          </Link>
        </div>
      </div>
      <ContactForm />
    </div>
  ));
};
