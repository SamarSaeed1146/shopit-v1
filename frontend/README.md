# Getting Started with Create React App

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Added Bootstrap :

```
- In `frontend/public/index.html` and add this :
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="Complete E-commerce Website" />
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />

      <title>Shop IT</title>

    </head>
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root"></div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
    </body>
  </html>
```

## Header & Footer

- Go on `frontend` folder & create new folder `components/layout`
- In `layout` folder create new file `Header.jsx` :

```
import React from "react";

const Header = () => {
  return (
    <nav className="navbar row">
      <div className="col-12 col-md-3 ps-5">
        <div className="navbar-brand">
          <a href="/">
            <img src="../images/shopit_logo.png" alt="ShopIT Logo" />
          </a>
        </div>
      </div>
      <div className="col-12 col-md-6 mt-2 mt-md-0">
        <form action="your_search_action_url_here" method="get">
          <div class="input-group">
            <input
              type="text"
              id="search_field"
              aria-describedby="search_btn"
              class="form-control"x
              placeholder="Enter Product Name ..."
              name="keyword"
              value=""
            />
            <button id="search_btn" className="btn" type="submit">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </form>
      </div>
      <div class="col-12 col-md-3 mt-4 mt-md-0 text-center">
        <a href="/cart" style={{ textDecoration: "none" }}>
          <span id="cart" class="ms-3">
            {" "}
            Cart{" "}
          </span>
          <span className="ms-1" id="cart_count">
            0
          </span>
        </a>

        <div className="ms-4 dropdown">
          <button
            className="btn dropdown-toggle text-white"
            type="button"
            id="dropDownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <figure className="avatar avatar-nav">
              <img
                src="../images/default_avatar.jpg"
                alt="User Avatar"
                className="rounded-circle"
              />
            </figure>
            <span>User</span>
          </button>
          <div
            className="dropdown-menu w-100"
            aria-labelledby="dropDownMenuButton"
          >
            <a className="dropdown-item" href="/admin/dashboard">
              {" "}
              Dashboard{" "}
            </a>

            <a className="dropdown-item" href="/me/orders">
              {" "}
              Orders{" "}
            </a>

            <a className="dropdown-item" href="/me/profile">
              {" "}
              Profile{" "}
            </a>

            <a className="dropdown-item text-danger" href="/">
              {" "}
              Logout{" "}
            </a>
          </div>
        </div>

        <a href="/login" className="btn ms-4" id="login_btn">
          {" "}
          Login{" "}
        </a>
      </div>
    </nav>
  );
};

export default Header;

```

- Go on `components/layout` then create new file `Footer.jsx` :

```
import React from "react";

const Footer = () => {
  return (
    <footer className="py-1 pt-5">
      <p className="text-center mt-1 fw-bold">
        &copy; 2024 ShopIT - All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;

```

- Go on `App.css` file remove the code what ever written on it & paste this :

```
html,
body {
  font-family: "Amazon Ember";
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
}

/* Scroll Bar */

::-webkit-scrollbar-track {
  background-color: #f5f5f5;
}

::-webkit-scrollbar {
  width: 8px;
  background-color: #f5f5f5;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(66, 66, 66, 0.2);
  border: 0px;
  background-clip: padding-box;
  border-radius: 5px;
}

nav {
  background-color: #232f3e;
  padding: 1rem 1rem;
}

.navbar {
  padding: 0.1rem 1rem;
}

.dropdown {
  position: relative;
  display: inline-block;
  vertical-align: middle;
}

#search_btn {
  background-color: #febd69;
}

.input-group {
  width: 90%;
  margin-right: 35%;
}

#search_field {
  height: 2.4rem;
  padding: 1rem;
}

#login_btn,
#view_btn,
#new_review_btn {
  background-color: #fa9c23;
  padding: 0.4rem 1.8rem;
  color: white;
}

#cart {
  font-size: 1rem;
  color: white;
}

#cart_count {
  background-color: #febd69;
  padding: 0.2rem 0.5rem;
  border-radius: 0.2rem;
  color: black;
  font-weight: bold;
  font-size: 0.9rem;
}

/* Home page */
#products_heading {
  margin-top: 1.8rem;
}

.card {
  height: 100%;
}

.card-title a {
  color: #2e2e2e;
  text-decoration: none;
}

.card-title a:hover {
  color: #fa9c23;
  text-decoration: none;
}

.card-body {
  padding-left: 0;
}

.card-text {
  font-size: 1.4rem;
}

.card-img-top {
  width: 200px;
  height: 150px;
}

.ratings {
  font-size: 1.2rem;
  color: #fdcc0d;
}

#no_of_reviews {
  font-size: 0.9rem;
  color: grey;
}

.App {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Footer */
footer {
  margin-top: auto;
  color: grey;
  bottom: 0;
  width: 100%;
}

/* Product Details Page */
#product_id {
  color: grey;
  font-size: 0.8rem;
}

#product_price {
  font-size: 2rem;
  font-weight: bold;
}

#cart_btn,
#review_btn {
  border-radius: 2rem;
  background-color: #fa9c23;
  border: none;
  padding: 0.5rem 2rem;
}

#product_seller {
  color: grey;
  font-size: 0.9rem;
}

#stock_status {
  font-size: 1.1rem;
  font-weight: bold;
  margin-left: 0.3rem;
}

.redColor {
  color: red;
}

.greenColor {
  color: green;
}

#product_image {
  margin-top: 9rem;
}

/* Loader */
.loader {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20%;
  width: 80px;
  height: 80px;
  padding-left: 0;
}
.loader:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fa9c23;
  border-color: #fa9c23 transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Cart */

.cart-item {
  margin: 1.8rem 0rem;
  padding: 0rem 0.7rem;
}

.cart-item a {
  color: grey;
}

#delete_cart_item {
  color: red;
  background: white;
  padding: 0.3rem 0.5rem;
  font-size: 1.1rem;
  border: none;
}

#card_item_price {
  color: #febd69;
  font-weight: bold;
  font-size: 1.4rem;
}

#checkout_btn,
.review-btn {
  background-color: #fa9c23;
  border-color: #fa9c23;
  margin-top: 2rem;
  border-radius: 5rem;
}

#view_order_details {
  background-color: #fa9c23;
  border-color: #fa9c23;
}

#order_summary {
  border: 1px solid #e3e3e3;
  border-radius: 1rem;
  padding: 2rem 1.5rem;
}

.order-summary-values {
  float: right;
  font-weight: bold;
}

.stockCounter input {
  border: none;
  width: 3rem;
  text-align: center;
}

.plus,
.minus {
  padding: 0.1rem 0.5rem;
}

.stockCounter input::-webkit-outer-spin-button,
.stockCounter input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.form-control:disabled,
.form-control[readonly] {
  background-color: white;
}

/* Login & Register */

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;

  font-weight: 700;
}

.wrapper form {
  padding: 2.5rem 3rem;
}

.wrapper form .btn,
.fetch-btn {
  background-color: #fa9c23;
  border-color: #fa9c23;
  color: white;
  margin-top: 1rem;
}

.fetch-btn:hover {
  background-color: #fa9c23;
  color: white;
}

.wrapper form a {
  font-size: 0.9rem;
  color: grey;
}

/* Avatar */
.avatar {
  display: inline-block;
  margin-bottom: 0;
  height: 3rem;
  width: 3rem;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.rounded-circle {
  border-radius: 50% !important;
}

.btn.focus,
.btn:focus {
  outline: 0;
  box-shadow: none;
}

/* Header User Profile */

.avatar-nav {
  margin-right: 0.6rem;
  height: 2.2rem;
  width: 2.2rem;
}

/* Checkout Steps */

.checkout-progress div {
  box-sizing: border-box;
}

.checkout-progress {
  display: block;
  clear: both;
  margin: 20px auto;
  width: auto;
  font-family: sans-serif;
  overflow: auto;
}

.step {
  margin: 0;
  border: 0;
  letter-spacing: 1px;
  line-height: 30px;
  padding: 5px 10px 5px 15px;
  color: grey;
  text-decoration: none;
  cursor: default;
  font-weight: bold;
  float: left;
  height: auto;
}

.incomplete {
  background: #eeeeee;
}

.active-step {
  background: #fa9c23;
  color: #fff;
}

.triangle-active {
  float: left;
  width: 0;
  border-top: 20px solid transparent;
  border-left: 15px solid #fa9c23;
  border-bottom: 20px solid transparent;
  margin-left: -1px;
}

.triangle2-active {
  width: 0;
  float: left;
  border-top: 20px solid #fa9c23;
  border-left: 15px solid #fff;
  border-bottom: 20px solid #fa9c23;
  margin-right: -1px;
}

.triangle-incomplete {
  float: left;
  width: 0;
  border-top: 20px solid transparent;
  border-left: 15px solid #eeeeee;
  border-bottom: 20px solid transparent;
  margin-left: -1px;
}

.triangle2-incomplete {
  width: 0;
  float: left;
  border-top: 20px solid #eeeeee;
  border-left: 15px solid #fff;
  border-bottom: 20px solid #eeeeee;
  margin-right: -1px;
}

/* User Profile */

.avatar-profile {
  height: 16rem;
  width: 16rem;
}

.user-info h4 {
  font-weight: 800;
  color: grey;
  margin-top: 2rem;
}

.user-info p {
  font-size: 1.1rem;
}

#edit_profile {
  background-color: #fa9c23;
  border-color: #fa9c23;
}

/* Confirm Order */

.order-confirm p,
.order-details p {
  margin-left: 1.5rem;
}

.update-btn,
#create_btn {
  background-color: #fa9c23;
  border-color: #fa9c23;
  color: white;
}

.update-btn:hover {
  color: white;
}

/* Pagination */
.page-item.active .page-link {
  background-color: #fa9c23;
  border-color: #fa9c23;
}

.page-link {
  color: #fa9c23;
}

.page-link:hover {
  color: #fa9c23;
}

/* Products List Admin */
#products_table .btn {
  padding: 0.2rem 0.5rem;
  margin-left: 0.4rem;
}

/* Dashboard */

.admin-child-wrapper {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.card-font-size {
  font-size: 1.5rem;
}

/* Reviews */

.rating {
  margin-top: 10rem;
}

.stars {
  height: 100px;
  display: flex;
  align-items: center;
  padding-left: 0;
}

.star {
  display: inline;
  list-style: none;
  font-size: 3rem;
  padding-left: 0.9rem;
  color: #e3e3e3;
}

.star:first-child {
  padding-left: 0;
}

.orange {
  color: #fa9c23;
}

.yellow {
  color: #fdcc0d;
}

.review_user {
  font-size: 0.8rem;
  color: grey;
}

.cross-button {
  background-color: #dc3545;
}

#filter_form .row .col {
  padding-left: 5px;
  padding-right: 5px;
}

#filter_form button {
  background-color: #fa9c23;
  border-color: #fa9c23;
}

.filter {
  margin-top: 5.8rem;
}

/* Sidebar */

.list-group-item:first-child {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.list-group-item {
  border: none;
}

.list-group-item.active {
  background-color: #f3f4f6;
  border-color: #f3f4f6;
  border-radius: 0.3rem;
  color: #fa9c23;
}

```

- Go on folder `frontend/src/App.js` & update this :

```
import "./App.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;

```

## Create Home Page

- Go on `frontend/component` create a new file `Home.jsx` & Add this :

```
import React from "react";

export const Home = () => {
  return (
    <div class="row">
      <div class="col-12 col-sm-6 col-md-12">
        <h1 id="products_heading" class="text-secondary">
          Latest Products
        </h1>

        <section id="products" class="mt-5">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3 my-3">
              <div className="card p-3 rounded">
                <img
                  className="card-img-top mx-auto"
                  src="./images/default_product.png"
                  alt=""
                />
                <div className="card-body ps-3 d-flex justify-content-center flex-column">
                  <h5 className="card-title">
                    <a href="/product/1">Product Name 1</a>
                  </h5>
                  <div className="ratings mt-auto d-flex">
                    <div className="star-ratings">
                      <i className="fa fa-star star-active"></i>
                      <i className="fa fa-star star-active"></i>
                      <i className="fa fa-star star-active"></i>
                      <i className="fa fa-star star-active"></i>
                      <i className="fa fa-star star-active"></i>
                    </div>
                    <span id="no_of_reviews" className="pt-2 ps-2">
                      {" "}
                      (0){" "}
                    </span>
                  </div>
                  <p className="card-text mt-2">$100</p>
                  <a href="/product/1" id="view_btn" className="btn btn-block">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Home;

```

- Then Go to frontend/src/App.js & update this :

```
import "./App.css";
import Home from "./components/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;

```

- Install Package `npm i react-router-dom --save`
- After installing package add this `frontend/src/App.js` file :

```
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

```

- Go to frontend/src/components/Home.jsx file & add this :

```
import React from "react";
import MetaData from "./layout/metaData";

export const Home = () => {
  return (
    <>
      <MetaData title={"Buy Best Products Online"} />
      <div class="row">
        <div class="col-12 col-sm-6 col-md-12">
          <h1 id="products_heading" class="text-secondary">
            Latest Products
          </h1>

          <section id="products" class="mt-5">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                <div className="card p-3 rounded">
                  <img
                    className="card-img-top mx-auto"
                    src="./images/default_product.png"
                    alt=""
                  />
                  <div className="card-body ps-3 d-flex justify-content-center flex-column">
                    <h5 className="card-title">
                      <a href="/product/1">Product Name 1</a>
                    </h5>
                    <div className="ratings mt-auto d-flex">
                      <div className="star-ratings">
                        <i className="fa fa-star star-active"></i>
                        <i className="fa fa-star star-active"></i>
                        <i className="fa fa-star star-active"></i>
                        <i className="fa fa-star star-active"></i>
                        <i className="fa fa-star star-active"></i>
                      </div>
                      <span id="no_of_reviews" className="pt-2 ps-2">
                        {" "}
                        (0){" "}
                      </span>
                    </div>
                    <p className="card-text mt-2">$100</p>
                    <a
                      href="/product/1"
                      id="view_btn"
                      className="btn btn-block"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default Home;

```

- install a package `npm i react-helmet --save`
- Make a new file of `MetaData.jsx` file
- At `frontend/src/components/layout/MeteData.jsx` add this :

```
import React from "react";
import { Helmet } from "react-helmet";

const MetaData = ({ title }) => {
  return (
    <Helmet>
      <title>{`${title} - Shop IT`}</title>
    </Helmet>
  );
};

export default MetaData;

```
