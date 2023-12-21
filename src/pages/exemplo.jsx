import Link from "next/link";
import Cabecalho from "@/components/Cabecalho";
import styles from '../styles/Layout.module.css'

export default function Exemplo(props){
    return(
     <div>
        <div className={styles.cabecalho}>
          <h1>{props.titulo ?? 'Mais um exemplo'}</h1>
            <Link href="/">Voltar</Link>
        </div>
        <div>
            <Cabecalho />
        </div>
      </div>
      
     
    )
}