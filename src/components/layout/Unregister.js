import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import Icon from '@material-ui/core/Icon';
import SendIcon from '@material-ui/icons/Send';
import Typography from '@material-ui/core/Typography';
import { CropLandscapeOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    unregister: {
        margin: "auto", 
        textAlign: "center"
    },
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
export default function Unregister() {
    const classes = useStyles();
    const [deviceId, setDeviceId] = useState("");

    return (
        <div className={classes.unregister}>
            <form className={classes.root} noValidate autoComplete="off">
                <br></br>
                <Typography align="inherit" className={classes.text} variant="h3">See ya!</Typography>
                <Typography align="inherit" className={classes.text} variant="subtitle1">Unregister your device here.</Typography>
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
                <Button
                    variant="contained"
                    color="primary"
                    style={{
                        backgroundImage: "linear-gradient(135deg,#1292fd 25%,#50BDE4 75%)", 
                    }}
                    className={classes.button}
                    endIcon={<SendIcon />}
                    onClick={() => fetch_api_key(deviceId)}
                >
                    unregister Device
                </Button>
                <br></br>
                <Typography id="unregister-toast" align="inherit" className={classes.text} variant="h6" ></Typography>
                <br></br>
            </form>
        </div>
    );
    
}

// Use /api/unregister route to unregister device with MAC address and Name provided
const fetch_api_key = (deviceId) => {
    const options = {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: { 
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "deviceId": deviceId 
        }),
    };

    postData('http://localhost:8080/api/unregister', options)
    .then(json => {
        let api_key_text_field = document.getElementById('unregister-toast');
        if (json['message'] === 'Device successfully unregistered.') {
            api_key_text_field.innerHTML = "Device Successfully unregistered!";
        } else {
            console.log(json);
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
