// ======
// PUERTO
// ======

process.env.PORT = process.env.PORT || 3000;

// ======
// ENTORNO
// ======

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ======
// BD
// ======

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://DZer091:9jBW3em4nTpeHDNt@cluster0.vdo95.mongodb.net/cafe';
}

process.env.URLDB = urlDB;