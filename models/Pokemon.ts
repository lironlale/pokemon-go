export interface Pokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    weight: number;
    abilities: PokemonAbility[];
    form: PokemonForm[];
}

export interface PokemonAbility {
    ability: {
        name: string;
        url: string;
    };
    is_hidden: boolean;
    slot: number;
}

export interface PokemonForm {
    name: string;
    url: string;
}