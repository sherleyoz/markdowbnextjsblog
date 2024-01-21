import Link from 'next/link';
import HeaderLogo from './HeaderLogo';
import Navigation from './Navigation';

// import AboutUs from '../../pages/AboutUs';

// import { Facebook } from 'react-bootstrap-icons';
// import { Twitter } from 'react-bootstrap-icons';
// import { Instagram } from 'react-bootstrap-icons';
// import { Search } from 'react-bootstrap-icons';
// import { X } from 'react-bootstrap-icons';
import SocialLinks from './SocialLinks';
import Search from './Search';

const Header = () => {
    return (
        <div>
            <header id="header" className="header d-flex align-items-center fixed-top">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

                    <HeaderLogo />

                    <Navigation />

                    {/* <Search /> */}

                    <SocialLinks />

                </div>
            </header>
        </div>
    );
};

export default Header;