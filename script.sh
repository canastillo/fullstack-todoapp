#!/bin/bash

green() {
  echo -e '\e[32m'$1'\e[m';
}

# Levantar mysql
echo Checking MySQL service status...

UP=$(sudo service mysql status | grep 'stopped' | wc -l);
if [ "$UP" -eq 1 ];
then
    sudo service mysql start
fi

green "MySQL service is up"


# Crear base de datos
echo Setting up database schema...
echo root will be used as user

sudo mysql -uroot -p < db.sql

green "Database set up successfully"


# # Archivos .env
echo Creating .env files...
echo Please insert database password:
read -s password

export DB_PASSWORD=$password

if ! [[ -f ./backend/.env  ]]
then
    echo TYPEORM_CONNECTION = mysql >> ./backend/.env
    echo TYPEORM_HOST = localhost >> ./backend/.env
    echo TYPEORM_USERNAME = root >> ./backend/.env
    echo TYPEORM_PASSWORD = $password >> ./backend/.env
    echo TYPEORM_DATABASE = todo_app >> ./backend/.env
    echo TYPEORM_SYNCHRONIZE = false >> ./backend/.env
    echo TYPEORM_ENTITIES = ./**/entities/*entity.js >> ./backend/.env
fi

if ! [[ -f ./frontend/.env  ]]
then
    echo REACT_APP_API=http://localhost:4001 >> ./frontend/.env
fi

green ".env files ready"


# Instalar dependencias
echo Installing backend dependencies...
npm install --prefix ./backend
green "Done"

echo Installing frontend dependencies...
npm install --prefix ./frontend
green "Done"

green "Dependencies installed"

# Levantar app
echo Starting up app...
npm run start --prefix ./backend & npm run start --prefix ./frontend
