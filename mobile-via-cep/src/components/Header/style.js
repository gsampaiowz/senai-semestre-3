import styled from "styled-components/native";

export const HeaderContainer = styled.View`
  background-color: #FECC2B;
  height: 150px;
  z-index: 1;
  position: fixed;
  top: 0;
  width: 100%;
  border-radius: 0 0 15px 15px;
  shadow-color: #000;
  shadow-opacity: 0.15;
  shadow-radius: 25px;
`;

export const HeaderContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TextHeader = styled.Text`
  font-size: 20px;
  color: #333E33;
  text-align: center;
  font-family: "Roboto_700Bold";
`;
