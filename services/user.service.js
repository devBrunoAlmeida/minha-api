import { UserModel } from "../model/user.model.js";

export const createUser = async (payload) => {
    try {     
        const { dateOfBirth, ...rest } = payload
    
        // fazer validação para a data de nascimento...
        console.log(dateOfBirth);
    
        const user = await UserModel.create({
            ...rest,
            dateOfBirth
        })
    
        return user;
    } catch (error) {
        throw error;
    }
}

export const listUsers = async () => {
    try {
        const users = await UserModel.find();

        return users;
    } catch (error) {
        throw error;
    }
}

export const deleteUserById = async (id) => {
    try {
        const user = await UserModel.findOneAndDelete(id)

        return user;
    } catch (error) {
        throw error;
    }
}

export const updateUserById = async (id, payload) => {
    try {
        const user = await UserModel.findByIdAndUpdate(id, payload)

        return user;
    } catch (error) {
        throw error;
    }
}