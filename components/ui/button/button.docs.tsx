import React from 'react'

export const abstract = "An imperfect button.";

export const tag = ["react", "typescript", "button"];

export default function () {
    const wrapper = {
      border: '1px solid #e0ddd8',
      borderRadius: '5px',
      padding: '25px',
      marginBottom: '25px'
    }
    return (
        <div style={wrapper}>
            <p style={{fontWeight: 700}}>Guidelines</p>
            <br/>
            <ul style={{listStyleType: 'circle', paddingLeft: "25px"}} >
                <li>
                    Place buttons where users expect to find them. Do not force users to "hunt for buttons".
                </li>
                <li>
                    Do not use generic lables for your buttons. Use verbs that clearly explain the button's function.
                </li>
                <li>
                    Size buttons in proportion to their importance
                </li>
            </ul>
        </div>
    )
}