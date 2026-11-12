import React from 'react';
import Marquee from 'react-fast-marquee';
import { mediaUrl } from '../../config/media';
const Company01 = mediaUrl('images/Logos/Layer 1.png');
const Company02 = mediaUrl('images/Logos/Layer 2.png');
const Company03 = mediaUrl('images/Logos/Layer 3.png');
const Company04 = mediaUrl('images/Logos/Layer 4.png');
const Company05 = mediaUrl('images/Logos/Layer 5.png');
const Company06 = mediaUrl('images/Logos/Layer 6.png');
const Company07 = mediaUrl('images/Logos/Layer 7.png');
const Company08 = mediaUrl('images/Logos/Layer 8.png');
const Company09 = mediaUrl('images/Logos/Layer 9.png');
const Company10 = mediaUrl('images/Logos/Layer 10.png');
const Company11 = mediaUrl('images/Logos/Layer 11.png');
const Company12 = mediaUrl('images/Logos/Layer 12.png');
const Company13 = mediaUrl('images/Logos/Layer 13.png');
const Company14 = mediaUrl('images/Logos/Layer 14.png');
const Company15 = mediaUrl('images/Logos/Layer 15.png');
const Company16 = mediaUrl('images/Logos/Layer 16.png');
const Company17 = mediaUrl('images/Logos/Layer 17.png');
const Company18 = mediaUrl('images/Logos/Layer 18.png');
const Company19 = mediaUrl('images/Logos/Layer 19.png');
const Company20 = mediaUrl('images/Logos/Layer 20.png');
const Company21 = mediaUrl('images/Logos/Layer 21.png');
const Company22 = mediaUrl('images/Logos/Layer 22.png');
const Company23 = mediaUrl('images/Logos/Layer 23.png');
const Company24 = mediaUrl('images/Logos/Layer 24.png');
const Company25 = mediaUrl('images/Logos/Layer 25.png');
const Company26 = mediaUrl('images/Logos/Layer 26.png');
const Company27 = mediaUrl('images/Logos/Layer 27.png');
const Company28 = mediaUrl('images/Logos/Layer 28.png');
const Company29 = mediaUrl('images/Logos/Layer 29.png');
const Company30 = mediaUrl('images/Logos/Layer 30.png');
const Company31 = mediaUrl('images/Logos/Layer 31.png');
const Company32 = mediaUrl('images/Logos/Layer 32.png');
const Company33 = mediaUrl('images/Logos/Layer 33.png');
const Company34 = mediaUrl('images/Logos/Layer 34.png');
const Company35 = mediaUrl('images/Logos/Layer 35.png');
const Company36 = mediaUrl('images/Logos/Layer 36.png');
const Company37 = mediaUrl('images/Logos/Layer 37.png');
const Company38 = mediaUrl('images/Logos/Layer 38.png');

// Import all images

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

const TrichyCompanies = () => {
    return (
        <div className="space-y-6 py-20">
            <h2 className="text-center font-bold text-5xl text-secondaryy pb-5">Medical Coding Companies</h2>
            {/* First Row */}
            <Marquee gradient={true} speed={50} direction="left">
                {row1.map((image, index) => (
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

export default TrichyCompanies;