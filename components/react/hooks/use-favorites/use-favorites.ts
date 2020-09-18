import {useState, useEffect} from 'react';

export type UseFavReturn = [
    number,
    () => void,
    string,
    (joke: string) => void,
    () => void,
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
    
    const [currentJoke, setCurrentJoke] = useState({index: 0, content: ''});

    const saveJoke = (joke: string) : void => {
        localStorage.setItem(`joke--${joke.substring(0,10)}`, joke)
        setFavJokes(filterStorage(localStorage));
    }

    const loadJoke = () : void  => {
        if (favJokes.length === 0) {
            setCurrentJoke({index: 0, content: 'Nothing to see here...'});
        } else {
            const nextJokeIndex = (favJokes.length === (currentJoke.index + 1)) ? 0 : currentJoke.index + 1;
            setCurrentJoke({index: nextJokeIndex, content: favJokes[nextJokeIndex]})
        }
    }

    const removeJoke = () : void => {
        localStorage.removeItem(`joke--${currentJoke.content.substring(0,10)}`)
        setFavJokes(filterStorage(localStorage))
    }

    useEffect(() => {
        loadJoke();
    },[])

    return [favJokes.length, loadJoke, currentJoke.content, saveJoke, removeJoke]
}