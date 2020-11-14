const fs = require('fs')
const args = process.argv

const source = args[2]

const setdex = {}
let setdexString = ''

const output = 'setdex_pikalytics.js'

const usageJSON = require(source)
const gmax = [
    'Alcremie-Gmax',
    'Appletun-Gmax',
    'Blastoise-Gmax',
    'Butterfree-Gmax',
    'Centiskorch-Gmax',
    'Charizard-Gmax',
    'Cinderace-Gmax',
    'Coalossal-Gmax',
    'Copperajah-Gmax',
    'Corviknight-Gmax',
    'Drednaw-Gmax',
    'Duraludon-Gmax',
    'Eevee-Gmax',
    'Flapple-Gmax',
    'Garbodor-Gmax',
    'Gengar-Gmax',
    'Grimmsnarl-Gmax',
    'Hatterene-Gmax',
    'Inteleon-Gmax',
    'Kingler-Gmax',
    'Lapras-Gmax',
    'Machamp-Gmax',
    'Melmetal-Gmax',
    'Meowth-Gmax',
    'Orbeetle-Gmax',
    'Pikachu-Gmax',
    'Rillaboom-Gmax',
    'Sandaconda-Gmax',
    'Snorlax-Gmax',
    'Toxtricity-Gmax',
    'Toxtricity-Low-Key-Gmax',
    'Urshifu-Rapid-Strike-Gmax',
    'Urshifu-Gmax',
    'Venusaur-Gmax'
]

for(let i in usageJSON) {
    const pokemon = usageJSON[i]

    let evObj = {}
    console.log(pokemon)
    if(pokemon.spreads.length > 0) {
        const evString = pokemon.spreads[0].ev
        const evObjRaw = evString.split('/')
        evObj = {
            hp: parseInt(evObjRaw[0]),
            at: parseInt(evObjRaw[1]),
            df: parseInt(evObjRaw[2]),
            sa: parseInt(evObjRaw[3]),
            sd: parseInt(evObjRaw[4]),
            sp: parseInt(evObjRaw[5]),
        }
    }

    const moves = []
    if(pokemon.moves[0] !== undefined) moves.push(pokemon.moves[0].move)
    if(pokemon.moves[1] !== undefined) moves.push(pokemon.moves[1].move)
    if(pokemon.moves[2] !== undefined) moves.push(pokemon.moves[2].move)
    if(pokemon.moves[3] !== undefined) moves.push(pokemon.moves[3].move)

    let found = false
    for(let j in gmax) {
        if(gmax[j].indexOf(pokemon.name) > -1) {
            setdex[`${pokemon.name}-Gmax`] = {
                "Pikalytics Set": {
                    level: 50,
                    evs: evObj,
                    nature: pokemon.spreads.length > 0 ? pokemon.spreads[0].nature: '',
                    ability: pokemon.abilities.length > 0 ? pokemon.abilities[0].ability : '',
                    item: pokemon.items.length > 0 ? pokemon.items[0].item : '',
                    moves: moves
                }
            }
            break
        }
    }

    setdex[pokemon.name] = {
        "Pikalytics Set": {
            level: 50,
            evs: evObj,
            nature: pokemon.spreads.length > 0 ? pokemon.spreads[0].nature: '',
            ability: pokemon.abilities.length > 0 ? pokemon.abilities[0].ability : '',
            item: pokemon.items.length > 0 ? pokemon.items[0].item : '',
            moves: moves
        }
    }
}

setdexString = `var SETDEX_PIKALYTICS = ${JSON.stringify(setdex)}`

fs.writeFileSync(output, setdexString)
