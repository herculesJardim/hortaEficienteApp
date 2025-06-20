import { Stack } from "expo-router";
export default function MainLayout() {
  return (
    <Stack>
      <Stack.Screen name='Index' options={{headerShown:false}}/>
      <Stack.Screen name='Login' options={{headerShown:false}}/>
      <Stack.Screen name='CadastroUsuario' options={{headerShown:false}}/>
      <Stack.Screen name='telas/Home' options={{headerShown:false}}/>
      <Stack.Screen name='telas/Hortas' options={{headerShown:false}}/>
    </Stack> 
    

  );
}

