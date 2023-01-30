 # FGG Database Node Backend
This is the NodeJS code for the `express` connection between the front-end and the database.
# Requirements
- [Oracle Instant Client](https://www.oracle.com/database/technologies/instant-client.html) (not ARM Mac compatible)
- [oracledb](https://www.npmjs.com/package/oracledb)
# Mac (ARM) Requirements
- [nvm](https://formulae.brew.sh/formula/nvm)
After `nvm` is installed, follow [this](https://gist.github.com/LeZuse/bf838718ff2689c5fc035c5a6825a11c) guide on how to set it up with Rosetta and ARM.

When `nvm` for ARM and Rosetta is set up, download the Oracle Instant Client for x86 Intel (as listed above), and copy the files to `/usr/local/lib`.

Set `nvm` to intel, and run `node src/server.js`
