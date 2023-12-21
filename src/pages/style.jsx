import Layout from '@/components/Layout';
import style from './style.module.css';


export default function Estiloso(){
    return(
        <Layout>
         <div className={style.vermelho}>
            <h1>Estilo usando CSS módulos</h1>
        </div>
        </Layout>
    
    )
}