# Start node with dotenv/config require

VERBOSE=1

verboseEcho() {
    (( VERBOSE )) && echo "$@"
}

defaultApp() {
    if command -v node > /dev/null; then
	node -r dotenv/config octokitNew.mjs
    fi
}

if [ $# -eq 0 ]; then
    verboseEcho "Starting default app"
    defaultApp
    exit 1
fi

if command -v node > /dev/null; then
    node -r dotenv/config "$1"
fi
