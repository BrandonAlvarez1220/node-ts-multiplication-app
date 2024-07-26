import yargs from 'yargs';
import {hideBin} from 'yargs/helpers'

/*
El plugin de yargs sirve para realizar aplicaciones en ventana de comando con Node, 
muchas de estas aplicaciones las vemos como por ejemplo 

npm install package -D --build 

en donde existe la parametrización como ejemplo -D o --build 

para eso es el paquete yargs , en el cual podemos asignar variables de entorno para parametrizar como se ve
en el código de abajo

en donde la funcion option agregamos el tipo de parametro y sus caracteristicas correspondientes
a ese parametro. 

*/

export const yarg = yargs(process.argv)
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Multiplication table base'
})
.option('l', {
    alias: 'limit',
    type: 'number',
    default:10,
    describe: 'Multiplication table limit'
})
.option('s',{
    alias : 'show',
    type: 'boolean',
    default: false,
    describe: 'Show multiplication table'
}) 
.option('n', {
    alias:'name',
    type: 'string',
    default: 'table',
    describe: 'File name'
})
.option('d',{
    alias: 'destination',
    type: 'string',
    default: 'outputs',
    describe: 'File destination'
})
//Agregar checks para verificar parametros por ejemplo que la base no sea negativa 
.check((argv, options) =>{

    if(argv.b <1) throw 'Error: base must be a greater than 0';

    // throw 'Error: base must be a number';
   
    return true
})
.parseSync()