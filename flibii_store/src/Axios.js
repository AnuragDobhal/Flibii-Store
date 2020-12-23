import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5001/challenge-bd894/us-central1/api'   // the API URL (CLOUD FUNCTION)
});

export default instance;