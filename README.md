# getAtable

getAtable is a full-stack app built using the PERN stack (PostgreSQL, Express, React, and Node.js) to provide a seamless and efficient user experience. It's more than just a restaurant reservation app – it's a time-saving solution for customers and a valuable tool for restaurants. By assisting customers in finding and verifying current restaurant seating capacity, especially for walk-in only establishments, the app helps customers save time and plan impromptu group meals more easily. At the same time, it helps restaurants manage their seating capacity and attract more customers by displaying available seats to users.

This full-stack application also serves to fulfill the academic requirements of General Assembly's Software Engineering Immersive capstone project.

# Table of Contents

1. [Description](#description)
2. [Technologies Used](#technologies-used)
3. [Dependencies to install](#dependencies-to-install)
4. [Users Stories](#users-stories)
5. [Wireframes](#wireframes)
6. [Back-end Repo](#link-to-getatable-backend-repo)
7. [API endpoints](#api-endpoints)
8. [Tables](#tables)

# Description

We've all experienced the disappointment of arriving at a walk-in only restaurant, only to find that it's filled and there's a long line of people waiting to be seated. Instead of joining the wait or searching for alternative places, wouldn't it be great to have an app that can help you avoid disappointment and wasted time? That's what getAtable aims to accomplish. It provides real-time information on restaurant seating capacity and availability, so you know exactly what to expect when you arrive. Plus, it eliminates the need to call restaurants or search for information on your phone, making it easy to plan hassle-free meals, whether you're with a group or just looking for a quick bite.

Not only does getatable provide real-time information on restaurant seating capacity and availability to help consumers plan hassle-free meals, but it also allows restaurants to manage their seat capacity in real time by integrating the program with their POS system. This saves time and hassle for both consumers and restaurants – consumers can easily find and verify seating availability without having to wait for a response from the restaurant, and restaurants can avoid the time and effort required to answer phone calls about seating availability, getAtable helps restaurants attract more customers and streamline their operations.

# Technologies Used

### Front-end

1. React.js
2. HTML
3. CSS: Tailwindcss and Tailwind Elements

### Back-end

1. Express.js
2. node-postgres

### Database

1. Postgresql

# Dependencies to install

|     | In React.js       |
| --- | ----------------- |
| 1   | React-Hook-Form   |
| 2   | React-Router-Dom  |
| 3   | Tailwindcss       |
| 4   | Tailwind Elements |

</br>

        npm i react-hook-form react-router-dom tailwindcss tw-elements

</br>

|     | In Express.js |
| --- | ------------- |
| 1   | Node-Postgres |
| 2   | BCrypt        |
| 3   | CORS          |
| 4   | Dotenv        |

</br>

        npm i pg bcrypt cors dotenv

</br>

# Users Stories

## Consumers

- As a consumer, I want to be able to search for restaurants by location, party size, and dietary requirements so that I can find a restaurant that meets my needs and can accommodate my group.
- As a consumer, I want to see real-time information on restaurant seating capacity and availability so that I can easily find and verify which restaurants can accommodate my group without having to call or wait for a response.
- As a consumer, I want to be able to make reservations or add my name to a waitlist directly through the app so that I can easily plan my meal without having to call or visit the restaurant in person.

</br>

Why should I as a consumer use the app?

- an app that allows me to save time, effort and avoid disappointment when dining out in groups
- good for impromptu lunch/dinner plans
- avoid crowded places
- don't have to walk around physically in search of alternatives

</br>

When I am looking for alternatives, I would like the ability to:

- check the restaurant ratings
- check comments left by other diners
- check distance between my current location and that of the alternative restaurant(s)
- check distance between the location of my first choice and the alternatives
- share information about the alternative restaurant(s) with the rest of the group to decide the next steps

</br>

What information I can check using the app:

- if the restaurant is currently at full capacity
- if there is enough capacity to take in X number of diners
- if there is a long waiting time (queue situation)

## Restaurants

- As a restaurant, I want to be able to update my seating capacity and availability in real time so that I can accurately reflect my current availability and attract more customers.
- As a restaurant, I want to be able to integrate the app with my POS system so that I can easily manage reservations and waitlists and streamline my operations.
- As a restaurant, I want to be able to customize my profile and menu on the app so that I can showcase my offerings to potential customers.

</br>

Why should the restaurant/cafe/bars use the app?

- manage walk-ins and queues, especially during peak hours
- minimize crowds gathering outside the restaurant
- launch ads during off-peak hours (using geolocation, geofencing and push notification)
- keep track of time per table
- inform consumers on opening/closing time and last order status
- monitor customers' feedback
- more advance usage with implementation in their POS system
  - contactless payment
  - a digital menu for ordering
  - kitchen management

# Types of login

|     | Login              | Routes             |
| --- | ------------------ | ------------------ |
| 1   | Consumers          | /users/login       |
| 2   | Restaurant Manager | /restaurants/login |
| 3   | Restaurant Staff   | /restaurants/login |

# Wireframes

![getAtable_wireframe](src/images/wireframe/getAtable_wireframe.png)

<!-- # List of Features -->

# Regarding Back-end

### [Link](https://github.com/girafffz/getAtable-Backend) to getAtable backend repo

</br>

## API Endpoints

### 1. Users Endpoints

| CRUD Operation | Description             | API endpoints   |
| -------------- | ----------------------- | --------------- |
| Create         | Create new user account | /users/register |
| -              | Login                   | /users/login    |
| Read           | View a user's details   | /users/:user_id |
| Read           | Update a user's details | /users/:user_id |
| Read           | View all users          | /users          |

### 2. Restaurant Endpoints

| CRUD Operation | Description                   | API endpoints    |
| -------------- | ----------------------------- | ---------------- |
| Create         | Create new restaurant account | /restaurants/:id |
| Read           | View a restaurant's details   | /restaurants/:id |
| Update         | Update a restaurant's details | /restaurants/    |
| Read           | View all restaurants          | /restaurants/    |

### 3. Restaurant Staff Endpoints

| CRUD Operation | Description                    | API endpoints                 |
| -------------- | ------------------------------ | ----------------------------- |
| Create         | Create new staff account       | /restaurants/:id/staff/create |
| -              | Login                          | /restaurants/staff/login      |
| Read           | View a staff's details         | /restaurants/:id/staff        |
| Update         | Update a staff's details       | /restaurants/:id/staff/update |
| Delete         | Delete a staff's account       | /restaurants/:id/staff/delete |
| Read           | View all staff of a restaurant | /restaurants/:id/staff        |

### 4. Restaurant Seats Capacity Endpoints

| CRUD Operation | Description                    | API endpoints             |
| -------------- | ------------------------------ | ------------------------- |
| Create         | Create a restaurant's capacity | /restaurants/:id/capacity |
| Read           | View a restaurant's capacity   | /restaurants/:id/capacity |
| Update         | Update a restaurant's capacity | /restaurants/:id/capacity |

## Tables

|     |                            |
| --- | -------------------------- |
| 1   | restaurants                |
| 2   | restaurant_operating_hours |
| 3   | locations                  |
| 4   | restaurant_locations       |
| 5   | cuisines                   |
| 6   | restaurant_cuisines        |
| 7   | tags                       |
| 8   | restaurant_tags            |
| 9   | restaurant_staff           |
| 10  | restaurant_media           |
| 11  | restaurant_seats_capacity  |
| 12  | users                      |
| 13  | reviews                    |
