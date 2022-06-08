import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
   flex: 1;
   margin: 1rem;
   height: 100vh;
position: relative;
`

const Image = styled.img`
   width: 100%;
`

const Info = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`

const Title = styled.h1`
   color: #fff;
   margin-bottom: 20px;
`

const Button = styled.button`
    color: #222220;
    padding: 5px;
    font-size: 1rem;
    cursor: pointer;
    border: none;
    border-radius: 5px;
`

export default function CategoryItem({item}) {
  return (
    <Container>
        <Image src={item.img} />
        <Info>
            <Title>{item.title}</Title>
            <Button>Book Now!</Button>
        </Info>
    </Container>
  )
}
