import { useState } from 'react';
import styles from '/css/dap.module.css'

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
        </div>
    )
}

function Contador(){
    const [contador, setContador] = useState(1);

    function addContador(){
        setContador(contador +1);
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