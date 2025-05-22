npm init -y

npm install jest --save-dev

npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/register

-- create babel resource file .babelrc
{
"presets": ["@babel/preset-env"]
}

-- modify package.json to add the line
"type": "module",

-- modify package.json to add the line
"scripts": {
"test": "jest"
},

-- to debug unit test code
{
// Use IntelliSense to learn about possible attributes.
// Hover to view descriptions of existing attributes.
// For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
// https://www.basefactor.com/using-visual-studio-code-to-debug-jest-based-unit-tests
"version": "0.2.0",
"configurations": [
{
"type": "node",
"request": "launch",
"name": "Jest Tests",
"program": "${workspaceRoot}\\node_modules\\jest\\bin\\jest.js",
      "args": ["test"],
      //"preLaunchTask": "build",
      "internalConsoleOptions": "openOnSessionStart",
      "outFiles": ["${workspaceRoot}/dist/\*_/_"],
"envFile": "${workspaceRoot}/.env"
}
]
}

- enable intellisense for jest code
  jsconfig.json:

{
"typeAcquisition": {
"include": ["jest"]
}
}
