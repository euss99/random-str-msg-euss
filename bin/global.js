#!/usr/bin/env node

/* Lo que quiere decir la línea de arriba es que este archivo va a funcionar de lado de node, así como generar un import del modulo que se creó y ejecutar la función que se encuentra ahí dentro.  */
/* Base del proyecto y del comando que se creará para instalar dentro de NPM. */

let random = require('../src/index.js');

random.funnyCommit();