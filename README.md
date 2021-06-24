# iot-webapp
Web app for the CloudClub IoT project. [Mockup](https://app.moqups.com/52USkXJrcd/view/page/aa9df7b72).

# Installation

* Clone this repository.
* Run ```npm i```
* Run ```npm run test```
* Run ```npm start```

# About

Various UI themes can be used. Currently Material UI is included and other UI libraries such as Ant can be experimented with as well. However, once a theme is selected it must be used consistently throughout the application. Test cases are made using the react-testing-library and Jest.

# Guidelines

* Components must be sorted by folders and stored inside the /src/components folder.
* Components should be tested to validate functionality. Testcases are stored under the /src/tests folder and should be organised by a folder structure similar to /src/components. [Guide](https://www.freecodecamp.org/news/testing-react-hooks/).
* By default the test command will run all tests once. To run the command in watch mode change the test script value under ```scripts``` in package.json to ```react-scripts test```.

# TODO
 - [ ] Navbar
 - [ ] Sidebar
 - [ ] Main Layout