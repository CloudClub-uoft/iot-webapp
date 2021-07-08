

// Also setup router to get to this page

// also define routes for router?

/*
IoT Device Registration Page
https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples
*/
export default function Register() {
    const register_url = 'http://localhost:3000/device/register';
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            "deviceId": "aa:aa:aa:aa:aa", 
            "friendlyName": "Ian Test"
        })
    };

    // fetch();
}