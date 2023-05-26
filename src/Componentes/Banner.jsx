import { useState, useEffect } from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import {ArrowRightCircle } from 'react-bootstrap-icons';
import banner from '../Imagenes/banner.jpg';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState (0);
    const [isDeleting, setIsDeleting] = useState (false);
    const toRotate =['Visitá', 'Cononcé', 'Disfrutá'];
    const [text, setText] = useState ('');
    const [delta, setDelta] = useState (300 - Math.random ()*100);
    const periodo = 2000;

    useEffect (() => {
        let ticket = setInterval (() => {
            tick();
        }, delta)

        return () => {clearInterval (ticket)};
    },[text] )

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }
        
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(periodo);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className='banner' id='inicio'>
            <Container>
               <Row className='align-items-center'>
                    <Col xs={12} md={6} xt={7}>
                        <span className='tagline'>Bienvenidos a Tucumán</span>
                        <h1>{'Visite el Jardin de la República '}<span className='wrap'>{text}</span></h1>
                        <br/>
                        <p> {'Lorem ipsum dolor sit amet, consectetur adipis'}</p>
                        <button onClick={() => console.log('connect')} >Conectados<ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xt={5}>
                        <img src={banner} alt='imagen de cabecera' /> 
                    </Col>
               </Row> 
            </Container>

        </section>
    )
}