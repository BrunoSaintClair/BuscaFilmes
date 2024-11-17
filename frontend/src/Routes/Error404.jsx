import { Link } from "react-router-dom";

export default function Error404(){
    return(
        <div>
            <h1>Erro 404</h1>
            <h4>Url não encontrada</h4>

            <Link to={"/"}>Ir para a página inicial</Link>
        </div>
    )
}