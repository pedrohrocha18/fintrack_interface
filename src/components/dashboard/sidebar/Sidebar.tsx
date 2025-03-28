import { SidebarContainer, Nav, NavItem, ToggleButton } from "./styles";
import { Home, BarChart, Settings, Menu, X } from "lucide-react";
import { useState } from "react";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidebarContainer
      initial={{ width: 80 }}
      animate={{ width: isOpen ? 250 : 80 }}
      transition={{ duration: 0.4, ease: [0.25, 0.8, 0.25, 1] }}
      isOpen={isOpen}
    >
      <ToggleButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </ToggleButton>
      <Nav>
        <NavItem>
          <Home size={24} /> {isOpen && "Dashboard"}
        </NavItem>
        <NavItem>
          <BarChart size={24} /> {isOpen && "Relatórios"}
        </NavItem>
        <NavItem>
          <Settings size={24} /> {isOpen && "Configurações"}
        </NavItem>
      </Nav>
    </SidebarContainer>
  );
};
