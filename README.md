# Movie Backlog App

Tommi Nikkinen 5.4.2022

----
### Live demo : http://flickstickapp.herokuapp.com/login

Test user login information:
email: test@test.com
password: test1234

----

## Contents

### 1 Overview	
### 2 How to use	
#### 2.1 Register page	
#### 2.2 Login page
#### 2.3 Dashboard
#### 2.4 Movie page
### 3 Testing and development	
### 4 Schedule and workload estimate	
### 5 Requirements	


## 1. Overview
	1.1 Application
Application where user can track movies they want to see. User is able to add, edit and remove movies in their watchlist. User can leave comments and rate the movie. User information is stored in a database. Authentication with jtw-token. Rest-api with basic crud endpoints.

	1.2 Stack
	
Mern-stack. React for the frontend, nodejs and express for the backend and mongodb atlas and mongoose for the database. Redux-react for state management. Deployed to heoku.


## 2. How to use

	2.1 Register
	To use the website user has to register first. Data is saved to database, password is hashed.
	
	2.2 Login page
	Login with email and password. Token is sent from the backend server which is saved to localStorage. 

	2.3 Dashboard
	User movies are fetched from the database by comparing user.id to movie.user.id. Routes are protected with jwt-token. 
	Users can add new movies, delete old ones and browse watchlist. Basic search and sort functionality
	
	2.4 Movie page
	Here user can edit the movie information. Switch status between watched and not watched, set comments and rate the movie.



## 3. Testing, development and version control

	Visual studio code for coding. Postman for testing rest-api and endpoints. Git and github for version control

## 4. Schedule and workload estimate

	Using Trello for tracking sprints and overall schedule.
	
https://trello.com/b/PlLJs19N/movies-backlog-app


## 5. Requirements

	- Rest-Api
	- Crud endpoints
	- Database integration
	- Jwt authentication
	- Search and sort functions

