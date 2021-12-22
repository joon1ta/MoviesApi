import React from 'react'
import Logo from '../../img/logo.png'
import s from './Navbar.module.css'
import {FaHome, FaSearch, FaPlus, FaStar, FaFilm, FaTv} from 'react-icons/fa'
const Navbar = () => {
    return (
        <nav className={s.container}>
            <div className={s.logo}>
<img width="100%" src={Logo} alt="Logo disney" />
            </div>
            
            <div className={s.links}>
               <li><FaHome /> Home</li>
            <li><FaSearch /> Search</li>
            <li><FaPlus /> WatchList</li>
            <li><FaStar /> Originals</li>
            <li><FaFilm /> Movies</li>
            <li><FaTv /> Series</li> 
            </div>
                <div className={s.profile}>
                    <h3>Perfil</h3>
                </div>
        </nav>
    )
}

export default Navbar
