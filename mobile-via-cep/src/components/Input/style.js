import styled, { css } from "styled-components/native";

export const InputContainer = styled.View`
  width: ${props => `${props.maxWidth}`};
  flex-shrink: 0;
  flex-basis: auto;
  flex-grow: 1;
  gap: 8px;
  `;
export const InputLabel = styled.Text`
  font-size: 14px;
  color: #047CD3;
  font-family: "Roboto_500Medium";
  `;

export const InputBox = styled.TextInput`
  height: 50px;
  font-size: 12px;
  padding: 20px;
  flex-basis: auto;
  font-family: "Roboto_500Medium";
  border-radius: 10px;
  border: 1px solid #a1a1a1;
  ${props => props.readOnly && css`background-color: #f6f6f6; color: #000;`};
  `;

export const InputRow = styled.View`
  flex-direction: row;
  gap: 20px;
`;