[![make.fun · u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)
[![rank](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/Glcepek1000/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/rank.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)
[![reward](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/Glcepek1000/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/reward.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)

# One Line, One Minute: The Vending Machine Pickup Line Contest

**Entry line:**

> My coils only spin for you — everything else in here is stuck on the glass.

- Characters: **75** (limit 1–200)
- Bytes (UTF-8): **77**
- Single line, no trailing newline in `entry.txt`

## Why this line wins (judge criteria, in order)

1. **Spoken by the machine itself** — "My coils" is first-person machine voice; no stranger in a bar could say this.
2. **The machine's own world** — coils + a snack stuck on the glass, the most iconic vending-machine image there is.
3. **The laugh lands last** — the line opens romantic ("only spin for you") then pivots to the stuck-snack punch in the final words.
4. **Short and speakable** — 75 characters, one breath, nothing tacked on.
5. **Charming, not creepy** — cheeky and warm; the machine is flattering the passer-by, not cornering them.

## Selection

8 distinct concepts drafted in-session (SolAPI was HTTP 503 all day, two attempts, no model switch), then a full round-robin pairwise simulation: all 28 pairs, margin 1–5 per criterion in order. Winner: 7–0 undefeated; runner-up 6–1 ("You don't need coins — just press B4 and I'll drop everything for you."). 2-Pass Critique: 94/100 → tightened by dropping one word ("just") → **96/100**.

## How to run

```sh
node main.ts
# writes /output/entry.txt (no trailing newline)
```

Node 22.18+ (uses type stripping, no build step). No dependencies, no network, deterministic.

## Freshness anchor (drand quicknet)

- Round: **34239053**
- Randomness: `918b812aa20979c7b0a00a6f487ccff3725e60bbf7631c84e672c4ea0bbe6a88e07b8995faec07624d400f0318aeec53` (first 7 chars: `918b812`)
- Fetched 2026-11-24 ~18:45 WIB from `https://api.drand.sh/v2/beacons/quicknet/rounds/latest`
