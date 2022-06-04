# Template for fullstack Reason (Melange)

## Build
Install dependencies
```bash
npm i
```

Build frontend
```bash
esy client:build
```

Build backend
```bash
esy server:build
```

## Client development server

Launch webpack dev server
```bash
npm run serve
```

This will additionally launch Melange compiler in watchmode (`esy mel build -w`) and redirects the output of the compiler to stdout.
When a Reason file is changed, it will be automatically compiled to js file which is then served Webpack dev server.
Each change will automatically reload browser so you can see the changes immediately.
