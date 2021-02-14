import React from 'react'
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar_container">
            <nav>
                <ul className="navbar_container_opcoes">

                    <li className="navbar_container_opcoes_inicio">Início</li>
                    <li className="navbar_container_opcoes_saldos">Saldos</li>
                    <li className="navbar_container_opcoes_extratos">Extratos</li>
                    <li className="navbar_container_opcoes_pagamentos">Pagamentos</li>
                    <li className="navbar_container_opcoes_pix">Pix</li>
                    <li className="navbar_container_opcoes_transferência">Transferência</li>
                    <li className="navbar_container_opcoes_cartões">Cartões</li>
                    <li className="navbar_container_opcoes_empréstimos">Empréstimos</li>
                    <li className="navbar_container_opcoes_homebroker">Agora Home Broker</li>
                    <li className="navbar_container_opcoes_investimentos">Investimentos</li>
                    <li className="navbar_container_opcoes_maisopcoes">Mais opções</li>




                </ul>
            </nav>


        </div>
    )
}

export default Navbar;
