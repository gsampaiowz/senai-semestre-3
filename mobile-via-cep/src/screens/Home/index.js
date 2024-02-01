import { Input } from "../../components/Input";
import { InputRow } from "../../components/Input/style";
import { ContainerForm, ScrollForm } from "./style";

export function Home() {
  return (
    <ScrollForm>
      <ContainerForm>
        <Input maxLength={8} label={"Informar CEP:"} placeholder={"Cep..."} />
        <Input label={"Logradouro:"} placeholder={"Logradouro"} />
        <Input label={"Bairro:"} placeholder={"Bairro"} />
        <Input label={"Cidade:"} placeholder={"Cidade"} />
        <InputRow>
          <Input label={"Estado:"} placeholder={"Estado"} />
          <Input width={60} label={"UF:"} placeholder={"UF"} />
        </InputRow>
      </ContainerForm>
    </ScrollForm>
  );
}
