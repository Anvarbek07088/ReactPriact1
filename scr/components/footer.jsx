import MorentImg from "./img/MorentLogo.svg";
import "../../style/footer.css";

const Footer = () => {
  return (
    <>
      <div className="footerT">
        <div className="footer_morentlogo">
          <img src={MorentImg} alt="rasm" />
          <p>
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>

        <div className="footer_ACS">
          <div className="footerAbout">
            <p>About</p>
            <ul>
              <li>
                <a href="#1">How it works</a>
              </li>
              <li>
                <a href="#1">Featured</a>
              </li>
              <li>
                <a href="#1">Partnership</a>
              </li>
              <li>
                <a href="#1">Bussiness Relation</a>
              </li>
            </ul>
          </div>

          <div className="footerAbout">
            <p>Comunty</p>
            <ul>
              <li>
                <a href="#1">Events</a>
              </li>
              <li>
                <a href="#1">Blog</a>
              </li>
              <li>
                <a href="#1">Podcast</a>
              </li>
              <li>
                <a href="#1">Invite a friend</a>
              </li>
            </ul>
          </div>

          <div className="footerAbout">
            <p>Socials</p>
            <ul>
              <li>
                <a href="#1">Discord</a>
              </li>
              <li>
                <a href="#1">Instagram</a>
              </li>
              <li>
                <a href="#1">Twitter</a>
              </li>
              <li>
                <a href="#1">Facebook</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="ChizPas"></p>
      <div className="footerP">
        <p>©2022 MORENT. All rights reserved</p>
        <div>
          <p>Privacy & Policy</p>
          <p>Terms & Condition</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
