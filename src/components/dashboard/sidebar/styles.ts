import styled from "styled-components";
import { motion } from "framer-motion";

interface SidebarProps {
  isOpen: boolean;
}

export const SidebarContainer = styled(motion.aside)<SidebarProps>`
  height: 100vh;
  background: #2f2e2e;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  transition: width 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 4px 0 10px rgba(0, 0, 0, 0.1);
`;

export const ToggleButton = styled.button`
  background: transparent;
  border: none;
  color: #ffffff;
  cursor: pointer;
  margin-bottom: 20px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const NavItem = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  padding: 12px;
  cursor: pointer;
  transition: 0.3s;
  color: #ffffff;
  border-radius: 8px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;