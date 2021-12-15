import {API_BASE_JOKES, JOKE_CATEGORIES} from "../../shared/baseUrl";

const fetchJokes = async () => {
    let data = null;
    let error = null;
    const randomCategory = JOKE_CATEGORIES[Math.floor(Math.random() * JOKE_CATEGORIES.length)];
    try {
        await fetch(API_BASE_JOKES + '?category=' + randomCategory)
            .then(response => {
                if (!response.ok) throw new Error(response.status + ' ' + response.statusText);
                return response.json();
            })
            .then(json => {
                data = json['contents']['jokes'][0].joke.text;
            });
    } catch (e) {
        error = e.message;
    }
    return {data, error};
};

export default async function handler(req, res) {
    //const result = await fetchJokes();

    let data = null;
    let error = null;
    const randomCategory = JOKE_CATEGORIES[Math.floor(Math.random() * JOKE_CATEGORIES.length)];
    try {
        await fetch(API_BASE_JOKES + '?category=' + randomCategory)
            .then(response => {
                if (!response.ok) throw new Error(response.status + ' ' + response.statusText);
                return response.json();
            })
            .then(json => {
                data = json['contents']['jokes'][0].joke.text;
            });
    } catch (e) {
        error = e.message;
    }

    res.status(200).json(!error ? {data} : {error});
}