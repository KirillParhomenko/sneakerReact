import HeaderTitleImage from '../Img/HeaderTitleImage.png'

import './HeaderTitle.css'

const HeaderTitle = () => {
    return(
        <div className="header-title">
            <img src={HeaderTitleImage} alt="HeaderImage" className='header-title_image'/>
            <div className='header-title_text'>
                <h1>REACT SNEAKERS</h1>
                <p>Магазин лучших кроссовок</p>
            </div>
        </div>
    );

};

export default HeaderTitle;