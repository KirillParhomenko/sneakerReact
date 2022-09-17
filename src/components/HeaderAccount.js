import "./HeaderAccount.css";

import HeaderAccountImage from "./Img/HeaderAccount.svg";
import HeaderShopImage from "./Img/HeaderShop.svg";
import HeaderLikedImage from "./Img/HeaderLiked.svg";

const HeaderAccount = () => {
  return (
    <div className="header-account">
      <div>
        <img src={HeaderShopImage} />
      </div>
      <div>
        <img src={HeaderLikedImage} />
      </div>
      <div>
        <img src={HeaderAccountImage} />
      </div>
    </div>
  );
};

export default HeaderAccount;
