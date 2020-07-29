import styled from 'styled-components';

export const Title = styled.h3`
  color: #f4f4f4;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: -1px;
  display: inline-block;
  padding: 15px;
  padding-right: 20px;
  background: red;
  line-height: 0.6;
  width: 150px;
  border-top-left-radius: 4px;
  border-top-right-radius: 25px;

  @media (max-width: 800px) {
    text-align: center;
    border-top-left-radius: none;
    border-top-right-radius: none;
    margin-bottom: 16px;
    border-radius: 10px;
    font-size: 18px;
    padding: 10px;
  }
`;

export const ExtraLink = styled.a`
  margin-left: 16px;
  text-decoration: none;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
  }
`;

export const VideoCardList = styled.ul`
  margin: 0;
  padding-left: 0;
  padding-bottom: 32px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  flex-direction: row;
  
  li {
    margin-right: 16px;
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin-left: 5%;
  margin-bottom: 16px;
`;
