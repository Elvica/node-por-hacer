// const { crearArchivoBase, listarTabla } = require('./multiplicar/multiplicar');

var colors = require('colors');
const argv = require('./config/yargs').argv;

const porHacer = require('./por-hacer/por-hacer');

const comando = argv._[0];

switch (comando) {
    case 'listar':
        const listado = porHacer.getListado();
        for (const tarea of listado) {
            console.log('========== Por hacer ========='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('=============================='.green);
        }
        break;
    case 'crear':
        const tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'actualizar':
        const actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        const borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log("Comando no reconocido");
}