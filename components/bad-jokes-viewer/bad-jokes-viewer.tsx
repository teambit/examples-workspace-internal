import React from 'react'
import styles from './bad-jokes-viewer.module.scss';
import {Card} from '@teambit/bad-jokes.card';
import {Text} from '@teambit/bad-jokes.text';
import {Button} from '@teambit/bad-jokes.button';
import {useGetJokes} from '@teambit/bad-jokes.use-get-jokes'

export const BadJokesViewer = () => {

    const [getJoke, joke, isLoading] = useGetJokes();

    return (
        <div>
            <Card size='md'>
                <div className={styles.contentWrapper}>
                    <Text>
                        {joke.map(line => <p>{line}</p>)}
                    </Text>
                </div>
                <div>
                    <Button disabled={isLoading} onClick={getJoke}>another one, please</Button>
                </div>
            </Card>
        </div>
    )
}