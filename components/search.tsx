import {Alert, StyleSheet, TextInput, View} from "react-native";
import {useState} from "react";
import {sendDataToApi} from "../pokeApi-service";

const Search = () => {
    const handleSendData = async () => {
        if (!searchedPokemon.trim()) {
            Alert.alert('Validation Error', 'Input cannot be empty!');
            return;
        }

        try {
            const response = await sendDataToApi(searchedPokemon); // Call the API function
            console.log(response);
            Alert.alert('Success', `API responded with: ${JSON.stringify(response)}`);
        } catch (error) {
            Alert.alert('Error', 'Something went wrong. Please try again.');
        }
    };


    const [searchedPokemon, setSearchText] = useState("");
    return (
        <View>
            <TextInput
                placeholder={"what are we catching today?"}
                placeholderTextColor="gray"
                style={styles.input}
                value={searchedPokemon}
                onSubmitEditing={handleSendData}
                onChangeText={setSearchText}>
            </TextInput>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        marginTop: 40,
        marginHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 30,
        borderWidth: 2,
        borderColor: "#0f224a",
        borderRadius: 15,
    }
})

export default Search;