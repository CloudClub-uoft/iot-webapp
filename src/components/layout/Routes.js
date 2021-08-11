import React from 'react';
import { useLocation } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import CardGrid from './cards/CardGrid';
import Device from './Device';

export function Main() {
    return (
        <>
        <CardGrid />
        </>
    );
}

export function Page1() {
    return(
        <>
        <Typography align="center" variant="h2">Online Devices</Typography>
        <Device />
        </>
    );
}

export function Page2() {
    return(
        <>
        <Typography align="center" variant="h1">Hey, welcome to Page2.</Typography>
        </>
    );
}

export function Page3() {
    return(
        <>
        <Typography align="center" variant="h1">Hey, welcome to Page3.</Typography>
        </>
    );
}

export function HttpNotFound() {
    let location = useLocation();
    return(
        <>
        <Typography align="center" variant="h1">404</Typography>
        <Typography align="center" variant="h5" component="h2">Resource not found at {location.pathname}!</Typography>
        </>
    );
}