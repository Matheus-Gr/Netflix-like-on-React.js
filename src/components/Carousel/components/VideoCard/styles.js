import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 280px;
  height: 160px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: 280px;
  background-position: center;
  
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  opacity: 0.5;

  transition: opacity .3s, transform 0.3s;
  &:hover,
  &:focus {
    border-top-right-radius: 0px;
    border-bottom-left-radius: 0px;
    background-size: 350px;
    border: 0px solid;
    transform: scale(1.2);
    z-index: 10;
    opacity: 1;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
