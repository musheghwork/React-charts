import "./footer.css";
import message from "../assets/icons/message.svg";
import vector from "../assets/icons/Vector.svg";
import logofoot from "../assets/icons/logofoot.svg";
import { userHistory } from "../utils/history";
function Footer() {
  const images = import.meta.glob("../assets/users/*.png", { eager: true });

  function getUserImage(name) {
    const key = `../assets/users/${name.split(" ")[0]}.png`;
    return images[key]?.default;
  }

  return (
    <>
      <div className="footer">
        <h1>Top 10 Trending Locations and Sales History - Last 30 Days </h1>
        <div className="ratings">
          {userHistory.map((item) => {
            return (
              <div key={item.id} className="userInfo">
                <img
                  className="userImg"
                  src={getUserImage(item.name)}
                  alt={item.name}
                />
                <img className="messIcon" src={message} alt="send" />
                <p className="userText">
                  {item.name} <span className="userRate">({item.rating})</span>
                </p>
                <div className="progress">
                  <img src={vector} alt="up" />
                  <p>
                    +{item.info}% in {item.day}Y
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="footerLogo">
          <img src={logofoot} alt="logo" />
          <p>© {new Date().getFullYear()} Broker Terminal, Inc.</p>
        </div>
      </div>
    </>
  );
}
export default Footer;
