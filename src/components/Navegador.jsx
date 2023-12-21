import Link from "next/link";
import styles from '../styles/navegador.module.css'; // Importe o módulo de estilos corretamente

export default function Navegador(props) {
  return (
    <Link href={props.destino}>
      <div className={styles.navegador}>
        {props.texto}
      </div>
    </Link>
  );
}
