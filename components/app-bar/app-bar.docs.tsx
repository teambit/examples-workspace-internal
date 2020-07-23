import React from 'react'

export default () => {
    
    const codeExample = `
    <AppBar>
       <AppBar.Item path="/">Item Name</AppBar.Item>
       <AppBar.Logo>
            <img src='./logo.png'>
       </AppBar.Logo>
    </AppBar>
    `
    
    return(
        <>
            <p style={{fontSize: "24px"}}>Example</p>
            <pre>{codeExample}</pre>
        </>
    )
}