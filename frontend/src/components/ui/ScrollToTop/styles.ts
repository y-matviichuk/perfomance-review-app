import styled from 'styled-components';

export const ScrollSentinel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 200px;
  width: 1px;
  pointer-events: none;
  opacity: 0;
  z-index: -1;
`;

export const ScrollButton = styled.button<{ $isVisible: boolean }>`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  
  /* Initial state for animation */
  opacity: 0;
  transform: scale(0) rotate(-180deg);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  pointer-events: none;

  /* Visible state */
  ${({ $isVisible }) =>
		$isVisible &&
		`
    opacity: 1;
    transform: scale(1) rotate(0deg);
    pointer-events: auto;
  `}

  &:hover {
    background-color: #0056b3;
    transform: scale(1.1) rotate(0deg);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: currentColor;
  }
`;
