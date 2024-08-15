import mysql from 'mysql2/promise'

const pool = mysql.createPool({
    host: 'ns8343.hostgator.com',
    user: 'matthew6_our-wedding',
    password: 'Delorean22!!',
    database: 'matthew6_our-wedding',
    waitForConnections: true
})



export default pool