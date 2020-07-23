import React from 'react'
import {Card} from './card'
import {Text} from '@bit/bit.new-hp.ui.text'

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