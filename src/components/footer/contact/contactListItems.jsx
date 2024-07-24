import { contactData } from "./contactData";
import { Link } from "react-router-dom";

function ContactListItems() {
  return contactData.map((contactItem) => (
    <li>
      <Link key={contactItem.id} to={contactItem.path}>
        {contactItem.name}
      </Link>
    </li>
  ));
}

export default ContactListItems;
