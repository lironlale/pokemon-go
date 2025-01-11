import axios from 'axios';

export async function sendDataToApi(searchedPokemon: string) {
    try {
        return axios.get(`https://pokeapi.co/api/v2/pokemon/${searchedPokemon}`)
            .then(response => response.data);
    } catch (error) {
        console.error('Error sending data:', error);
        throw error;
    }
}
