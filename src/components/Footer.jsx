import React from 'react'; //snipped imr

// snipped sfc
const Footer = ({fecha}) => 
    // al utilizar function expression no es necesario señalara la palabra reservada return, ya que esta implicita en arror functions
    (
        <footer>
            <p>Todos los derechos reservados &copy; {fecha}</p>
        </footer>
    )

 
export default Footer;

