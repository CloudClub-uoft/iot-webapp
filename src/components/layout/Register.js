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
    },
    tooltipWidth: {
        maxWidth: '25ch',
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
                <Tooltip 
                    title="Enter a friendly name for your device here, e.g. Alexandra's IoT Humidity Device" 
                    placement="left" 
                    arrow
                    TransitionComponent={Zoom}
                    enterDelay={500}
                    leaveDelay={200}
                    classes={{ tooltip: classes.tooltipWidth }}
                >
                    <TextField 
                        id="input-friendly-name" 
                        label="Friendly Name" 
                        variant="outlined" 
                        required={true}
                        inputProps={{min: 0, style: { padding:"0px 0px 0px 1.5ch"}}}
                        onChange={e => setFriendlyName(e.target.value)} 
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
        let toast_field = document.getElementById('register-toast');
        if (json['Status'] === 'Success') {
            toast_field.innerHTML = "Device Successfully Registered!";
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
