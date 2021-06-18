import React from 'react';
import {Button} from "@material-ui/core";

function ButtonComponent(props) {
    return (
        <>
            <Button color={props.color} variant={props.variant}>{props.text}</Button>
        </>
    );
}

export default ButtonComponent;