import BannerTitle from "./BannerTitle";
import BannerImage from "../Img/BannerImage.png";

import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <BannerTitle />
      <img src={BannerImage}/>
    </div>
  );
};

export default Banner;
