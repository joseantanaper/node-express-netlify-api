# node-express-netlify-api

## Initial setup

Install Express, serverless-http, Netlify functions, CORS and Types for TypeScript
```sh
npm init
npm install express serverless-http @netlify/functions @types/express
npm install cors @types/cors
```

Install DotEnv for .env
```sh
npm install --save-dev dotenv
```

Install TypeScript
```sh
npm install --save-dev typescript @types/node
```

Generate tsconfig.json
```sh
npx tsc --init
```

package.json
```json
  "scripts": {
    "build": "echo \"Building functions...\" && npx tsc",
    "start": "ts-node netlify/functions/api.ts",
    "dev": "nodemon netlify/functions/api.ts",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

```sh
npm install -g nodemon
```

netlify/functions/api.ts
