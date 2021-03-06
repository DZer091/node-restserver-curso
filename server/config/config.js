// ======
// PUERTO
// ======

process.env.PORT = process.env.PORT || 3000;

// ======
// ENTORNO
// ======

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ======
// VENCIMIENTO DEL TOKEN
// ======
//60 segundos
//60 minutos
//24 horas
//30 días

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// ======
// SEMILLA DE AUTENTIFICACDION
// ======

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

// ======
// BD
// ======

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URL;
}

process.env.URLDB = urlDB;

// ======
// Google Client ID
// ======

process.env.CLIEN_ID = process.env.CLIEND_ID || '670481341090-i2ag14isdbmtp92g9l64achg0mgpa1b0.apps.googleusercontent.com';