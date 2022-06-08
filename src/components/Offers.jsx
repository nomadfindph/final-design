import React from 'react'
import styled from 'styled-components'
import { popularOffers } from '../data.js';
import Offer from './Offer.jsx';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export default function Offers() {
  return (
    <Container>
        {popularOffers.map(item => (
            <Offer item={item} key={item}/>
        ))}
    </Container>
  )
}