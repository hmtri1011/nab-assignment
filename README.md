## NAB Assignment

![React](https://img.shields.io/badge/React-%5E17.0.1-brightgreen?style=flat-square&logo=react) ![NodeJS](https://img.shields.io/badge/Node-stable-brightgreen?style=flat-square&logo=node.js) ![Jest](https://img.shields.io/badge/Jest-%5E26.6.3-red?style=flat-square&logo=jest&logoColor=red)

This project is a assignment that allow user to search location and show 5 days weather forecast for that location.

### Technical stack!

- Lerna and Yarn workspaces for monorepos.
- Create React App v4
- NodeJS and Express for API proxy
- TypeScript
- Jest for testing

Why am I using this stack? Because there is an CORS issue on metaweather API so I decide to use lerna to setup monorepos to have Web client and a proxy backend to by pass CORS issue. I'm able to use another API but I think I will learn more interested things if I use lerna.

### How to run this project

Clone and install dependencies for this project

```sh
$ git clone https://github.com/hmtri1011/nab-assignment.git
$ cd nab-assignment
$ yarn
```

### Run on production environment

```sh
$ yarn build
$ yarn start
```

### Run on development environment:

You might need 2 terminal tabs or windows to run
On your first terminal

```sh
$ cd packages/core
$ yarn watch
```

On your second terminal

```sh
$ yarn start
```
