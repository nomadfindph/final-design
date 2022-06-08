import React from 'react'
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Offers from '../components/Offers';
import Slider from '../components/Slider';

const HorizontalRule = styled.hr``

export default function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <HorizontalRule />
      <Categories />
      <HorizontalRule />
      <Offers />
      <Newsletter />
      <Footer />
    </div>
  )
}
