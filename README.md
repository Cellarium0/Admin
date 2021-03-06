# Cellarium : Admin

[![pipeline status](https://gitlab.com/cellarium/admin/badges/master/pipeline.svg)](https://gitlab.com/cellarium/admin/-/commits/master)

![Icon](./icon.png)

## Table Of Contents

- [Cellarium : Admin](#cellarium--admin)
  - [Table Of Contents](#table-of-contents)
  - [Description](#description)
  - [Access](#access)
  - [Documentations](#documentations)
  - [Requirements](#requirements)
  - [Install](#install)
    - [Install : NPM](#install--npm)
    - [Install : Docker](#install--docker)
  - [Deploy](#deploy)
    - [Deploy : NPM](#deploy--npm)
    - [Deploy : Docker](#deploy--docker)
  - [Production Build](#production-build)
    - [Production Build : NPM](#production-build--npm)
    - [Production Build : Docker](#production-build--docker)
  - [Contributors](#contributors)
  - [Licence](#licence)

## Description

**Cellarium** is a web application to manage your food. This is the Admin part.

## Access

- [Cellarium Admin Development (Local)](http://localhost:8003)
- [Cellarium Admin Production (Local)](http://localhost:8003)
- [Cellarium Admin Production (Netlify)](https://cellarium-admin.netlify.app/)

## Documentations

Here some documentation :

- [Command](./docs/command.md)
- [Idea](./docs/idea.md)

## Requirements

All requirements are in file **/src/package.json** :

- **Infrastructure** :
  - NPM
  - Docker
  - Docker Compose
  - Netlify
  - AWS ?
- **Framework** : React
- **CSS Framework** : MUI
- **Admin Framework** : React Admin with some API Provider

## Install

### Install : NPM

    cd src
    npm install

### Install : Docker

    docker-compose -f docker-compose.dev.yml build

## Deploy

### Deploy : NPM

    cd src

    # Start Server
    npm start

### Deploy : Docker

    # Development
    docker-compose -f docker-compose.dev.yml up
    docker-compose -f docker-compose.dev.yml up -d

    # Production
    docker-compose up
    docker-compose up -d

## Production Build

### Production Build : NPM

    cd src
    npm build

### Production Build : Docker

    docker-compose build

## Contributors

- ProgOwer

## Licence

This project is licensed under the terms of the GNU General Public Licence v3.0 and above licence.
