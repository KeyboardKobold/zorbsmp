# zorbsmp readme

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
Will need to set for local testing:
$env:NODE_OPTIONS="--openssl-legacy-provider"
OR
export NODE_OPTIONS=--openssl-legacy-provider

npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



ngrok http --host-header=rewrite 8081 --scheme http