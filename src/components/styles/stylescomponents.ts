import styled from "styled-components";

// pages
export const HomePage = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 80px;
  margin: 0 auto;
  padding: 40px 20px;
  width: 100%;

  .section {
    align-items: center;
    display: flex;
    gap: 40px;
    justify-content: space-between;
    width: 100%;
  }

  .main_text_description_img {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: left;
    max-width: 50%;
  }

  .main_text_description_img h1 {
    font-size: 32px;
    font-weight: bold;
  }

  .main_text_description_img p {
    font-size: 16px;
    line-height: 1.5;
  }

  .main_img {
    height: auto;
    max-width: 45%;
  }

  @media (max-width: 768px) {
    .section {
      align-items: center;
      flex-direction: column;
      text-align: center;
    }

    .main_text_description_img {
      align-items: center;
      max-width: 100%;
      text-align: center;
    }

    .main_img {
      max-width: 80%;
    }
  }
`;

// components
export const Nav = styled.nav`
  align-items: center;
  background-color: #00ca6c;
  display: flex;
  justify-content: space-around;
  height: 150px;
  padding: 10px 20px;
  width: 100%;
  position: relative;

  .logo {
    width: 250px;
  }

  ul {
    display: flex; /* Mantém visível no desktop */
    gap: 15px;
    list-style: none;
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out,
      visibility 0.3s;
  }

  a {
    color: #154a02;
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;
  }

  .hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    gap: 5px;
    position: relative;
    z-index: 11;
  }

  .bar {
    background-color: #154a02;
    height: 4px;
    transition: all 0.3s ease-in-out;
    width: 30px;
  }

  @media (max-width: 768px) {
    .logo {
      width: 200px;
    }

    .hamburger {
      display: flex;
    }

    ul {
      display: flex;
      flex-direction: column;
      text-align: center;
      position: absolute;
      top: 60px;
      left: 0;
      width: 100%;
      background: #00ca6c;
      padding: 20px 0;
      z-index: 10;
      opacity: 0;
      visibility: hidden;
      transform: translateY(-20px);
    }

    ul.open {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    ul.closing {
      opacity: 0;
      visibility: hidden;
      transform: translateY(-20px);
    }

    .hamburger.open .bar:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    .hamburger.open .bar:nth-child(2) {
      opacity: 0;
    }
    .hamburger.open .bar:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -5px);
    }
  }
`;

export const ButtonStyle = styled.button`
  background-color: #00ca6c;
  border: none;
  border-radius: 10px;
  color: #154a02;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  height: 30px;
  width: 120px;
`;
