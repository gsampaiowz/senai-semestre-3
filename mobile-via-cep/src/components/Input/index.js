import { InputContainer, InputLabel, InputBox } from "./style";

export function Input({
  placeholder,
  label,
  width = "100%",
  maxLength,
  readOnly = true,
  keyType = "none",
  onChange = () => {},
  onBlur = () => {},
  value = "",
}) {
  return (
    <InputContainer style={{ maxWidth: width }}>
      <InputLabel>{label}</InputLabel>
      <InputBox
        onBlur={onBlur}
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
