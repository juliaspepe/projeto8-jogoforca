import { useState } from "react"


export default function Botao(props) {
const [disable, setDisable] = useState(false)

    function desabilitarBotao() {
        if (disable === false) {
            setDisable(true)
        } 
    }

    return (
        <button disabled={disable} key={props.i} className="letra" onClick={() => {
            props.escolherLetra(props.parametro)
            desabilitarBotao()
        }
        }>{props.parametro}</button>
    )
}
