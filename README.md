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
npm install tsconfig-paths
npx tsc --init
```

package.json
```json
  "scripts": {
    "build": "echo \"Building functions...\" && npm run clean && npx tsc",
    "start": "ts-node src/netlify/functions/api.ts",
    "dev": "nodemon -r tsconfig-paths/register netlify/functions/api.ts",
    "clean": "npx rimraf dist",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
  tsconfig-path enable alias in dev mode

Install Nodemon:
```sh
npm install -g nodemon
```

Install rimraf (for removing dist):
```sh
npm install --save-dev rimraf
```

netlify/functions/api.ts

