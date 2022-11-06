import { Sequelize } from "sequelize"

const db = new Sequelize('database_attendance', 'root', '', {
    host:'localhost',
    dialect:"mysql"
})

export default db