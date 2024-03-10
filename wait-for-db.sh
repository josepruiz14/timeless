#!/bin/bash

# Esperar hasta que la base de datos esté disponible
wait-for-it.sh db:$DB_PORT -t 30

# Ejecutar el comando proporcionado o iniciar tu aplicación
exec "$@"