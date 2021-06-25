import { useState } from "react";
import { Box, IconButton} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu'
import {useStyles} from '../../../../../shared/hooks/useStyles'

import Button from "../../../../../shared/component/Button";
import MenuList from './components/MenuList'

function Menu({isAuth}) {
        const styles = useStyles()

        function CustomizedMenus() {
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
        <>
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
                <MenuList handleClose={opr.handleClose}/>
        </Menu>
        </>
    );
}

export default Menu;