import React from 'react'
import styles from './bad-jokes-viewer.module.scss';
import {Button} from '/Users/eden/Documents/Projects/badjokes/components/ui/button/index'
import {useGetJokes} from '@teambit/bad-jokes.hooks.use-get-jokes'


/** Retrieves and displays bad jokes */
export const BadJokesViewer = () => {

    const [getJoke, joke, isLoading, error] = useGetJokes();

    return (
        <div className={styles.badJokesViewer}>
            <div className={styles.contentWrapper}>
                {error || joke.map(line => <p>{line}</p>)}
            </div>
            <div>
                <Button disabled={isLoading} onClick={getJoke}>
                    {isLoading ? 'loading...' : "another one, please"}
                </Button>
            </div>
        </div>
    )
}