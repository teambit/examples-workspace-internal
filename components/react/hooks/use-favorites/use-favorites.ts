import {useState, useEffect} from 'react';

export type UseFavReturn = [
    () => void,
    string,
    (joke: string) => void
]

export const useFavorites = () : UseFavReturn => {
    
    const filterStorage = (localStorage : Storage) : string[] => {
        const localStgArr = Object.entries(localStorage);
        const savedJokes  = localStgArr
            .filter(i => i[0].startsWith('joke--'))
            .map(i =>  i[1])
        return savedJokes;
    }

    const [favJokes, setFavJokes] = useState(filterStorage(localStorage));
    
    const [currentJoke, setCurrentJoke] = useState({index: -1, content: ''});

    const saveJoke = (joke: string) : void => {
        localStorage.setItem(`joke--${joke.substring(0,10)}`, joke)
        setFavJokes(filterStorage(localStorage));
    }

    const fetchJoke = () : void  => {
        const nextJokeIndex = (favJokes.length === (currentJoke.index + 1)) ? 0 : currentJoke.index + 1;
        setCurrentJoke({index: nextJokeIndex, content: favJokes[nextJokeIndex]})
    }

    
    return [fetchJoke, currentJoke.content, saveJoke]
}