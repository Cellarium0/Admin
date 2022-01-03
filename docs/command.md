# Cellarium : Admin : Command

![Icon](../icon.png)

## Table Of Contents

- [Cellarium : Admin : Command](#cellarium--admin--command)
  - [Table Of Contents](#table-of-contents)
  - [Command](#command)

- [Tuto 01](https://manjeetkapil.medium.com/create-a-authentication-system-using-react-fastapi-and-mongodb-farm-stack-d2ea6a35bf47)
- [Tuto 02](https://www.jeffastor.com/blog/phresh-frontend-bootstrapping-a-react-app)
- [Sample 01](https://codesandbox.io/s/phresh-frontend-part-3-making-api-calls-with-axios-0v9fk)
- [Sample 02](https://codesandbox.io/s/phresh-frontend-part-12-normalizing-user-profiles-in-redux-g56wr?file=/src/components/Navbar/Navbar.js)

## Command

    docker run -it --rm -v /home/src:/app -v node_modules:/app/node_modules node:16.13.1 bash

    cd tmp

    # Create Basic Application
    npx create-react-app app
    > y

    cp -R /tmp/app/* /app
    cp -R /tmp/app/.* /app
    cd /app

    # Install React Admin
    npm install react-admin --save

    # Install API Provider
    npm install ra-data-simple-rest --save
    npm install ra-data-json-server --save

     # Fix Right Problem
    chmod 777 -R *

    # Run the server
    npm start

    # Run Build
    npm build
