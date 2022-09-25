// import Palavras from "./Palavras"
import forca0 from "./img/forca0.png"
import forca1 from "./img/forca1.png"
import forca2 from "./img/forca2.png"
import forca3 from "./img/forca3.png"
import forca4 from "./img/forca4.png"
import forca5 from "./img/forca5.png"
import forca6 from "./img/forca6.png"
import { useState } from "react"
import Botao from "./Botao"
import palavras from "./palavras"

export default function App() {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    const [letra, setLetra] = useState("")
    const [palavra, setPalavra] = useState("")
    console.log(palavra)
    const [palavraNaArray, setPalavraNaArray] = useState("")
    const [exibirPalavra, setExibirPalavra] = useState("")
    console.log(exibirPalavra);
    const [imgForca, setImgForca] = useState(forca0)
    const [j, setJ] = useState(1)
    const [classPalavra, setClassPalavra] = useState("palavra")
    const [desabilitarBotao, setDesabilitarBotao] = useState(false)
    const [chute, setChute] = useState("")
    const [inputDesabilitado, setInputDesabilitado] = useState(true)
    const [chutarDesabilitado, setChutarDesabilitado] = useState(true)
    const [trocaDeLetra, setTrocaDeLetra] = useState("");
    const [disablebuttons, setDisablebuttons] = useState(true);
    const [disable, setDisable] = useState(false)
    const [desabilitarBotaoIniciar, setDesabilitarBotaoIniciar] = useState(true)

    const imagensForca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]

    function escolherPalavra() {
        setDisablebuttons(false)
        setDesabilitarBotao(true)
        setImgForca(forca0)
        setClassPalavra("palavra")
        setInputDesabilitado(false)
        setChutarDesabilitado(false)
        setDisable(false)

        let palavraAleatoria = (Math.floor(Math.random() * palavras.length));
        let palavraNova = (palavras[palavraAleatoria]).normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        setPalavra(palavraNova)

        let transformarEmArry = palavraNova.split('')
        setPalavraNaArray(transformarEmArry)

        let substituir = transformarEmArry.map((i) => transformarEmArry[i] = " _")
        setExibirPalavra(substituir)
    }

    function escolherLetra(a) {
        setLetra(a)
        compararLetras(a)
    }

    function chutar() {
        if (chute === "") {
            return (alert("escreve uma palavra aí, amigo! em branco não vale :)"))
        }
        if (chute === palavra) {
            setExibirPalavra(palavra)
            setClassPalavra("classeAcertou")
            setInputDesabilitado(true)
            setChute("")
            setChutarDesabilitado(true)
            setDisablebuttons(true)
            setDesabilitarBotaoIniciar(false)
        } else {
            setExibirPalavra(palavra)
            setClassPalavra("classeErrou")
            setImgForca(imagensForca[6])
            setInputDesabilitado(true)
            setChute("")
            setChutarDesabilitado(true)
            setDisablebuttons(true)
            setDesabilitarBotaoIniciar(false)
        }
    }

    function compararLetras(a) {
        let arr = [];
        for (let i = 0; i < palavra.length; i++) {
            if (a === palavraNaArray[i]) {
                arr.push(i)
                exibirPalavra[i] = a
            }
        }
        if (arr.length === 0) {
            setJ(j + 1)
            setImgForca(imagensForca[j]);
        }

        if (exibirPalavra.join('') === palavra) {
            setClassPalavra("classeAcertou")
            setInputDesabilitado(true)
            setChutarDesabilitado(true)
            setJ(1)
            setDisablebuttons(true)
            setDesabilitarBotaoIniciar(false)
        }

        if (j === 6) {
            setExibirPalavra(palavra)
            setClassPalavra("classeErrou")
            setInputDesabilitado(true)
            setChutarDesabilitado(true)
            setJ(1)
            setDisablebuttons(true);
            setDesabilitarBotaoIniciar(false)
        }

    }

    function novoJogo() {
        window.location.reload()
        setDesabilitarBotao(false)
    }

    return (
        <div>
            <div className="container">
                <img src={imgForca} />
                <div className="botoes">
                    <button disabled={desabilitarBotao} onClick={escolherPalavra} className="buttonEscolherPalavra">Escolher Palavra</button>
                    <button disabled={desabilitarBotaoIniciar} onClick={novoJogo} className="buttonNovoJogo">Novo Jogo</button>
                    <div className="palavraEscolhida">
                        <div className={classPalavra}>{exibirPalavra}</div>
                    </div>
                </div>
            </div>
            <div className="containerLetras">
                <div className="letras">
                    {alfabeto.map((a, index) => <Botao disable={disable} setDisable={setDisable}
                        disablebuttons={disablebuttons} setDisablebuttons={setDisablebuttons}
                        parametro={a} i={index} escolherLetra={escolherLetra} />)}
                </div>
            </div>
            <div className="containerInferior">
                <div className="footer">
                    <p>Já sei a palavra!</p>
                    <input type="text" disabled={inputDesabilitado} value={chute} onChange={e => setChute(e.target.value)}></input>
                    <button disabled={chutarDesabilitado} onClick={chutar} className="chutar">Chutar</button>
                </div>
            </div>
        </div >
    )
}