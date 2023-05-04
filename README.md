# ECOMMERCE - Backend
>This is my first relatively large project that uses a relational database. Although it is still under development, I believe it is quite complete, and over time, I will make maintenance and improvements. I hope you like it! 😺 <br/>   - Lucas Winicius

Up to this moment (May 2nd, 2023), this API is not yet finalized, so some routes may undergo modifications. Therefore, I ask that you always pay attention to this documentation. I hope you like it!

<hr/>

## **Installation guide**

### Cloning the repository and installing dependencies:

```bash
git clone https://github.com/Lucas-Winicius/ecommerce.git
```

```bash
cd ecommerce
```

**Install dependencies:**

```bash
npm install
```
Now that everything is installed, let's configure the environment variables.
<hr/>

## *Configuring the `.env` file.*
Create a file called **.env** at the root of the project, following the parameters of the **.env.example** file.
```bash
PORT=3000
DATABASE_URL="postgresql://username:pass@host/database"
JWT_SECRET="random string"
```

## *Starting the project.*
To do this, it's very simple. Just execute the commands below. The first one will create the database migrations, and the second one will start your project on the port defined in the .env file.

```bash
npm run build
```

```bash
npm run start
```

For development, I recommend the command below:

```bash
npm run start:dev
```
With all the steps complete, we now need to understand a little about all the routes. Or, if you prefer to understand on your own, just read the files inside **/src/routes**.

## *Routes*
Before we begin, it's important to remember that the routes indicated by * require prior login.

### *`/user - POST`*
This route will create the user's login and automatically return the authentication cookie.

**Parameters on body:**
 - `name` - *required parameter - String*
 - `email` - *required parameter - String*
 - `password` - *required parameter - String*

### *`*/user - GET`*
This route will return the logged-in user, which will be sent by the cookie.

**Parameters on body:**
 - `none` - *Login information will be sent by cookie.*

### *`/login - POST`*
This route will return the login cookie and more information about the user in *`$.data´*.

**Parameters on body:**
 - `email` - *required parameter - String*
 - `password` - *required parameter - String*

### *`/logout - DELETE`*
This route will delete the user's authentication cookie.

**Parameters on body:**
 - `none` - *This route does not use parameters in the body.*

### *`/product - GET`*
This route will return all registered products.

**Parameters on body:**
 - `none` - *This route does not use parameters in the body.*

### *`/product/:id - GET`*
This route will return a product.

**Parameters on body:**
 - `none` - *This route does not use parameters in the body.*

### *`*/product - POST`*
This route will register a new product.

**Parameters on body:**
 - `name` - *required parameter - String*
 - `description` - *required parameter - String*
 - `price` - *required parameter - Number*
 - `promotion` - *required parameter - Float*
 - `promotionPrice` - *required parameter - Float*

### *`*/product/:id - DELETE`*
This route will delete the indicated product.

**Parameters on body:**
 - `none` - *This route does not use parameters in the body.*

### *`*/product/:id - PATCH`*
This route will update the indicated product.

**Parameters on body:**
 - `name` - *required parameter - String*
 - `description` - *required parameter - String*
 - `price` - *required parameter - Number*
 - `promotion` - *required parameter - Float*
 - `promotionPrice` - *required parameter - Float*

<hr/>

**Thank you for reading up to this point.**

<div style="display: flex;">
  <a href="https://www.linkedin.com/in/lucas-winicius-03571725a"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
  <a href="https://instagram.com/sr_pumpkin_"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"></a>
</div>
