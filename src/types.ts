export interface PokemonListItem {
  name: string
  url: string
}

export interface PokemonDetails {
  name: string
  height: number
  weight: number
  types: {
    type: {
      name: string
    }
  }[]
  sprites: {
    front_default: string
  }
}