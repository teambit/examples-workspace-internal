import React from 'react';
import styles from './use-get-jokes-docs.module.scss'

export const abstract = 'A hook that fetches jokes'

export const labels = ['hook', 'typescript', 'react','fetch']

const code = `
const BadJokesViewer = () => {

    const [getJoke, joke, isLoading] = useGetJokes();

    return (
        <>
            <div>
                {joke.map(line => <p>{line}</p>)}
            </div>
                <button disabled={isLoading} onClick={getJoke}>Fetch another Joke</button>
        </>
    )
}
`

export default () => {
    return (
        <div className={styles.instructions}>
            <p>This hook returns an array of:</p>
            <ol>
                <li><b>getJokes </b><i>(function)</i>: fetches a single joke</li>
                <li><b>jokes </b><i>(array of strings)</i>: the returned joke pargraphs</li>
                <li><b>isLoading </b><i>(boolean)</i>: the fetching status</li>
                <li><b>error </b><i>(string)</i>: the error returned error message</li>
            </ol>
            <br/>
            <p>Use it like so:</p>
            <pre>{code}</pre>
        </div>
    )
}
