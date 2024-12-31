import axios from 'axios';

// Function to send data
export async function sendDataToApi(input: string) {
    try {
        // Replace the URL below with your actual API endpoint
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/', {input});

        // Return the API response
        return response.data;
    } catch (error) {
        console.error('Error sending data:', error);
        throw error; // Throw the error to handle it in the calling code
    }
}
