import jwt from 'jsonwebtoken';
import {JWT_KEY} from "../config/config.js";

// export default (req, res, next) => {
//     let Token = req.headers['token']
//     jwt.verify(Token, JWT_KEY, (err, decoded) => {
//         if (err) {
//             console.log(Token);
//             res.status(401).json({ status: "unauthorized" });
//         } else {
//             let email = decoded['data'];
//             console.log(email);
//             req.headers.email= email;
//             next();
//         }
//     })
// }



export default (req, res, next) => {
    try {
        const token = req.headers.token;
        if (!token) return res.status(401).json({ status: "unauthorized" });
        const decoded = jwt.verify(token, JWT_KEY);
        req.user = decoded.email;
        next();
    } catch {
        res.status(401).json({ status: "unauthorized" });
    }
};

