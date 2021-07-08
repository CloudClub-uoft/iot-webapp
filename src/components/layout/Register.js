import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState, useEffect } from 'react';
import Icon from '@material-ui/core/Icon';
import SendIcon from '@material-ui/icons/Send';

/* TODO: 
- Revamp fetch
- Center text inputs
- Error handling (correct input format for mac, name)
*/

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    button: {
        margin: theme.spacing(1),
    }
}));

// Device registration
export default function Register() {
    const classes = useStyles();
    return (
        <form className={classes.root} noValidate autoComplete="off">
            {/* <TextField id="standard-basic" label={data['apiKey']} /> */}
            <TextField
                id="api-key-text-field"
                label="Read Only"
                defaultValue="API Key"
                InputProps={{
                    readOnly: true,
                }}
                variant="outlined"
            />
            {/* <TextField align='center' id="filled-basic" label="Filled" variant="filled" />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<SendIcon />}
                onClick={() => fetch_api_key()}
            >
                Get API Key
            </Button>
        </form>
    );
    
}

// Use /device/register route to register device with MAC address and Name provided
const fetch_api_key = () => {
    const server_ip = '10.0.0.32'; 
    const register_url = `http://${server_ip}:3000/device/register`;
    const options = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            "deviceId": "4D:01:F8:1F:80:5F", // TODO: take in these parameters from text fields.
            "friendlyName": "Ian Test"
        })
    };

    let fetched;

    // TODO: handle errors correctly
    postData(register_url, options)
    .then(data => {
        console.log(data);
        fetched = data;
    })
    .then(() => {
        // console.log(fetched);
        // let api_key_text_field = document.getElementById('api-key-text-field');
        // TODO: set text box to API key


    })
    .catch(err => {
        console.error(err);
    });

    return;
};

// Posts data asynchronously, returns response
async function postData(url, options) {
    const response = await fetch(url, options);
    return response.json();
}
