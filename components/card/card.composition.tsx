import React from 'react'
import {Card} from './card'
import {Text} from '@teambit/bad-jokes.text'

export const CardWithText = () => {
    return(
        <Card>
            <Text>
                <p>When do two functions fight?</p>
                <p>- When they have arguments</p>
            </Text>
        </Card>
    )
}