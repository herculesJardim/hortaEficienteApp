import { View, TouchableOpacity, Text } from 'react-native';
import EstiloBt from "../styles/EstiloBt";
const BtAction = (props) => {
    if (props.color == "marrom"){
        return <View style={EstiloBt.container}>
            <TouchableOpacity
                style={EstiloBt.botaoMarrom}
                onPress={() => console.log("Botão marrom")}>
                <Text style={EstiloBt.texto}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    }else if(props.color =="verde"){
       return <View style={EstiloBt.container}>
            <TouchableOpacity
                style={EstiloBt.botaoVerde}
                onPress={() => console.log("Botão verde")}>
                <Text style={EstiloBt.texto}>{props.text}
                </Text>
            </TouchableOpacity>
        </View>
    }
}

export default BtAction;