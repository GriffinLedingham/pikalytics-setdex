# pikalytics-setdex

CLI Setdex generator for Honko Damage Calculators, using [Pikalytics usage data](https://github.com/GriffinLedingham/smogon-usage-parser).

# Examples

- [Pikalytics Damage Calculator](https://www.pikalytics.com/calc) - Utilizes this tool to produce Pikalytics Sets for quick damage calculations based on the current metagame

# Usage

Generate `setdex_pikalytics.js`:

```node index.js ~/Data/vgc2020.json```

`vgc2020.json` in this example is data output by [smogon-usage-parser](https://github.com/GriffinLedingham/smogon-usage-parser).

# Output

```javascript
var SETDEX_PIKALYTICS = {
  Togekiss: {
    "Pikalytics Set": {
      level: 50,
      evs: { hp: 4, at: 0, df: 0, sa: 252, sd: 0, sp: 252 },
      nature: "Timid",
      ability: "Super Luck",
      item: "Scope Lens",
      moves: ["Dazzling Gleam", "Follow Me", "Air Slash", "Protect"],
    },
  },
  Tyranitar: {
    "Pikalytics Set": {
      level: 50,
      evs: { hp: 252, at: 252, df: 0, sa: 0, sd: 4, sp: 0 },
      nature: "Brave",
      ability: "Sand Stream",
      item: "Weakness Policy",
      moves: ["Rock Slide", "Protect", "Superpower", "Crunch"],
    },
  },
  Dragapult: ...,
};

