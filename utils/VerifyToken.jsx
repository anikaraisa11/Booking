const { jwtDecode } = require("jwt-decode")
// verify token and get user data 
const verifyToken = (token)=>{
    return jwtDecode(token)
}


export default verifyToken