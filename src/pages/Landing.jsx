import { useLocation, Link } from 'react-router-dom';
import intro from '../assets/images/intro.gif'
import introVip from '../assets/images/intro_vip.gif'
import { motion } from "framer-motion";
import { useState, useEffect } from "react";


const Landing = ()=>{
    const location  =useLocation();
    
    const [link, setLink] = useState('');
    const [source, setSource] = useState('');
    const [step, setStep] = useState('');
    const [inviNum, setInviNum] = useState('');  
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const sourceParam = params.get('source') || ''; 
        const stepParam = params.get('step') || '';
        const inviNumParam = params.get('inviNum') || '';
      
        setSource(sourceParam);
        setStep(stepParam);
        setInviNum(inviNumParam);
        console.log(sourceParam, stepParam,)

        setLink(
            inviNumParam
              ? `https://fd.sysforu.co.kr/2025/${sourceParam}/${stepParam}/index2.asp?inviNum=${inviNumParam}`
              : `https://fd.sysforu.co.kr/2025/${sourceParam}/${stepParam}/index2.asp`
          );
        console.log(link);
      }, []);

    function Button({ text, link, external = false }) {
        if (external) {
            return (
                <li>
                    <a className="btn" href={link} rel="noopener noreferrer">
                        {text}
                    </a>
                </li>
            );
        }
    
        return (
            <li>
                <Link className="btn" to={link}>
                    {text}
                </Link>
            </li>
        );
    }

    return(
        <motion.div id="wrap"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{
          duration: 0.5,
          ease: [0.43, 0.13, 0.23, 0.96] // 부드럽고 고급진 느낌
        }}>
            <section id="landing">
                <div className="intro_wrap">                    
                 
                </div>
                <ul className="btn_area">
                    <Button text={'초청장 등록'} link={link}/>
                    <Button text={'전시 안내'} link="/exhibitionGuide" />
                    <Button text={'기획관'} link="/plan"/>
                    <Button text={'디자인살롱 서울'} link="designSalon"/>
                </ul>
            </section>
        </motion.div>
    )
};





export default Landing;