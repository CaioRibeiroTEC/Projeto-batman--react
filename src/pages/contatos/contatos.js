import './styles.css'
import React from "react";
import { Link } from 'react-router-dom';
import foto from '../../assets/header/a67babd3104c8c81d2cf749b694ba200.jpg'
import iconWhats from '../../assets/contatos/icons8-whatsapp-50.png'
import gitHub from '../../assets/contatos/download (1).jpg'
import linkeDin from '../../assets/contatos/linkedin.png'
import instaIcon from '../../assets/contatos/insta.jpg'



function Contatos() {
    return(
        <div className='contatos-container'>
            <div className='menu-cantainer'>
                <div class="h1"><b>Siga-nos nas redes sociais <br/>e fique por dentro de novos projetos</b></div>
                <div class="sociais-media">

                    <div class="icons-container">

                        <a className='icons' href="https://github.com/CaioRibeiroTEC" target="_blank">
                            <i><img class="icon icon1"  src={gitHub}/>
                             <span class="span"><b>git-Hub</b></span>
                            </i>
                        </a>

                        <a className='icons' href="https://www.linkedin.com/in/caio-c%C3%A9sar-ribeiro-981453308/" target="_blank">
                            <i><img class="icon icon2"  src={linkeDin}/>
                             <span class="span"><b>linked-In</b></span>
                            </i>                        
                        </a>

                        <a className='icons' href="https://www.instagram.com/caio_ribeiro_90/" target="_blank">
                            <i><img class="icon icon3"  src={instaIcon}/>
                             <span class="span"><b>instagram</b></span>
                            </i>
                        </a>

                        <i className='icons3'><img class="icon icon4"  src={iconWhats}/>
                          <span class="span"><b>whatsapp<br/>62-98190-4367</b></span>
                        </i>
                    </div>
                </div>
            </div>

            <footer className='contatos-footer'>
                <img class="logo-footer" src={foto}/>
                <nav className='contato-footer-navigation'>
                    <ul className='ul-contatos-footer'>
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

                <div class="footer-span">
                    <span><b>Todos os direitos reservados </b></span>
                    <span><b>Foi desenvolvido por &copy; Caio Ribeiro</b></span>
                </div>
                <div className='footer-img'></div>
            </footer>   

        </div>
    
    )
}

export default Contatos;
