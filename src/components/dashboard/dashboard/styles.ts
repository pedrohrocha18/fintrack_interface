import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`;

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-start;
  margin: 10px;
  width: 100%;
  
  @media (min-width: 768px) {
    justify-content:center;
    flex-direction: row;
  }
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  height: 100px;
  padding: 20px;
  width: 100%;
  max-width: 250px;
  display: flex;
  align-items: center;
  gap: 20px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
  }

  div {
    display: flex;
    flex-direction: column;
  }

  h3 {
    font-size: 18px;
    color: #333;
    margin: 0;
  }

  p {
    font-size: 22px;
    font-weight: bold;
    color: #333;
    margin: 5px 0 0;
  }

`;

export const IconContainer = styled.div`
  background: #f0f0f0;
  border-radius: 50%;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
`;
