import { useState, useEffect } from 'react';

export const useGetJokes = (): [() => Promise<void>, string, boolean, string] => {
  const [joke, setJoke] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const endpoint = 'https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=racist&type=single';

  const getJoke = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(endpoint);
      const data = await res.json();
      setJoke(data.joke);
      if (error) setError('');
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getJoke();
  }, []);

  return [getJoke, joke, isLoading, error];
};

