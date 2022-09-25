import { useState, useEffect } from "react"

export default function Botao(props) {
    const [disable, setDisable] = useState(false)
    function desabilitarBotao() {
        if (disable === false) {
            setDisable(true)
        }
    }

    return (
        <>
        {props.disablebuttons ? (
            <button disabled={props.disablebuttons} key={props.i} className="letra" onClick={() => {
                props.escolherLetra(props.parametro)
                desabilitarBotao()
                (()=> {
                    props.Disablebuttons(!props.disablebuttons)
                })
            }
            }>{props.parametro}</button>)
         : ( <button disabled={disable} key={props.i} className="letra" onClick={() => {
            props.escolherLetra(props.parametro)
            desabilitarBotao()
        }
        }>{props.parametro}</button> )
    }
    </>)
}

