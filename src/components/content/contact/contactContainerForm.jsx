import { Button } from "../../button/button";
import { contactInputData } from "./contactInputData";
import style from "./contactContainer.module.css";

export const ContactForm = () => {
  return contactInputData.map((inputData) => (
    <div key={inputData.id} className={style.contactFormFlexWrapper}>
      <h1>{inputData.headingInput}</h1>
      <p>{inputData.inputDescriptionText}</p>
      <form action="">
        <input type="text" placeholder="first name" />
        <input type="text" placeholder="phone number" />
        <input type="email" placeholder="emails adress" />
        <input type="text" placeholder="your message" />
      </form>
      <Button />
    </div>
  ));
};
