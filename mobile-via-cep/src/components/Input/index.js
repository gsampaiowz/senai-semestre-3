import { InputContainer, InputLabel, InputBox } from "./style";

export function Input({ placeholder, label, width = "100%", maxLength, editable = false, keyType = "default", onChange = () => {}, value = ""}){
  return (
    <InputContainer style={{maxWidth: width}}>
      <InputLabel>{label}</InputLabel>
      <InputBox textContentType={"postalCode"} maxLength={maxLength} placeholderTextColor={"#a1a1a1"} placeholder={placeholder} />
    </InputContainer>
  );
}
