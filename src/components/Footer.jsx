import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import React from "react";

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`
  
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
  
const Logo = styled.h1``;
  
const Desc = styled.p`
    margin: 20px 0px;
`
  
const SocialContainer = styled.div`
    display: flex;
`
  
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`
  
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`
  
const Title = styled.h3`
    margin-bottom: 30px;
`
  
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
  
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
  
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#222220" })}
  
`

const Payment = styled.img`
      width: 50%;
`
  
export default function Footer() {
    return (
      <Container>
        <Left>
          <Logo>NomadFindPH</Logo>
          <Desc>
          NomadFindPH is dedicated to provide efficient details of dorms, apartment, 
          or house offers, reliable customer ratings and verified profiles of establishments, 
          lists nearby available offers near your chosen university or establishment, sorted list 
          of recommendations according to your range of budget, 
          can be filtered according to your preferences.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Navigate</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>We Accept Payment from: </Title>
          <Payment src="https://bit.ly/3NZHvYV" />
        </Right>
      </Container>
    );
};
  
  