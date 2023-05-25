
const { crearArchivoTabla } = require( './helpers/multiplicar')
const argv = require('./config/yargs')
const colors = require('colors');


console.clear();

// console.log(argv);

// INPUTS A PEDAL NO UTILIZAR
// const [ , , arg3 = 'base=5' ] = process.argv;
// const [ , base = 5 ] = arg3.split('=');

crearArchivoTabla( argv.b, argv.h, argv.l )
    .then( nombreArchivo => console.log(nombreArchivo.red, 'creado'.red))
    .catch( (err) => console.log(err));


