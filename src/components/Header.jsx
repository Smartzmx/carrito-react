import React from 'react' //snipped imr

// snipped sfc
const Header = ({titulo}) => // estoy utilizando destructuring para obtener del objeto props el valor de la propiedad titulo,_
                            // esto es igual a escribir {props} y en h1 {props.titulo}
    


    (// al utilizar function expression no es necesario señalara la palabra reservada return, ya que esta implicita en arror functions
        <div>
            <h1> {titulo} </h1>
        </div>
    )

export default Header;