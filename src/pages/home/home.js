import './styles.css'
import React from "react";
import logo from '../../assets/header/a67babd3104c8c81d2cf749b694ba200.jpg'
import video from '../../assets/home/video.mp4'
import { Link } from 'react-router-dom';

function Home() {
  return(
    <div className='home-container'>
      <div id="banner"></div>
      <div id="trailer-container">
        <div className="trailer-content">
          <video controls className="trailer">
            <source src={video}/> 
            Seu navegador não possui suporte para videos
          </video>
          <div id="sinopse">
            <p className="description">
                Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. 
                Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população.
            </p>
            <button className="button">Comprar  ingresso</button>
          </div>
        </div>
      </div>

      <div className="actor-cards-conteiner">
        <div className="cards-content">
          <div className="actor-cards banner-1">Robert Pattinson - Batman</div>
          <div className="actor-cards banner-2">Zoë Kravitz - Selina Kyle</div>
          <div className="actor-cards banner-3">Jeffrey Wright - Jim Gordon</div>
        </div>
      </div>

      <footer className='home-footer'>
        <img className='footer-icon' src={logo}/>
        <nav className='nav-footer'>
          <ul className='ul-footer'>
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
        <span><b>Todos os direitos reservados </b></span>
        <span><b>Foi desenvolvido por &copy; Caio Ribeiro</b></span>
      </footer>

    </div>    
  )
}

export default Home;