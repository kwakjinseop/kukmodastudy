import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SidebarContainer = styled(motion.div)<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  background-color: #333;
  color: white;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <CloseButton onClick={onClose}>×</CloseButton>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </SidebarContainer>
  );
};

export default Sidebar;