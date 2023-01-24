# Moonwake-FGG

Frontend development for FrogGodGames creature database capstone project.
Connects to creature database to allow creation, distribution and sharing of custom user creatures.

# Requirements for Projects

- [npm](https://nodejs.org/en/download/)

Then run the `npm install` command associated with the selected project

# Project Structure
 This project is split into two parts: `fgg-back-end` and `fgg-front-end`.
- `fgg-back-end` is a NodeJS project for a containerized API webserver for front-end database interactions.
- `fgg-front-end` is the project for 
# Development and Building

`oracledb` needs to be installed for Sequalize to connect to the hosted database.

```bash
npm -i oracledb
```

then proceed with installing the Sequalize drivers:

```bash
npm install --save oracledb
```

(if difficulties are encountered, try resetting the `npm` oracledb package with `npm uninstall oracledb` and doing the commands again.)

To build and preview the website, use the command
`npx tsc && vite build && vite preview`

## MacOs (ARM)

There is not yet currently an Oracle hosted binary file for ARM based MacOs computers,
however one was built for this project. To install it simply do:

```bash
npm install --save /drivers/mac-arm/oracledb-5.5.0.tgz
```

then proceed with installing the Sequalize drivers:

```bash
npm install --save oracledb
```

#DevOps
This project makes use of Typescript pre-commit hooks with the `husky` package
