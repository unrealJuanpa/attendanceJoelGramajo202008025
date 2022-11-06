import db from "../database/db.js"
import { DataTypes } from "sequelize"

const AttendanceModel = db.define('attendances', {
    studentname: { type: DataTypes.TEXT },
    carne: { type: DataTypes.TEXT },
    attendancedate: { type: DataTypes.DATE },
    checkintime: { type: DataTypes.TIME },
    departuretime: { type: DataTypes.TIME },
    course: { type: DataTypes.TEXT }
})

export default AttendanceModel