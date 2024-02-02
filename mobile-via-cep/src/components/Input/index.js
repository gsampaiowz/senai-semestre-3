import { InputContainer, InputLabel, InputBox } from "./style";

export function Input({
  placeholder,
  label,
  width = "100%",
  maxLength,
  readOnly = true,
  keyType = "default",
  onChange = () => {},
  value = "",
}) {
  return (
    <InputContainer style={{ maxWidth: width }}>
      <InputLabel>{label}</InputLabel>
      <InputBox
        inputMode={keyType}
        readOnly={readOnly}
        value={value}
        onChangeText={onChange}
        maxLength={maxLength}
        placeholderTextColor={"#a1a1a1"}
        placeholder={placeholder}
      />
    </InputContainer>
  );
}
