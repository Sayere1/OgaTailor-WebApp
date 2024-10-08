# Ride-Sharing Web App (Node.js JavaSript Web API Express MoongoDB HTML ReactJS Figma)

This project local web application with CRUD (Create, Read, Update, Delete) functionalities for managing users, tailors and products.

## Features

User management: Create, read, and user accounts.
product management: Create, Add, and book tailors. (Functionalities can be further developed)

## Technologies Used
Node.js
JavaSript
Web API
Express
MoongooseDB
HTML
ReactJS
Figma

## How it works

The key components of the web app are the __*Tailors*__ and __*Customer*__ instances. These instances make periodical decisions in an infinite loop. These decisions include, among others:

- Request for a tailor
- Request for the optimal route
- Tailor at coustomer location
- Movement of the tailor on the map
- Service delivered


## Database

The database is MongoDB and stores the data in __*Tailor*__, __*Costumers*__ and __*List*__ formart:

__*customers*__: id, customer_id, name, email, active, location, destination, tailor_id  
__*Tailor*__: Tailor_id, name, status, location, path, customer_id, customer_name.