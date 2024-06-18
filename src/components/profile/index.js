import { Route, Routes } from 'react-router-dom';
import './styles.css'
import React from "react";
import Home from '../../pages/home/home';
import Imagens from '../../pages/fotos/fotos';
import Contatos from '../../pages/contatos/contatos';
import Comentarios from '../../pages/comentarios/comentario';

function Profile() {
    return(
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/imagens' element={<Imagens />} />
                <Route path='/contatos' element={<Contatos />} />
                <Route path='/Comentarios' element={<Comentarios />} />

            </Routes>
    )
}

export default Profile;