import './styles.css'
import React from "react";
import foto from '../../assets/header/a67babd3104c8c81d2cf749b694ba200.jpg'
import { Link } from 'react-router-dom';

function Comentarios() {
    return(
        <div>
            <div class="coments-container">
                <b class="titulo">Preencha os campos abaixo:</b>
                <div class="formulario">
                    <form class="form" action="./comentarios.html">

                    <div class="nome-completo">
                        <label for="nome"><b className='b'>Nome completo: </b></label>
                        <input class="campo1" id="nome" type="text" name="nome" placeholder="Nome, sobrenome..." />
                    </div>

                    <div class="satisfacao">
                        <span class="span-label"><b>Qual a sua satisfação ao navegar pelo site:</b></span> 
                        <label for="radio1"><b>Pouco satisfeito</b></label>
                        <input  id="radio1" type="radio" name="nome" />

                        <label for="radio2"><b>Satisfeito</b></label>
                        <input  id="radio2" type="radio" name="nome"  />

                        <label for="radio3"><b>Muito satisfeito</b></label>
                        <input  id="radio3" type="radio" name="nome"  />

                    </div>


                    <div class="textarea">
                        <span class="textarea-span"><b>Deixe aqui seu comentário:</b></span> 

                        <textarea class="comentario" name="Comentario" id="Comentario" rows="10" maxlength="300" placeholder="Máx 300 caracteres"></textarea>
                    </div>   
                        
                    <button class="button-enviar">Enviar</button>
                    </form>
                </div>
            </div>

            <footer className='comentarios-footer'>
                <img class="logo-footer" src={foto}/>
                <nav className='comentarios-footer-navigation'>
                    <ul className='ul-comentarios-footer'>
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

export default Comentarios;