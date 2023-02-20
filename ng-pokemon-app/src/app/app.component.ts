import { Component, OnInit} from '@angular/core';
import { POKEMONS } from './mock-pokemons-List';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  template: `<h1> Liste de Pokémons</h1>`
})
export class AppComponent implements OnInit {
 // pokemonsList = ['Bulbizarre','Salamèche','Carapuce']
 // title = 'apllication de Pokemons!';
  //title =<string|undefined>;

  //pokemonsList = POKEMONS;
  pokemonsList : Pokemon[] = POKEMONS;
  ngOnInit(): void {
    console.table(this.pokemonsList);
    //this.selectPokemon('Bulbizarre');
    this.selectPokemon(this.pokemonsList[0])
    
  }

  selectPokemon(pokemon:Pokemon){

    console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);

   // console.log('Vous avez cliqué sur le pokémon'+ pokemonName);

  }
}
