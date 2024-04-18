# TypeScript Project Setup Guide

Steps used to set up a simple TypeScript environment for solving algorithmic challenges and practicing coding.

## Step 1: Project Initialization

- Create a new directory for your project:
  ```bash
  mkdir project_folder_name
  ```
- Change into the directory:
  ```bash
  cd project_folder_name
  ```
- Initialize the project with npm:
  ```bash
  npm init -y
  ```

## Step 2: Installing TypeScript

- Install TypeScript as a development dependency:
  ```bash
  npm install --save-dev typescript
  ```

## Step 3: TypeScript Configuration

- Create a TypeScript configuration file by running:
  ```bash
  npx tsc --init
  ```
- Adjust the generated tsconfig.json to suit your needs. Example configuration:
```bash
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules",
    "**/*.spec.ts"
  ]
}
```
## Step 4 Adding TS Files

- Create a src directory:
```bash
mkdir src
```
Add your TypeScript files to this directory, e.g., create a file 
```bash
src/myFile.ts
```

## Step 5 Compiling TS
- Compile your TypeScript code to JavaScript
```bash
npx tsc
```

## Step 6 Running Compiled JavaScript
- Run the compiled JavaScript with Node.js
```bash
node dist/myFile.ts
```

## Step 7 Automate the process
- Add scripts to your `package.json` for convenience

```bash
"scripts": {
  "build": "tsc",
  "start": "node dist/romanToInt.js"
}
```
- Use npm run build to compile TypeScript files and npm run start to run the compiled JavaScript file.