# SDK de Mercado Pago
import mercadopago

# Agrega credenciales
sdk = mercadopago.SDK(
    "TEST-5267338229170207-060822-02d3a7e1032b9b7fdcb7a033dc7f2185-195109047"
)

# Crea un ítem en la preferencia
preference_data = {
    "items": [
        {
            "title": "Collar",
            "quantity": 1,
            "unit_price": 75,
        }
    ]
}

preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
