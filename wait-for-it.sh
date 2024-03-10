#!/bin/bash

# Función para verificar si un puerto está disponible
check_port() {
  local port=$1
  netstat -tuln | grep ":$port " > /dev/null
  return $?
}

# Puerto que se pasará como argumento
port=$1

# Verificar si se proporciona el puerto como argumento
if [ -z "$port" ]; then
  echo "Uso: $0 <puerto>"
  exit 1
fi

# Esperar hasta que el puerto esté disponible
while ! check_port "$port"; do
  echo "Esperando a que el puerto $port esté disponible..."
  sleep 1
done

echo "El puerto $port está disponible. Ejecutando comandos..."

# Lista de comandos a ejecutar una vez que el puerto esté disponible
# Puedes agregar más comandos aquí
comandos=(
  "npm run migrate"
  "npm run dev"
)

# Ejecutar los comandos uno por uno
for cmd in "${comandos[@]}"; do
  echo "Ejecutando: $cmd"
  eval "$cmd"
done

echo "Todos los comandos han sido ejecutados."
