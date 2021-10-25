import React from 'react';
import getStarted from '../../../assets/Landing/LandingHero/template_button@2x.png';
import Logo from '../../../assets/Landing/LandingHero/walio.png';

const LandingNav = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img className="img-fluid w-75" src={Logo} alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item me-2">
                            <a className="nav-link text-dark" aria-current="page" href="#">Product</a>
                        </li>
                        <li className="nav-item dropdown me-3">
                        <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Resource
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">API Docs</a></li>
                            <li><a className="dropdown-item" href="#">Guides</a></li>
                            <li><a className="dropdown-item" href="#">About Us</a></li>
                            {/* <li><hr className="dropdown-divider"/></li> */}
                            <li><a className="dropdown-item" href="#">FAQ</a></li>
                        </ul>
                        </li>
                        <li className="nav-item disable">
                            <a className="nav-link text-dark" href="#">|</a>
                        </li>
                        <li className="nav-item me-2">
                            <a className="nav-link text-dark" href="#">Login</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="#"><img className="img-fluid w-75" src={getStarted} alt="" /></a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default LandingNav;