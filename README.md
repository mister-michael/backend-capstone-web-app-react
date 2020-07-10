# projectM
__projectM__ is a project management application for a Photography Studio. Studio Managers and Employees are able inventory Equipment, Clients and Staff and schedule Photoshoots with applicable Equipment, Clients and Staff.

## Table of Contents
  * [The User Experience](#the-user-experience)
    * [Login and Register](#login-and-register)
    * [Nav Bar](#nav-bar)
    * [Photoshoots](#photoshoots)
    * [Equipment](#equipment)
    * [Clients](#clients)
    * [Employees](#employees)
  * [Future Plans](#future-plans)
  * [Technologies Used](#technologies-used)
  * [Front End Install](#front-end-install)
  * [Back End Install](#back-end-install)

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

## Future Plans

The app I envision is much bigger than what could be produced in the two week sprint afforded for our final capstone at Nashville Software School. Because furthering my education is a vital part of the post-grad process, I feel fortunate to have afforded myself ample opportunities to do so with projectM.

Future iterations will have:
* Full CRUD comments on Photoshoots, Clients and Equipment
* Exclusion of equipment that is no longer available on a given day.
* Weight calculations for total photoshoot equipment.
* Private messaging for employees.
* A task list for employees.
* Photo references for upcoming shoots.
* Photo references for past shoots.
* Photo property for equipment details.
* Python automated Email to clients upon creation and update of photoshoots.


## Technologies Used
    Python
    Django ORM
    Rest Framework
    React.js
    CSS (no libraries)
    HTML
    Table Plus
    Postman

## Front End Install

### Clone The Project

Enter the following command into your terminal to clone the project to your computer.
```sh
    git clone git@github.com:mister-michael/backend-capstone-web-app-react.git
```

### Npm Install
```sh
    cd backend-capstone-web-app-react
    npm install
    npm install react-router-dom
```

After installing dependencies, start the server.
```sh
    npm start
```

Now that the server is running, you can visit the site.
```sh
    http://localhost:3000/
```

## Back End Install

_you can also find these install instructions in the_ ![back-end repo](https://github.com/mister-michael/backend-capstone-api).

### Clone the Api

Enter the following command into your terminal to clone the project to your computer.
```sh
    git clone git@github.com:mister-michael/backend-capstone-api.git
```

`cd` into the direct and set up your virtual environment.
```sh
    cd backend-capstone-api
    python -m venv projectmEnv
```

### Activate the virtual environment.
```sh
    source ./projectmEnv/bin/activate
```

### Install Dependencies.
```sh
    pip install -r requirements.txt
```

### Create a Superuser.
```sh
    python manage.py superuser
```

### Make Migrations, then Migrate.
```sh
    python manage.py makemigrations backendapi
```
```sh
    python manage.py migrate
```

### Load Fixture Data.
```sh
    python manage.py loaddata equipmenttype
```
```sh
    python manage.py loaddata equipment
```
```sh
    python manage.py loaddata client
```

### Then Start the Server
```sh
    python manage.py runserver
```