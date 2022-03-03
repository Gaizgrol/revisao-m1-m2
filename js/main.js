// Quer fazer pedidos para a PokeAPI: Como?
    // Pega uma entrada do usuário: número
    //  Ao clicar no botão... Faz o pedido para a pokeapi
        // Ao receber o pedido, processamos suas informações
        // Colocamos a informação na tela

$('#search').on( 'click', () =>
{
    const input = Number( $('#pkmn-id').val() );
    PokemonController.pesquisa( input );
});