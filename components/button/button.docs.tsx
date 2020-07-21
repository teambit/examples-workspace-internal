import React from 'react'

export const abstract = 'An imperfect button.'

export const labels = ['button', 'typescript', 'react']

export default function () {
    const style = {
        display: "flex",
        height: "50px",
        width: "100%",
        backgroundColor: "#f7dcb5",
        marginTop: "15px",
        marginBottom: "15px",
        alignItems: "center",
        justifyContent: "center"
    }
    return (
        <div style={style}>This is a custom segment.</div>
    )
}