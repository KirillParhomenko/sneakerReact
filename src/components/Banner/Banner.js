import BannerInfo from "./BannerInfo";
import BannerImg from "./BannerImg";

import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <BannerInfo />
      <BannerImg /> 
    </div>
  );
};

export default Banner;
