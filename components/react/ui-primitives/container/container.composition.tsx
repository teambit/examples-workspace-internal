import React from 'react'
import { Container } from './container'
import  styles  from './container-docs.module.scss'

export const FloatingContainer = () => {
    return (
        <Container>
            A "floating" container.
        </Container>
    )
}

export const GroundedContainer = () => {
    return (
        <Container floatEffect={false}>
            A "grounded" container.
        </Container>
    )
}


export const CustomizedContainer = () => {
    return (
        <Container className={styles.blueBorder} floatEffect={false}>
            A customized container.
        </Container>
    )
}