import "./BannerInfo.css";

import BannerLogo from "../Img/banner-logo.png";

const BannerInfo = () => {
  return (
    <div className="bannerInfo">
      <div className="bannerInfo-logo">
        <img src={BannerLogo} />
      </div>
      <div className="bannerInfo-title">
        <h1>
          Stan Smith<span>, Forever!</span>
        </h1>
      </div>
      <div className="bannerInfo-button">
        <button>Купить</button>
      </div>
    </div>
  );
};

export default BannerInfo;
