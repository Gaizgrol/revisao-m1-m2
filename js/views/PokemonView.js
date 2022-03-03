class PokemonView
{
    static html( model )
    {
        return `
        <div class="card" style="width: 18rem;">
            <img src="${model.urlImagem}" class="card-img-top">
            <div class="card-body">
            <h5 class="card-title">${model.nome}</h5>
        </div>
        `
    }
}