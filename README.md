## GitHub Configurations
```
git init
git add README.md
git commit -m "first commit"
git branch -M master
git remote add origin https://github.com/ravindugm/frontend-training.git
git push -u origin master
```
```
git remote add origin https://github.com/ravindugm/frontend-training.git
git branch -M master
git push -u origin master
```
## TypeScript Configurations
- `tsc <TypeScript file name>` - Compile the TypeScript code into JavaScript.
- `node <JavaScript file name>` - Run the JavaScript code.
- `tsc --noEmitOnError <TypeScript file name>` - Do not generate .js file if there is a compilation error.
- `tsc --target ES5 --noEmitOnError <TypeScript file name>` - The get/set accessors feature is only supported in ES5 and higher. So want to add compiler flag to compile the code.
- `tsc --init` - Generate a default tsconfig.json file. 
- `tsconfig.json` - Defines compiler options and project settings.
- `tsc` - Once project has a tsconfig.json file, then can compile only with `tsc`.
- `tsc --build --clean` - Remove old JavaScript code.
