import styled from "styled-components";

// pages
export const HomePage = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  gap: 100px;
  width: 100%;

  .section {
    align-items: center;
    display: flex;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
  }

  .main_text_description_img {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    text-align: center;
    flex: 1;
    max-width: 600px;
  }

  .main_text_description_img h1 {
    font-size: 32px;
    font-weight: bold;
  }

  .main_text_description_img h3 {
    font-size: 22px;
    font-weight: bold;
  }

  .main_text_description_img p {
    font-size: 15px;
    line-height: 1.5;
  }

  .main_img {
    height: auto;
    max-width: 45%;
  }

  @media (max-width: 768px) {
    .section {
      flex-direction: column;
      align-items: center;
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

export const LoginPage = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100%;
  padding: 40px 20px;

  .login-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #ffffff;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
    text-align: center;
  }

  h2 {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    color: #555;
    margin-bottom: 20px;
  }

  .input-group {
    width: 100%;
    text-align: left;
    margin-bottom: 15px;
  }

  label {
    font-size: 14px;
    font-weight: 600;
    color: #333;
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 6px;
    outline: none;
  }

  button {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    color: #fff;
    background: #007bff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    background: #0056b3;
  }

  a {
    margin-top: 10px;
    font-size: 14px;
    color: #007bff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    .login-box {
      width: 90%;
    }
  }
`;

export const CreateAccountPage = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100%;
  padding: 80px 20px 40px;

  .signup-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #ffffff;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 90%;
    text-align: center;
  }

  h2 {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    color: #555;
    margin-bottom: 20px;
  }

  .input-group {
    width: 100%;
    text-align: left;
    margin-bottom: 15px;
  }

  label {
    font-size: 14px;
    font-weight: 600;
    color: #333;
    display: block;
    margin-bottom: 5px;
  }

  input,
  select {
    width: 100%;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 6px;
    outline: none;
  }

  .checkbox-group {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 10px 0;
    text-align: left;
    width: 100%;
  }

  .checkbox-group input {
    width: 16px;
    height: 16px;
    margin: 0;
  }

  .checkbox-group label {
    font-size: 14px;
    color: #333;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    flex-wrap: wrap;
  }

  .checkbox-group a {
    color: #007bff;
    text-decoration: none;
  }

  .checkbox-group a:hover {
    text-decoration: underline;
  }

  button {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    color: #fff;
    background: #007bff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    background: #0056b3;
  }

  .login-link {
    margin-top: 10px;
    font-size: 14px;
  }

  .login-link a {
    color: #007bff;
    text-decoration: none;
  }

  .login-link a:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    .signup-box {
      width: 95%;
      padding: 30px;
    }

    h2 {
      font-size: 24px;
    }

    p {
      font-size: 14px;
    }

    input,
    select {
      font-size: 13px;
      padding: 8px;
    }

    button {
      font-size: 14px;
      padding: 10px;
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
  width: 100%;

  .logo {
    width: 250px;
  }

  ul {
    display: flex;
    gap: 15px;
    list-style: none;
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out,
      visibility 0.3s;
  }

  .navLinks {
    color: #154a02;
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;
    padding: 10px 15px;
    border-radius: 8px;
    transition: all 0.3s ease-in-out;
    position: relative;
    overflow: hidden;

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 0%;
      height: 3px;
      background-color: #fff;
      transition: width 0.3s ease-in-out, left 0.3s ease-in-out;
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
      color: #fff;
    }

    &:hover::after {
      width: 100%;
      left: 0;
    }
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
    height: 120px;

    .logo {
      width: 210px;
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
  background: linear-gradient(135deg, #00ca6c, #008c4a);
  border: none;
  border-radius: 12px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  height: 45px;
  width: 200px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out,
    background 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  will-change: transform, box-shadow, background;

  &:hover {
    transform: translateY(-3px);
    background: linear-gradient(135deg, #00e676, #00a152);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-1px) scale(0.98);
  }

  &:disabled {
    background: #a5d6a7;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

export const BenefitsStyle = styled.div`
  border-radius: 20px;
  padding: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
  max-width: 500px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out,
    background-color 0.3s ease-in-out;
  will-change: transform, box-shadow, background-color;
  margin: 0 auto;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    background-color: rgba(255, 255, 255, 0.2);
  }

  img {
    height: 45px;
    width: 45px;
  }

  h4 {
    font-size: 16px;
    font-weight: bold;
  }

  .div_img_benefits {
    align-items: center;
    display: flex;
    justify-content: center;
    max-width: 100px;
    text-align: center;
  }

  .div_description {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    font-size: 12px;
    width: 200px;
    min-height: 50px;
    height: 100%;
    flex-grow: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 15px;
    width: 85%;

    .div_description {
      align-items: center;
      text-align: center;
      width: 100%;
    }
  }
`;

export const CommentsStyle = styled.div`
  border-radius: 20px;
  padding: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  padding: 10px;
  margin-bottom: 20px;
  max-width: 500px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out,
    background-color 0.3s ease-in-out;
  will-change: transform, box-shadow, background-color;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    background-color: rgba(255, 255, 255, 0.2);
  }

  img {
    border-radius: 10px;
    height: 80px;
    width: 80px;
  }

  h4 {
    font-size: 16px;
    font-weight: bold;
  }

  .div_img_comments {
    align-items: center;
    background-color: #b2db9c;
    border: 1px solid #068802;
    border-radius: 60px;
    display: flex;
    justify-content: center;
    height: 110px;
    text-align: center;
    width: 110px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
  }

  .div_comments {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 200px;
    min-height: 100px;
    height: 100%;
    flex-grow: 1;
  }
`;

export const PlansContainer = styled.div`
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const PlanCard = styled.div`
  background: ${(props) => props.color};
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 300px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-family: "Inter", sans-serif;
  font-weight: 600;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 50px;
    height: 50px;
    margin-bottom: 15px;
    filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.2));
  }

  h3 {
    margin-bottom: 10px;
    font-size: 22px;
    font-weight: 700;
    text-transform: uppercase;
  }

  p {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 15px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    font-size: 16px;
    margin: 8px 0;
    opacity: 0.9;
  }

  button {
    margin-top: 20px;
    padding: 12px 20px;
    background: rgba(255, 255, 255, 0.15);
    border: none;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    cursor: pointer;
    transition: background 0.3s ease-in-out;

    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }
`;

export const Footer = styled.footer`
  background-color: #00ca6c;
  color: #154a02;
  text-align: center;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;

  .footer-links {
    display: flex;
    gap: 20px;
    list-style: none;
    margin: 15px 0;
    padding: 0;
  }

  .footer-links a {
    color: #154a02;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    transition: color 0.3s ease-in-out;
  }

  .footer-links a:hover {
    color: #fff;
  }

  .social-icons {
    display: flex;
    gap: 15px;
    margin-top: 10px;
  }

  .social-icons a {
    color: #154a02;
    font-size: 24px;
    transition: color 0.3s ease-in-out;
  }

  .social-icons a:hover {
    color: #fff;
  }

  .copyright {
    font-size: 14px;
    margin-top: 10px;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    .footer-links {
      flex-direction: column;
      text-align: center;
      gap: 10px;
    }
    .social-icons {
      justify-content: center;
    }
  }
`;
