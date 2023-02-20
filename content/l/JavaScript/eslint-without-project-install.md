---
title: Using ESLint Without Installing it as a dependency for your project
date: 2023-02-20T17:20:02Z
description: "Taking advantage of and using ESLint in your javascript project without installing it as a dependency in your package.json. ESLint Global install."
categories:
  - JavaScript
  - ESLint
---

Working on a project and don't want to or can't install ESLint as a `devDependency` in your `package.json`? or maybe you just want ESLint to work on all of your projects instantly without all of the per app configuration. The steps described below will help you.

{{<link-heading "Installing ESLint Globally">}}

Before starting, ensure you have `Node.js` installed along with `npm` (which should come packaged with your Node install).

1. Install ESLint Globally
   ```
   npm i -g eslint
   ```
2. Navigate to your home folder.

   **On Linux:** cd to or type `~/` in your file explorer of choice to get to your home folder.

   **On Windows:** Go to `C:\Users` folder in explorer, then enter the folder with your username.

3. Create your `.eslintrc.json` file in your home folder and add your desired eslint config to it in JSON.
   ```
   // Example JSON config
   {
     "env": {
         "browser": true,
         "es2021": true
     },
     "extends": "eslint:recommended",
     "parserOptions": {
         "ecmaVersion": "latest",
         "sourceType": "module"
     }
   }
   ```
4. Now you can lint your files
   ```
   eslint lintmepls.js
   ```
5. (Optional) Install ESLint extension for VSCode

   Go to the extensions tab, type in `ESLint` and download the one by `Microsoft`.

   Extension Links:

   - Open VSX: https://open-vsx.org/extension/dbaeumer/vscode-eslint
   - Visual Studio Marketplace: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

{{<link-heading "Helpful Resources">}}

- ESLint playground: https://eslint.org/play/
- More on config files: https://eslint.org/docs/latest/use/configure/configuration-files
