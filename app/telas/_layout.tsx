import { Tabs } from 'expo-router';
import { Image } from 'react-native';

export default function TabLayout() {
    const homeLogo = require('../../componentes/icons/Home.svg');
    const hortasLogo = require('../../componentes/icons/Hortas.svg');
    const ciclosLogo = require('../../componentes/icons/Ciclos.svg');
    const balancoLogo = require('../../componentes/icons/Balanco.svg');
    const usuarioLogo = require('../../componentes/icons/User.svg');
    
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#8D6E6378',
            tabBarStyle: {
                backgroundColor: '#fff',
                borderTopColor: 'transparent',
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
            }
        }} >
            <Tabs.Screen
                name='Home'
                options={{
                    
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <Image source={homeLogo}  resizeMode="contain"/>,
                }} />
            <Tabs.Screen
                name='Hortas'
                options={{
                    headerShown: false,
                    tabBarIcon:({color}) =><Image source={hortasLogo}  resizeMode="contain"/>
                }} />
            <Tabs.Screen
                name='Ciclos'
                options={{
                    headerShown: false,
                    tabBarIcon:({color}) =><Image source={ciclosLogo}  resizeMode="contain"/>
                }} />
            <Tabs.Screen
                name='Balanco'
                options={{
                    headerShown: false,
                    tabBarIcon:({color}) =><Image source={balancoLogo}  resizeMode="contain"/>
                }} />
                            <Tabs.Screen
                name='Usuario'
                options={{
                    headerShown:false,
                    tabBarIcon:({color}) =><Image source={usuarioLogo}  resizeMode="contain"/>
                }}/>
        </Tabs>
    );
}