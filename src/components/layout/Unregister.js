import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import SendIcon from '@material-ui/icons/Send';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';

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
    },
    tooltipWidth: {
        maxWidth: '25ch',
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
                <Typography align="inherit" className={classes.text} variant="h3">Goodbye.</Typography>
                <Typography align="inherit" className={classes.text} variant="subtitle1">Unregister your device here.</Typography>
                <br></br>
                <Tooltip 
                    title="Enter your 12-digit MAC address without colons here, e.g. 123456ABCDEF" 
                    placement="left" 
                    arrow
                    TransitionComponent={Zoom}
                    enterDelay={500}
                    leaveDelay={200}
                    classes={{ tooltip: classes.tooltipWidth }}
                >
                <TextField 
                    id="input-device-id" 
                    label="Device ID" 
                    variant="outlined" 
                    required={true}
                    inputProps={{min: 0, style: { padding:"0px 0px 0px 1.5ch"}}} // ideally, make this more portable
                    onChange={e => setDeviceId(e.target.value)}
                /> 
                </Tooltip>
                <br></br>
                <Button
                    variant="contained"
                    color="primary"
                    style={{
                        backgroundImage: "linear-gradient(135deg,#1292fd 25%,#50BDE4 75%)", 
                    }}
                    className={classes.button}
                    endIcon={<SendIcon />}
                    onClick={() => unregister_device(deviceId)}
                >
                    Unregister Device
                </Button>
                <br></br>
                <Typography id="unregister-toast" align="inherit" className={classes.text} variant="h6" ></Typography>
                <br></br>
            </form>
        </div>
    );
    
}

// Use /api/unregister route to unregister device with MAC address and Name provided
const unregister_device = (deviceId) => {
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
        let toast_field = document.getElementById('unregister-toast');
        if (json['message'] === 'Device successfully unregistered.') {
            toast_field.innerHTML = "Device Successfully unregistered!";
        } else {
            toast_field.innerHTML = json['error'];
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
