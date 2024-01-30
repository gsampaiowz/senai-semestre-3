import styled from "styled-components/native";

export const Button = styled.Pressable`
  border-width: 1px;
  border-color: white;
  border-radius: 5px;
  padding: 5px;
  box-shadow: 0px 0px 5px #000;
`;

export const ButtonIncrement = styled(Button)`
  background-color: green;
`;
export const ButtonDecrement = styled(Button)`
  background-color: red;
`;
