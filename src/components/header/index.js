import './styles.css'
import React from "react";
import { Link } from "react-router-dom";



function Header() {
    return(
        <header className='header'>
            
            <div className='img1'></div>
           
            <nav className='nav'>
                <ul className='ul'>
                    <Link to='/' className='link'>
                        <li className='li-header'>Início</li>
                    </Link>
                    
                    <Link to='/imagens' className='link'>
                        <li className='li-header'>Imagens</li>
                    </Link>

                    <Link to='/contatos' className='link'>
                        <li className='li-header'>Contatos</li> 
                    </Link>

                    <Link to='/Comentarios' className='link'>
                        <li className='li-header'>Comentários</li>
                    </Link>
                </ul>
            </nav>

            <div className='img2'></div>

        </header>
    
    )
}

export default Header;