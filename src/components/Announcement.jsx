import styled from "styled-components"
import React from "react"

const Container = styled.div`
    height: 30px;
    background-color: #FFA800;
    color: #222220;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 400;
`
export default function Announcement() {
  return (
    <Container>
        Welcome to NomadFindPH! Check out our best deals for the Month of June with 20% off! 
    </Container>
  )
}
