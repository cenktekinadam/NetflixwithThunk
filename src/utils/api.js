import axios from "axios";

export default axios.create({

    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
    //oRTAK KULLANILACAK DİĞER APARAMETRELER
    params: {
        language: 'tr-TR',
    }
})