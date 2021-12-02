import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Sidebar = ({ active }) => {
  return (
    <Container>
      <Link to="/" className="link">
        {active === "main" ? (
          <MainMenuDiv style={{ backgroundColor: "#cacaca" }}>
            <Icon src="icon/clicked-home.png"></Icon>
            <MenuSpan>홈</MenuSpan>
          </MainMenuDiv>
        ) : (
          <MainMenuDiv>
            <Icon src="icon/home.png"></Icon>
            <MenuSpan>홈</MenuSpan>
          </MainMenuDiv>
        )}
      </Link>
      <Link to="/Finder" className="link">
        {active === "finder" ? (
          <MainMenuDiv style={{ backgroundColor: "#cacaca" }}>
            <Icon src="icon/clicked-explore.png"></Icon>
            <MenuSpan>탐색</MenuSpan>
          </MainMenuDiv>
        ) : (
          <MainMenuDiv>
            <Icon src="icon/explore.png"></Icon>
            <MenuSpan>탐색</MenuSpan>
          </MainMenuDiv>
        )}
      </Link>
      <Link to="/Subscribe" className="link">
        {active === "subscribe" ? (
          <MainMenuDiv style={{ backgroundColor: "#cacaca" }}>
            <Icon src="icon/clicked-subscribe.png"></Icon>
            <MenuSpan>구독</MenuSpan>
          </MainMenuDiv>
        ) : (
          <MainMenuDiv>
            <Icon src="icon/subscribe.png"></Icon>
            <MenuSpan>구독</MenuSpan>
          </MainMenuDiv>
        )}
      </Link>
      <Line />

      <MenuDiv>
        <Icon src="icon/keep.png"></Icon>
        <MenuSpan>보관함</MenuSpan>
      </MenuDiv>
      <MenuDiv>
        <Icon src="icon/view_record.png"></Icon>
        <MenuSpan>시청기록</MenuSpan>
      </MenuDiv>
      <MenuDiv>
        <Icon src="icon/my_video.png"></Icon>
        <MenuSpan>내 동영상</MenuSpan>
      </MenuDiv>
      <MenuDiv>
        <Icon src="icon/saved_video.png"></Icon>
        <MenuSpan>나중에 볼 동영상</MenuSpan>
      </MenuDiv>
      <MenuDiv>
        <Icon src="icon/liked_video.png"></Icon>
        <MenuSpan>좋아요 표시한 동영상</MenuSpan>
      </MenuDiv>
      <Line />

      <div className="title" style={{ padding: "0 20px 10px" }}>
        구독
      </div>
      <MenuDiv></MenuDiv>
      <Line />

      <div className="title" style={{ padding: "0 20px 10px" }}>
        YOUTUBE 더보기
      </div>
      <MenuDiv>
        <Icon src="icon/film.png"></Icon>
        <MenuSpan>YouTube Premium</MenuSpan>
      </MenuDiv>
      <MenuDiv>
        <Icon src="icon/film.png"></Icon>
        <MenuSpan>영화</MenuSpan>
      </MenuDiv>
      <MenuDiv>
        <Icon src="icon/film.png"></Icon>
        <MenuSpan>게임</MenuSpan>
      </MenuDiv>
      <MenuDiv>
        <Icon src="icon/film.png"></Icon>
        <MenuSpan>실시간</MenuSpan>
      </MenuDiv>
      <MenuDiv>
        <Icon src="icon/edu.png"></Icon>
        <MenuSpan>학습</MenuSpan>
      </MenuDiv>
      <MenuDiv>
        <Icon src="icon/film.png"></Icon>
        <MenuSpan>스포츠</MenuSpan>
      </MenuDiv>
      <Line />

      <MenuDiv></MenuDiv>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  width: 250px;
  float: left;
  position: fixed;
  left: 0;
  height: 100%;
  text-align: left;
  overflow-y: scroll;

  @media (max-width: 1300px) {
    width: 90px;

    .title {
      display: none;
    }
  }

  .link {
    text-decoration: none;
    color: black;
  }

  @media (max-width: 800px) {
    display: none;
  }
  ,

  /*스크롤바*/
  &::-webkit-scrollbar {
    border: none;
    -webkit-appearance: none;
  }
  &::-webkit-scrollbar-thumb {
    background: darkgrey;
    border-radius: 8px;
  }
`;

const MainMenuDiv = styled.div`
  padding: 0px 20px 0px 20px;
  height: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #f3f3f3;
  }

  @media (max-width: 1300px) {
    height: 90px;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }
`;

const MenuDiv = styled.div`
  padding: 0px 20px 0px 20px;
  height: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #f3f3f3;
  }

  @media (max-width: 1300px) {
    display: none;
  }
`;

const Icon = styled.img`
  margin-right: 20px;
  height: 25px;
  align-items: center;
  display: flex;
  float: left;

  @media (max-width: 1300px) {
    margin: 0;
  }
`;

const MenuSpan = styled.span`
  font-size: 14px;
`;

const Line = styled.div`
  height: 1px;
  background: #dedede;
  margin-top: 14px;
  margin-bottom: 14px;

  @media (max-width: 1300px) {
    display: none;
  }
`;