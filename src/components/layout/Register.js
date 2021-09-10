import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import Icon from '@material-ui/core/Icon';
import SendIcon from '@material-ui/icons/Send';
import Typography from '@material-ui/core/Typography';

/* TODO: 
- Center text inputs
- Error handling (correct input format for mac, name)
*/

const useStyles = makeStyles((theme) => ({
    register: {
        margin: "auto", 
        textAlign: "center"
    },
    // root: {
    //   '& .MuiTextField-root': {
    //     margin: theme.spacing(1),
    //     width: '25ch',
    //   },
    // },
    root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '50ch',
        },
    },
    button: {
        margin: theme.spacing(1),
    },
    text: {
        margin: "auto",
        textAlign: "center"
    }
}));

// Device registration
export default function Register() {
    const classes = useStyles();
    const [deviceId, setDeviceId] = useState("");
    const [friendlyName, setFriendlyName] = useState("");

    return (
        <div className={classes.register}>
            <form className={classes.root} noValidate autoComplete="off">
                <br></br>
                <Typography align="inherit" className={classes.text} variant="h3">Welcome.</Typography>
                <Typography align="inherit" className={classes.text} variant="subtitle1">Register your device here.</Typography>
                <br></br>
                <TextField 
                    id="input-device-id" 
                    label="Device ID" 
                    variant="outlined" 
                    required={true}
                    inputProps={{min: 0, style: { padding:"0px 0px 0px 1.5ch"}}} // ideally, make this more portable
                    onChange={e => setDeviceId(e.target.value)}
                /> 
                <br></br>
                <TextField 
                    id="input-friendly-name" 
                    label="Friendly Name" 
                    variant="outlined" 
                    required={true}
                    inputProps={{min: 0, style: { padding:"0px 0px 0px 1.5ch"}}}
                    onChange={e => setFriendlyName(e.target.value)} 
                /> 
                <br></br>
                <Button
                    variant="contained"
                    color="primary"
                    style={{
                        backgroundImage: "linear-gradient(135deg,#1292fd 25%,#50BDE4 75%)", 
                    }}
                    className={classes.button}
                    endIcon={<SendIcon />}
                    onClick={() => register_device(deviceId, friendlyName)}
                >
                    Register Device
                </Button>
                <br></br>
                <Typography id="register-toast" align="inherit" className={classes.text} variant="h6" ></Typography>
                <br></br>
            </form>
        </div>
    );
    
}

// Use /api/register route to register device with MAC address and Name provided
const register_device = (deviceId, friendlyName) => {
    const options = {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: { 
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "deviceId": deviceId, 
            "friendlyName": friendlyName 
        }),
    };

    postData('http://localhost:8080/api/register', options)
    .then(json => {
        let api_key_text_field = document.getElementById('register-toast');
        if (json['Status'] === 'Success') {
            api_key_text_field.innerHTML = "Device Successfully Registered!";
        } else {
            api_key_text_field.innerHTML = json['error'];
        }
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
