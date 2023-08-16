const registerUser = (req, res) =>{
    res.json({message:"User registred"})
}

const loginUser = (req, res) =>{
    res.json({message:"Login registred"})
}

const getUserData = (req, res) =>{
    res.json({message:"Mis Datos de Usuario"})
}


module.exports = {
    registerUser,
    loginUser,
    getUserData
}