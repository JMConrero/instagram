import React from 'react'
import './header.css'
import profile from '../../img/profile.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram ,faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Posts(){
    return(
        <>
        <div className="header-container">
            <div className="profile">
                <img src={profile} alt=""/>
                <div className="info">
                    <h1 className="name">Ing. Agr. Juan Marcelo Conrero</h1>
                    <p className="bio">Reformista. Emprendedor. Producto de la Universidad Pública. Agricultor. Titular Área de Gestión Institucional UNC</p>
                </div>
            </div>
            <div className="social">
                <p>Seguime tambien en</p>
                <div className="icons">
                    <a href="https://www.instagram.com/jmconrero/" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.facebook.com/JMConrero/" target="_blank">
                    <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://twitter.com/conrerojuan" target="_blank">
                    <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </div>
            </div>
        </div>
        </>
    )
};