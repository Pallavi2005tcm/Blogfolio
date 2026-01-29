import jwt from 'jsonwebtoken';

const auth = (req,res,next)=>{
  const token = req.headers.authorization;

  try{
    jwt.verify(token,process.env.JWT_SECRET);
    next();
  }catch{
    res.json({success:false,message:"Invalid token"})
  }

}

export default auth;

// import jwt from "jsonwebtoken";

// const auth = (req, res, next) => {
//   try {
    
//     const authHeader = req.headers.authorization;

//     if (!authHeader) {
//       return res.json({
//         success: false,
//         message: "No token provided"
//       });
//     }

//     // Bearer TOKEN
//     const token = authHeader.split(" ")[1];

//     if (!token) {
//       return res.json({
//         success: false,
//         message: "Invalid token format"
//       });
//     }

//     jwt.verify(token, process.env.JWT_SECRET);

//     next();
//   } catch (error) {
//     return res.json({
//       success: false,
//       message: "Invalid token"
//     });
//   }
// };

// export default auth;

