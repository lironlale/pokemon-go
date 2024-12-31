import {Image, StyleSheet, Text, View} from "react-native";

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}> Pokemon GO (touch some grass)</Text>
            <Image style={styles.icon} source={require('../assets/Porygon.png')}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 20,
        backgroundColor: '#0f224a',
        height: '10%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        marginLeft: 9,
        fontSize: 17,
        fontWeight: 'bold',
        color: '#e9f1f2',
    },
    icon: {
        resizeMode: 'stretch',
    }
});
