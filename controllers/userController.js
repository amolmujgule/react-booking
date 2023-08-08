
import User from '../models/User.js'


// create new User 

export const createUser = async(req , res )=>{
    const newUser = new User(req.body)
    try {
        const savedUser = await User.create(newUser)
        res.state(200).json({
            success:true,
            message:'Success create',
            data:savedUser
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:'Failed to create. Try again',error
           
        })
    }
}


// update User

export const updateUser = async(req, res ) => {
    try {
        const id = req.params.id

        const updateUser = await User.findByIdAndUpdate(id,{
            $set:req.body
        },{new:true})

        res.status(200).json({
            success:true,
            message:'Success updated',
            data:updateUser
        })
       
    } catch (error) {
        res.status(500).json({
            success:false,
            message:'Failed to updated.'
           
        })
    }
}

// delete User

export const deleteUser = async(req, res ) => {
    try {
        const id = req.params.id

          await User.findByIdAndDelete(id)

        res.status(200).json({
            success:true,
            message:'Success delete',
        })
       
    } catch (error) {
        res.status(500).json({
            success:false,
            message:'Failed to delete.'
           
        })
    }
}
// getSingle User

export const getSingleUser = async(req, res ) => {
    const id = req.params.id
    try {

       const user =  await User.findById(id)

        res.status(200).json({
            success:true,
            message:'Success GetSingle',
            data:user
        })
       
    } catch (error) {
        res.status(404).json({
            success:false,
            message:'Failed to GetSingle.'
           
        })
    }
}
// getAll User

export const getAllUser = async(req, res ) => {

    try {

       const users =  await User.find({})

        res.status(200).json({
            success:true,
            message:'Successful',
            data:users
        })
       
    } catch (error) {
        res.status(404).json({
            success:false,
            message:'Failed to Get.'
           
        })
    }
}

