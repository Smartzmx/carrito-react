import React from 'react';

const Producto = ({producto, carrito, agregarProducto, productos}) => {

    const {nombre, precio, id} = producto // aplico destructing para crear una variable por cada propiedad y yano tener que acceder_
                                            //a traves del objeto como tal

    const seleccionarProducto = id => {
        const producto = productos.filter(producto => producto.id === id)[0]
        agregarProducto([
            ...carrito, producto
        ])
    }

    const eliminarProducto = id =>{
        const productos = carrito.filter(producto => producto.id !== id)
        agregarProducto(productos)
    }

    return ( 
      <div>
        <h2>{nombre}</h2>
        <p>${precio}</p>
        {productos 
        ?
            (
                <button
                    type= 'button'
                    onClick = {() => seleccionarProducto(id) }
                >
                    Comprar
                </button>
            )
        : 
            (
                <button
                    type= 'button'
                    onClick = {() => eliminarProducto(id) }
                >
                    Eliminar
                </button>
            )
        }
      </div>
     );
}
 
export default Producto;