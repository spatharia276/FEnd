import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "600px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
  background-color: rgb(236,242,248);
  display: flex;
  border-radius:10px
`;

const Image = styled.img`
  width: 50%;
  height: ${(props) => (props.type === "sm" ? "180px" : "300px")};
  background-color: rgb(236,242,248);
  flex: 1;
  padding: 18px 26px;
  border-radius:10px;
`;

const Details = styled.div`
  display: flex ;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 140px;
  flex: 1;
  align-items: center;
  justify-content: center;
  
`;

const ChannelImage = styled.img`
width: 90px;
height:90px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;

const Title = styled.h1`
display: flex;
padding: 18px 26px;
  font-size: 40px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
display: flex;
justify-content: center;
  font-size: 23px;
  color: ${({ theme }) => theme.textSoft};
  
`;

const Info = styled.div`
display: flex;
justify-content: center;
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Cardd = ({ type }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          type={type}
          src="https://www.smfigure.com/public/uploads/news-1006.webp"
        />
        <Details type={type}>
          
          <Texts >
            <Title>Gagan Chaudhary</Title>
            <ChannelName>@ganikgagan</ChannelName>
            <Info>#VIDEO #DAILY_LIFE #BLOGGING</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Cardd;
