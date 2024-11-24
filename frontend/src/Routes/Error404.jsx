import { Link } from "react-router-dom";

export default function Error404(){
    return(
        <div className="text-center my-36">
            <p className="font-semibold text-4xl tracking-wider text-sky-400">Erro 404</p>
            <p className="my-40 font-medium text-2xl tracking-[.35em] text-zinc-200">Url não encontrada</p>

            <Link to={"/"} className="rounded-md bg-sky-600 px-4 py-3.5 text-md font-semibold text-white shadow-sm hover:bg-sky-800">
              Ir para a página inicial
            </Link>
        </div>
    )
}