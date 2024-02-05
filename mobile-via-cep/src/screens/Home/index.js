import { useState } from "react";
import { Input } from "../../components/Input";
import { InputRow } from "../../components/Input/style";
import { ContainerForm, ScrollForm } from "./style";
import axios from "axios";

export function Home() {
  // STATES - VARIAVEIS
  const [inputs, setInputs] = useState({
    cep: "",
    logradouro: "",
    bairro: "",
    cidade: "",
    estado: "",
    uf: "",
  });
  // USEEFFECT - FUNCTIONS

  const getAdress = async () => {
    try {
      const response = await axios.get(
        // `https://viacep.com.br/ws/${inputs.cep}/json/`
        // `http://localhost:3000/cep/${inputs.cep}`
        // `brasilaberto.com/api/v1/zipcode/${inputs.cep}`
        `https://api.postmon.com.br/v1/cep/${inputs.cep}`
      );
      setInputs({
        ...inputs,
        logradouro: response.data.logradouro,
        bairro: response.data.bairro,
        cidade: response.data.cidade,
        estado: response.data.estado_info.nome,
        uf: response.data.estado,
      });
    } catch {}
  };

  return (
    <ScrollForm>
      <ContainerForm>
        <Input
          onBlur={() => getAdress()}
          readOnly={false}
          value={inputs.cep}
          onChange={(text) => setInputs({ cep: text })}
          keyType="numeric"
          maxLength={8}
          label={"Informar CEP:"}
          placeholder={"Cep..."}
        />
        <Input
          value={inputs.logradouro}
          label={"Logradouro:"}
          placeholder={"Logradouro"}
        />
        <Input value={inputs.bairro} label={"Bairro:"} placeholder={"Bairro"} />
        <Input value={inputs.cidade} label={"Cidade:"} placeholder={"Cidade"} />
        <InputRow>
          <Input
            value={inputs.estado}
            label={"Estado:"}
            placeholder={"Estado"}
          />
          <Input
            value={inputs.uf}
            width={60}
            label={"UF:"}
            placeholder={"UF"}
          />
        </InputRow>
      </ContainerForm>
    </ScrollForm>
  );
}
