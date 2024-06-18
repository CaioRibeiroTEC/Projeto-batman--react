import './styles.css'
import React from "react";
import foto from '../../assets/header/a67babd3104c8c81d2cf749b694ba200.jpg'
import { Link } from 'react-router-dom';

function Imagens() {
    return(
      <div className='imagens-container'>
        <div class="galeria"> 
            <div class="galeria-cards card-1"></div>
            <div class="galeria-cards card-2"></div>  
            <div class="galeria-cards card-3"></div>  
            <div class="galeria-cards card-4"></div> 
            <div class="galeria-cards card-5"></div>
            <div class="galeria-cards card-6"></div>
            <div class="galeria-cards card-7"></div>
            <div class="galeria-cards card-8"></div>
            <div class="galeria-cards card-9"></div>
            <div class="galeria-cards card-10"></div>
            <div class="galeria-cards card-11"></div>
            <div class="galeria-cards card-12"></div>
        </div>
        
        <footer className='footer-fotos'>
          <img  className="fotos-logo" src={foto}/>
          <nav class="fotos-footer-navigation">
            <ul className='ul-fotos-footer'>
              <Link to='/'>
                <li className='li-footer'>Início</li>
              </Link>
              
              <Link to='/imagens'>
                <li className='li-footer'>Imagens</li>
              </Link>

              <Link to='/contatos'>
                <li className='li-footer'>Contatos</li> 
              </Link>

              <Link to='/Comentarios'>
                <li className='li-footer'>Comentários</li>
              </Link>
            </ul>
          </nav>
          <span><b>Todos os direitos reservados</b></span>
          <span><b>Foi desenvolvido por &copy; Caio Ribeiro</b></span>
          <div className='footer-img'></div>
        </footer>
      </div>

    )
}

export default Imagens;