# Student Information Database (CRUD)
[Link to Application](https://student-information-database.herokuapp.com/)

## Description
Student Information Database is a straightforward CRUD application. The user can enter student information into the system such as a student's name and major. The student's data can be stored in a database and retrieved by the application.

## Technologies
- JavaScript
- Node.js
- Express.js
- MongoDB

## How It Works
Users can submit student information, such as their name, major, GPA, and student ID on the frontend. The frontend takes this data and performs a PUT, POST, GET, or DELETE request to the backend. Upon receiving the data, the backend then makes another API call to MongoDB in order to save, find and update, delete, or retrieve data from the database. The backend then sends a response to the frontend in the form of JSON objects. The data from the JSON objects are then parsed and displayed on the frontend.

## Conclusion and Future Plans
Overall, this was a straightforward CRUD application. It touched upon the frontend, backend, and the database. This project was more so for me to solidify and review concepts and topics that I've learned before. Although this project is functionally complete there is always more that can be done to improve it. I've provided a list of tasks below that I will periodically revisit to improve my project.

## Tasks:
- ~~Make app pretty~~
- ~~Add in error handlers~~
- ~~Fill in README.md~~
- ~~Convert promise/then to async/await~~
- ~~Create route in main.js~~
- ~~Add architecture drawing~~
- Deploy application (in progress)
- Refine error handling
- GPA should not accept values greater than 4.33
- String input fields such as "major" should only accept letters (eg. accept "sociology" but reject "s0c10l0gy")
- Make error message prettier
- Convert JavaScript to TypeScript??
