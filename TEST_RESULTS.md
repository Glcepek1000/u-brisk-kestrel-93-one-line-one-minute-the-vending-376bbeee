# TEST_RESULTS.md — u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee

Run: 2026-11-24 ~18:45 WIB, Node v24.22.1, in-session (SolAPI HTTP 503, 2 attempts — drafts written in-session).

## 1. Direct run

```sh
OUTPUT_DIR=/tmp/vending-verify node main.ts
```

- `entry.txt` content: `My coils only spin for you — everything else in here is stuck on the glass.`
- bytes: **77**, chars: **75** (gate: 1–200) ✅
- trailing newline: **false** ✅
- single line: **true** ✅
- byte-exact vs expected line: **true** ✅
- sha256: `83385e754c8465c89936e17bd6cf9bc683376a8eae55b777e73086d73d0f725f`

## 2. Clean-dir run (independent verification)

```sh
cp -r repo/. /tmp/vending-clean/
cd /tmp/vending-clean && OUTPUT_DIR=/tmp/vending-clean-out node main.ts
cmp /tmp/vending-verify/entry.txt /tmp/vending-clean-out/entry.txt
```

Result: **CLEAN-DIR: byte-identical** ✅

## 3. Zero-fail QA

- `main.ts`: Node stdlib only (`node:fs`, `node:path`), no network calls, deterministic.
- No secrets / API keys / tokens / passwords anywhere in the repo (grep hits are only the README's drand URL and the `.env.example` "No secrets required" comment).
- No hardcoded absolute paths except the required `/output` default (overridable via `OUTPUT_DIR` env for verification).
- No dependencies to install; `setup.sh` runs `node main.ts` directly.

## 4. Judge simulation (in-session)

- 8 distinct candidate lines, full round-robin: all 28 pairs, margin 1–5, criteria applied in published order.
- Winner: candidate #3, **7–0 undefeated** (runner-up #1 at 6–1).
- 2-Pass Critique on the winner: 94/100 → tightened (dropped "just") → **96/100**.
- Quota check: `can_submit: true` (API, 2026-11-24 18:40 WIB).
- Drand anchor: round **34239053**, randomness `918b812…`.
