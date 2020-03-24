This plugin template uses Typescript. If you are familiar with Javascript, Typescript will
look very familiar. In fact, valid Javascript code is already valid Typescript code.

Typescript adds type annotations to variables. This allows code editors such as Visual Studio Code
to provide information about the Figma API while you are writing code, as well as help catch bugs
you previously didn't notice.

For more information, visit https://www.typescriptlang.org/

Using Typescript requires a compiler to convert Typescript (code.ts) into Javascript (code.js)
for the browser to run.

To get the TypeScript compiler working:

1. Download Visual Studio Code if you haven't already: https://code.visualstudio.com/.
2. Install the TypeScript compiler globally: `sudo npm install -g typescript`.
3. Open this directory in Visual Studio Code.
4. Compile TypeScript to JavaScript: Run the "Terminal > Run Build Task..." menu item,
   then select "tsc: watch - tsconfig.json". You will have to do this again every time
   you reopen Visual Studio Code.

That's it! Visual Studio Code will regenerate the JavaScript file every time you save.

## Things to watch out for

### You can run a plugin on a file that you have edit access to

So if you're looking at a design shared by someone, and you only have view access, you won't be able to run this or any other plugins. This seems likely a result of the fact that plugins have access to edit the current file.

To work around this limitation:

- Acquire write access to the file, or
- "Copy this file to your drafts" and inspect your own editable version
