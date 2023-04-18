# fusemachines-fullstack-2023

### Fusemachines internship logs and learnings 

> Apr 17 - Day 1 <br />
- Arrived at office premises at 9:10 am.
- Checked in with the receptionist, Ms. Rajani for biometric registration.
- Meeting with the lead of the People & Culture department for the company orientation
- Meeting with Mr. Rojesh Shikhrakar and  Ms. Aakanchya Malla for internship orientation and company tour.
- Meeting with HR to sign NDIAA papers.
- Had personal laptop assessed by the Senior Hardware Technician.
- Got assigned Mr. Lekhnath Oli as my mentor and he suggested to go through the classroom resources.
- Explored the Online Materials of fuseclassroom (Unit 1 - 1.1 and 1.2)
- Checked out at 5:00 pm
<br />

> Apr 18 - Day 2 
#### HTML Basics 
Resource: https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML

- Metadata: the <meta> element
Metadata is data that describes data, and HTML has an "official" way of adding metadata to a document — the <meta> element.
For example, we can specify the document's character encoding as:

      ` <meta charset = 'utf-8' /> `

This element specifies the document's character encoding -- the character set that the document is permitted to use. utf-8 is a universal character set that includes pretty much any character from any human language. So, our web page will be able to handle displaying any language. 

If you set your character encoding to ISO-8859-1, for example (the character set for the Latin alphabet), your page rendering may appear all messed up:
<br />
![image](https://user-images.githubusercontent.com/51270026/232665983-3292a1af-85a3-43b6-9e7c-3ad74f75bc45.png)

Many <meta> elements include name and content attributes:
**name** specifies the type of meta element it is; what type of information it contains.
**content** specifies the actual meta content.

### Layout

- `nav` contains the main navigation functionality for the page. Secondary links, etc., would not go in the navigation.
- `main` is for content unique to this page. Use <main> only once per page, and put it directly inside <body>. Ideally this shouldn't be nested within other elements.
      
- `article` encloses a block of related content that makes sense on its own without the rest of the page (e.g., a single blog post). 
- `section` is similar to `article`, but it is more for grouping together a single part of the page that constitutes one single piece of functionality 
- `aside` contains content that is not directly related to the main content but can provide additional information indirectly related to it (glossary entries, author biography, related links, etc.).
- `header` represents a group of introductory content. If it is a child of `body` it defines the global header of a webpage, but if it's a child of an - `article` or `section` it defines a specific header for that section (try not to confuse this with titles and headings).
- `footer` represents a group of end content for a page.

      
# Nodejs
Node.js is a runtime for built on top of Chrome's V8. It allows you to develop apps in JavaScript outside of the browser. It's single threaded non blocking and asynchronous. This is acheived by the use of an event loop at the core of Node.js.
     <br />
     <br />
     ![image](https://user-images.githubusercontent.com/51270026/232671021-2fad736f-d747-4999-b22a-d62d58098552.png)

### Executing Node
- **Node REPL(Read-Eval-Print Loop)** <br />
  It is a command-line interface that allows you to execute JavaScript code and interact with it in real-time.
  
     `To launch the Node REPL, you can open your terminal or command prompt and type node followed by the Enter key. You will then see the Node REPL  prompt `(>)`, indicating that you can start entering JavaScript code. `
 
- **Script file:** <br /> You can create a JavaScript file with the .js extension and write your Node.js code in it. You can then execute the script file by running the node command followed by the file name. For example, `node index.js`.

- **Command line arguments:** <br /> You can pass command line arguments to a Node.js script by running the node command followed by the file name and the arguments. For example, `node index.js arg1 arg2`.

- **Using a package.json script:** <br />If you have a Node.js project with a package.json file, you can define scripts that can be executed with the npm run command. For example, if you have a script called start defined in your package.json file, you can run it by running the command `npm run start`.
      
### Globals (CommonJS)

- `__dirname`: This global is a `String` value that points the the directory name of the file it's used in.
- `__filename`: This global is a `String` value that points the the file name it's written in.
- `exports`: The `exports` object is a reference to the module's `module.exports` object. It allows you to degine and expose functions, objects and values that can be used by other modules that `require` this module. For example, if we have a module that exports a function, we can define the function as follows:
     ```
     exports.myFunction = function() {
          console.log('Hello world!')
     };
     ```

- `module`: The `module` object is the reference to the current module, and it contains information about the module, such as its filename, exports object, and other metadata. We can use the `module.exports` property to define what your module exports.
     ```
     module.exports = {
          myFunction: function() {
               console.log('Hello World!)
          },
          myNumber: 10,
          myName: 'Sabin Thapa'
     }
     ```
     This exports an object that contains a function and a number, which can be used by other modules that require this module.

- `require`: The `require` function is used to load modules in Node.js. It takes a module name or file path as an argument, and it returns the exports object of the loaded module.
     ```
     const myModule = require('./myModule')
     ```
     This loads the myModule.js file and returns its exports object, which can then be used to access the functions and values exported by the module.

- `process`:  An Object that contains all the context you need about the current program being executed. Things from env vars, to what machine you're on. 
     > The process object is an instance of the EventEmitter class, and it provides information about the current Node.js process, such as the command-line arguments, environment variables, and the process ID.

### Modules
A module is a reusable chunk of code that has its own context. That way modules can't interfere with or polute the global scope.

In the example above, we saw the commonJS syntax of exporting modules. Now, let's see the ES6 syntax: <br />
     
     ```
     //test.js
     export const action = () => {
          // code here
     }
     
     ```
     To import we use:
     ```
     import {action} from './test'
     ```
> Note: This is known as a named export

### File System
With Nodeks, we can create, edit, remove, read, stream & do more stuffs with files.
> `fs` is the module used to work with files.

- **Reading and writing a file**: <br />
We can use readFile and writeFile property of commonJS to read and write a file.
The implementation of files can be found in the [folder](/fs/).

### Error Handling

- **Try-catch blocks**:
     When writing synchronous code, wrap the code that can potentially throw an error in a try-catch block. This will allow you to catch and handle errors as they occur.

     ```
     try {
          const result = someSyncFunction(); // function that may throw an error
          console.log(result);
          } catch (error) {
          console.error('An error occurred:', error);
          }
     ```

- **Callbacks**:
     When writing asynchronous code, use callbacks to handle errors. The convention for Node.js callbacks is to pass an error object as the first parameter to the callback function. Check for the error object in the callback and handle it appropriately.

     ```
     someAsyncFunction((error, result) => {
          if (error) {
               console.error('An error occurred:', error);
               return;
          }
          console.log(result);
          });
     ```

- **Promises**:
      Promises are a newer way to handle asynchronous code and provide a cleaner syntax than callbacks. Use the .catch() method on a promise to catch and handle errors.

     ```
     someAsyncPromise()
          .then(result => {
               console.log(result)
          })
          .catch(error => {
               console.log('ERROR!')
          })
     ```

- **Error Middleware**:
     Middleware functions can be used to handle errors globally in an application. Middleware functions can be added to the middleware stack with app.use() or router.use(), and will be executed when an error occurs in the application.

     ```
     app.use((error, req, res, next) => {
          console.error('An error occured:', error);
          res.status(500).send('Internal server error!')
     })
     ```

     **Note**
     >_Synchronous programming executes tasks or functions in a sequential order, meaning that the program will wait for one task to finish before moving on to the next. In other words, synchronous programming is blocking, as it will block the program from executing any other code until the current task is finished. Synchronous functions are usually written using the traditional function syntax, which blocks the program's execution until the function returns a value._

     > _Asynchronous programming, on the other hand, executes tasks or functions independently of the main program thread, meaning that the program can continue to execute other code while an asynchronous task is being processed. Asynchronous programming is non-blocking, as it allows the program to execute other tasks or functions while waiting for an asynchronous task to complete. Asynchronous functions are usually written using the callback, promise or async/await syntax._ 

     > _When you use the await keyword in an async function, it essentially pauses the execution of that function until the awaited promise resolves or rejects. If the promise rejects with an error, the function will throw an exception, just as it would with synchronous code. In this case, the try-catch block can be used to catch and handle the error in a way that makes sense for your application._

### Packages
We can create a package(package.json) using the `npm init` command. Some popular npm commands:
- `npm install`: installs given module(s) from remote registries or local sources
- `npm test`: runs the `test` script in your package.json
- `npm uninstall`: will uninstall a given package.

     ```
     npm install package1 package2 package3 --save
     ```
     _You can install as many packages with one command as you like. The --save flag is to let NPM know to update the package.json's dependency field with all of these packages. We need this because we don't want to check in the downloaded packages into source code for many reason. So how does anyone else on your team, or even you on another machine know what packages this app needs? Well NPM will save the package names and versions so NPM on another machine can look at that and install from there. Your package.json should have updated._