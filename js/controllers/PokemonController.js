class PokemonController
{
    // Disparado dentro de um event listener
    static pesquisa( id )
    {
        Pokemon.buscaNaAPI( id, pkmn =>
        {
            $('#lista').append( PokemonView.html( pkmn ) ); 
        });
    }
}