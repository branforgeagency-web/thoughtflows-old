import React from 'react';
import Marquee from 'react-fast-marquee';

// Import all images
import Company01 from '../../images/Logos/Layer 1.png';
import Company02 from '../../images/Logos/Layer 2.png';
import Company03 from '../../images/Logos/Layer 3.png';
import Company04 from '../../images/Logos/Layer 4.png';
import Company05 from '../../images/Logos/Layer 5.png';
import Company06 from '../../images/Logos/Layer 6.png';
import Company07 from '../../images/Logos/Layer 7.png';
import Company08 from '../../images/Logos/Layer 8.png';
import Company09 from '../../images/Logos/Layer 9.png';
import Company10 from '../../images/Logos/Layer 10.png';
import Company11 from '../../images/Logos/Layer 11.png';
import Company12 from '../../images/Logos/Layer 12.png';
import Company13 from '../../images/Logos/Layer 13.png';
import Company14 from '../../images/Logos/Layer 14.png';
import Company15 from '../../images/Logos/Layer 15.png';
import Company16 from '../../images/Logos/Layer 16.png';
import Company17 from '../../images/Logos/Layer 17.png';
import Company18 from '../../images/Logos/Layer 18.png';
import Company19 from '../../images/Logos/Layer 19.png';
import Company20 from '../../images/Logos/Layer 20.png';
import Company21 from '../../images/Logos/Layer 21.png';
import Company22 from '../../images/Logos/Layer 22.png';
import Company23 from '../../images/Logos/Layer 23.png';
import Company24 from '../../images/Logos/Layer 24.png';
import Company25 from '../../images/Logos/Layer 25.png';
import Company26 from '../../images/Logos/Layer 26.png';
import Company27 from '../../images/Logos/Layer 27.png';
import Company28 from '../../images/Logos/Layer 28.png';
import Company29 from '../../images/Logos/Layer 29.png';
import Company30 from '../../images/Logos/Layer 30.png';
import Company31 from '../../images/Logos/Layer 31.png';
import Company32 from '../../images/Logos/Layer 32.png';
import Company33 from '../../images/Logos/Layer 33.png';
import Company34 from '../../images/Logos/Layer 34.png';
import Company35 from '../../images/Logos/Layer 35.png';
import Company36 from '../../images/Logos/Layer 36.png';
import Company37 from '../../images/Logos/Layer 37.png';
import Company38 from '../../images/Logos/Layer 38.png';

const images = [
    Company01, Company02, Company03, Company04, Company05, Company06, Company07, Company08,
    Company09, Company10, Company11, Company12, Company13, Company14, Company15, Company16,
    Company17, Company18, Company19, Company20, Company21, Company22, Company23, Company24,
    Company25, Company26, Company27, Company28, Company29, Company30, Company31, Company32,
    Company33, Company34, Company35, Company36, Company37, Company38
];

// Split images into 3 rows
const row1 = images.slice(0, 13);
const row2 = images.slice(13, 26);
const row3 = images.slice(26, 38);

const TrivandrumCompanies = () => {
    return (
        <div className="space-y-6 py-20">
            <h2 className="text-center font-bold text-5xl text-secondaryy pb-5">Medical Coding Companies</h2>
            {/* First Row */}
            <Marquee gradient={true} speed={50} direction="left">
                {row2.map((image, index) => (
                    <img
                        key={`row1-${index}`}
                        src={image}
                        alt={`Company Logo ${index + 1}`}
                        className="h-16 mx-4 object-contain"
                    />
                ))}
            </Marquee>

            {/* Second Row */}
            {/* <Marquee gradient={true} speed={50} direction="right">
                {row2.map((image, index) => (
                    <img
                        key={`row2-${index}`}
                        src={image}
                        alt={`Company Logo ${index + 1}`}
                        className="h-16 mx-4 object-contain"
                    />
                ))}
            </Marquee> */}

            {/* Third Row */}
            {/* <Marquee gradient={true} speed={50} direction="left">
                {row3.map((image, index) => (
                    <img
                        key={`row3-${index}`}
                        src={image}
                        alt={`Company Logo ${index + 1}`}
                        className="h-16 mx-4 object-contain"
                    />
                ))}
            </Marquee> */}
        </div>
    );
};

export default TrivandrumCompanies;