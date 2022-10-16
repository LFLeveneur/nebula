import React, {useEffect, useState} from 'react';

// Style
import './NextEvent.css';

// Component
import Button from "../Button/Button";

// Image
import ImgFusee from '../../assets/img/fusee.png';
import ImgAstro from '../../assets/img/astro.png';
import ImgPlateformBig from '../../assets/img/plateform-big.png';


const About = () => {

    // Sates
    const [positionFusee, setPositionFusee] = useState(0);
    const [positionAstro, setPositionAstro] = useState(0);

    // Functions
    const handleScroll = () => {
        setPositionFusee(window.scrollY);
        setPositionAstro(window.scrollY);
    }
    const styleHero = {
        styleFusee: {
            top: `calc(-${positionFusee * 0.2}px + 10%)`,
            right: `calc(${positionFusee * 0.2}px - 10%)`
        },
        styleAstro: {
            left: `calc(${positionAstro * 0.02}px - 10%)`,
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
        <div className="next-event">
            <img src={ImgFusee} alt="Fusee" className="next-event-fusee" style={styleHero.styleFusee}/>
            <div className="next-event-plateform-astro">
                <img src={ImgPlateformBig} alt="Plateform Big" className="next-event-plateform-big"/>
                <img src={ImgAstro} alt="Astro" className="next-event-astro" style={styleHero.styleAstro}/>
            </div>
            <h2 className="h2-subtitle">Prochain événement</h2>
            <div className="next-event-container">
                <div className="next-event-img">
                    <img src="https://picsum.photos/300/500" alt="Next Event" />
                </div>
                <div className="next-event-content">
                    <h2>Nom de l'événement</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquet nisl, eget aliquet nisl nisl sit amet nisl. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquet nisl, eget aliquet nisl nisl sit amet nisl.</p>
                    <div className="next-event-button">
                        <Button text="Voir l'événement" type="primary" onClick={() => {}} />
                        <Button text="Voir les événements" type="secondary" onClick={() => {}} />
                    </div>
                </div>
            </div>
            <div className="h2-subtitle">&nbsp;</div>
        </div>
    )
}

export default About;