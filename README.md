# projectM
projectM is a project management application for a Photography Studio. Studio Managers and Employees are able inventory Equipment, Clients and Staff and schedule Photoshoots with applicable Equipment, Clients and Staff.

## Table of Contents

## The User Experience

### Note for First Users

On first use you will want to navigate to the Equipment and Clients page to add Equipment and Clients by clicking on the "+" button and submitting the provided forms.

### Login and Register

The user is either a Studio Manager (a superuser) or an Employee. Because this is an in-house application, new users will be created by admins through the Django Admin App, or by Studio Managers (superusers) who are afforded an ability to do so within the app. Employees will Sign In via the Login page.

![login-image](/src/readMeMedia/login-image.png)

For our purposes, I have included a register form.

![register-image](/src/readMeMedia/register-image.png)

### Nav Bar

![nav-bar](/src/readMeMedia/nav-bar.png)

* Red = Photoshoots
* Orange = Equipment
* Yellow = Clients
* Green = Employees
* Blue = Logout

### Photoshoots

Upon Login or Register, users will be directed to the photoshoots page. The photoshoots page displays a list of upcoming photoshoots.

The "+" button allows you to create a new photoshoot. The "x" button will delete a photoshoot. 

![photoshoots-page](/src/readMeMedia/photoshoots-page.png)

Clicking on a photoshoot will direct you to that photoshoot's details page. The first section gives the name of the photoshoot and corresponding details. 

![photoshoot-details](/src/readMeMedia/photoshoot-details.png)

By clicking the "e" affordance a user will be directed to the photoshoot edit form where they can update details of the photoshoot.

Under the "Equipment" heading on the photoshoot details page, the user will see what equipment has veen added to the photoshoot. A user can click "+" to add equipment to the photoshoot, and "delete" to delete equipment from the photoshoot. Clicking on a piece of equipment will direct the user to the equipment's details page. The same functionality applies to the "Staff" section.

![equipment-details](/src/readMeMedia/equipment-details.png)

### Equipment

On the Equipment Page, the user will see an inventory of the studio's equipment. Clicking on the "+" affordance will direct users to the Add Equipment Form. Clicking on the equipment name will direct users to that equipment's details page. Clicking on the "x" button will delete a peice of equipment from the database.

![equipment-page](/src/readMeMedia/equipment-image.png)

### Clients

On the Clients page, the user will see a list of all active clients. Clicking on a client's name will direct the user to that client's details page.

![client-details](/src/readMeMedia/client-details.png)

On the client's details page, clicking on the "e" affordance will direct the user to the Edit Client Form. Clicking on the "x" affordance will, after a confirmation prompt, soft-delete the client from the database.

### Employees

![employees-page](/src/readMeMedia/employees-page.png)

On the Employees page, the user will see a list of active employees. A Studio Manager (superuser) will be shown a "+" affordance to create a new employee via the Add Employee Form.

![add-employee-form](/src/readMeMedia/add-employee-form.png)

From the Employees page, when users and superusers click on an employee's name they are directed to the employee's details page. A superuser will be provided a "Deactivate" affordance to deactivate the employee. 

![employee-details](/src/readMeMedia/employee-details.png)

Superusers will also be provided an "e" affordance which will direct the superuser to the Edit Employee Form.

![employee-details](/src/readMeMedia/edit-employee.png)













---------------------
<!-- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify -->
