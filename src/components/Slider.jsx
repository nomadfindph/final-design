import React from 'react'
import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import { sliderItems } from '../data';
import { useState, handleClick} from 'react'

const Container = styled.div`
    width: 100%; 
    height: 100vh;
    display: flex;
    background-color: #FFF;
    position: relative;
    overflow: hidden;
    margin-bottom: 0;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translate(${props => props.slideIndex * -100}vw);
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #B2B2A6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "20px"};
    right: ${props => props.direction === "right" && "20px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw; 
    height: 100vh;
    background-color: ${props => props.bg};
`
const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
    padding-left: 5rem;
`
const InfoContainer = styled.div`
    flex: 1;
    padding-right: 10rem;
`

const Title = styled.h1`
    font-size: 64px;
`

const Description = styled.p`
    margin: 50px 0;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 1px;
`

const Button = styled.button`
    padding: 10px;
    font-size: 1rem;
    background-color: transparent;
    cursor: pointer;
    border: 1px solid #222220;
    border-radius: 10px;
`

const Image = styled.img`
    height: 80%;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
`

const HorizontalRule = styled.hr`
`



export default function Slider() {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1: 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1: 0)
        }
    }
    
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) =>(
                <Slide bg={item.bg} key={item.id}>
                    <ImgContainer>
                        <Image src={item.img}></Image>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Description>{item.description}</Description>
                        <Button>FIND A PLACE</Button>
                    </InfoContainer>
                </Slide>
            ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}