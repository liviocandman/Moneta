import './Emprestimos.css'
import { Helmet } from "react-helmet"

const Emprestimos = () => {
    return (
        <>
        <Helmet>
            <script src='src/js/script-emprestimo.js' async/>
        </Helmet>

        <div id="wraper">
            <div class="card">
                <div class="title">
                    <h2>Simulação de Empréstimo</h2> <button class="buttonEmp1 right" id="buttonEmp1" >SAC</button> <button class="buttonEmp2 right" id="buttonEmp2"  onclick="swipePrice()">PRICE</button>
                </div>
                <div class="lineInput" id="lineSAC">
                    <label>Valor do Bem</label>
                    <input type="number" name="valor" id="valor" placeholder="0,00" />
                </div>

                <div class="lineInput" id="lineSAC">
                    <label>Valor de Entrada</label> 
                    <input type="number" name="entrada" id="entrada" placeholder="0,00" />
                </div>

                <div class="lineInput" id="lineSAC">
                    <label>Taxas de Juros</label>
                    <input type="number" name="taxa" id="taxas" placeholder="0,00%" />
                </div>

                <div class="lineInput" id="lineSAC">
                    <label>Prazo (em meses)</label>
                    <input type="number" name="prazo" id="prazo" placeholder="0" />
                </div>


                <div class="botoes">
                    <button id="btn1" class="botao1">Simular</button>
                    <button id="btn2">Cancelar</button>
                </div>
                <br />
                <a class="center"> As parcelas Fixas (Tabela Price) são muito comuns nos empréstimos pessoais e financiamentos de carros.
                </a>
                <a class="center">Já as parcelas Decrescentes (Tabela SAC) são mais usadas em financiamentos de imóveis.</a>
                <br />    

                <div id="listagem" class="">
                    <div class="title">
                    </div>
                    <table border="1">
                        <thead id="cabecaTabela" class="title2">
                            <th class="center" id="th">#</th>
                            <th class="center">Parcelas</th>
                            <th class="center">Amortizaçôes</th>
                            <th class="center">Juros</th>
                            <th class="center">Saldo Devedor</th>
                        </thead>
                        <tbody id="corpoTabela">
                        </tbody>
                        </table>
                </div>
            </div>
        </div>
    </>
        


    )
} 

export default Emprestimos