import React, {Fragment, useState} from 'react';
import Header from './components/Header'
import Producto from './components/Producto'
import Carrito from './components/Carrito'
import Footer from './components/Footer'


function App() {

  const [productos, guardarProductos] = useState([
    {id: 1, nombre:'Camisa React Js', precio: 50},
    {id: 2, nombre:'Camisa Java', precio: 60},
    {id: 3, nombre:'Camisa JavaScript', precio: 70},
    {id: 4, nombre:'Camisa Angular', precio: 80},
    {id: 5, nombre:'Camisa Webpack', precio: 90},
  ])

  // Sate para un carrito de compras
  const [carrito, agregarProducto] = useState([])


  const fecha = new Date().getFullYear() // me devueve el año actual

  return (
    <Fragment>
      <Header 
        titulo = 'Tienda Virtual'
      />

      <h1>Lista de Productos</h1>
      {productos.map(producto =>(
        <Producto 
          key = {producto.id}
          producto = {producto}
          carrito = {carrito}
          agregarProducto = {agregarProducto}
          productos = {productos}
        />
      ))}

      <Carrito 
        carrito = {carrito}
        agregarProducto = {agregarProducto}
      />

      <Footer 
        fecha = {fecha}
      />
    </Fragment>
  );
}

export default App;
