#!/bin/sh
# One-shot setup: no dependencies to install (Node stdlib only).
# Requires Node >= 22.18.
set -e
node --version
node main.ts
echo "entry written to /output/entry.txt"
cat /output/entry.txt; echo
