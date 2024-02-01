import styled from "styled-components/native";

export const InputContainer = styled.View`
  width: ${props => `${props.maxWidth}`};
  width: 100%;
  flex-shrink: 1;
  gap: 8px;
  min-width: 50px;
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
  font-family: "Roboto_500Medium";
  border-radius: 10px;
  border: 1px solid #a1a1a1;
  ${props => props.editable && css`background-color: #f6f6f6`};
  `;

export const InputRow = styled.View`
  flex-direction: row;
  width: 100%;
  gap: 20px;
`;