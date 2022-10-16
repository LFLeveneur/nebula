import React, {useEffect, useState} from 'react';

// Style
import './Hero.css';

// Component other

// Image
import ImgHeroBackground from '../../assets/img/hero/hero-background.png';
import ImgHeroMontagne from '../../assets/img/hero/hero-montagne.png';
import ImgHeroPlanet from '../../assets/img/hero/hero-planet.png';

const About = () => {

    // Sates
    const [positionHeroTitle, setPositionHeroTitle] = useState(0);
    const [positionHeroMontagne, setPositionHeroMontagne] = useState(0);
    const [positionHeroPlanet, setPositionHeroPlanet] = useState(0);

    // Functions
    const handleScroll = () => {
        setPositionHeroTitle(window.scrollY);
        setPositionHeroMontagne(window.scrollY);
        setPositionHeroPlanet(window.scrollY);
    }
    const styleHero = {
        styleHeroTitle: {
            transform: `translateY(${positionHeroTitle * 0.5}px)`
        },
        styleHeroMontagne: {
            transform: `translateY(-${positionHeroMontagne * 0.1}px)`
        },
        styleHeroPlanet: {
            transform: `translateY(${positionHeroPlanet * 0.2}px)`
        }
    }

    // Hooks
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <>
            <div className="hero" style={{backgroundImage: `url(${ImgHeroBackground})`}}>
                <div className="hero-title" style={styleHero.styleHeroTitle}>
                    <h1 className="h1-title">NEBULA</h1>
                    <h2 className="h2-title">BDE</h2>
                </div>
                <img src={ImgHeroPlanet} alt="Hero Planet" className="hero-planet" style={styleHero.styleHeroPlanet}/>
                <img src={ImgHeroMontagne} alt="Hero Montagne" className="hero-montagne" style={styleHero.styleHeroMontagne}/>
                <div className="hero-shadows" style={styleHero.styleHeroMontagne}></div>
            </div>
        </>
    )
}

export default About;