from sys import path

path.append('..\\Modelos')

from donacionesModel import DonacionesModel

class DonacionesController():
    
    def __init__(self):
        self.modelo = DonacionesModel()
        
    def mostrarDonantes():