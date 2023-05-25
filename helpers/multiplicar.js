
const colors = require('colors');
const fs = require('fs');

const crearArchivoTabla = async (base = 5 , hasta = 10, listar = false) => {

    try {
        
        let salida = '';
        let consola = '';
    
        for (let i = 1; i <= hasta; i++) {
            salida += `${ base } x ${ i } = ${ base * i }\n`;
            consola += `${ base } ${ 'x'.green } ${ i } ${ '='.green } ${ base * i }\n`;
            
        };
        
        // console.log(salida);

        if (listar) {
            console.log(`==================`.yellow);
            console.log(`   TABLA del ${base}`.red);    
            console.log(`==================`.yellow);

            console.log(consola);
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
        return `Tabla-${base}.txt`;

    } catch (error) {
        throw(err)
    }

}

module.exports = {
    crearArchivoTabla,
}