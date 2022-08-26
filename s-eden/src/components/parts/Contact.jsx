import Section from "../includes/Section.jsx";
import { SocialItem } from "../includes/MiniParts.jsx";
import AppConfig from "../includes/AppConfig.jsx";

const Contact = () => {
  const Socials = AppConfig.socials

  return (
    <Section title="Contact" extraClass="app__contact">
      <div className="main-content">
        <div className="social-section">
          <h3 className="title">Social</h3>
          <SocialItem
            handle={Socials.facebook.handle}
            url={Socials.facebook.url}
            icon="lab la-facebook-messenger"
          />
          <SocialItem
            handle={Socials.whatsapp.handle}
            url={Socials.whatsapp.url}
            icon="lab la-whatsapp"
          />
          <SocialItem
            handle={Socials.gmail.handle}
            url={Socials.gmail.url}
            icon="las la-at"
          />
        </div>

        <div className="address-section">
          <h3 className="title">Address</h3>
          <ul>
            {Socials.address.map(address =>{
              return <li><p>{address}</p></li>
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
