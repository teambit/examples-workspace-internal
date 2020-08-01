import {useState, useEffect} from 'react';


export const useGetJokes = () : [() => Promise<void>, string[], boolean] =>{
    const [joke, setJoke] = useState(['Loading...']);
    const [isLoading, setIsLoading] = useState(false);

    const getJoke = async () => {
          setIsLoading(true);
        try {
            let res = await fetch('https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=racist&type=single');
            let data = await res.json();
            const dataArr = data.joke.split('\n');
            setJoke(dataArr);
            setIsLoading(false);
        }
        catch (err) {
            setJoke([`ERROR: ${err.message}`]);
            setIsLoading(false);
        }      
      }
    
      useEffect(() => {
        getJoke();
    }, [])

    return [getJoke, joke, isLoading]
}
