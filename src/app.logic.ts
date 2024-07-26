const fs = require('fs'); 
import { yarg } from "./config/plugins/yargs.plugin";

const base = yarg.b;
const folderName = './outputs/'
const limit = yarg.l;
const table = yarg.s;
let outputMessage = '';

if(table){
    console.log('=================')
    console.log(`   Tabla del ${base}`)
    console.log('=================')
}


//Comprobar si existe el directorio y si no , creaerlo  , asi como el archivo
try{
    if(!fs.existsSync(folderName)){
        fs.mkdirSync(folderName);
    }

}catch(err){
    console.error(err);
}


try { 
    fs.accessSync(folderName+`tabla-${base}.txt`, fs.constants.F_OK);
    fs.unlink(folderName + `tabla-${base}.txt` , (err:any) => {
        if(err) throw err;
        console.log('Deleted');
    });


}catch(err){
    console.log('El archivo no existe');
}


//Imprimir la tabla de la base  y pasarla a archivo de texto 
for(let i=1 ; i<=limit ; i++){

    if (table) console.log(`${base} * ${i} = `, base*i);

    outputMessage+= `${base} * ${i} = ${base * i} \n`;

}

fs.writeFileSync(folderName+`tabla-${base}.txt` , outputMessage);
