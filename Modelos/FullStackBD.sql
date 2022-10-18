CREATE DATABASE fullstackbd;

USE fullstackbd;
  
CREATE TABLE usuario (
  dni_usuario VARCHAR(45) NOT NULL,
  nombre_usuario VARCHAR(45) NOT NULL,
  contraseña VARCHAR(45) NOT NULL,
  telefono_usuario VARCHAR(45) NOT NULL,
  email_usuario VARCHAR(45) NOT NULL,
  direccion_usuario VARCHAR(45) NOT NULL,
  ciudad_usuario VARCHAR(45) NOT NULL,
  provincia_usuario VARCHAR(45) NOT NULL,
  PRIMARY KEY (dni_usuario));
  
CREATE TABLE reportes (
  id_reporte INT NOT NULL AUTO_INCREMENT,
  direccion VARCHAR(45) NOT NULL,
  motivo VARCHAR(45) NOT NULL,
  descripcion VARCHAR(150) NOT NULL,
  dni_usuario2 VARCHAR(45) NOT NULL,
  PRIMARY KEY (id_reporte),
  FOREIGN KEY (dni_usuario2) REFERENCES usuario(dni_usuario));
  
  CREATE TABLE donaciones (
  id_donacion INT NOT NULL AUTO_INCREMENT,
  monto INT NOT NULL,
  dni_usuario3 VARCHAR(45) NOT NULL,
  PRIMARY KEY (id_donacion),
  FOREIGN KEY (dni_usuario3) REFERENCES usuario(dni_usuario));
  
  CREATE TABLE refugio (
  id_refugio INT NOT NULL AUTO_INCREMENT,
  nombre_refugio VARCHAR(45) NOT NULL,
  telefono_refugio VARCHAR(45) NOT NULL,
  email_refugio VARCHAR(45) NOT NULL,
  direccion_refugio VARCHAR(45) NOT NULL,
  ciudad_refugio VARCHAR(45) NOT NULL,
  provincia_refugio VARCHAR(45) NOT NULL,
  PRIMARY KEY (id_refugio));
  
  CREATE TABLE animales (
  id_animal INT NOT NULL AUTO_INCREMENT,
  nombre_animal VARCHAR(45) NOT NULL,
  edad INT NOT NULL,
  tamaño VARCHAR(45) NOT NULL,
  tipo VARCHAR(45) NOT NULL,
  raza VARCHAR(45) NOT NULL,
  fecha_ingreso DATETIME NOT NULL,
  id_refugio1 INT NOT NULL,
  PRIMARY KEY (id_animal),
  FOREIGN KEY (id_refugio1) REFERENCES refugio(id_refugio));
  
CREATE TABLE veterinario (
  matricula VARCHAR(45) NOT NULL,
  nombre_veterinario VARCHAR(45) NOT NULL,
  telefono_veterinario VARCHAR(45) NOT NULL,
  email_veterinario VARCHAR(45) NOT NULL,
  id_refugio2 INT NOT NULL,
  PRIMARY KEY (matricula),
  FOREIGN KEY (id_refugio2) REFERENCES refugio(id_refugio));
  
  CREATE TABLE usuario_animales (
  dni_usuario VARCHAR(45) NOT NULL,
  id_animal1 INT NOT NULL);





  


