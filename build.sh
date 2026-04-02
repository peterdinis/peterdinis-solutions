#!/bin/sh
set -e
ROOT="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
cd "$ROOT"

if ! command -v dotnet >/dev/null 2>&1; then
  curl -sSL https://dot.net/v1/dotnet-install.sh -o dotnet-install.sh
  chmod +x dotnet-install.sh
  ./dotnet-install.sh -c 10.0 -InstallDir "$ROOT/.dotnet"
  export PATH="$ROOT/.dotnet:$PATH"
fi

dotnet --version

if [ -f package-lock.json ]; then
  npm ci
else
  npm install
fi
npm run build:css

dotnet publish PeterdinisSolutions.csproj -c Release -o output --verbosity minimal
