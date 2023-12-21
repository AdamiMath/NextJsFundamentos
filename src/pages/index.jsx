import Navegador from "@/components/Navegador"
import Link from "next/link"
export default function Home() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textDecoration: 'none',
            fontSize: '1.5em',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navegador texto="Style" destino="/style" />
            <Navegador texto="Exemplo" destino="/exemplo" />
       

       </div>
    )
}
