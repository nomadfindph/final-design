import { Badge } from '@material-ui/core';
import { LocalMallOutlined, Search } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    height: 60px;
    background-color: #222220;
    color: #fff;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Language = styled.span`
    cursor: pointer;
`

const SearchContainer = styled.div`
    background-color: #fff;
    border: 1px solid #fff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    margin-left: 2rem;
    padding: 5px;
`

const Input = styled.input`
    border: none; 
`

const Logo = styled.h3`
    font-weight: normal;
`

const MenuItem = styled.div`
    cursor: pointer;
    margin-left: 6rem;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export default function Navbar() {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>
                    EN
                </Language>
                <SearchContainer>
                    <Input />
                    <Search style={{color: "gray", fontSize: "16px"}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>
                    NomadFindPH
                </Logo>
            </Center>
            <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem>Sign in</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <LocalMallOutlined/>
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}
