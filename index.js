const fs = require('fs')
const args = process.argv

const source = args[2]

const setdex = {}
let setdexString = ''

const output = 'setdex_pikalytics.js'

const usageJSON = require(source)

for(let i in usageJSON) {
    const pokemon = usageJSON[i]

    const evString = pokemon.spreads[0].ev
    const evObjRaw = evString.split('/')
    const evObj = {
        hp: parseInt(evObjRaw[0]),
        at: parseInt(evObjRaw[1]),
        df: parseInt(evObjRaw[2]),
        sa: parseInt(evObjRaw[3]),
        sd: parseInt(evObjRaw[4]),
        sp: parseInt(evObjRaw[5]),
    }

    const moves = []
    if(pokemon.moves[0] !== undefined) moves.push(pokemon.moves[0].move)
    if(pokemon.moves[1] !== undefined) moves.push(pokemon.moves[1].move)
    if(pokemon.moves[2] !== undefined) moves.push(pokemon.moves[2].move)
    if(pokemon.moves[3] !== undefined) moves.push(pokemon.moves[3].move)

    setdex[pokemon.name] = {
        "Pikalytics Set": {
            level: 50,
            evs: evObj,
            nature: pokemon.spreads[0].nature,
            ability: pokemon.abilities[0].ability,
            item: pokemon.items[0].item,
            moves: moves
        }
    }
}

setdexString = `var SETDEX_PIKALYTICS = ${JSON.stringify(setdex)}`

fs.writeFileSync(output, setdexString)