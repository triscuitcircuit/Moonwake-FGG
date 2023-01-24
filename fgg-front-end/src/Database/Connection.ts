// import * as oracledb from 'oracledb';
// export const OrmConfig = {
//     host: import.meta.env.VITE_HOST,
//     user: import.meta.env.VITE_USERNAME,
//     pass: import.meta.env.VITE_PASSWORD
// }
// let Config: oracledb.ConnectionAttributes = {
//     user: OrmConfig.user,
//     password: OrmConfig.pass,
//     connectString: OrmConfig.host
// }
// class ConnectDAO{
//     public static async ConnectionDB(): Promise<oracledb.Connection> {
//         return await oracledb.getConnection(Config);
//     }
//
// }
// export function conTest(){
//     let connection = ConnectDAO.ConnectionDB().then(()=>{
//         console.log('connection established')
//     }).catch(err =>{
//         console.error('unable to connect:',err)
//     });
// }
