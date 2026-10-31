import React from 'react';
import gif1 from '../images/gif3.gif'
import gif2 from '../images/gif1.gif'
import gif3 from '../images/gif2.gif'

const features = [
    {
        img: gif1,
        alt: 'Personalized learning',
        title: 'Personalized Learning Approach',
        text: 'Mentor-led sessions and doubt clearing tailored to your pace.',
    },
    {
        img: gif2,
        alt: 'Industry connections',
        title: 'Robust Industry Connections',
        text: 'Interview preparation and placement support with healthcare & RCM companies.',
    },
    {
        img: gif3,
        alt: 'Years of experience',
        title: '9+ Years of Experience',
        text: 'A proven track record of training medical coders across 14 branches.',
    },
];

const GifSection = () => {
    return (
        <section className='tf-why-wrap'>
            <div className='tf-why-card'>
                {/* background layers */}
                <div className='tf-why-grid' aria-hidden='true' />
                <div className='tf-why-dots' aria-hidden='true' />
                <div className='tf-why-orb tf-why-orb--a' aria-hidden='true' />
                <div className='tf-why-orb tf-why-orb--b' aria-hidden='true' />
                <div className='tf-why-glow tf-why-glow--a' aria-hidden='true' />
                <div className='tf-why-glow tf-why-glow--b' aria-hidden='true' />
                {['12%', '46%', '63%', '88%'].map((l, i) => (
                    <span
                        key={l}
                        className='tf-why-plus'
                        aria-hidden='true'
                        style={{ left: l, top: `${[18, 72, 10, 80][i]}%`, animationDelay: `${i * 1.3}s` }}
                    >
                        +
                    </span>
                ))}

                {/* feature cards */}
                <div className='tf-why-features'>
                    {features.map((f, i) => (
                        <div className='tf-why-item' key={f.title}>
                            <span className='tf-why-num'>0{i + 1}</span>
                            <span className='tf-why-icon'>
                                <img src={f.img} alt={f.alt} />
                            </span>
                            <h3>{f.title}</h3>
                            <p>{f.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default GifSection
