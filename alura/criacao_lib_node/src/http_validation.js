export default async function listaValida(lista){
    const links = lista.map((objectLinks) => Object.values(objectLinks).join())
    const arrStatus = await Promise.all(
        links.map(async(url) => {
            try {
                const res = await fetch(url);
                return res.status;
            } catch (error) {
                if(error.cause.code === 'ENOTFOUND'){
                    return 'link não encontrado'
                } else {
                    return 'ocorreu um erro '+ error.cause.code
                }
            }
        })
    )

    return lista.map((objeto, indice) => (
        {
            ...objeto,
            status: arrStatus[indice]
        }
    ));
}
