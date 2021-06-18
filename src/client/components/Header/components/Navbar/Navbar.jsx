import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import MenuIcon from '@material-ui/icons/Menu'
import {AppBar, Container, Toolbar, Box,Typography, IconButton,  MenuList, MenuItem} from "@material-ui/core";
import Menu from "@material-ui/core/Menu";

import Button from "../../../../../shared/component/Button";
import {useStyles} from "../../../../../shared/hooks/useStyles";


function Navbar() {
    const styles = useStyles()
    const isAuth = false;

    function CustomizedMenus(params) {
        const [anchorEl, setAnchorEl] = useState(null);

        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
        };

        const handleClose = () => {
            setAnchorEl(null);
        };
        const operationsBurger = {
            anchorEl,
            handleClick,
            handleClose
        }
        return operationsBurger
    }
    const opr = CustomizedMenus()
    return (
        <AppBar className={styles.appBar}>
            <Container fixed>
                <Box display='flex' justifyContent="flex-end" alignItems="center" >
                <Link to='/' className={styles.logo}>
                    AngryBeavers
                    </Link>
                <IconButton className={`menu-icon ${styles.menuIcon}`} onClick={opr.handleClick}>
                    <MenuIcon  />
                </IconButton>
                    <Menu
                        anchorEl={opr.anchorEl}
                        keepMounted
                        open={Boolean(opr.anchorEl)}
                        onClose={opr.handleClose}
                        className={styles.menu}>
                        {!isAuth ? <Box>
                                <Button text="LogIn"  variant="contained"/>
                            </Box> :
                            <Box>
                                <Button text="LogOut" color="secondary" variant="contained"/>
                            </Box>}
                        <MenuList className={styles.menuList} >
                            <MenuItem className={styles.menuItem} onClick={opr.handleClose}>
                                <NavLink to="/" className={styles.menuItemLink}>Main</NavLink>
                            </MenuItem>
                            <MenuItem className={styles.menuItem} onClick={opr.handleClose}>
                                <NavLink to="/staff" className={styles.menuItemLink}>Staff</NavLink>
                            </MenuItem >
                            <MenuItem className={styles.menuItem} onClick={opr.handleClose}>
                                <NavLink to="/" className={styles.menuItemLink}>Main</NavLink>
                            </MenuItem>
                            <MenuItem className={styles.menuItem} onClick={opr.handleClose}>
                                <NavLink to="/staff" className={styles.menuItemLink}>Staff</NavLink>
                            </MenuItem >
                        </MenuList>
                    </Menu>
                    {isAuth && <Typography>user@gmail.com</Typography>}
                    <Toolbar>
                        {!isAuth ? <Box className="authBtn">
                                <Button text="LogIn"  variant="contained" />
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