import { StyleSheet } from "react-native";
const baseBotao = {
    margin: 20,
    padding: 5,
    borderRadius: 20,
    width: 252,
    height: 64,
    alignItems: 'center',
    elevation: 4, // Sombra no Android
    shadowColor: '#000000', // Sombra no iOS
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
};

const EstiloBt = StyleSheet.create({
    container: {

        alignItems: "center"
    },
    botaoMarrom: {
        ...baseBotao,
        backgroundColor: "#8D6E63",
    },
    botaoVerde: {
        ...baseBotao,
        backgroundColor: "#2E7D32",
    },
    texto: {
        fontSize: 32,
        color: "#ffff",
    }
});
export default EstiloBt;