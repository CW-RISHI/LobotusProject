import facebook from "../PsdImages/facebookFooter.png";
import twitter from "../PsdImages/twitterFooter.png";
import instagram from "../PsdImages/InstagramFooter.png";
import whatsapp from "../PsdImages/YFooter.png";
import "./Sec8.css";

const Sec8 = () => {
  return (
    <div className="container9">
      <section className="section9">
        <div className="footer1">
          <h1>Title Here</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis soluta
            qui earum deleniti veniam facere necessitatibus dignissimos maxime,
            amet labore?
          </p>
        </div>
        <div className="footer2">
          <h1>About</h1>
          <p>History</p>
          <p>Our team</p>
          <p>Brand Guidelines</p>
          <p>Terms & Condition</p>
          <p>Privacy Policy</p>
        </div>
        <div className="footer3">
          <h1>Services</h1>
          <p>How to Order</p>
          <p>Our Product</p>
          <p>Order Status</p>
          <p>Promo</p>
          <p>Payment Method</p>
        </div>
        <div className="footer4">
          <h1>Follow</h1>
          <div className="social-media">
            <div className="social">
              <img src={facebook} alt="Facebook" />
              <span>Facebook</span>
            </div>
            <div className="social">
              <img src={twitter} alt="twitter" />
              <span>Twitter</span>
            </div>
            <div className="social">
              <img src={instagram} alt="instagram" />
              <span>Instagram</span>
            </div>
            <div className="social">
              <img src={whatsapp} alt="WhatsApp" />
              <span>WhatsApp</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sec8;
