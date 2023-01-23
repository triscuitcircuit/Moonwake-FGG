import { Sequelize } from 'sequelize';
export const OrmConfig = {
    host: import.meta.env.VITE_HOST,
    user: import.meta.env.VITE_USERNAME,
    pass: import.meta.env.VITE_PASSWORD
}
const sequelizeConnection = new Sequelize("FGGDB2",
    OrmConfig.user,OrmConfig.pass,{
        host: OrmConfig.host,
        port: 1521,
        dialect: 'oracle'
    });
export default sequelizeConnection