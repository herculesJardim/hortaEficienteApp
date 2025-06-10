import { View, TouchableOpacity, Text } from 'react-native';
import EstiloBt from "../styles/EstiloBt";
const Botao = (props) => {
    const cores = {
        "verde": EstiloBt.botaoVerde,
        "marrom": EstiloBt.botaoMarrom,
    }

    return <View style={EstiloBt.container}>
        <TouchableOpacity
            style={cores[props.color]}
            onPress={props.onPress}>
            <Text style={EstiloBt.texto}>{props.text}</Text>
        </TouchableOpacity>
    </View>
}

export default Botao;