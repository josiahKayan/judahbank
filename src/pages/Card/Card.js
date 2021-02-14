import React from 'react'
import './Card.css'

export default function Card() {
    return (
        <div className="container_card">
            

            {/* <div className="container_content"> */}

                <div className="container_content_contacorrente grid-item">
                    <div className="container_content_header">
                        <h3>Saldos e Extrados</h3>
                    </div>
                    <p className="opc">Saldo Conta Corrente</p>
                    <p className="opc">Extratos Conta Corrente</p>
                    <p className="opc">Últimos Lançamentos Conta Corrente</p>
                    <p className="opc">Cheques Conta Corrente</p>
                    <p className="opc">Lançamentos Futuros Conta Corrente</p>
                </div>

                <div className="container_content_contapoupanca grid-item">
                    <div className="container_content_header">
                        <h3>Saldos e Extrados</h3>
                    </div>
                    <p className="opc">Saldo Poupança</p>
                    <p className="opc">Extratos Poupança</p>
                    <p className="opc">Últimos Lançamentos Poupança</p>
                    <p className="opc">Cheques Poupança</p>
                    <p className="opc">Lançamentos Futuros Poupança</p>
                </div>

                <div className="container_content_comprovantes grid-item">
                    <div className="container_content_header">
                        <h3>Meus comprovantes</h3>
                    </div>
                    <p className="opc">Comprovantes</p>
                    <p className="opc">Pasta Digital</p>
                </div>

                <div className="container_content_outras opções grid-item">
                    <div className="container_content_header">
                        <h3>Extratos</h3>
                    </div>
                    <p className="opc">Extratos</p>
                    <p className="opc">Últimos Lançamentos</p>
                    <p className="opc">Cheques</p>
                    <p className="opc">Lançamentos Futuros</p>
                </div>

            </div>
        // </div>
    )
}
