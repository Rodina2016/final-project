export type PokemonType = {
    id: number,
    name: string,
    isCatched?: boolean
    dataCatched?: Date
}

export type PokemonPageProps = {
    match: {
        params: {
            id: number
        }
    }
}

export type MainMenuProps = {
    classes?: string
}

export type PokemonCardProps = {
    item: PokemonType
    catchPokemon?: (id:number) => void
}