import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f2f5;
`;

export const Card = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 400px;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
  color: #666;
  margin-bottom: 2rem;
`;
