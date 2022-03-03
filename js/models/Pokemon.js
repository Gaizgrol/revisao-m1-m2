/**
 * Molde do Pokemon
 */
class Pokemon
{
    // Busca Na API NÃO DEPENDE DA EXISTÊNCIA DE NENHUMA INSTÂNCIA!
    static buscaNaAPI( id, callback )
    {
        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${id}`,
            success( resposta ) {
                const novoPkmn = new Pokemon( resposta.name, resposta.sprites.front_default );
                callback( novoPkmn );
            }
        });
    }

    constructor( nome, urlImagem )
    {
        if ( typeof nome !== 'string' || typeof urlImagem !== 'string' )
        {
            throw new TypeError( 'Tanto nome quanto imagem precisam ser strings!' );
        }

        this.nome = nome;
        this.urlImagem = urlImagem;
    }
}
