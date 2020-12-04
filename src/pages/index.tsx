import React from "react";
import api from "../config/axios";

interface intProdutosRecomendados {
    id: number;
    title: string;
}

export default function Home() {
    const [produtosRecomendados, setProdutosRecomendados] = React.useState<intProdutosRecomendados[]>([]);

    React.useEffect(() => {
        async function retornarProdutosRecomendados() {
            const retorno = await api({
                method: "GET",
                url: "/recommended",
            });
            setProdutosRecomendados(retorno.data);
        }
        retornarProdutosRecomendados();
    }, []);

    return (
        <div>
            <h1>Hello World!</h1>
            <ul>
                {produtosRecomendados.map((produto) => {
                    return <li key={produto.id}>{produto.title}</li>;
                })}
            </ul>
        </div>
    );
}
