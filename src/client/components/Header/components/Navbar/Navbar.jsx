
import { Link } from 'react-router-dom';

import {AppBar, Container, Toolbar, Box,Typography} from "@material-ui/core";

import Button from "../../../../../shared/component/Button";
import {useStyles} from "../../../../../shared/hooks/useStyles";
import Menu from '../Menu/index'

function Navbar() {
    const styles = useStyles()
    const isAuth = false;

    return (
        <AppBar className={styles.appBar}>
            <Container fixed>
                <Box display='flex' justifyContent="flex-end" alignItems="center" >
                <Link to='/' className={styles.logo}>
                    AngryBeavers
                    </Link>
                    {/* <Menu/> */}
                    {isAuth && <Typography>user@gmail.com</Typography>}
                    <Toolbar>
                        {!isAuth ? <Box className="authBtn">
                            <Link to="/login">
                                <Button text="LogIn"  variant="contained" />
                            </Link>
                            </Box> :
                            <Box className="authBtn">
                                <Button text="LogOut" color="secondary" variant="contained"/>
                            </Box>}
                    </Toolbar>
                </Box>
            </Container>
        </AppBar>
    );
}

export default Navbar;