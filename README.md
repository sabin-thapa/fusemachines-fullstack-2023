# fusemachines-fullstack-2023

### Fusemachines internship logs and learnings 
There are branches for each day. Since the first day was our orientation, there's no branch for it. And the branch for the second day is the main branch itself. The consecutive branches for all the other days are present.

- [Day2 Docs](#day2)
- [Day3 Branch](https://github.com/sabin-thapa/fusemachines-fullstack-2023/tree/day3)  | [Day3 Docs](#day3)
- [Day4 Branch](https://github.com/sabin-thapa/fusemachines-fullstack-2023/tree/day4) | [Day4 Docs](#day4)
- [Day5 Branch](https://github.com/sabin-thapa/fusemachines-fullstack-2023/tree/day5) | [Day5 Docs](#day5)
- [Day8 Branch](https://github.com/sabin-thapa/fusemachines-fullstack-2023/tree/day8) | [Day8 Docs](#day8)
- [Day9 Branch](https://github.com/sabin-thapa/fusemachines-fullstack-2023/tree/day9) | [Day9 Docs](#day9)


``` Apr 17 - Day 1 ``` <br /> 
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

``` Apr 18 - Day 2 ``` <a name="day2"> </a>
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
     ```js
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
     ```js
     const myModule = require('./myModule')
     ```
     This loads the myModule.js file and returns its exports object, which can then be used to access the functions and values exported by the module.

- `process`:  An Object that contains all the context you need about the current program being executed. Things from env vars, to what machine you're on. 
     > The process object is an instance of the EventEmitter class, and it provides information about the current Node.js process, such as the command-line arguments, environment variables, and the process ID.

### Modules
A module is a reusable chunk of code that has its own context. That way modules can't interfere with or polute the global scope.

In the example above, we saw the commonJS syntax of exporting modules. Now, let's see the ES6 syntax: <br />
     
```js
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
With Nodejs, we can create, edit, remove, read, stream & do more stuffs with files.
> `fs` is the module used to work with files.

- **Reading and writing a file**: <br />
We can use readFile and writeFile property of commonJS to read and write a file.
The implementation of files can be found in the [folder](/fs/).

### Error Handling

- **Try-catch blocks**:
     When writing synchronous code, wrap the code that can potentially throw an error in a try-catch block. This will allow you to catch and handle errors as they occur.

     ```js
     try {
          const result = someSyncFunction(); // function that may throw an error
          console.log(result);
          } catch (error) {
          console.error('An error occurred:', error);
          }
     ```

- **Callbacks**:
     When writing asynchronous code, use callbacks to handle errors. The convention for Node.js callbacks is to pass an error object as the first parameter to the callback function. Check for the error object in the callback and handle it appropriately.

     ```js
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

     ```js
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

     ```js
     npm install package1 package2 package3 --save
     ```
     _You can install as many packages with one command as you like. The --save flag is to let NPM know to update the package.json's dependency field with all of these packages. We need this because we don't want to check in the downloaded packages into source code for many reason. So how does anyone else on your team, or even you on another machine know what packages this app needs? Well NPM will save the package names and versions so NPM on another machine can look at that and install from there. Your package.json should have updated._

### CLI
A reddit CLI is built inside the  [folder]('./reddit-cli')

### Servers

- **http server**: <br/>
     We can create a http server as follows:
     1. Import the http module: <br />
          ```js
          import http from 'http';
          ```
     2. Use the createServer method of https as: <br/>
          ```js
               const server = http.createServer((req, res) => {
               if (req.method === 'POST') {
                    let body = ''

                    req.on('data', chunk => {
                         body += chunk
                    })

                    req.on('close', () => {
                         console.log(body)
                    })

                    res.writeHead(201)
                    res.end('hi')
               }
               })

               server.listen(port, host, () => {
               console.log(`Server running on ${host} and ${port}`)
               })
          ```

However, this is the hard way of creating a server. There is an awesome packaged, express, that makes creating servers in Node.js a breeze. 

### Express

Folder containing the [code]('./server/server.mjs')  

```js
npm i express body-parser morgan
```
**express**: a framework to build servers <br />
**body-parser**: a middleware that parses incoming requests <br />
**morgan**: a middleware for logging incoming requests

```js
import express from 'express'
import bp from 'body-parser'
import morgan from 'morgan'

const app = express()

// Middlewares
app.use(bp.urlencoded({extended: true}))
app.use(bp.json())
app.use(morgan('dev'))

//Routes

const db = []

app.post('/todo', (req, res) => {

const newTodo = {
     id: Date.now(),
     text: req.body.text
}
db.push(newTodo)

res.json(newTodo)
})

app.get('/todo', (req, res) => {
res.json(db)
})

app.get('/todo/:id', (req, res) => {
const todo = db.find(t => t.id === Number(req.params.id));

if (todo) {
     res.json({ data: todo });
} else {
     res.status(404).json({ message: "Todo not found" });
}
});

app.listen(8000, () => {
console.log('EXPRESS SERVER RUNNING')
})
```

### Testing
Jest is a popular testing framework for Node.js that is built by Facebook. Jest is known for its ease of use, speed, and powerful features such as built-in mocking and assertion libraries.

1. Install Jest as a dev dependency in your project using npm <br />
     ```js
     npm install --save-dev jest
     ```
2. Create a directory called __tests__ in the root of your project. Jest will automatically detect any files in this directory that have a .test.js or .spec.js extension and run them as tests.

3. Write your test code in a file inside the __testing__ directory. Here's an example test file:
     ```js

     function sum(a, b) {
     return a + b;
     }

     test('adds 1 + 2 to equal 3', () => {
     expect(sum(1, 2)).toBe(3);
     });

     ```
4. Add a test script to your package.json file that runs Jest:
     ```js
     {
          "scripts": {
          "test": "jest"
          }
     }

     ```
5. Run the test using npm: <br />
     ```js
     npm test
     ```
     > Note: The practice of testing can be found in [this folder](./testing).
 <br /> 

<hr />
      
``` Apr 19 - Day 3 ``` <a name="day3"> </a>

### Node API Implementation with Express and MongoDB - [Project Folder]('./node-api')
I've followed a crash course on [YouTube]('https://www.youtube.com/watch?v=9OfL9H6AmhQ&ab_channel=Devtamin'). 
<br />
The following steps are required:
1. Set up your project - Create a new Node.js project and install the necessary dependencies such as Express and the MongoDB driver.

2. Set up your database connection - Connect to your MongoDB database using the MongoDB driver. This can be done in a separate module or file.

3. Define your API endpoints - Create your Express router and define your API endpoints. For example, you might have a GET endpoint to retrieve all items in a collection, a POST endpoint to add a new item to the collection, a PUT endpoint to update an existing item, and a DELETE endpoint to remove an item from the collection.

The server implementation is shown below:

```js
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))
const mongoose = require("mongoose");

const Product = require("./models/productModel");

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Response from the server!");
});


// GET Request Implementation
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

//Get a specific product
app.get('/products/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

// POST Request Implementation
app.post("/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

//Update/Edit PUT Request implementation

app.put('/products/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body)
        
        //if the product does not exist in the database:
        if(!product) {
           return res.status(404).json(`The product with the ID ${res.params.id} does not exist!`)
        }

        const updatedProduct = await Product.findById(req.params.id)

        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})


// DELETE API for products

app.delete('/products/:id', async(req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)

        //If the product does not exist
        if(!product) {
            return res.status(404).json(`The product with the ID ${req.params.id} does not exist`)
        }

        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://admin:<password>@internship.ddm4lh4.mongodb.net/nodeAPI?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to the DB!");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});


```

The code for the model creation is showm below:

```js
const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
        type: String,
        required: [true, "Please enter the product name!"]
    },
    quantity: {
        type: Number,
        required: [true, 'Enter the quantity!'],
        default: 0
    },
    image: {
        type: String, 
        required: false
    },
    price: {
        type: Number,
        required: true 
    }
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema)

module.exports = Product;
```

<hr />

``` Apr 20 - Day 4 ``` <a name="day4"> </a>

A basic CRUD implementation using Node, Express and MongoDB is done. A users collection is created in MongoDB and all the CRUD operations are done in
that collection.

The server.js file consists of the server code where the server is started and our application is connected to mongoDB via mongoose. Here, we've made use of the express routes to clean of the main server file and all the routes are handled in a different routes file.
```js
//server.js
const express = require("express");
const path = require("path");
const app = express();
const logger = require("./middleware/logger");
const mongoose = require('mongoose')

const PORT = process.env.PORT || 5002;

//SET STATIC FOLDER
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json())

//Init Middleware
app.use(logger);

app.use('/api/users', require('./routes/api/users'))

mongoose.connect('mongodb+srv://admin:<password>@internship.ddm4lh4.mongodb.net/nodeAPI?retryWrites=true&w=majority')
  .then(() => {
    console.log('DB CONNECTED!')
  }).catch(err => {
    console.log('err: ', err.message)
  })

app.listen(PORT, () => console.log("Server started on Port: ", PORT));


```

A folder named routes is created and for all the apis, an api folder is created. Inside that folder, a users.js file is created to handle all the api of the users collection.

```js
const express = require("express");
const router = express.Router();
const Users = require("../../models/userModel");
const mongoose = require("mongoose");

//Get all users
router.get("", async (req, res) => {
  const users = await Users.find({});
  res.json(users);
});

//Get a single user
router.get("/:id", async (req, res) => {
  try {
    // res.json(users.filter((user) => user.id === parseInt(req.params.id)));
    const user = await Users.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a user
router.post("/", async (req, res) => {
  const newUser = {
    name: req.body.name,
    email: req.body.email,
    status: "active",
  };

  if (!newUser.name || !newUser.email) {
    return res
      .status(400)
      .json({ message: "Please enter your name and email!" });
  }
  const user = await Users.create(newUser);
  res.json(user);
});

router.put("/:id", async (req, res) => {
  try {
    const user = await Users.findByIdAndUpdate(req.params.id, req.body);
    console.log(req.params.id);
    if (!user) {
      console.log(`The user with the ID, ${req.params.id} does not exist`);
    }

    const updatedData = await Users.findById(req.params.id);
    res.status(200).json(updatedData);
  } catch (err) {
    console.log(err.message);
  }
});

//Delete a single user
router.delete("/:id", async(req, res) => {
  try {
    const user = await Users.findByIdAndDelete(req.params.id)
    if (!user) {
      console.log(`The user with the ID, ${req.params.id} does not exist`);
    }
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

```

> Note: MongoDB provides a id with the key _id by default while creating an object (POST request). So, there's no need to explicitly add an ID while creating a POST request.

The model for the UserSchema can be found inside the models folder.

```js
///models/userModel.js
const mongoose = require("mongoose");

const usersSchema = mongoose.Schema(
  {
    id: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("Users", usersSchema);
module.exports = Users;

```

We've used mongoose to create the usersSchema with the fields, id, name, email and status. Each field has a type and some additional properties.

For example, the name field is defined as a required string, while the status field is not required.

After creating a schema, model is created using:

```js
const Users = mongoose.model('Users', usersSchema);
```
Note: <br />
_Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a schema-based solution to model your application data with MongoDB and adds additional features and capabilities to make it easier to work with MongoDB from Node.js._

_Mongoose allows you to define models for your MongoDB collections, which define the shape of the documents within that collection. It also provides features such as validation, middleware, querying, and hooks._

_With Mongoose, you can connect to a MongoDB database and perform CRUD (Create, Read, Update, Delete) operations on your data. Mongoose also supports advanced features such as transactions, population (for referencing other collections), and aggregation._

Here's the users collection in the MongoDB database.
![image](https://user-images.githubusercontent.com/51270026/233261848-0e86240e-be97-4dbd-953b-10b238339ab7.png)

<hr />

``` Apr 21 - Day 5 ``` <a name="day5"> </a>

# NodeJS Authentication 
[Project Folder](./day5/jwt-auth/)

Authentication is the process of verifying the identity of a user or system. In Node.js, there are several ways to implement authentication for web applications. Here are some common authentication methods:

- Session-based Authentication: This method uses a session to store user data on the server-side. When a user logs in, a session is created and a unique session ID is generated. This ID is stored in a cookie on the client-side. Each time a user makes a request to the server, the session ID is sent along with the request, allowing the server to identify the user and provide access to protected resources.

- Token-based Authentication: This method uses tokens to authenticate users. When a user logs in, a token is generated and sent to the client. The client then stores the token and sends it along with each subsequent request to the server. The server can then verify the token and allow access to protected resources.

- OAuth 2.0: OAuth 2.0 is an open standard for authentication and authorization that allows users to grant third-party applications access to their resources on a server. OAuth 2.0 provides a standardized way to authenticate users using third-party applications without giving them access to sensitive data.

- Passport.js: Passport.js is a popular Node.js middleware that provides a simple and modular way to implement authentication. It supports various authentication methods such as local, social, and multi-factor authentication.

These are just a few of the many ways to implement authentication in Node.js. The choice of authentication method depends on the specific requirements of your application.

I've implemented the Token-based authentication using the JWT(JSON Web Tokens). Some of the other tools and libraries used are discussed below.

1. **JOI for Data Validation** <br />
Joi is a powerful data validation library for Node.js that can be used to validate and sanitize user input to prevent security vulnerabilities and    data corruption. Here's how to use Joi for data validation in Node.js:
- Install joi using: <br />
  ``` npm install @hapi/joi ```
      
- Import Joi: <br />
  After installing Joi, you can import it in your Node.js file using the following line of code: <br />
      
  ``` const Joi = require('@hapi/joi') ```
      
- Define a Schema: <br />
  A schema is a set of rules that define the structure and constraints of the data you want to validate. You can define a schema using the following syntax: <br />
      
  ```js
  const schema = Joi.object({
  // define schema properties here
  });
  ```

  _You can use various Joi methods to define different types of properties, such as .string(), .number(), .date(), etc._

- Validate the data: <br />
  Once you have defined a schema, you can use it to validate user input. You can use the .validate() method to validate the data and check if it meets the schema requirements. For example: <br />
  js
  ```
      const result = schema.validate({ /* user input object */ });

      if (result.error) {
        // data is invalid
      } else {
        // data is valid
      }

  ```
  The code for validation is shown below:
  ```js
  //day5/jwt-auth/validation.js
  const joi = require('@hapi/joi')

  //Register validation
  const registerValidation = (data) => {
      const validationSchema = joi.object({
          name: joi.string().min(6).required(),
          email: joi.string().email().min(6).required(),
          password: joi.string().min(6).required()
      })
      return validationSchema.validate(data)
  }

  //Login Validation
  const loginValidation = (data) => {
      const validationSchema = joi.object({
          email: joi.string().email().min(6).required(),
          password: joi.string().min(6).required()
      })
      return validationSchema.validate(data)
  }

  module.exports.registerValidation = registerValidation
  module.exports.loginValidation = loginValidation

  ```

2. **JWT for token based authentication** <br />
JSON Web Tokens (JWT) are a popular way of handling token-based authentication in Node.js applications. JWT is a compact, self-contained mechanism for transmitting data between parties as a JSON object. JWTs can be used to verify the authenticity of a user and ensure that they have access to the requested resources.
<br />
The JWT authentication process works like this:

- When a user logs in, their credentials are verified by the server.
- If the credentials are valid, a JSON web token is generated and sent back to the client.
- The client then includes the JWT in subsequent requests to the server.
- The server verifies the JWT and allows access to the requested resource if the token is valid.

  To implement JWT authentication in a Node.js application, you can use a library like ```jsonwebtoken```. Here's a simple example: <br />

  ```js
  const jwt = require('jsonwebtoken');

  // Generate a JWT
  const payload = { id: 123 };
  const secret = 'mysecretkey';
  const token = jwt.sign(payload, secret);

  // Verify a JWT
  const decoded = jwt.verify(token, secret);
  console.log(decoded); // { id: 123 }

  ```
  In this example, we generate a JWT using the ```jwt.sign()``` method, passing in a payload and a secret key. The payload is typically an object containing information about the user, such as their user ID. The secret key is used to sign the token, ensuring that it hasn't been tampered with.

  To verify a JWT, we use the ```jwt.verify()``` method, passing in the token and the secret key. If the token is valid, the method returns an object containing the decoded payload.

  The implementation of the jwt verication is as follows:
  ```js
  const jwt = require('jsonwebtoken')

  const authVerifier = (req, res, next) => {
      const token = req.header('auth-token')
      if(!token) res.status(401).send('Access Denied')

      try {
          const verified = jwt.verify(token, process.env.TOKEN_SECRET)
          req.user = verified
      } catch (error) {
          res.status(400).send('Invalid token')
      }

      next()
  }

  module.exports = authVerifier
  ```

3. **Bycrypt library for hashing the password** <br />
```bcrypt``` is a popular library for password hashing in Node.js. It provides a way to securely hash passwords so that they can be safely stored in a database.

    Here's an example of how to use bcrypt to hash a password:
    ```js
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    ```

    Here, the parameter to the ```genSalt()``` function determines how many times the password will be hashed which affects the time it takes to generate the hash. A higher number of rounds results in a more secure hash, but also takes longer to generate. <br />
    Here's an example of how to use bcrypt to check a password against a hash:

    ```js
      const bcrypt = require('bcrypt');

      const plaintextPassword = 'mypassword';
      const storedHash = '$2b$10$JmE.R/bL1fD.gyLwFKKjC.gPmSyxWjr2Q9XjKqxFnH1LhvkFyKj6y';

      bcrypt.compare(plaintextPassword, storedHash, (err, result) => {
        if (err) {
          // Handle error
        } else if (result) {
          // Passwords match
        } else {
          // Passwords don't match
        }
      });
    ```

_The ```compare``` function takes the plaintext password and the stored hash as arguments and returns a boolean indicating whether they match._

<hr />

``` Apr 24 - Day 8 ``` <a name="day8"> </a>

# MERN STACK BASIC AUTHENTICATION (Login and Register)
[Project Folder](./day8/auth-project)

A basic authentication application is developed using the MERN stack. Contuniing learning authentication from my last day, I've explored about the following new topics. <br />

- **CORS** <br />
CORS stands for Cross-Origin Resource Sharing. It is a security feature built into web browsers that restricts web pages from making requests to a different domain than the one that served the web page.

For example, if a JavaScript code running on a web page served by example.com tries to make a request to api.example.net, the browser will prevent the request from being sent by default. This is to prevent malicious scripts from accessing sensitive data on other domains.

To enable CORS, the server needs to send specific headers in its responses. These headers include Access-Control-Allow-Origin, Access-Control-Allow-Headers, and Access-Control-Allow-Methods. The Access-Control-Allow-Origin header is the most important one, and it specifies the domain that is allowed to access the server's resources.
In Node.js, the cors middleware can be used to handle CORS headers. This middleware can be easily installed using npm and can be used as follows:

```js
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

// Your routes go here

```
This will enable CORS for all routes in your application. You can also customize CORS for specific routes or domains by passing options to the cors middleware.

1. **The Register Page** <br />
      It contains a simple form that takes in the user's name, email and password and upon successful task, a user is created in the MongoDB database. <br />

      ![image](https://user-images.githubusercontent.com/51270026/234172277-b1b9b668-f2f7-4f42-9bfc-aea17328de85.png)

      After filling the fields, a user is created: <br />
      ![image](https://user-images.githubusercontent.com/51270026/234172376-7f1d279b-50ef-4673-8ed3-4c1a54219f9f.png)

      The following image shows the record of the user in the database: <br />
      ![image](https://user-images.githubusercontent.com/51270026/234172484-591fba79-3e89-45a4-bdad-e8452ce2248a.png)

      Hashing of the password can be done by using libraries such as ```bycrypt``` like in the previous project.

2. **The Login Page** <br />
      It contains a simple form to take in the user's email and password as input. <br />
      ![image](https://user-images.githubusercontent.com/51270026/234172677-f280cc6a-7bb7-47ff-803f-ca3c31f271df.png)

      If the user exists, the user is successfully logged in, otherwise not. The following image shows a successful login. <br />
      ![image](https://user-images.githubusercontent.com/51270026/234172754-64f916a6-2bfa-4c4f-ade4-101ddcf5580f.png)

      The following is an example of incorrect login: <br />
      ![image](https://user-images.githubusercontent.com/51270026/234172841-304de65f-9b4c-4b59-bea2-7a23e113b77e.png)


The frontend implementation of the Regsiter page is done in react as follows: <br />

```js
import React, { useState } from "react";

const Register = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:1337/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    const data = await response.json();
    if (data) {
      alert("Registration success: ");
    }
    console.log(data, "data");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        height: "60vh",
      }}
    >
      <h1 style={{marginTop: "20%"}}>Register User</h1>
      <form onSubmit={registerUser} style={{ margin: "auto" }}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Username"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;


```

Routing is handled using the library ```react-router-dom``` as follows: <br />

```js
import React from 'react'
import {createBrowserRouter, Router, RouterProvider} from 'react-router-dom'

// Import components
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

// Root Routes
const router = createBrowserRouter([
  {
    path: "",
    element: <>HELLO</>
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },

 
])


const App = () => {
  return (
    <main>
      <RouterProvider router={router}>

      </RouterProvider>
    </main>
  )
}

export default App
```
<hr />

``` Apr 25 - Day 9 ``` <a name="day9"> </a>

# User role based permissions <br />
[Project Folder](./day9/)

It is very important to provide permissions to the users based on their roles. For example, a teacher in an e-learning application has different permissions than a student in the same application. Despite the fact that both of them are __authenticated__, they might not be __authorized__ to do certain tasks. Therefore, the concepts of user role based permissions come in.

User roles and permissions are needed to control access to specific functionality or data within an application. They are a fundamental aspect of application security and can help prevent unauthorized access or misuse of resources.

Consider an application with the following endpoints: <br />

```js
app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/dashboard', (req, res) => {
    res.send('Dashboard!')
})

app.get('/admin', (req, res) => {
    res.send('Admin Page')
})
```
- Every user can access the Home Page route.
- Only authenticated user should be able to access the Dashboard.
- Only user with the role ```admin``` should be able to access the admin route.

For this, let's create a mockup database of users and the roles: <br />

```js
//data.js
const ROLE = {
    ADMIN: 'admin',
    GENERAL: 'general'
}

// Dummy Database for users and projects

const users = [
    {id:1, name: "Sabin", role: ROLE.ADMIN},
    {id:2, name: "Sajan", role: ROLE.GENERAL},
    {id:3, name: "Umesh", role: ROLE.GENERAL},
    {id:4, name: "Gaurab", role: ROLE.GENERAL},
]

const projects = [
    {id: 1, name: "Sabin's project", userId: 1},
    {id: 2, name: "Sajan's project", userId: 2},
    {id: 3, name: "Umesh's project", userId: 3},
    {id: 4, name: "Gaurab's project", userId: 4},
]

```
Here, there are two types of roles: ADMIN and GENERAL. User have access to their own projects and admin can access the projects of everyone.

Let's create a middleware that checks if the user exists in the database: <br />

```js
const {users} = require('../data')

module.exports =  setUser = (req, res, next) => {
    const userId = req.body.userId
    if(userId) {
        req.user = users.find(user => user.id === userId)
    }
    next()
}
```
This middleware can be used in the app by doing: <br />
```js
const setUser = require('./middlewares/setUser')
app.use(setUser)
```
- **Middleware for basic authentication**

  ```js
  const authUser = (req, res, next) => {
    if (!req.user) {
      res.status(403);
      return res.send("You are not logged in!");
    }
    next();
  };
  ```
  Now, for every get request, if the body contains a user ID that's in the database, then the user is considered to be authenticated. It's the most basic form of authentication.

  The routes can be now modified as follows:

  ```js

  app.get('/dashboard', authUser, (req, res) => {
      res.send('Dashboard!')
  })

  app.get('/admin', authUser, (req, res) => {
      res.send('Admin Page')
  })
  ```

  _Now, only authenticated users can access these routes. However, anyone can access the admin route too._

- **Middleware for admin route**

  ```js
  const authRole = (role) => {
    return (req, res, next) => {
      if (req.user.role !== role) {
        res.status(401);
        return res.send("Not Allowed");
      }
      next();
    };
  };
  ```

  We can use this middleware as follows:
  ```js
    app.get('/admin', authUser, authRole(ROLE.ADMIN), (req, res) => {
      res.send('Admin Page')
  })
  ```
  So, if the user role is admin then the callback function is executed. Otherwise, an error with the status code 401 is thrown.

- **Project Routes for General Users and Admins** <br/>
Each user has the access to their own project and the admin has the access to the projects of every user. However, let's implement a logic that will only allow the user to delete their project. <br />

The basic projects routes shall look like this:

```js
router.get('/', (req, res) => {
    res.send('projects')
})

router.get('/:projectId', (req, res) => {
    res.json(req.project)
})

router.delete('/:projectId', (req, res) => {
    res.send('Deleted project!')
})
```
Implementing permissions for these routes. Firstly, we can add the middleware authUser to verify that the user is authenticated:
```js
router.get('/', authUser, (req, res) => {
    res.send('projecst'))
```
We can create a middleware that will display all the projects if the user's role is admin, otherwise the respective project of the user as:
```js
const scopedProjects = (user, projects) => {
    if(user.role === ROLE.ADMIN) return projects
    return projects.filter(project => project.userId === user.id)
}
```
The route then becomes:
```js
router.get('/', authUser, (req, res) => {
    res.json(scopedProjects(req.user, projects))
})
```
- **Middleware to set project if exists**
  ```js
  const {projects} = require('../data')

  module.exports = setProject = (req, res, next) => {
      const projectId = parseInt(req.params.projectId)
      req.project = projects.find(prj => prj.id === projectId)

      if(req.project === null) {
          res.status(404)
          return res.send('Project does not exist!')
      } 
      next()
  }
  ```
  This middleware will check and see if the requested project exists in the database. If not, a 404 error is thrown.

- **Permission to view the project <br />**
  The permission to view the project can be implemented as follows:
  ```js
    const canViewProject = (user, project) => {
      return(
          (user && user.role === ROLE.ADMIN) || (project && project.userId) === user.id
      )
  }
  ```

- **Middleware to perform GET request on a specific project**
  
  ```js
      const authGetProject = (req, res, next) => {
      console.log(req.user, "USER", req.project, "Project");
      if (!canViewProject(req.user, req.project)) {
        res.status(401);
        return res.send("Not Allowed");
      }
      next();
    };
  ```
- **Middleware to perform DELETE request on a specific project**
  ```js
  const authDeleteProject = (req, res, next) => {
  if (!canDeleteProject(req.user, req.project)) {
    res.status(401);
    return res.send("Not Allowed");
  }
  next();
  };
  ```
  This middlewares will check and see if the user has access to view and delete the project respectively.
  Now, the final routes will look like this: <br />

  ```js
    router.get('/', authUser, (req, res) => {
      res.json(scopedProjects(req.user, projects))
  })

  router.get('/:projectId', setProject, authGetProject, (req, res) => {
      res.json(req.project)
  })

  router.delete('/:projectId', setProject, authDeleteProject, (req, res) => {
      res.send('Deleted project!')
  })
  ```
  
  ## Sample Requests
  - GET (Homepage)
  ![image](https://user-images.githubusercontent.com/51270026/234224849-8ed9abf8-5c73-43d6-b596-47cf5e911116.png)
      
  - GET (Dashboard without user)
  ![image](https://user-images.githubusercontent.com/51270026/234225088-e0f706e6-544e-4761-b048-5876be290fbb.png)
  
  - GET (Dashboard with user)
  ![image](https://user-images.githubusercontent.com/51270026/234225254-86974a9f-05a4-4f97-9597-76ac53118878.png)
  
  - GET (Admin page with general user)
  ![image](https://user-images.githubusercontent.com/51270026/234225347-69cdebaf-dbaa-4532-82aa-edeaa04d424e.png)

  - GET (Admin page with Admin credentials)
  ![image](https://user-images.githubusercontent.com/51270026/234225434-6fee13c5-90fc-4fe7-9e98-2ba86764e121.png)
      
  - GET (Projects- Admin)
  ![image](https://user-images.githubusercontent.com/51270026/234225597-a624a6d0-870a-41d6-9c7e-d2b97c9b326c.png)
      
  - DELETE (Own Project)
  ![image](https://user-images.githubusercontent.com/51270026/234225763-e3259552-2b2a-422b-ba29-bb674862a901.png)


