import React from 'react'
import { AppBar, Container, Typography } from '@material-ui/core'
import beavers from '../../../images/beavers.png'

function Header() {
    return (
        <>
            <AppBar position='fixed'>
                <Container style={{
                    display: "flex",
                    alignItems: 'center',
                }}>
                    <img src={beavers} style={{
                        width: '80px',
                        height: '80px',
                        marginRight: '15px'
                    }}/>
                    <Typography>
                        Angry Beavers
                    </Typography>
                </Container>
            </AppBar>
        </>
    )
}

export default Header
