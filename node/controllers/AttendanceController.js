import AttendanceModel from "../models/AttendanceModel.js";

export const getAllAttendances = async (req, res) => {
    try 
    {
        const attendances = await AttendanceModel.findAll();
        res.json(attendances)
    }
    catch (error)
    {
        res.json({ message: error.message })
    }
}

export const getAttendance = async (req, res) => {
    try
    {
        const attendance = await AttendanceModel.findAll({
            where: {
                id: req.params.id
            }
        })
        res.json(attendance[0])
    }
    catch (error)
    {
        res.json( { message: error.message } )
    }
}

export const createAttendance = async (req, res) => {
    try
    {
        await AttendanceModel.create(req.body)
        res.json( { message: "Registro de asistencia generado con exito!" } )
    }
    catch (error)
    {
        res.json( { message: error.message } )
    }
}

export const updateAttendance = async (req, res) => {
    try
    {
        await AttendanceModel.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json( { message: "Registro de asistencia actualizado con exito!" } )
    }
    catch (error)
    {
        res.json( { message: error.message } )
    }
}

export const deleteAttendance = async (req, res) => {
    try
    {
        await AttendanceModel.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({ message: "Asistencia eliminada con exito!" })
    }
    catch (error)
    {
        res.json({ message: error.message })
    }
}