import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: "#1d1d1dd5",
        minHeight:"60px "
    },
    logo: {
        position: "absolute",
        top: "15px",
        left:"10px",
        fontFamily: "Orbitron",
        fontSize: "25px",
        cursor: "pointer",
        textDecoration: "none",
        color: "white",
        "&:hover, &:focus": {
            textShadow: "1px 1px 1px lightgrey"
        }
    },
    menu: {
        textAlign: "center",
        backgroundColor: '#1d1d1dd5',

    },
    menuIcon:{
    position: "absolute",
    top: "5px",
    right: "15px",
    zIndex: "1010",
    color: "white",
  },
    menuBtn: {
        position: "absolute",
        top: "15px",
        left: "250px",
        color: "white"
    },
    menuList: {
     marginTop: "20px"
    },
    menuItem: {
        margin: "0 !important",
        padding: "0 !important"
    },
    menuItemLink: {
        textDecoration:"none",
        display:"flex",
        alignItems:"center",
        justifyContent: "center",
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        minWidth: "200px",
        backgroundColor: "#797474d7",
        color:"white",
        borderRadius:"5px",
    },
    sidebar:{
        position: "fixed",
        top: "0",
        left: "0",
        height: '100vh',
        minHeight:"400px",
        maxWidth: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent:"center",
        alignItems:'center',
        backgroundColor: '#1d1d1dd5',

    },
    sidebarList:{
        listStyle:"none"
    },
    sidebarItemLink:{
        textDecoration:"none",
        display:"flex",
        alignItems:"center",
        margin: theme.spacing(2),
        justifyContent: "center",
        padding: theme.spacing(1),
        minWidth: "200px",
        backgroundColor: "#797474d7",
        color:"white",
        borderRadius:"5px",
        "&:hover":{
            boxShadow: "1px 1px 2px 1px lightgrey",
            cursor:"pointer",
        }
    },
    activeSidebar:{
        boxShadow: "1px 1px 3px 1px lightgrey",
        color:"white"
    }
}))