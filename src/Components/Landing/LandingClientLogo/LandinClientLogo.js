import React from 'react';
import logo1 from '../../../assets/Landing/clientLogo/logo1.png';
import logo2 from '../../../assets/Landing/clientLogo/logo2.png';
import logo3 from '../../../assets/Landing/clientLogo/logo3.png';
import logo4 from '../../../assets/Landing/clientLogo/logo4.png';
import logo5 from '../../../assets/Landing/clientLogo/logo5.png';
import logo6 from '../../../assets/Landing/clientLogo/logo6.png';
import logo7 from '../../../assets/Landing/clientLogo/logo7.png';
import logo8 from '../../../assets/Landing/clientLogo/logo8.png';
import logo9 from '../../../assets/Landing/clientLogo/logo9.png';
import logo10 from '../../../assets/Landing/clientLogo/logo10.png';
import logo11 from '../../../assets/Landing/clientLogo/logo11.png';
import logo12 from '../../../assets/Landing/clientLogo/logo12.png';

const LandinClientLogo = () => {

    const logoData = [
        logo1,
        logo2,
        logo3,
        logo4,
        logo5,
        logo6,
        logo7,
        logo8,
        logo9,
        logo10,
        logo11,
        logo12

    ]

    return (
        <div>
            <div className="row">
                {
                    logoData?.map(item=> (
                        <div className="col-md-2">
                            <img className="m-3" src={item} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default LandinClientLogo;