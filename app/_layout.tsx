import { router, Stack } from "expo-router";
import { AuthProvider, useAuth } from '../contexts/AuthContext'
import { useEffect } from "react";
import { supabase } from "../services/lib/supabase";

export default function RootLayout() {
  return (
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  )
}

function MainLayout() {
  const{setAuth} = useAuth();
  useEffect(()=>{
    supabase.auth.onAuthStateChange((_event,session)=>{
        if(session){
          setAuth(session.user)
          router.replace('telas/Home')
          return;
        }
        setAuth(null);
        router.replace('Index')
    })
  },[])
  return (
    <Stack>
      <Stack.Screen name='Index' options={{ headerShown: false }} />
      <Stack.Screen name='Login' options={{ headerShown: false }} />
      <Stack.Screen name='CadastroUsuario' options={{ headerShown: false }} />
      <Stack.Screen name='telas/Home' options={{ headerShown: false }} />
      <Stack.Screen name='telas/Hortas' options={{ headerShown: false }} />
    </Stack>


  );
}

