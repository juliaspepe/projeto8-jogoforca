import Palavras from "./Palavras"
import forca0 from "./img/forca0.png"
import forca1 from "./img/forca1.png"
import forca2 from "./img/forca2.png"
import forca3 from "./img/forca3.png"
import forca4 from "./img/forca4.png"
import forca5 from "./img/forca5.png"
import forca6 from "./img/forca6.png"

export default function App() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    function escolherPalavra(){
        alert ("oi")
    }

    function escolherLetra(){
        alert("oi")
    }

    function chutar(){
        alert ("oi")
    }

    return (
        <div>
            <div className="container">
                <img src={forca0} />
                <div onClick={escolherPalavra} className="buttonEscolherPalavra">Escolher Palavra</div>
            </div>
            <div className="containerLetras">
                <div onClick={escolherLetra} className="letras">
                    {alfabeto.map((a) => <p className="letra">{a}</p>)}
                </div>
            </div>
            <div className="containerInferior">
                <div className="footer">
                    <p>Já sei a palavra!</p>
                    <input type="text" name="input"></input>
                    <div onClick={chutar} className="chutar">Chutar</div>
                </div>
            </div>
        </div >
    )
}