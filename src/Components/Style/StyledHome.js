import styled from 'styled-components';

const Window = styled.div`
  border-radius: 16px;
  background: #404040;
  border: 3px solid #312f2f;
  opacity: 96%;

  padding:20px;
  margin:20px;

  &:hover{
    /* box-shadow: 0px 0px 10px -7px #000000; */
  }

`

export const HiMessage = styled(Window)`
  color: #d5d5d5;
  font-family: Lobster;
  font-weight: normal;

  /* padding: 20px;
  height: 200px;
  font-size: 80px; */

`

export const HiDownMassage = styled.div`
  font-size: 30px;
`

export const Photo = styled(Window)`
  /* width: 179px;
  height: 301px; */

  /* background: url(...); */

`

export const WhatICan = styled(Window)`
  width: 346px;
  height: 330px;
  position: relative;
`

export const MyWorks = styled(Window)`
  /* width: 366px;
  height: 304px; */
  position: relative;
`

export const MyPlans = styled(Window)`
  /* width: 330px;
  height: 330px; */
`

export const AboutMe = styled(Window)`
  font-family: Manrope;
  font-weight: normal;
  color: #d5d5d5;

  /* padding: 10px 20px 10px 20px;
  font-size: 23px; */

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Contant = styled(Window)`
  /* width: 152px;
  height: 127px; */
  position: relative;
`

export const Title = styled.div`
  background-color: #363636;
  font-family: "MotoyaLMaru W3 mono";
  font-weight: normal;
  color: #d5d5d5;

  padding: 10px 20px 10px 20px;

  /* height: 50px; */
  /* padding: 10px 0 0 10px; */

  width: 100%;
  font-size: 20px;
  border-radius: 16px 16px 0 0;
  border: 3px solid #312f2f;

  position: absolute;
  left: 0px;
  top: 0px;
`

export const FullSize = styled.div`
  display: none;
`

export const MobileSize = styled.div`

`
