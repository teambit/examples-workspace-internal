import React, {useState, useEffect} from 'react'
import styles from './bad-jokes-viewer.module.scss';
import {Card} from '@bit/bit.new-hp.ui.card';
import {Text} from '@bit/bit.new-hp.ui.text';
import {Button} from '@bit/bit.new-hp.ui.button';


export const BadJokesViewer = () => {
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