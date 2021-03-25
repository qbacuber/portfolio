import styled from 'styled-components';

const Window = styled.div`
  border-radius: 16px;
  background: #404040;
  border: 3px solid #312f2f;
  opacity: 96%;

  &:hover{
    box-shadow: 0px 0px 10px -7px #000000;
  }

`

export const HiMessage = styled(Window)`
  width: 325px;
  height: 156px;

  font-family: Lobster;
  font-weight: normal;
  font-size: 30px;
  color: #d5d5d5;
`

export const Photo = styled(Window)`
  width: 179px;
  height: 301px;

  /* background: url(...); */

`

export const WhatICan = styled(Window)`
  width: 246px;
  height: 230px;
`

export const MyWorks = styled(Window)`
  width: 266px;
  height: 204px;
`

export const MyPlans = styled(Window)`
  width: 230px;
  height: 230px;
`

export const AboutMe = styled(Window)`
  width: 105px;
  height: 55px;
  font-family: Manrope;
  font-weight: normal;
  font-size: 18px;
  text-align: left;
  color: #d5d5d5;

`

export const Contant = styled(Window)`
  width: 152px;
  height: 127px;
`

export const Title = styled.div`
  width:100%;
  height: 50px;
  background-color: #363636;

  padding: 10px 0 0 10px;

  font-family: "MotoyaLMaru W3 mono";
  font-weight: normal;
  font-size: 18px;
  color: #d5d5d5;

  border-radius: 16px 16px 0 0;
  border: 3px solid #312f2f;
  position: absolute;
  left: 0px;
  top: 0px;
`
