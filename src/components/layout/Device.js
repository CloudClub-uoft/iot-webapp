// Device List Page

import React, {Component} from 'react';
import { withStyles } from '@material-ui/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import DeviceStatus from './DeviceStatus';
import PropTypes from 'prop-types';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backroundColor: 'black',
        margin: "auto",
        textAlign: "center"
    },
});

class DeviceList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            device_list: [{
                deviceId: "No Device ID",
                friendlyName: "No Friendly Name",
                _id: "0"
            }],
        }
    }

    componentDidMount() {
        const options = {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers: { 
                'Content-Type': 'application/json',
            }
        };

        fetch('http://localhost:8080/api/userDevices', options)
        .then(json => {
            if (json.status === 200) {
                console.log("Retrieved devices!");
                return json.json(json.body);
            } else {
                console.log(json['error']);
                // Add toast
            }
        })
        .then(deviceList => {
            this.setState({ 
                device_list: deviceList.userDevices, 
                loading: false 
            });
        })
        .catch(err => {
            console.error(err);
        });
    }

    render() {
        const classes = this.props;

        return (
            <>
            <List className={classes.root}>
                {
                    this.state.loading 
                    ? 
                    "Loading Devices..."
                    :
                    this.state.device_list.map(device =>
                        <ListItem key={device['_id']}>
                            <ListItemAvatar>
                                <DeviceStatus />
                            </ListItemAvatar>
                            <ListItemText primary={ device.friendlyName } secondary={ "Device ID: " + device.deviceId } />
                        </ListItem>
                    )
                }
            </List>
            </>
        );
    }

}

DeviceList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DeviceList);