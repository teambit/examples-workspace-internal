import {useState, useEffect} from 'react';


export const useGetJokes = () : [() => Promise<void>, string[], boolean, string] =>{
    const [joke, setJoke] = useState(['']);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const endpoint = 'https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=racist&type=single';

    const getJoke = async () => {
          setIsLoading(true);
        try {
            let res = await fetch(endpoint);
            let data = await res.json();
            const dataArr = data.joke.split('\n');
            setJoke(dataArr);
            if (error) setError('');
            setIsLoading(false);
        }
        catch (err) {
            setError(err.message);
            setIsLoading(false);
        }      
      }
    
    // Fetch data on first mount
      useEffect(() => {
        getJoke();
    }, [])
    
    return [getJoke, joke, isLoading, error]
}
