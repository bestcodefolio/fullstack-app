import { CREATE_TABLES_IN_DATABASE }  from './createtables';

request.query(`
    USE master
    GO
    IF EXISTS DROP DATABASE gifsdb
    GO
    CREATE DATABASE gifsdb
    ${CREATE_TABLES_IN_DATABASE}
`)