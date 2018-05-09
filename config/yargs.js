const descripcion = {
    demand: true,
    alias: 'd',
    dec: "Descripcion de la tarea por hacer"
};
const completado = {
    alias: 'c',
    default: true
};


const argv = require('yargs')
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion: descripcion,
        completado: completado
    })
    .command('crear', 'Crear una tarea por hacer', {
        descripcion,
        completado
        //es6
    })
    .command('borrar', 'Borra una tarea ', {
        descripcion
        //es6
    })
    .help()
    .argv;
module.exports = {
    argv
}