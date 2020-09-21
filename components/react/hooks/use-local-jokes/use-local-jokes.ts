import { useState, useRef } from 'react';

export type LocalJokes = [
  () => void,
  string,
  string,
  (joke: string, callback?: () => any) => void,
  (joke: string, callback?: () => any) => void
];

export const useLocalJokes = (): LocalJokes => {

  const filterStorage = (localStorage: Storage): string[] => {
    const localStgArr = Object.entries(localStorage);
    const savedJokes = localStgArr.filter(i => i[0].startsWith('joke--')).map(i => i[1]);
    return savedJokes;
  };

  const localJokes = useRef(filterStorage(localStorage));

  const [currentJoke, setCurrentJoke] = useState({ index: 0, content: '', error: '' });

  const getJoke = (): void => {
    const nextJokeIndex = currentJoke.index + 1;
    if (localJokes.current.length === 0) {
        console.log('localJokes.current.length === 0')
        setCurrentJoke({ index: 0, content: '', error: 'You are out of jokes.' });
    } else if (!localJokes.current[nextJokeIndex]) {
        setCurrentJoke({ index: 0, content: localJokes.current[0], error: '' });
        console.log('!localJokes.current[nextJokeIndex]')
    } else {
        setCurrentJoke( {index: nextJokeIndex, content: localJokes.current[nextJokeIndex], error: ''})
        console.log('next index:', nextJokeIndex)
    }
    }

  const saveJoke = (joke: string, callback?: () => any): void => {
    const itemId = `joke--${joke.substring(0, 10)}`;
    localStorage.setItem(itemId, joke);
    localJokes.current = filterStorage(localStorage);
    if (callback) callback();
  };

  const removeJoke = (joke: string, callback?: () => any): void => {
    const itemId = `joke--${joke.substring(0, 10)}`;
    localStorage.removeItem(itemId);
    localJokes.current = filterStorage(localStorage);
    if (callback) callback();
  };

  return [getJoke, currentJoke.content, currentJoke.error, saveJoke, removeJoke];
};
