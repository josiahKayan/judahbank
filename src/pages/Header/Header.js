import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className="header_container">

            <div className="header_container_logo">
                    <h2>JudahBank</h2> 
            </div>
            <div className="header_container_date">
                    <h2>Qui, 11/02/2021</h2>    
            </div>

            <input className="header_container_search" type="text"></input>
            
            {/* <div className="header_container_info"> */}

            <nav>

                <ul className="header_container_options">
                    <li className="header_container_options_saldo  options">
                        <h2>Saldo disponível</h2>
                        <h2>50.000,00</h2>
                    </li>

                    <li className="header_container_options_border  options">
                    </li>

                    <li className="header_container_options_conta  options">
                        <h2>Josias</h2>
                        <h2>1234 . 56789-0</h2> 
                    </li>

                    <li className="header_container_options_minutes  options">
                        <h2>18 min</h2>
                    </li>

                    <li className="header_container_options_exit  options">
                        <h2>Sair</h2>
                    </li>

                </ul>

            </nav>



        </div>
    )
}

export default Header
