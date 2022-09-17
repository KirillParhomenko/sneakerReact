import HeaderTitle from './HeaderTitle';
import HeaderAccount from './HeaderAccount';

import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <HeaderTitle/>
            <HeaderAccount/>
        </div>
    );
};

export default Header;
