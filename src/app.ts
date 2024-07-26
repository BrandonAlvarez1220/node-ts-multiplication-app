
import {yarg} from '../src/config/plugins/yargs.plugin';
import { ServerApp } from './presentation/server-app';

// console.log(process.argv);

// console.log(yarg);

//Función anonima auto-invocada

(async () => {
    await main();
})();


async function main() {

    const {b: base, l: limit , s:showTable, n:name, d: destination} = yarg;

    console.log(yarg);
    ServerApp.run({base,limit,showTable, name , destination});
}


