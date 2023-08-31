import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import '../Home/index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';

import Loader from 'react-loaders';
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['A', 'k', 's', 'h', 'a', 't']
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, []);


    return (
        <>
            <div className="container home-page">
            <img src={LogoTitle} alt="logo" />
                <div className="text-zone">
                    
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I </span>
                        <span className={`${letterClass} _14`}>'m&nbsp;</span>
                        <AnimatedLetters letterClass={letterClass}
                            strArray={nameArray}
                            idx={15}
                        />


                    </h1>
                    <h2>Frontend developer / Student</h2>
                    <Link to="/contact" className='flat-button'> CONTACT ME </Link>
                </div>
                
            </div >
            <Loader type ="triangle-skew-spin" />
        </>
    );
}

export default Home;