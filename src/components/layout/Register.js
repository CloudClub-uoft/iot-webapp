import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import Icon from '@material-ui/core/Icon';
import SendIcon from '@material-ui/icons/Send';
import Typography from '@material-ui/core/Typography';

/* TODO: 
- Revamp fetch
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
    // const apiKeyValue = "x";
    const [apiKeyValue, setApiKeyValue] = useState("");
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
                    className={classes.button}
                    endIcon={<SendIcon />}
                    onClick={() => fetch_api_key(deviceId, friendlyName, setApiKeyValue)}
                >
                    Get API Key
                </Button>
                <br></br>
                <TextField
                    id="api-key-text-field"
                    label="API Key"
                    // InputProps={{
                    //     readOnly: true,
                    // }}
                    inputProps={{min: 0, style: { textAlign: 'center' }}}
                    variant="outlined"
                    value={apiKeyValue}
                />
                <br></br>
                <Typography id="test" align="inherit" className={classes.text} variant="h6" >Your API Key Here</Typography>
                <br></br>
            </form>
        </div>
    );
    
}

// Use /device/register route to register device with MAC address and Name provided
const fetch_api_key = (deviceId, friendlyName, setApiKeyValue) => {
    const server_ip = 'localhost'; 
    const register_url = `http://${server_ip}:80/device/register`;
    const options = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            "deviceId": deviceId, //"4D01F81F805F"
            "friendlyName": friendlyName //"Ian Test"
        })
    };

    // TODO: handle errors correctly
    postData(register_url, options)
    .then(data => {
        console.log(data);
        // Update API Key text box
        let api_key_text_field = document.getElementById('test');
        try {
            setApiKeyValue(data.apiKey);
            api_key_text_field.innerHTML = data.apiKey;
        } catch {
            api_key_text_field.innerHTML = "Handle this error better";
        }
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
