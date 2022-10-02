import "./BannerImg.css";

import BannerImage from "../Img/BannerImage.png";

const BannerImg = () => {
  return (
    <div className="bannerImg">
      <img src={BannerImage} />
    </div>
  );
};

export default BannerImg;
