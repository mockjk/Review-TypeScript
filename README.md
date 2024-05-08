# Before begin...

## Everything you need know about TypeScript

Do you need have installed in your desktop: 
1. [Node.JS](https://nodejs.org/en) perferably the latest version

# Now us are ready for begin!

Step by step how to install TypeScript for transpile or run("interpret") your code

## CMD:

"npm init -y" -> This command generates a "package.json"

after this, it's hour to install TypeScript

"npm install -g typescript" -> Install TypeScript

by good manners, it's good generate a "tsconfig.json", this file can be setup to your preferences(for this project, I recommend you to activate and configure the next values ​​in the json file: "rootDir", "sourceMap", "outDir", "removeComments", "allowJS" and "checkJS")

"tsc --init" -> Generates  "tsconfig.json"

For transpiling

"tsc" -> Transpiles your .ts files, generating your JavaScript files and their respective maps

After transpiling

"node "fileName" "-> To run .js file

## PowerShell:

"npm init -y" -> This command generates a "package.json"

after this, it's hour to install TypeScript

"npm install -g typescript" -> Install TypeScript

by good manners, it's good generate a "tsconfig.json", this file can be setup to your preferences(for this project, I recommend you to activate and configure the next values ​​in the json file: "rootDir", "sourceMap", "outDir", "removeComments", "allowJS" and "checkJS")

"tsc.cmd --init" -> Generates  "tsconfig.json"

For transpiling

"tsc.cmd" -> Transpiles your .ts files, generating your JavaScript files and their respective maps

After transpiling

"node "fileName" "-> To run .js file

