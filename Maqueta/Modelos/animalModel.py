import mysql.connector

class AnimalModel():
    
    def __init__(self):
        try:
            self.connection = mysql.connector.connect(
                host = 'buolaz9f1tuv8wod5d2k-mysql.services.clever-cloud.com',
                port = 3306,
                user = 'uweqknlvbyh7t9em',
                password = '5W5Z0aiPlccRdSyv8QsJ',
                db = 'buolaz9f1tuv8wod5d2k',
            )
            print("Conexion exitosa!!!")
        except mysql.connector.Error as descriptionError:
            print("No se conecto", descriptionError)


#CREATE
    def agregarAnimal(self,nombre,edad,tamano,tipo,raza,fechaIngreso,idRefugio):
        if self.connection.is_connected():
            try:
                cursor = self.connection.cursor()
                sentenciaSQL = "INSERT INTO animales VALUES(default,'{}',{},'{}','{}','{}','{}',{})".format(nombre,edad,tamano,tipo,raza,fechaIngreso,idRefugio)
                cursor.execute(sentenciaSQL)
                self.connection.commit()
                # self.connection.close()
                print ("Insercion exitosa!")
            except:
                print ("No se pudo conectar a la base de datos")

#READ
    def buscarAnimal(self,id):
        if self.connection.is_connected():
            try:
                cursor = self.connection.cursor()
                sentenciaSQL = "SELECT * FROM animales WHERE id_animal = {}".format(id) 
                cursor.execute(sentenciaSQL)
                resultado = cursor.fetchall()
                # self.connection.close()
                return resultado
            except:
                print ("No se pudo conectar a la base de datos")

    def verAnimales(self):
        if self.connection.is_connected():
            try:
                cursor = self.connection.cursor()
                sentenciaSQL = "SELECT id_animal, nombre_animal, tipo, refugio.nombre_refugio, refugio.ciudad_refugio FROM animales INNER JOIN refugio ON animales.id_refugio1=refugio.id_refugio" 
                cursor.execute(sentenciaSQL)
                resultado = cursor.fetchall()
                # self.connection.close()
                return resultado
            except:
                print ("No se pudo conectar a la base de datos")



#UPDATE
    def actualizarAnimal(self,id,nombre,edad,tamano,tipo,raza,fechaIngreso,idRefugio):
        if self.connection.is_connected():
            try:
                cursor = self.connection.cursor()
                sentenciaSQL = "UPDATE animales SET nombre_animal = '{}', edad = {}, tamaño = '{}', tipo = '{}', raza = '{}', fecha_ingreso = '{}', id_refugio1 = {} WHERE id_animal = {}".format(nombre,edad,tamano,tipo,raza,fechaIngreso,idRefugio,id)
                cursor.execute(sentenciaSQL)
                self.connection.commit()
                # self.connection.close()
                print ("Actualizacion exitosa!")
            except:
                print ("No se pudo conectar a la base de datos")


#DELETE
    def eliminarAnimal(self,id):
        if self.connection.is_connected():
            try:
                cursor = self.connection.cursor()
                sentenciaSQL = "DELETE FROM animales WHERE id_animal = {}".format(id)
                cursor.execute(sentenciaSQL)
                self.connection.commit()
                # self.connection.close()
                print ("Eliminacion exitosa!")
            except:
                print ("No se pudo conectar a la base de datos")

#DESCONECTAR / Metodo provisorio para interactuar por consola desde el controlador

    def cerrarConexion(self):
        if self.connection.is_connected():
            self.connection.close()
            print("Conexion cerrada!")
