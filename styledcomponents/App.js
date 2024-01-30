import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Container } from './src/components/Container/Container';
import { ButtonTitle, Title } from './src/components/Title/Title';
import { ButtonDecrement, ButtonIncrement } from './src/components/Button/Button';
import { Image } from './src/components/Image/Image';

export default function App() {

  const [contador, setContador] = useState(0);
  
  useEffect(() => {
    console.warn("Contador atualizado: " + contador)
  }, [contador]);

  return (
    <Container>
      <Image source={"https://i.ytimg.com/vi/rNHlCv7GLeU/sddefault.jpg"}/>
      <Title>Contador: {contador}</Title>
      <View style={{flexDirection: "row", gap: 20}}>
        <ButtonIncrement onPress={() => setContador(contador + 1)}>
          <ButtonTitle>Incrementar</ButtonTitle>
        </ButtonIncrement>
        <ButtonDecrement onPress={() => setContador(contador - 1)}>
          <ButtonTitle>Decrementar</ButtonTitle>
        </ButtonDecrement>
      </View>
      <StatusBar style="auto" />
    </Container>
  );
}