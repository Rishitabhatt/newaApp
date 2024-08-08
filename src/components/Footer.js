import { FaGooglePlusG , FaSkype ,FaSquareInstagram ,FaSquareWhatsapp} from "react-icons/fa6";

function Footer(){
    return(
        <div>
  {" "}
  <div className="footer">
    <div className="container">
      <div className="sun">
        <div className="web">
          <h3 style={{ fontWeight: 300, color: "white" }}>
            <span style={{ color: "grey" }}>Little</span> Fashion
          </h3>
          <h4 style={{ color: "grey", fontSize: 20 }}>
            {" "}
            copyright©2024{" "}
            <span style={{ color: "grey", fontWeight: 600 }}>
              Little Fashion
            </span>
          </h4>
          <h6>designed by tooplate</h6>
        </div>
        <div className="web">
          <h3 style={{ fontWeight: 300, color: "white" }}>Sitemap</h3>
          <ul>
            <ol>Story</ol>
            <ol>privacy policy</ol>
            <ol>contact</ol>
            <ol>products</ol>
            <ol>
              <a href="com" />
            </ol>
          </ul>
        </div>
        <div className="web">
          <h3 style={{ fontWeight: 400, color: "white" }}>Social</h3>
          <p>
            <FaGooglePlusG />
            <FaSkype />
            <FaSquareInstagram />
        <FaSquareWhatsapp/>
            <i className="lab la-viber" />
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default Footer;