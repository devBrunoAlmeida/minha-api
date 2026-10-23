import express from 'express'
import { createUser, deleteUserById, listUsers, updateUserById } from '../services/user.service.js'

export const userRouter = express.Router()

userRouter.get('/', async (req, res) => {
    try {
        const users = await listUsers()
        return res.json(users)
    } catch (error) {
        return res.status(400).json({
            error: error.message
        })   
    }
})

userRouter.post('/', async (req, res) => {
    try {
        const payload = req.body;
    
        const user = await createUser(payload);
    
        return res.json(user)
    } catch (error) {
        return res.status(400).json({
            error: error.message
        })
    }
})


userRouter.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params

        const user = await deleteUserById(id)

        return res.json(user)
    } catch (error) {
        return res.status(400).json({
            error: error.message
        })
    }
})

userRouter.put("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const payload = req.body

        const user = await updateUserById(id, payload)

        return res.json(user)
    } catch (error) {
        return res.status(400).json({
            error: error.message
        })
    }
})