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
 - `name` - *optional parameter - String*
 - `description` - *optional parameter - String*
 - `price` - *optional parameter - Number*
 - `promotion` - *optional parameter - Float*
 - `promotionPrice` - *optional parameter - Float*

Now that you know how to use the available routes, let's learn more about the available returns.

## *Returns*
In general, all returns will have a pattern, whether in case of success or in case of error.

### **On Error**
In case of error, the returned structure will be:

```json
{
  "success": false,
  "status": 500,
  "message": "There was an error that we couldn't find the reason for.",
  "secondaryMessage": "It seems like there's a ghost in the system! We tried to find the error, but it mysteriously vanished. We're working on exorcising it and solving the issue, please try again later.",
  "error": {}
}
```

#### **`succes`**
Always in case of error, it will return **false**.

#### **`status`**
Request status.

#### **`message`**
Error message.

#### **`secondaryMessage`**
A message with a pinch of humor.

#### **`error`**
Full error object.

### **On Success**
In case of success, the returned structure will be.

```json
{
  "success": true,
  "status": 200,
  "message": "Congratulations, the operation was successfully completed!",
  "secondaryMessage": "Success guaranteed, you are more efficient than a robotic vacuum cleaner! Congratulations on your achievement!",
  "data": {}
}
```
#### **`succes`**
Always in case of error, it will return **true**.

#### **`status`**
Request status.

#### **`message`**
Success message.

#### **`secondaryMessage`**
A message with a pinch of humor.

#### **`data`**
data returned from successful request

<hr/>

**Thank you for reading up to this point.**

<div style="display: flex;">
  <a href="https://www.linkedin.com/in/lucas-winicius-03571725a"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
  <a href="https://instagram.com/sr_pumpkin_"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"></a>
</div>
