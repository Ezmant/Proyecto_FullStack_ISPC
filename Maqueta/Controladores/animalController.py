from sys import path
path.append("..\\Modelos")

from animalModel import AnimalModel

class AnimalController():

    def __init__(self):
        self.modelo = AnimalModel()

    def insertarAnimal(self,nombre,edad,tamano,tipo,raza,fechaIngreso,idRefugio):
        self.modelo.agregarAnimal(nombre,edad,tamano,tipo,raza,fechaIngreso,idRefugio)

    def verAnimal(self,id):
        return self.modelo.buscarAnimal(id)

    def listaAnimales(self):
        return self.modelo.verAnimales()

    def modificarAnimal(self,id,nombre,edad,tamano,tipo,raza,fechaIngreso,idRefugio):
        self.modelo.actualizarAnimal(id,nombre,edad,tamano,tipo,raza,fechaIngreso,idRefugio)

    def borrarAnimal(self,id):
        self.modelo.eliminarAnimal(id)


#Metodo provisorio
    def desconectar(self):
        self.modelo.cerrarConexion()


#------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
#Interactuamos con la base de datos mediante consola hasta que podamos conectar con el Front.
#------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

controlador = AnimalController()
salir = False

while not salir:

    print("\n-------------------------\n","Seleccione una opcion:","1 - Listado de animales","2 - Seleccionar animal","3 - Agregar animal", "4 - Modificar animal","5 - Eliminar animal","6 - Salir","\n-------------------------\n",sep='\n')
    seleccion = input()

    #Listado de animales
    if seleccion == '1': 
        animales = controlador.listaAnimales()
        if controlador.listaAnimales() != []:
            for animal in animales:
                print("\nId: {}".format(animal[0]),"Nombre: {}".format(animal[1]),"Tipo: {}".format(animal[2]),"Refugio: {}".format(animal[3]),"Ciudad: {}".format(animal[4]),sep="\n")
        else:
            print("No hay animales cargados en el sistema!")


    #Seleccionar animal
    elif seleccion == '2' :
        id = input("Indique el id del animal: ")
        respuesta = controlador.verAnimal(id)
        if  respuesta != [] and respuesta != None:
            animal = respuesta[0]
            print("\nNombre: {}".format(animal[1]),"Edad: {}".format(animal[2]),"Tamaño: {}".format(animal[3]),"Tipo: {}".format(animal[4]),"Raza: {}".format(animal[5]),"Fecha de ingreso: {}".format(animal[6]),sep="\n")
        else:
            print("El id ingresado no existe!")
    
    #Agregar animal
    elif seleccion == '3': 
        print("Datos del animal: \n")
        nombre = input("Nombre: ")
        edad = input("Edad (si no sabe: 0): ")
        tamano = input("Tamaño (chico, mediano o grande): ")
        tipo = input("Tipo (perro, gato o conejo): ")
        raza = input("Raza (nombre de raza o 'mestizo'): ")
        fechaIngreso = input("Fecha de ingreso (yyyy-mm-dd): ")
        refugio = input("Seleccione el refugio que corresponda \n1 - Huellitas \n2 - Los Peludos\n")
        while refugio !='1' and refugio !='2':
            print("Opcion invalida!")
            refugio = input("Seleccione el refugio que corresponda\n1 - Huellitas\n2 - Los Peludos\n")
        if refugio == '2':
            refugio = 4
        controlador.insertarAnimal(nombre,edad,tamano,tipo,raza,fechaIngreso,refugio)

    #Modificar animal
    elif seleccion == '4':
        id = input("Indique el id del animal: ")
        respuesta = controlador.verAnimal(id)
        if  respuesta != [] and respuesta != None:
            animal = respuesta[0]
            print("Datos del animal:","(Presione enter si no desea modifcar el atributo)",sep="\n")
            nombre = input("Nombre: '{}' : ".format(animal[1]))
            if nombre == "":
                nombre = animal[1]
            edad = input("Edad (si no sabe: 0): '{}' : ".format(animal[2]))
            if edad == "":
                edad = animal[2]
            tamano = input("Tamaño (chico, mediano o grande): '{}' : ".format(animal[3]))
            if tamano == "":
                tamano = animal[3]
            tipo = input("Tipo (perro, gato o conejo): '{}' : ".format(animal[4]))
            if tipo == "":
                tipo = animal[4]
            raza = input("Raza (nombre de raza o 'mestizo'): '{}' : ".format(animal[5]))
            if raza == "":
                raza = animal[5]
            fechaIngreso = input("Fecha de ingreso (yyyy-mm-dd): '{}' : ".format(animal[6]))
            if fechaIngreso == "":
                fechaIngreso = animal[6]
            refugio = input("Seleccione el refugio que corresponda \n1 - Huellitas \n2 - Los Peludos\n")
            nombreRefugio = ""
            if refugio == "":
                refugio = animal[7]
            if refugio == '1' or refugio == 1:
                nombreRefugio = "Huellitas"
            elif refugio == '2' or refugio == 2:
                refugio = 4
                nombreRefugio = "Los Peludos"
            print("\nDatos modificados: ","Nombre: {}".format(nombre),"Edad: {}".format(edad),"Tamaño: {}".format(tamano),"Tipo: {}".format(tipo),"Raza: {}".format(raza),"Fecha de ingreso: {}".format(fechaIngreso),"Refugio: {}".format(nombreRefugio),sep="\n")
            modificar=""
            while modificar != "y" and modificar != "n":
                modificar = input("\n¿Desea confirmar los cambios? (y/n)\n")
                if modificar == "y":
                    controlador.modificarAnimal(id,nombre,edad,tamano,tipo,raza,fechaIngreso,refugio)
                elif modificar == "n":
                    print("Cambios descartados!")
                else:
                    print("Opcion invalida!")
        else:
            print("El id ingresado no existe!")
            
    #Eliminar animal
    elif seleccion == '5': 
        id = input("Indique el id del animal: ")
        respuesta = controlador.verAnimal(id)
        if  respuesta != [] and respuesta != None:
            animal = respuesta[0]
            eliminar = ""
            while eliminar != "y" and eliminar != "n":
                eliminar = input("¿Esta seguro que quiere eliminar a {}? (y/n) ".format(animal[1]))
                if eliminar == "y":
                    controlador.borrarAnimal(id)
                elif eliminar == "n":
                    print("No se elimino a {}!".format(animal[1]))
                else:
                    print("Opcion invalida!")
        else:
            print("El id ingresado no existe!")

    #Desconectar /  Salir
    elif seleccion == '6':
        controlador.desconectar()
        salir = True
    else:
        print("Seleccione una opcion valida")

