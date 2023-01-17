# Moonwake-FGG

Frontend development for Dungeons and Dragons creature database capstone project.
Connects to creature database to allow creation, distribution and sharing of custom user creatures.

# Requirements for Demo

- [npm](https://www.npmjs.com/)
- [Vite](https://www.npmjs.com/package/vite)
- [Sequalize](https://www.npmjs.com/package/sequelize)
- [React](https://www.npmjs.com/package/react)
- [npx](https://www.npmjs.com/package/npx)

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
