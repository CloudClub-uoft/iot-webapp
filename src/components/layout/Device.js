// Device List Page

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import DeviceStatus from './DeviceStatus';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backroundColor: 'black',
        margin: "auto",
        textAlign: "center"
    },
}));

export default function DeviceList() {
    const classes = useStyles();

    return (
        <>
        <List className={classes.root}>
            <ListItem>
                <ListItemAvatar>
                    <DeviceStatus />
                </ListItemAvatar>
                <ListItemText primary="Friendly Name" secondary="Device ID" />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <DeviceStatus />
                </ListItemAvatar>
                <ListItemText primary="Device 1" secondary="Online | Last Ping: 15ms" />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <DeviceStatus />
                </ListItemAvatar>
                <ListItemText primary="Device 1" secondary="Online | Last Ping: 15ms" />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <DeviceStatus />
                </ListItemAvatar>
                <ListItemText primary="Device 1" secondary="Online | Last Ping: 15ms" />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <DeviceStatus />
                </ListItemAvatar>
                <ListItemText primary="Device 1" secondary="Online | Last Ping: 15ms" />
            </ListItem>
        </List>
        </>
    );
}


