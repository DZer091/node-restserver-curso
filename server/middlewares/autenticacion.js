const jwt = require('jsonwebtoken');

// =============================== 
// Verificar token
// ===============================

let verificaToken = (req, res, next) => {

    let token = req.get('token'); //Con esta función se consiguen los header 

    jwt.verify(token, process.env.SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no valido'
                }
            });
        }

        req.usuario = decoded.usuario;

        next();
    });

};

// =============================== 
// Verificar admin rol
// ===============================

let verificaAdmin_Role = (req, res, next) => {

    let usuario = req.usuario;

    if (usuario.role === 'ADMIN_ROLE') {
        next();
    } else {
        return res.json({
            ok: false,
            err: {
                message: 'Solo los usuarios con rol de administrador pueden realizar esta función'
            }
        });
    }
};

module.exports = {
    verificaToken,
    verificaAdmin_Role
}