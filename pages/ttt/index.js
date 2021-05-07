import { useState } from 'react';
import styles from '/css/dap.module.css'
import Mail from '/js/dap.module.js'

function Home(){
    //
    return (
        <div>
            
            <link rel="shortcut icon" href="/static/favicon.ico" />
            
            <CapsLock texto="teste" />
            <CapsLock texto="Xpto" />
            <Caps2>Outro Exemplo</Caps2>
            <br></br>
            <Contador />
            <Mail />
        </div>
    )
}

function Contador(){
    const [contador, setState_contador] = useState(1);
    //console.log(setState_contador);
    //console.log(setState_contador.toString())

    function addContador(){
        setState_contador(contador +1);
    }

    return(
        
        <div>
            <div className={styles.error}>{contador}</div>
            <button onClick={addContador}>Adicionar</button>
        </div>
    )
}

function CapsLock(props){
    const utxt = props.texto.toUpperCase();
    //return <div>{props.texto.toUpperCase()}</div>
    return <div>{utxt}</div>
}

function Caps2(props){
    const txt = props.children.toUpperCase();
    return <div>{txt}</div>
}

export default Home