import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    transform: translateY(1px);
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
