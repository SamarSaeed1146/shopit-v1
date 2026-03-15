# Getting Started with Create React App

## `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Added Bootstrap

```javascript
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

```javascript
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
              class="form-control"
              x
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

```javascript
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

```javascript
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

```javascript
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

```javascript
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

```javascript
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

```javascript
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

```javascript
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

```javascript
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

## Implementing Redux Toolkit

## Step # 1

- Install package `npm install @reduxjs/toolkit react-redux --save`
- Go to `frontend/src` folder create new folders & file `/redux/api/productsApi.js`
- Add this to `productsApi.js` file :

```javascript
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/v1" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (params) => "/products",
    }),
    getProductDetails: builder.query({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductDetailsQuery } = productsApi;
```

## Step # 2

- Go on `frontend/src/redux` folders create new file `store.js`

```javascript
import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./api/productsApi";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
```

## Step # 3

- Go to `frontend/src/layout` folder then create new file `Loader.jsx` & Add this :

```javascript
import React from "react";

function Loader() {
  return <div className="loader"></div>;
}

export default Loader;
```

## Step # 4

- Go on `frontend/src/components` folder then create new folder `product`
- In `product` folder create new files `productDetails.jsx & productItem.jsx`
- Add this in `productDetails.jsx` :

```javascript
import { useEffect, useState } from "react";
import { useGetProductDetailsQuery } from "../../redux/api/productsApi";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import StarRatings from "react-star-ratings";
import Loader from "../layout/Loader";

function ProductDetails() {
  const params = useParams();

  const { data, isLoading, error, isError } = useGetProductDetailsQuery(
    params.id,
  );
  const product = data?.product;

  const [activeImg, setActiveImg] = useState("");

  useEffect(() => {
    if (product) {
      setActiveImg(
        product?.images[0]
          ? product?.images[0]?.url
          : "/images/default_product.png",
      );
    }
  }, [product]);

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
  }, [isError, error]);

  if (isLoading) return <Loader />;
  return (
    <div className="row d-flex justify-content-around">
      <div className="col-12 col-lg-5 img-fluid" id="product_image">
        <div className="p-3">
          <img
            className="d-block w-100"
            src={activeImg}
            alt={product?.name}
            width="340"
            height="390"
          />
        </div>
        <div className="row justify-content-start mt-5">
          {product?.images?.map((img) => (
            <div className="col-2 ms-4 mt-2">
              <button
                type="button"
                className="p-0 border-0 bg-transparent"
                aria-label="View product image"
              >
                <img
                  className={`d-block border rounded p-3 cursor-pointer ${
                    img?.url === activeImg ? "border-primary" : ""
                  }`}
                  height="100"
                  width="100"
                  src={img?.url}
                  alt={img?.url}
                  onClick={(e) => setActiveImg(img?.url)}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="col-12 col-lg-5 mt-5">
        <h3>{product?.name}</h3>
        <p id="product_id">Product # {product?._id}</p>

        <hr />

        <div className="d-flex">
          <StarRatings
            rating={product?.ratings}
            starRatedColor="rgb(20, 20, 20)"
            numberOfStars={5}
            name="rating"
            starDimension="20px"
            starSpacing="3px"
          />
          <span id="no-of-reviews" className="pt-1 ps-2">
            {" "}
            ({product?.numOfReviews} Reviews){" "}
          </span>
        </div>
        <hr />

        <p id="product_price">${product?.price}</p>
        <div className="stockCounter d-inline">
          <span className="btn btn-danger minus">-</span>
          <input
            type="number"
            className="form-control count d-inline"
            value="1"
            readonly
          />
          <span className="btn btn-primary plus">+</span>
        </div>
        <button
          type="button"
          id="cart_btn"
          className="btn btn-primary d-inline ms-4"
          disabled=""
        >
          Add to Cart
        </button>

        <hr />

        <p>
          Status:{" "}
          <span
            id="stock_status"
            className={product?.stock > 0 ? "text-success" : "text-danger"}
          >
            {product?.stock > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </p>

        <hr />

        <h4 className="mt-2">Description:</h4>
        <p>{product?.description}</p>
        <hr />
        <p id="product_seller mb-3">
          Sold by: <strong>{product?.seller}</strong>
        </p>

        <div className="alert alert-danger my-5" type="alert">
          Login to post your review.
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
```

- Add this `productItem.jsx` :

```javascript
import { Link } from "react-router-dom";
import { StarRatings } from "react-star-ratings";

function ProductItem({ product }) {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
      <div className="card p-3 rounded">
        <img
          className="card-img-top mx-auto"
          src={product?.images[0]?.url}
          alt={product?.name}
        />
        <div className="card-body ps-3 d-flex justify-content-center flex-column">
          <h5 className="card-title">
            <Link to={`/product/${product?._id}`}>{product?.name}</Link>
          </h5>
          <div className="ratings mt-auto d-flex">
            <StarRatings
              rating={product?.ratings}
              starRatedColor="rgb(20, 20, 20)"
              numberOfStars={5}
              name="rating"
              starDimension="20px"
              starSpacing="3px"
            />
            <span id="no_of_reviews" className="pt-2 ps-2">
              {" "}
              [{product?.numOfReviews}]
            </span>
          </div>
          <p className="card-text mt-2">${product?.price}</p>
          <Link
            to={`/product/${product?._id}`}
            id="view_btn"
            className="btn btn-block"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
```

## Step # 5

- In `package.json` file add Proxy

```javascript
{
  "name": "frontend",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@reduxjs/toolkit": "^2.11.2",
    "@testing-library/dom": "^10.4.1",
    "@testing-library/jest-dom": "^6.9.1",
    "@testing-library/react": "^16.3.1",
    "@testing-library/user-event": "^13.5.0",
    "react": "^19.2.3",
    "react-dom": "^19.2.3",
    "react-helmet": "^6.1.0",
    "react-hot-toast": "^2.6.0",
    "react-redux": "^9.2.0",
    "react-router-dom": "^7.11.0",
    "react-scripts": "5.0.1",
    "react-star-ratings": "^2.3.0",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "proxy": "http://localhost:3000"
}

```

## Step # 6

- Go on frontend/src/app.js file & add this :

```javascript
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { Toaster } from "react-hot-toast";
import ProductDetails from "./components/product/productDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Toaster position="top-center" />
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
```

- Go on frontend/src/index.js file & add this :

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
```

## Step # 7

- Go to folder frontend/src/components/Home.jsx & add this :

```javascript
import React, { useEffect } from "react";
import MetaData from "./layout/metaData";
import { useGetProductsQuery } from "../redux/api/productsApi";
import ProductItem from "./product/productItem.jsx";
import Loader from "./layout/Loader.jsx";
import toast from "react-hot-toast";

export const Home = () => {
  const { data, isLoading, error, isError } = useGetProductsQuery();

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
  }, [isError, error]);

  if (isLoading) return <Loader />;

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
              {data?.products?.map((product) => (
                <ProductItem product={product} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default Home;
```

## Step # 8

- Go on backend/controllers/productControllers.js file & Add this:

```javascript
import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import Product from "../models/product.js";
import APIFilters from "../utils/apiFilters.js";
import ErrorHandler from "../utils/errorHandler.js";

// create new product => /api/v1/products

export const getProducts = catchAsyncErrors(async (req, res, next) => {
  const resPerPage = 4;
  const ApiFilters = new APIFilters(Product, req.query).search().filter();
  let products = await ApiFilters.query;
  let filteredProductsCount = products.length;
  ApiFilters.pagination(resPerPage);
  return next(new ErrorHandler("Hello", 400));
  products = await ApiFilters.query.clone();
  res.status(200).json({ products, filteredProductsCount, resPerPage });
});

// Create new product => /api/v1/admin/products
export const newProducts = catchAsyncErrors(async (req, res) => {
  req.body.user = req.user.id;

  const product = await Product.create(req.body);
  res.status(200).json({
    product,
  });
});

// Get single product details => /api/v1/products/:id
export const getProductDetails = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req?.params?.id);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  res.status(200).json({
    product,
  });
});

// Update product details => /api/v1/products/:id
export const updateProduct = catchAsyncErrors(async (req, res) => {
  let product = await Product.findById(req?.params?.id);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  product = await Product.findByIdAndUpdate(req?.params?.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    product,
  });
});

// Delete product => /api/v1/products/:id
export const deleteProduct = catchAsyncErrors(async (req, res) => {
  const product = await Product.findById(req?.params?.id);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  await product.delete();
  res.status(200).json({
    message: "Product deleted successfully",
  });
});

// Create/Update product Review => /api/v1/reviews
export const createProductReview = catchAsyncErrors(async (req, res) => {
  const { rating, comment, productId } = req.body;

  const review = {
    user: req?.user?._id,
    rating: Number(rating),
    comment,
  };

  const product = await Product.findById(productId);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  const isReviewed = product?.reviews?.find(
    (rev) => rev.user.toString() === req.user._id.toString(),
  );

  if (isReviewed) {
    product.reviews.forEach((rev) => {
      if (rev.user.toString() === req?.user?._id.toString()) {
        ((rev.rating = rating), (rev.comment = comment));
      }
    });
  } else {
    product.reviews.push(review);
    product.numOfReviews = product.reviews.length;
  }

  product.ratings =
    product.reviews.reduce((acc, item) => item.rating + acc, 0) /
    product.reviews.length;

  await product.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});

// Delete product Review => /api/v1/admin/reviews
export const deleteReview = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req?.query?.productId);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  const reviews = product?.reviews?.filter(
    (rev) => rev._id.toString() !== req?.query?.id.toString(),
  );

  const numOfReviews = reviews.length;

  const ratings =
    product.reviews.reduce((acc, item) => item.rating + acc, 0) /
    reviews.length;

  await Product.findByIdAndUpdate(
    req?.query?.productId,
    {
      reviews,
      ratings,
      numOfReviews,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    },
  );

  res.status(200).json({
    success: true,
  });
});

// Get product reviews => /api/v1/reviews

export const getProductReviews = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.query.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).json({
    reviews: product.reviews,
  });
});
```

## Adding Pagination, Search & Filters

### Pagination

- Go to Frontend/src/components/layout folder then create new file CostomPagination.jsx

```javascript
/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import { useSearchParams } from "react-router-dom";

const CustomPagination = ({ resPerPage, filteredProductsCount }) => {
  const [currentPage, setCurrentPage] = useState;

  let [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const page = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    setCurrentPage(page);
  }, [page, setCurrentPage]);

  const setCurrentPageNo = (pageNumber) => {
    setCurrentPage(pageNumber);

    if (searchParams.has("page")) {
      searchParams.set("page", pageNumber);
    } else {
      searchParams.append("page", pageNumber);
    }

    const path = window.location.pathname + "?" + searchParams.toString();
    navigate(path);
  };

  return (
    <div className="d-flex justify-content-center my-5">
      {filteredProductsCount > resPerPage && (
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={resPerPage}
          totalItemsCount={filteredProductsCount}
          onChange={setCurrentPageNo}
          nextPageText={"Next"}
          prevPageText={"Prev"}
          firstPageText={"First"}
          lastPageText={"Last"}
          itemClass="page-item"
          linkClass="page-link"
        />
      )}
    </div>
  );
};

export default CustomPagination;
```

- Go to Frontend/src/componentsHome.jsx folder & add this :

```javascript
import React, { useEffect } from "react";
import MetaData from "./layout/metaData";
import { useGetProductsQuery } from "../redux/api/productsApi";
import ProductItem from "./product/productItem.jsx";
import Loader from "./layout/Loader.jsx";
import toast from "react-hot-toast";
import CustomPagination from "./layout/CostomPaginaton.jsx";

export const Home = () => {
  // eslint-disable-next-line no-undef
  let [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;

  const params = { page };

  const { data, isLoading, error, isError } = useGetProductsQuery(params);

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
  }, [isError, error]);

  if (isLoading) return <Loader />;

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
              {data?.products?.map((product) => (
                <ProductItem product={product} />
              ))}
            </div>
          </section>

          <CustomPagination
            resPerPage={data?.resPerPage}
            filteredProductsCount={data?.filteredProductsCount}
          />
        </div>
      </div>
    </>
  );
};
export default Home;
```

- Go on frontend/src/redux/api/productsApi.js & add this

```javascript
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/v1" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (params) => ({
        url: "/products",
        params: {
          page: params?.page,
        },
      }),
    }),
    getProductDetails: builder.query({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductDetailsQuery } = productsApi;
```

#### Search

- Go on frontend/src/components/layout folder then create new file Search.jsx :

```javascript
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      navigate(`/?keyword/${keyword}`);
    } else {
      navigate("/");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div class="input-group">
        <input
          type="text"
          id="search_field"
          aria-describedby="search_btn"
          class="form-control"
          x
          placeholder="Enter Product Name ..."
          name="keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button id="search_btn" className="btn" type="submit">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
    </form>
  );
};

export default Search;
```

- Go on frontend/src/components/Home.jsx file then update the code :

```javascript
import React, { useEffect } from "react";
import MetaData from "./layout/metaData";
import { useGetProductsQuery } from "../redux/api/productsApi";
import ProductItem from "./product/productItem.jsx";
import Loader from "./layout/Loader.jsx";
import toast from "react-hot-toast";
import CustomPagination from "./layout/CostomPaginaton.jsx";

export const Home = () => {
  // eslint-disable-next-line no-undef
  let [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const keyword = searchParams.get("keyword") || "";

  const params = { page, keyword };

  const { data, isLoading, error, isError } = useGetProductsQuery(params);

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
  }, [isError, error]);

  const columnSize = keyword ? 4 : 3;

  if (isLoading) return <Loader />;

  return (
    <>
      <MetaData title={"Buy Best Products Online"} />
      <div class="row">
        {keyword && (
          <div className="col-6 col-md-3 mt-5">
            <p>Filters</p>
          </div>
        )}
        <div
          className={
            keyword ? "col-12 col-sm-6 col-md-9" : "col-12 col-sm-6 col-md-12"
          }
        >
          <h1 id="products_heading" class="text-secondary">
            {keyword
              ? `${data?.products?.length} Products found with ${keyword}`
              : "Latest Products"}
          </h1>

          <section id="products" class="mt-5">
            <div className="row">
              {data?.products?.map((product) => (
                <ProductItem product={product} columnSize={columnSize} />
              ))}
            </div>
          </section>

          <CustomPagination
            resPerPage={data?.resPerPage}
            filteredProductsCount={data?.filteredProductsCount}
          />
        </div>
      </div>
    </>
  );
};
export default Home;
```

- Go to frontend/src/components/product/productItem.jsx file & update this code :

```javascript
import { Link } from "react-router-dom";
import { StarRatings } from "react-star-ratings";

function ProductItem({ product, columnSize }) {
  return (
    <div className={`col-sm-12 col-md-6 col-lg-${columnSize} my-3`}>
      <div className="card p-3 rounded">
        <img
          className="card-img-top mx-auto"
          src={product?.images[0]?.url}
          alt={product?.name}
        />
        <div className="card-body ps-3 d-flex justify-content-center flex-column">
          <h5 className="card-title">
            <Link to={`/product/${product?._id}`}>{product?.name}</Link>
          </h5>
          <div className="ratings mt-auto d-flex">
            <StarRatings
              rating={product?.ratings}
              starRatedColor="rgb(20, 20, 20)"
              numberOfStars={5}
              name="rating"
              starDimension="20px"
              starSpacing="3px"
            />
            <span id="no_of_reviews" className="pt-2 ps-2">
              {" "}
              [{product?.numOfReviews}]
            </span>
          </div>
          <p className="card-text mt-2">${product?.price}</p>
          <Link
            to={`/product/${product?._id}`}
            id="view_btn"
            className="btn btn-block"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
```

- Go to Frontend/src/redux/api/productsApi.jsx & update this code :

```javascript
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/v1" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (params) => ({
        url: "/products",
        params: {
          page: params?.page,
          keyword: params?.keyword,
        },
      }),
    }),
    getProductDetails: builder.query({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductDetailsQuery } = productsApi;
```

- Go to frontend/src/components/layout/Header.jsx file & update this code :

```javascript
import Search from "./Search";

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
        <Search />
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

#### Filter By Price

- Go to frontend/src/components/layout folder then create new file Filters.jsx then add code :

```javascript
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getPriceQueryParams } from "../../helpers/helpers";

function Filters() {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const navigate = useNavigate();

  let [searchParams] = useSearchParams();

  const handleButtonClick = (e) => {
    e.preventDefault();

    searchParams = getPriceQueryParams(searchParams, "min", min);
    searchParams = getPriceQueryParams(searchParams, "max", max);

    const path = window.location.pathname + "?" + searchParams.toString();
    navigate(path);
  };

  return (
    <div className="border p-3 filter">
      <h3>Filters</h3>
      <hr />
      <h5 className="filter-heading mb-3">Price</h5>
      <form id="filter_form" className="px-2" onSubmit={handleButtonClick}>
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Min ($)"
              name="min"
              value={min}
              onChange={(e) => setMin(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Max ($)"
              name="max"
              value={max}
              onChange={(e) => setMax(e.target.value)}
            />
          </div>
          <div className="col">
            <button type="submit" className="btn btn-primary">
              GO
            </button>
          </div>
        </div>
      </form>
      <hr />
      <h5 className="mb-3">Category</h5>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="category"
          id="check4"
          value="Category 1"
        />
        <label className="form-check-label" for="check4">
          {" "}
          Category 1{" "}
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="category"
          id="check5"
          value="Category 2"
        />
        <label className="form-check-label" for="check5">
          {" "}
          Category 2{" "}
        </label>
      </div>

      <hr />
      <h5 className="mb-3">Ratings</h5>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="ratings"
          id="check7"
          value="5"
        />
        <label className="form-check-label" for="check7">
          <span className="star-rating">★ ★ ★ ★ ★</span>
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="ratings"
          id="check8"
          value="4"
        />
        <label className="form-check-label" for="check8">
          <span className="star-rating">★ ★ ★ ★ ☆</span>
        </label>
      </div>
    </div>
  );
}

export default Filters;
```

- Go to frontend/src folder then create new folder `helpers` after that folder then create new file helpers.js then add this code :

```javascript
export const getPriceQueryParams = (searchParams, key, value) => {
  const hasValueInParam = searchParams.has(key);

  if (value && hasValueInParam) {
    searchParams.set(key, value);
  } else if (value) {
    searchParams.append(key, value);
  } else if (hasValueInParam) {
    searchParams.delete(key);
  }

  return searchParams;
};
```

- go to frontend/src/components/Home.jsx folder & ADD this code :

```javascript
import React, { useEffect } from "react";
import MetaData from "./layout/metaData";
import { useGetProductsQuery } from "../redux/api/productsApi";
import ProductItem from "./product/productItem.jsx";
import Loader from "./layout/Loader.jsx";
import toast from "react-hot-toast";
import CustomPagination from "./layout/CostomPaginaton.jsx";
import Filters from "./layout/Filters.jsx";

export const Home = () => {
  // eslint-disable-next-line no-undef
  let [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const keyword = searchParams.get("keyword") || "";
  const min = searchParams.get("min") || "";
  const max = searchParams.get("max") || "";

  const params = { page, keyword, min, max };

  min !== null && (params.min = min);
  max !== null && (params.max = max);

  const { data, isLoading, error, isError } = useGetProductsQuery(params);

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
  }, [isError, error]);

  const columnSize = keyword ? 4 : 3;

  if (isLoading) return <Loader />;

  return (
    <>
      <MetaData title={"Buy Best Products Online"} />
      <div class="row">
        {keyword && (
          <div className="col-6 col-md-3 mt-5">
            <Filters />
          </div>
        )}
        <div
          className={
            keyword ? "col-12 col-sm-6 col-md-9" : "col-12 col-sm-6 col-md-12"
          }
        >
          <h1 id="products_heading" class="text-secondary">
            {keyword
              ? `${data?.products?.length} Products found with ${keyword}`
              : "Latest Products"}
          </h1>

          <section id="products" class="mt-5">
            <div className="row">
              {data?.products?.map((product) => (
                <ProductItem product={product} columnSize={columnSize} />
              ))}
            </div>
          </section>

          <CustomPagination
            resPerPage={data?.resPerPage}
            filteredProductsCount={data?.filteredProductsCount}
          />
        </div>
      </div>
    </>
  );
};
export default Home;
```

- Go to frontend/src/redux/api/productsApi.js then update the code :

```javascript
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/v1" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (params) => ({
        url: "/products",
        params: {
          page: params?.page,
          keyword: params?.keyword,
          "price[gte]": params?.min,
          "price[lte]": params?.max,
        },
      }),
    }),
    getProductDetails: builder.query({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductDetailsQuery } = productsApi;
```

#### Filter By Rating

- Go to frontend/src/ folder then create new folder `constants` after that create new file `constants.js` & add this code :

```javascript
export const PRODUCT_CATEGORY = [
  "Electronics",
  "Cameras",
  "Laptops",
  "Accessories",
  "Headphones",
  "Food",
  "Books",
  "Sports",
  "Outdoor",
  "Home",
];
```

- go to frontend/src/components/layout/Filters.jsx add this code :

```javascript
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getPriceQueryParams } from "../../helpers/helpers";
import { PRODUCT_CATEGORY } from "../../constants/constants";
import { StarRatings } from "react-star-ratings";

function Filters() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  const navigate = useNavigate();

  let [searchParams] = useSearchParams();

  useEffect(() => {
    searchParams.has("min") && setMin(searchParams.get("min"));
    searchParams.has("max") && setMax(searchParams.get("max"));
  }, [searchParams]);

  // Handle Category & Ratings Filter

  const handleClick = (checkbox) => {
    const checkboxes = document.getElementsByName(checkbox.name);

    checkboxes.forEach((item) => {
      if (item !== checkbox) item.checked = false;
    });
    if (checkbox.checked === false) {
      // Delete the query param if the checkbox is unchecked
      if (searchParams.has(checkbox.name)) {
        searchParams.delete(checkbox.name);
        const path = window.location.pathname + "?" + searchParams.toString();
        navigate(path);
      }
    } else {
      // set new filter value if already there
      if (searchParams.has(checkbox.name)) {
        searchParams.set(checkbox.name, checkbox.value);
      } else {
        // append new filter value
        searchParams.append(checkbox.name, checkbox.value);
      }
      const path = window.location.pathname + "?" + searchParams.toString();
      navigate(path);
    }
  };

  // Handle Price Filter
  const handleButtonClick = (e) => {
    e.preventDefault();

    searchParams = getPriceQueryParams(searchParams, "min", min);
    searchParams = getPriceQueryParams(searchParams, "max", max);

    const path = window.location.pathname + "?" + searchParams.toString();
    navigate(path);
  };

  const defaultCheckHandler = (checkboxType, checkboxValue) => {
    const value = searchParams.get(checkboxType);
    if (value === checkboxValue) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="border p-3 filter">
      <h3>Filters</h3>
      <hr />
      <h5 className="filter-heading mb-3">Price</h5>
      <form id="filter_form" className="px-2" onSubmit={handleButtonClick}>
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Min ($)"
              name="min"
              value={min}
              onChange={(e) => setMin(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Max ($)"
              name="max"
              value={max}
              onChange={(e) => setMax(e.target.value)}
            />
          </div>
          <div className="col">
            <button type="submit" className="btn btn-primary">
              GO
            </button>
          </div>
        </div>
      </form>
      <hr />
      <h5 className="mb-3">Category</h5>

      {PRODUCT_CATEGORY?.map((category) => (
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="category"
            id={`check-${category}`}
            value={category}
            defaultChecked={defaultCheckHandler("category", category)}
            onClick={(e) => handleClick(e.target)}
          />
          <label className="form-check-label" for="check4">
            {" "}
            {category}
          </label>
        </div>
      ))}

      <hr />
      <h5 className="mb-3">Ratings</h5>

      {[5, 4, 3, 2, 1].map((rating) => (
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="ratings"
            id="check7"
            value={rating}
            defaultChecked={defaultCheckHandler("ratings", rating.toString())}
            onClick={(e) => handleClick(e.target)}
          />
          <label className="form-check-label" for="check7">
            \
            <StarRatings
              rating={rating}
              starRatedColor="rgb(20, 20, 20)"
              numberOfStars={5}
              name="rating"
              starDimension="21px"
              starSpacing="3px"
            />
          </label>
        </div>
      ))}
    </div>
  );
}

export default Filters;
```

- Go to frontend/src/components/Home.jsx & update the code :

```javascript
import { useEffect } from "react";
import MetaData from "./layout/metaData";
import { useGetProductsQuery } from "../redux/api/productsApi";
import ProductItem from "./product/productItem.jsx";
import Loader from "./layout/Loader.jsx";
import toast from "react-hot-toast";
import CustomPagination from "./layout/CostomPaginaton.jsx";
import Filters from "./layout/Filters.jsx";

export const Home = () => {
  // eslint-disable-next-line no-undef
  let [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const keyword = searchParams.get("keyword") || "";
  const min = searchParams.get("min") || "";
  const max = searchParams.get("max") || "";
  const category = searchParams.get("category");
  const ratings = searchParams.get("ratings");

  const params = { page, keyword, min, max };

  min !== null && (params.min = min);
  max !== null && (params.max = max);
  category !== null && (params.category = category);
  ratings !== null && (params.ratings = ratings);

  const { data, isLoading, error, isError } = useGetProductsQuery(params);

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
  }, [isError, error]);

  const columnSize = keyword ? 4 : 3;

  if (isLoading) return <Loader />;

  return (
    <>
      <MetaData title={"Buy Best Products Online"} />
      <div class="row">
        {keyword && (
          <div className="col-6 col-md-3 mt-5">
            <Filters />
          </div>
        )}
        <div
          className={
            keyword ? "col-12 col-sm-6 col-md-9" : "col-12 col-sm-6 col-md-12"
          }
        >
          <h1 id="products_heading" class="text-secondary">
            {keyword
              ? `${data?.products?.length} Products found with ${keyword}`
              : "Latest Products"}
          </h1>

          <section id="products" class="mt-5">
            <div className="row">
              {data?.products?.map((product) => (
                <ProductItem product={product} columnSize={columnSize} />
              ))}
            </div>
          </section>

          <CustomPagination
            resPerPage={data?.resPerPage}
            filteredProductsCount={data?.filteredProductsCount}
          />
        </div>
      </div>
    </>
  );
};
export default Home;
```

- Go to frontend/src/redux/api/productsApi.js & update the code :

```javascript
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/v1" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (params) => ({
        url: "/products",
        params: {
          page: params?.page,
          keyword: params?.keyword,
          category: params?.category,
          "price[gte]": params?.min,
          "price[lte]": params?.max,
          "ratings[gte]": params?.ratings,
        },
      }),
    }),
    getProductDetails: builder.query({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductDetailsQuery } = productsApi;
```

## Authentication Frontend

### Login User

- Go to frontend/src/components folder then create new folder `auth`
- After that then create new file in auth/Login.jsx & add this code :

```javascript
import { useEffect, useState } from "react";
import { useLoginMutation } from "../../redux/api/authApi";
import toast from "react-hot-toast";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, { isLoading, error, isError }] = useLoginMutation();

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message || "Login failed");
    }
  }, [isError, error]);

  const submitHandler = (e) => {
    e.preventDefault();
    const loginData = {
      email,
      password,
    };
    login(loginData);
  };

  return (
    <div className="row wrapper">
      <div className="col-10 col-lg-5">
        <form className="shadow rounded bg-body" onSubmit={submitHandler}>
          <h2 className="mb-4">Login</h2>
          <div className="mb-3">
            <label htmlFor="email_field" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email_field"
              className="form-control"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password_field" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password_field"
              className="form-control"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <a href="/password/forgot" className="float-end mb-4">
            Forgot Password?
          </a>

          <button
            id="login_button"
            type="submit"
            className="btn w-100 py-2"
            disabled={isLoading}
          >
            {isLoading ? "Authenticating..." : "LOGIN"}
          </button>

          <div className="my-3">
            <a href="/register" className="float-end">
              New User?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
```

- Go to `frontend/src/redux/api` create new file `authApi.js` & add code :

```javascript
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/v1" }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => {
        return {
          url: "/login",
          method: "POST",
          body,
        };
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
```

Go to `frontend/src/redux/store.js` file & update the code :

```javascript
import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./api/productsApi";
import { authApi } from "./api/authApi";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware, authApi.middleware),
});
```

- Go to `frontend/src/App.js` file then update the code :

```javascript
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { Toaster } from "react-hot-toast";
import ProductDetails from "./components/product/productDetails";
import Login from "./components/auth/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Toaster position="top-center" />
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
```

#### Logout User

- Go to Frontend/src/redux/api/authApi.js file & update the code :

```javascript
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userApi } from "./userApi";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/v1" }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => {
        return {
          url: "/register",
          method: "POST",
          body,
        };
      },
    }),
    login: builder.mutation({
      query: (body) => {
        return {
          url: "/login",
          method: "POST",
          body,
        };
      },
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          await dispatch(userApi.endpoints.getMe.initiate(null));
        } catch (error) {
          console.log(error);
        }
      },
    }),
    logout: builder.mutation({
      query: () => {
        return {
          url: "/logout",
          method: "POST",
        };
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation } =
  authApi;
```

- Go to frontend/src/components/layout/Header.jsx file & update the code :

```javascript
import { useSelector } from "react-redux";
import { useGetMeQuery } from "../../redux/api/userApi";
import Search from "./Search";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../redux/api/authApi";

const Header = () => {
  const navigate = useNavigate();

  const { isLoading } = useGetMeQuery();
  const [logout] = useLogoutMutation;

  const { user } = useSelector((state) => state.auth);

  const logoutHandler = async () => {
    logout();
    navigate(0);
  };

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
        <Search />
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

        {user ? (
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
                  src={
                    user?.avatar
                      ? user?.avatar?.url
                      : "../images/default_avatar.jpg"
                  }
                  alt="User Avatar"
                  className="rounded-circle"
                />
              </figure>
              <span>{user?.name}</span>
            </button>
            <div
              className="dropdown-menu w-100"
              aria-labelledby="dropDownMenuButton"
            >
              <Link className="dropdown-item" to="/admin/dashboard">
                {" "}
                Dashboard{" "}
              </Link>

              <Link className="dropdown-item" to="/me/orders">
                {" "}
                Orders{" "}
              </Link>

              <Link className="dropdown-item" to="/me/profile">
                {" "}
                Profile{" "}
              </Link>

              <Link
                className="dropdown-item text-danger"
                to="/"
                onClick={logoutHandler}
              >
                Logout{" "}
              </Link>
            </div>
          </div>
        ) : (
          !isLoading && (
            <Link to="/login" className="btn ms-4" id="login_btn">
              {" "}
              Login{" "}
            </Link>
          )
        )}
      </div>
    </nav>
  );
};

export default Header;
```

- Go to frontend/src/components/auth/Login.jsx & update the code :

```javascript
import { useEffect, useState } from "react";
import { useLoginMutation } from "../../redux/api/authApi";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [login, { isLoading, error, isError }] = useLoginMutation();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }

    if (isError) {
      toast.error(error?.data?.message || "Login failed");
    }
  }, [error, isAuthenticated, isError, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    const loginData = {
      email,
      password,
    };
    login(loginData);
  };

  return (
    <div className="row wrapper">
      <div className="col-10 col-lg-5">
        <form className="shadow rounded bg-body" onSubmit={submitHandler}>
          <h2 className="mb-4">Login</h2>
          <div className="mb-3">
            <label htmlFor="email_field" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email_field"
              className="form-control"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password_field" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password_field"
              className="form-control"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <a href="/password/forgot" className="float-end mb-4">
            Forgot Password?
          </a>

          <button
            id="login_button"
            type="submit"
            className="btn w-100 py-2"
            disabled={isLoading}
          >
            {isLoading ? "Authenticating..." : "LOGIN"}
          </button>

          <div className="my-3">
            <a href="/register" className="float-end">
              New User?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
```

- Go to frontend/src/components/auth/Register.jsx file & update the code :

```javascript
import { useEffect, useState } from "react";
import { useRegisterMutation } from "../../redux/api/authApi";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const Navigate = useNavigate();

  const [register, { isLoading, error }] = useRegisterMutation();

  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      Navigate("/");
    }

    if (error) {
      toast.error(error?.data?.message || "Registration failed");
    }
  }, [Navigate, error, isAuthenticated]);

  const submitHandler = (e) => {
    e.preventDefault();

    const signUpData = {
      name,
      email,
      password,
    };

    register(signUpData);
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="row wrapper">
      <div className="col-10 col-lg-5">
        <form className="shadow rounded bg-body" onSubmit={submitHandler}>
          <h2 className="mb-4">Register</h2>

          <div className="mb-3">
            <label htmlFor="name_field" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name_field"
              className="form-control"
              name="name"
              value={name}
              onChange={onChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email_field" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email_field"
              className="form-control"
              name="email"
              value={email}
              onChange={onChange}
            />
          </div>

          <div className="mb-3">
            <label for="password_field" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password_field"
              className="form-control"
              name="password"
              value={password}
              onChange={onChange}
            />
          </div>

          <button
            id="register_button"
            type="submit"
            className="btn w-100 py-2"
            disabled={isLoading}
          >
            {isLoading ? "Registering..." : "REGISTER"} REGISTER
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
```

## Handle User, Protected Route, Forgot & Reset Password

### User Layout & Show User Profile

- go to `frontend/src/components/layout` folders then create new file `UserLayout.jsx` & add this code :

```javascript
import SideMenu from "./SideMenu";

function UserLayout({ Children }) {
  return (
    <div>
      <div className="mt-2 mb-2 py-4">
        <h2 className="text-center fw-bolder"> User Settings</h2>
      </div>
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-12 col-lg-3">
            <SideMenu />
          </div>
          <div className="col-12 col-lg-8 user-dashboard">{Children}</div>
        </div>
      </div>
    </div>
  );
}

export default UserLayout;
```

- Go to `Frontend/src/components/layout` folder then create new file `SideMenu.jsx` & add this code :

```javascript
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function SideMenu() {
  const menuItems = [
    {
      name: "Profile",
      url: "/me/profile",
      icon: "fas fa-user",
    },
    {
      name: "Update Profile",
      url: "/me/update_profile",
      icon: "fas fa-user",
    },
    {
      name: "Upload Avatar",
      url: "/me/upload_avatar",
      icon: "fas fa-user-circle",
    },
    {
      name: "Update Password",
      url: "/me/update_password",
      icon: "fas fa-lock",
    },
  ];

  const Location = useLocation();

  const [activeMenuItem, setActiveMenuItem] = useState(Location.pathname);
  const handleMenuItemClick = (menuItemUrl) => {
    setActiveMenuItem(menuItemUrl);
  };

  return (
    <div className="list-group mt-5 pl-4">
      {menuItems?.map((menuItem, index) => (
        <Link
          key={index}
          to={menuItem.url}
          className={`fw-bold list-group-item list-group-item-action ${activeMenuItem.includes(menuItem.url) ? "active" : ""}`}
          onClick={() => handleMenuItemClick(menuItem.url)}
          aria-current={
            activeMenuItem.includes(menuItem.url) ? "true" : "false"
          }
        >
          <i className={`${menuItem.icon} fa-fw pe-2`}></i> {menuItem.name}
        </Link>
      ))}
    </div>
  );
}

export default SideMenu;
```

- Go to `frontend/src/component` folder then create new folder `user` & create a new file `Profile.jsx` add this code :

```javascript
import UserLayout from "../layout/UserLayout";
import { useSelector } from "react-redux";

function Profile() {
  const { user } = useSelector((state) => state.auth);

  return (
    <UserLayout>
      <div className="row justify-content-around mt-5 user-info">
        <div className="col-12 col-md-3">
          <figure className="avatar avatar-profile">
            <img
              className="rounded-circle img-fluid"
              src="../images/default_avatar.jpg"
              alt={user?.name}
            />
          </figure>
        </div>

        <div className="col-12 col-md-5">
          <h4>Full Name</h4>
          <p>{user?.name}</p>

          <h4>Email Address</h4>
          <p>{user?.email}</p>

          <h4>Joined On</h4>
          <p>{user?.createdAt?.substring(0, 10)}</p>
        </div>
      </div>
    </UserLayout>
  );
}

export default Profile;
```

- Go to frontend/src/App.js & update the code :

```javascript
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { Toaster } from "react-hot-toast";
import ProductDetails from "./components/product/productDetails";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Profile from "./components/user/profile";

function App() {
  return (
    <Router>
      <div className="App">
        <Toaster position="top-center" />
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/me/profile" element={<Profile />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
```

#### Update User Profile

- Go to Frontend/src/components/user folder then create new file `UpdateProfile.jsx` & Add this code :

```javascript
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUpdateProfileMutation } from "../../redux/api/userApi";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import UserLayout from "../layout/UserLayout";

function UpdateProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const [updateProfile, { isLoading, error, isSuccess }] =
    useUpdateProfileMutation();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      setName(user?.name);
      setEmail(user?.email);
    }

    if (error) {
      toast.error(error?.data?.message);
    }

    if (isSuccess) {
      toast.success("Profile updated successfully");
      navigate("/me/profile");
    }
  }, [user, error, isSuccess, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();

    const userData = {
      email,
      name,
    };

    updateProfile(userData);
  };

  return (
    <UserLayout>
      <div className="row wrapper">
        <div className="col-10 col-lg-8">
          <form className="shadow rounded bg-body" onSubmit={submitHandler}>
            <h2 className="mb-4">Update Profile</h2>

            <div className="mb-3">
              <label htmlFor="name_field" className="form-label">
                {" "}
                Name{" "}
              </label>
              <input
                type="text"
                id="name_field"
                className="form-control"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email_field" className="form-label">
                {" "}
                Email{" "}
              </label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="btn update-btn w-100"
              disabled={isLoading}
            >
              {isLoading ? "Updating..." : "Update"}
            </button>
          </form>
        </div>
      </div>
    </UserLayout>
  );
}

export default UpdateProfile;
```

- Go to `frontend/src/redux/api/userApi.js` file & Update the code :

```javascript
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setIsAuthenticated, setUser } from "../features/userSlice";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/v1" }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => `/me`,
      transformResponse: (result) => result.user,
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
          dispatch(setIsAuthenticated(true));
        } catch (error) {
          console.log(error);
        }
      },
      providesTags: ["User"],
    }),
    updateProfile: builder.mutation({
      query(body) {
        return {
          url: `/me/update`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useGetMeQuery, useUpdateProfileMutation } = userApi;
```

- Go to `frontend/src/App.js` file & update the code :

```javascript
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { Toaster } from "react-hot-toast";
import ProductDetails from "./components/product/productDetails";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Profile from "./components/user/profile";
import UpdateProfile from "./components/user/UpdateProfile";

function App() {
  return (
    <Router>
      <div className="App">
        <Toaster position="top-center" />
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/me/profile" element={<Profile />} />
            <Route path="/me/update-profile" element={<UpdateProfile />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
```

#### Protected Route

- Go to frontend/src/components/auth folder create a new file `ProtectedRoute.jsx` & add this code :

```javascript
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loader from "../layout/Loader";

function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  if (loading) return <Loader />;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
```

- Go to `frontend/src/redux/features/userSlice.js` file & update the code :

```javascript
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: true,
};

export const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { setUser, setIsAuthenticated, setLoading } = userSlice.actions;
```

- Go to `frontend/src/redux/api/userApi.js` file & update the code :

```javascript
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setIsAuthenticated, setLoading, setUser } from "../features/userSlice";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/v1" }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => `/me`,
      transformResponse: (result) => result.user,
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
          dispatch(setIsAuthenticated(true));
          dispatch(setLoading(false));
        } catch (error) {
          dispatch(setLoading(false));
          console.log(error);
        }
      },
      providesTags: ["User"],
    }),
    updateProfile: builder.mutation({
      query(body) {
        return {
          url: `/me/update`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useGetMeQuery, useUpdateProfileMutation } = userApi;
```

- Go to `frontend/src/App.js` file & update the code :

```javascript
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { Toaster } from "react-hot-toast";
import ProductDetails from "./components/product/productDetails";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Profile from "./components/user/profile";
import UpdateProfile from "./components/user/UpdateProfile";
import ProtectedRoute from "./components/auth/ProtectedRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Toaster position="top-center" />
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route
              path="/me/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            <Route
              path="/me/update-profile"
              element={
                <ProtectedRoute>
                  <UpdateProfile />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
```

## Uploaded User Avatar

- Go to frontend/src/components/user folder then create a new file `UploadAvatar.jsx` & add the code :

```javascript
import { useEffect, useState } from "react";
import UserLayout from "../layout/UserLayout";
import { useNavigate } from "react-router-dom";
import { useUploadAvatarMutation } from "../../redux/api/userApi";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

function UploadAvatar() {
  const { user } = useSelector((state) => state.auth);
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState(
    user?.avatar
      ? user?.avatar?.url || "/images/default_avatar.jpg"
      : "/images/default_avatar.jpg",
  );

  const navigate = useNavigate();

  const [uploadAvatar, { isLoading, error, isSuccess }] =
    useUploadAvatarMutation();

  useEffect(() => {
    if (error) {
      toast.error(error?.data?.message || "Failed to upload avatar");
    }
    if (isSuccess) {
      toast.success("Avatar uploaded successfully");
      navigate("/me/profile");
    }
  }, [isSuccess, error, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();

    const userData = {
      avatar,
    };
    uploadAvatar(userData);
  };

  const onchange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <UserLayout>
      <div className="row wrapper">
        <div className="col-10 col-lg-8">
          <form className="shadow rounded bg-body" onSubmit={submitHandler}>
            <h2 className="mb-4">Upload Avatar</h2>

            <div className="mb-3">
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <figure className="avatar item-rtl">
                    <img
                      src={avatarPreview}
                      className="rounded-circle"
                      alt="User avatar"
                    />
                  </figure>
                </div>
                <div className="input-foam">
                  <label className="form-label" htmlFor="customFile">
                    Choose Avatar
                  </label>
                  <input
                    type="file"
                    name="avatar"
                    className="form-control"
                    id="customFile"
                    accept="images/*"
                    onChange={onchange}
                  />
                </div>
              </div>
            </div>

            <button
              id="register_button"
              type="submit"
              className="btn w-100 py-2"
              disabled={isLoading}
            >
              {isLoading ? "Uploading..." : "Upload Avatar"}
            </button>
          </form>
        </div>
      </div>
    </UserLayout>
  );
}

export default UploadAvatar;
```

- Go to frontend/src/redux/api/userApi.js folder then update the code :

```javascript
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setIsAuthenticated, setLoading, setUser } from "../features/userSlice";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/v1" }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => `/me`,
      transformResponse: (result) => result.user,
      async onQueryStarted({ queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
          dispatch(setIsAuthenticated(true));
          dispatch(setLoading(false));
        } catch (error) {
          dispatch(setLoading(false));
          console.log(error);
        }
      },
      providesTags: ["User"],
    }),
    updateProfile: builder.mutation({
      query(body) {
        return {
          url: `/me/update`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["User"],
    }),

    uploadAvatar: builder.mutation({
      query(body) {
        return {
          url: `/me/upload_avatar`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetMeQuery,
  useUpdateProfileMutation,
  useUploadAvatarMutation,
} = userApi;
```

- Go to frontend/src/App.js folder & update the code :

```javascript
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { Toaster } from "react-hot-toast";
import ProductDetails from "./components/product/productDetails";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Profile from "./components/user/profile";
import UpdateProfile from "./components/user/UpdateProfile";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UploadAvatar from "./components/user/UploadAvatar";

function App() {
  return (
    <Router>
      <div className="App">
        <Toaster position="top-center" />
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route
              path="/me/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            <Route
              path="/me/update-profile"
              element={
                <ProtectedRoute>
                  <UpdateProfile />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Routes>
            path="/me/update-avatar" element=
            {
              <ProtectedRoute>
                <UploadAvatar />
              </ProtectedRoute>
            }
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
```

## Update User Password

- Go to frontend/src/components/user folder then create a new file `UpdatePassword.jsx` file & add this code :

```javascript
import { useEffect, useState } from "react";
import { useUploadPasswordMutation } from "../../redux/api/userApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import UserLayout from "../layout/UserLayout";

function UpdatePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [Password, setPassword] = useState("");

  const navigate = useNavigate();

  const [updatePassword, { isLoading, error, isSuccess }] =
    useUploadPasswordMutation();

  useEffect(() => {
    if (error) {
      toast.error(error?.data?.message);
    }

    if (isSuccess) {
      toast.success("Password updated successfully");
      navigate("/me/profile");
    }
  }, [error, isSuccess, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();

    const userData = {
      oldPassword,
      Password,
    };

    updatePassword(userData);
  };

  return (
    <UserLayout>
      <div className="row wrapper">
        <div className="col-10 col-lg-8">
          <form className="shadow rounded bg-body" onSubmit={submitHandler}>
            <h2 className="mb-4">Update Password</h2>
            <div className="mb-3">
              <label htmlFor="old_password_field" className="form-label">
                Old Password
              </label>
              <input
                type="password"
                id="old_password_field"
                className="form-control"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="new_password_field" className="form-label">
                New Password
              </label>
              <input
                type="password"
                id="new_password_field"
                className="form-control"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="btn update-btn w-100"
              disabled={isLoading}
            >
              {isLoading ? "Updating..." : "Update Password"}
            </button>
          </form>
        </div>
      </div>
    </UserLayout>
  );
}

export default UpdatePassword;
```

- Go to frontend/src/redux/api/userApi.js files & Update the code :

```javascript
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setIsAuthenticated, setLoading, setUser } from "../features/userSlice";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/v1" }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => `/me`,
      transformResponse: (result) => result.user,
      async onQueryStarted({ queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
          dispatch(setIsAuthenticated(true));
          dispatch(setLoading(false));
        } catch (error) {
          dispatch(setLoading(false));
          console.log(error);
        }
      },
      providesTags: ["User"],
    }),
    updateProfile: builder.mutation({
      query(body) {
        return {
          url: `/me/update`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["User"],
    }),

    uploadAvatar: builder.mutation({
      query(body) {
        return {
          url: `/me/upload_avatar`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["User"],
    }),
    uploadPassword: builder.mutation({
      query(body) {
        return {
          url: `/password/update`,
          method: "PUT",
          body,
        };
      },
    }),
  }),
});

export const {
  useGetMeQuery,
  useUpdateProfileMutation,
  useUploadAvatarMutation,
  useUploadPasswordMutation,
} = userApi;
```

- Go to Frontend/src/App.js file & update the code :

```javascript
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { Toaster } from "react-hot-toast";
import ProductDetails from "./components/product/productDetails";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Profile from "./components/user/profile";
import UpdateProfile from "./components/user/UpdateProfile";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UploadAvatar from "./components/user/UploadAvatar";
import UpdatePassword from "./components/user/UpdatePassword";

function App() {
  return (
    <Router>
      <div className="App">
        <Toaster position="top-center" />
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route
              path="/me/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            <Route
              path="/me/update-profile"
              element={
                <ProtectedRoute>
                  <UpdateProfile />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Routes>
            path="/me/update-avatar" element=
            {
              <ProtectedRoute>
                <UploadAvatar />
              </ProtectedRoute>
            }
          </Routes>
          <Routes>
            path="/me/update-password" element=
            {
              <ProtectedRoute>
                <UpdatePassword />
              </ProtectedRoute>
            }
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
```

## Handle Forgot Password

- Go to frontend/src/comonents/auth folder then create a new file `ForgotPassword.jsx` & add the code :

```javascript
import React, { useEffect, useState } from "react";
import { useForgotPasswordMutation } from "../../redux/api/userApi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const [forgotPassword, { isLoading, error, isSuccess }] =
    useForgotPasswordMutation();

  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }

    if (error) {
      toast.error(error.data.message);
    }
    if (isSuccess) {
      toast.success("Email sent successfully");
      navigate("/login");
    }
  }, [navigate, isAuthenticated, isSuccess, error]);

  const submitHandler = async (e) => {
    e.preventDefault();

    forgotPassword({ email });
  };

  return (
    <div className="row wrapper">
      <div className="col-10 col-lg-5">
        <form className="shadow rounded bg-body" onSubmit={submitHandler}>
          <h2 className="mb-4">Forgot Password</h2>
          <div className="mt-3">
            <label htmlFor="email_field" className="form-label">
              Enter Email
            </label>
            <input
              type="email"
              id="email_field"
              className="form-control"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            id="forgot_password_button"
            type="submit"
            className="btn w-100 py-2"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Email"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
```

- Go to frontend/src/redux/api/userApi.js File & add the code :

```javascript
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setIsAuthenticated, setLoading, setUser } from "../features/userSlice";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/v1" }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => `/me`,
      transformResponse: (result) => result.user,
      async onQueryStarted({ queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
          dispatch(setIsAuthenticated(true));
          dispatch(setLoading(false));
        } catch (error) {
          dispatch(setLoading(false));
          console.log(error);
        }
      },
      providesTags: ["User"],
    }),
    updateProfile: builder.mutation({
      query(body) {
        return {
          url: `/me/update`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["User"],
    }),

    uploadAvatar: builder.mutation({
      query(body) {
        return {
          url: `/me/upload_avatar`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["User"],
    }),
    uploadPassword: builder.mutation({
      query(body) {
        return {
          url: `/password/update`,
          method: "PUT",
          body,
        };
      },
    }),
    forgotPassword: builder.mutation({
      query(body) {
        return {
          url: `/password/forgot`,
          method: "POST",
          body,
        };
      },
    }),
  }),
});

export const {
  useGetMeQuery,
  useUpdateProfileMutation,
  useUploadAvatarMutation,
  useUploadPasswordMutation,
  useForgotPasswordMutation,
} = userApi;
```

- Go to Frontend/src/App.js file & Update the code :

```javascript
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { Toaster } from "react-hot-toast";
import ProductDetails from "./components/product/productDetails";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Profile from "./components/user/profile";
import UpdateProfile from "./components/user/UpdateProfile";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UploadAvatar from "./components/user/UploadAvatar";
import UpdatePassword from "./components/user/UpdatePassword";
import ForgotPassword from "./components/auth/ForgotPassword";

function App() {
  return (
    <Router>
      <div className="App">
        <Toaster position="top-center" />
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/password/forgot" element={<ForgotPassword />} />

            <Route
              path="/me/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            <Route
              path="/me/update-profile"
              element={
                <ProtectedRoute>
                  <UpdateProfile />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Routes>
            path="/me/update-avatar" element=
            {
              <ProtectedRoute>
                <UploadAvatar />
              </ProtectedRoute>
            }
          </Routes>
          <Routes>
            path="/me/update-password" element=
            {
              <ProtectedRoute>
                <UpdatePassword />
              </ProtectedRoute>
            }
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
```

## Handle Reset Password

- Go to frontend/src/component/auth folder hten create new file `ResetPassword.jsx` & add this code :

```javascript
import { useEffect, useState } from "react";
import { useResetPasswordMutation } from "../../redux/api/userApi";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const params = useParams();

  const [resetPassword, { isLoading, error, isSuccess }] =
    useResetPasswordMutation();

  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
    if (error) {
      toast.error(error?.data?.message);
    }
    if (isSuccess) {
      toast.success("Password reset successful");
      navigate("/login");
    }
  }, [navigate, isAuthenticated, isSuccess, error]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const data = {
      password,
      confirmPassword,
    };

    resetPassword({ token: params?.token, body: data });
  };

  return (
    <div className="row wrapper">
      <div className="col-10 col-lg-5">
        <form className="shadow rounded bg-body" onSubmit={submitHandler}>
          <h2 className="mb-4">New Password</h2>

          <div className="mb-3">
            <label htmlFor="password_field" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password_field"
              className="form-control"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="confirm_password_field" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm_password_field"
              className="form-control"
              name="confirm_password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button
            id="new_password_button"
            type="submit"
            className="btn w-100 py-2"
            disabled={isLoading}
          >
            Set Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
```

- Go to frontend/src/redux/api/userApi.js file & update the code :

```javascript
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setIsAuthenticated, setLoading, setUser } from "../features/userSlice";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/v1" }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => `/me`,
      transformResponse: (result) => result.user,
      async onQueryStarted({ queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
          dispatch(setIsAuthenticated(true));
          dispatch(setLoading(false));
        } catch (error) {
          dispatch(setLoading(false));
          console.log(error);
        }
      },
      providesTags: ["User"],
    }),
    updateProfile: builder.mutation({
      query(body) {
        return {
          url: `/me/update`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["User"],
    }),

    uploadAvatar: builder.mutation({
      query(body) {
        return {
          url: `/me/upload_avatar`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["User"],
    }),
    uploadPassword: builder.mutation({
      query(body) {
        return {
          url: `/password/update`,
          method: "PUT",
          body,
        };
      },
    }),
    forgotPassword: builder.mutation({
      query(body) {
        return {
          url: `/password/forgot`,
          method: "POST",
          body,
        };
      },
    }),
    resetPassword: builder.mutation({
      query({ token, body }) {
        return {
          url: `/password/reset/${token}`,
          method: "PUT",
          body,
        };
      },
    }),
  }),
});

export const {
  useGetMeQuery,
  useUpdateProfileMutation,
  useUploadAvatarMutation,
  useUploadPasswordMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = userApi;
```

- Go to frontend/src/App.js file & update the code :

```javascript
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { Toaster } from "react-hot-toast";
import ProductDetails from "./components/product/productDetails";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Profile from "./components/user/profile";
import UpdateProfile from "./components/user/UpdateProfile";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UploadAvatar from "./components/user/UploadAvatar";
import UpdatePassword from "./components/user/UpdatePassword";
import ForgotPassword from "./components/auth/ForgotPassword";
import ResetPassword from "./components/auth/ResetPassword";

function App() {
  return (
    <Router>
      <div className="App">
        <Toaster position="top-center" />
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/password/forgot" element={<ForgotPassword />} />
            <Route path="/password/reset/:token" element={<ResetPassword />} />

            <Route
              path="/me/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            <Route
              path="/me/update-profile"
              element={
                <ProtectedRoute>
                  <UpdateProfile />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Routes>
            path="/me/update-avatar" element=
            {
              <ProtectedRoute>
                <UploadAvatar />
              </ProtectedRoute>
            }
          </Routes>
          <Routes>
            path="/me/update-password" element=
            {
              <ProtectedRoute>
                <UpdatePassword />
              </ProtectedRoute>
            }
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
```

## Handle User Cart

- Go to frontend/src/component/product/productDetails.jsx file & update the code :

```javascript
import { useEffect, useState } from "react";
import { useGetProductDetailsQuery } from "../../redux/api/productsApi";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import StarRatings from "react-star-ratings";
import Loader from "../layout/Loader";

function ProductDetails() {
  const params = useParams();

  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState("");

  const { data, isLoading, error, isError } = useGetProductDetailsQuery(
    params.id,
  );
  const product = data?.product;

  useEffect(() => {
    if (product) {
      setActiveImg(
        product?.images[0]
          ? product?.images[0]?.url
          : "/images/default_product.png",
      );
    }
  }, [product]);

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
  }, [isError, error]);

  const increseQty = () => {
    const count = document.querySelector(".count");
    if (count.valueAsNumber >= product?.stock) return;
    const qty = count.valueAsNumber + 1;
    setQuantity(qty);
  };

  const decreseQty = () => {
    const count = document.querySelector(".count");
    if (count.valueAsNumber <= 1) return;
    const qty = count.valueAsNumber - 1;
    setQuantity(qty);
  };

  if (isLoading) return <Loader />;
  return (
    <div className="row d-flex justify-content-around">
      <div className="col-12 col-lg-5 img-fluid" id="product_image">
        <div className="p-3">
          <img
            className="d-block w-100"
            src={activeImg}
            alt={product?.name}
            width="340"
            height="390"
          />
        </div>
        <div className="row justify-content-start mt-5">
          {product?.images?.map((img) => (
            <div className="col-2 ms-4 mt-2">
              <button
                type="button"
                className="p-0 border-0 bg-transparent"
                aria-label="View product image"
              >
                <img
                  className={`d-block border rounded p-3 cursor-pointer ${
                    img?.url === activeImg ? "border-primary" : ""
                  }`}
                  height="100"
                  width="100"
                  src={img?.url}
                  alt={img?.url}
                  onClick={(e) => setActiveImg(img?.url)}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="col-12 col-lg-5 mt-5">
        <h3>{product?.name}</h3>
        <p id="product_id">Product # {product?._id}</p>

        <hr />

        <div className="d-flex">
          <StarRatings
            rating={product?.ratings}
            starRatedColor="rgb(20, 20, 20)"
            numberOfStars={5}
            name="rating"
            starDimension="20px"
            starSpacing="3px"
          />
          <span id="no-of-reviews" className="pt-1 ps-2">
            {" "}
            ({product?.numOfReviews} Reviews){" "}
          </span>
        </div>
        <hr />

        <p id="product_price">${product?.price}</p>
        <div className="stockCounter d-inline">
          <span className="btn btn-danger minus" onClick={decreseQty}>
            -
          </span>
          <input
            type="number"
            className="form-control count d-inline"
            value={quantity}
            readonly
          />
          <span className="btn btn-primary plus" onClick={increseQty}>
            +
          </span>
        </div>
        <button
          type="button"
          id="cart_btn"
          className="btn btn-primary d-inline ms-4"
          disabled=""
        >
          Add to Cart
        </button>

        <hr />

        <p>
          Status:{" "}
          <span
            id="stock_status"
            className={product?.stock > 0 ? "text-success" : "text-danger"}
          >
            {product?.stock > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </p>

        <hr />

        <h4 className="mt-2">Description:</h4>
        <p>{product?.description}</p>
        <hr />
        <p id="product_seller mb-3">
          Sold by: <strong>{product?.seller}</strong>
        </p>

        <div className="alert alert-danger my-5" type="alert">
          Login to post your review.
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
```

### Add to Cart Button

- Go to frontend/src/redux/features folder then create a new file cartSlice.js & add this code :

```javascript
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
};

export const cartSlice = createSlice({
  initialState,
  name: "cartSlice",
  reducers: {
    setCartItem: (state, action) => {
      const item = action.payload;

      const isItemExist = state.cartItems.find(
        (i) => i.productId === item.product,
      );
      if (isItemExist) {
        state.cartItems = state.cartItems.map((i) =>
          i.product === isItemExist.product ? item : i,
        );
      } else {
        state.cartItems.push(item);
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export default cartSlice.reducer;
export const { setCartItem } = cartSlice.actions;
```

- Go to frontend/src/components/product/productDetails.jsx file & update the code :

```javascript
import { useEffect, useState } from "react";
import { useGetProductDetailsQuery } from "../../redux/api/productsApi";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import StarRatings from "react-star-ratings";
import Loader from "../layout/Loader";
import { useDispatch } from "react-redux";
import { setCartItem } from "../../redux/features/cartSlice";

function ProductDetails() {
  const params = useParams();
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState("");

  const { data, isLoading, error, isError } = useGetProductDetailsQuery(
    params.id,
  );
  const product = data?.product;

  useEffect(() => {
    if (product) {
      setActiveImg(
        product?.images[0]
          ? product?.images[0]?.url
          : "/images/default_product.png",
      );
    }
  }, [product]);

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
  }, [isError, error]);

  const increseQty = () => {
    const count = document.querySelector(".count");
    if (count.valueAsNumber >= product?.stock) return;
    const qty = count.valueAsNumber + 1;
    setQuantity(qty);
  };

  const decreseQty = () => {
    const count = document.querySelector(".count");
    if (count.valueAsNumber <= 1) return;
    const qty = count.valueAsNumber - 1;
    setQuantity(qty);
  };

  const setItemToCart = () => {
    const cartItem = {
      productId: product?._id,
      name: product?.name,
      price: product?.price,
      image: product?.images[0]?.url,
      stock: product?.stock,
      quantity,
    };

    dispatch(setCartItem(cartItem));
    toast.success("Item added to cart");
  };

  if (isLoading) return <Loader />;
  return (
    <div className="row d-flex justify-content-around">
      <div className="col-12 col-lg-5 img-fluid" id="product_image">
        <div className="p-3">
          <img
            className="d-block w-100"
            src={activeImg}
            alt={product?.name}
            width="340"
            height="390"
          />
        </div>
        <div className="row justify-content-start mt-5">
          {product?.images?.map((img) => (
            <div className="col-2 ms-4 mt-2">
              <button
                type="button"
                className="p-0 border-0 bg-transparent"
                aria-label="View product image"
              >
                <img
                  className={`d-block border rounded p-3 cursor-pointer ${
                    img?.url === activeImg ? "border-primary" : ""
                  }`}
                  height="100"
                  width="100"
                  src={img?.url}
                  alt={img?.url}
                  onClick={(e) => setActiveImg(img?.url)}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="col-12 col-lg-5 mt-5">
        <h3>{product?.name}</h3>
        <p id="product_id">Product # {product?._id}</p>

        <hr />

        <div className="d-flex">
          <StarRatings
            rating={product?.ratings}
            starRatedColor="rgb(20, 20, 20)"
            numberOfStars={5}
            name="rating"
            starDimension="20px"
            starSpacing="3px"
          />
          <span id="no-of-reviews" className="pt-1 ps-2">
            {" "}
            ({product?.numOfReviews} Reviews){" "}
          </span>
        </div>
        <hr />

        <p id="product_price">${product?.price}</p>
        <div className="stockCounter d-inline">
          <span className="btn btn-danger minus" onClick={decreseQty}>
            -
          </span>
          <input
            type="number"
            className="form-control count d-inline"
            value={quantity}
            readonly
          />
          <span className="btn btn-primary plus" onClick={increseQty}>
            +
          </span>
        </div>
        <button
          type="button"
          id="cart_btn"
          className="btn btn-primary d-inline ms-4"
          disabled={product?.stock <= 0}
          onClick={setItemToCart}
        >
          Add to Cart
        </button>

        <hr />

        <p>
          Status:{" "}
          <span
            id="stock_status"
            className={product?.stock > 0 ? "text-success" : "text-danger"}
          >
            {product?.stock > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </p>

        <hr />

        <h4 className="mt-2">Description:</h4>
        <p>{product?.description}</p>
        <hr />
        <p id="product_seller mb-3">
          Sold by: <strong>{product?.seller}</strong>
        </p>

        <div className="alert alert-danger my-5" type="alert">
          Login to post your review.
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
```

- Go to frontend/src/redux/store.js file & update the code :

```javascript
import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./api/productsApi";
import { authApi } from "./api/authApi";
import { userApi } from "./api/userApi";
import { useReducer } from "./features/userSlice";
import { cartReducer } from "./features/cartSlice";

export const store = configureStore({
  reducer: {
    auth: useReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      authApi.middleware,
      userApi.middleware,
    ),
});
```

### Cart Component

- Go to Frontend/src/component folder then create a new folder `cart`
- In Cart Folder the create a new file `Cart.jsx` & Add this code :

```javascript
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      <MetaData title={"Your Cart"} />
      {cartItems.length === 0 ? (
        <h2 className="mt-5">Your Cart is Empty</h2>
      ) : (
        <>
          <h2 className="mt-5">
            Your Cart: <b>{cartItems.length} items</b>
          </h2>
          <div className="row d-flex justify-content-between">
            <div className="col-12 col-lg-8">
              {cartItems?.map((item) => (
                <>
                  <hr />
                  <div className="cart-item" data-key="product1">
                    <div className="row">
                      <div className="col-4 col-lg-3">
                        <img
                          src={item?.image}
                          alt="Laptop"
                          height="90"
                          width="115"
                        />
                      </div>
                      <div className="col-5 col-lg-3">
                        <Link to={`/products/${item?.id}`}> {item?.name} </Link>
                      </div>
                      <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                        <p id="card_item_price">${item?.price.toFixed(2)}</p>
                      </div>
                      <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                        <div className="stockCounter d-inline">
                          <span className="btn btn-danger minus"> - </span>
                          <input
                            type="number"
                            className="form-control count d-inline"
                            value={item?.quantity}
                            readonly
                          />
                          <span className="btn btn-primary plus"> + </span>
                        </div>
                      </div>
                      <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                        <i
                          id="delete_cart_item"
                          className="fa fa-trash btn btn-danger"
                        ></i>
                      </div>
                    </div>
                  </div>
                  <hr />
                </>
              ))}
            </div>

            <div className="col-12 col-lg-3 my-4">
              <div id="order_summary">
                <h4>Order Summary</h4>
                <hr />
                <p>
                  Subtotal:{" "}
                  <span className="order-summary-values">8 (Units)</span>
                </p>
                <p>
                  Est. total:{" "}
                  <span className="order-summary-values">$1499.97</span>
                </p>
                <hr />
                <button id="checkout_btn" className="btn btn-primary w-100">
                  Check out
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Cart;
```

- Go to frontend/src/componenets/layout/Header.jsx file & add this code :

```javascript
import { useSelector } from "react-redux";
import { useGetMeQuery } from "../../redux/api/userApi";
import Search from "./Search";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../redux/api/authApi";

const Header = () => {
  const navigate = useNavigate();

  const { isLoading } = useGetMeQuery();
  const [logout] = useLogoutMutation;

  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  const logoutHandler = async () => {
    logout();
    navigate(0);
  };

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
        <Search />
      </div>
      <div class="col-12 col-md-3 mt-4 mt-md-0 text-center">
        <a href="/cart" style={{ textDecoration: "none" }}>
          <span id="cart" class="ms-3">
            {" "}
            Cart{" "}
          </span>
          <span className="ms-1" id="cart_count">
            {cartItems?.length}
          </span>
        </a>

        {user ? (
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
                  src={
                    user?.avatar
                      ? user?.avatar?.url
                      : "../images/default_avatar.jpg"
                  }
                  alt="User Avatar"
                  className="rounded-circle"
                />
              </figure>
              <span>{user?.name}</span>
            </button>
            <div
              className="dropdown-menu w-100"
              aria-labelledby="dropDownMenuButton"
            >
              <Link className="dropdown-item" to="/admin/dashboard">
                {" "}
                Dashboard{" "}
              </Link>

              <Link className="dropdown-item" to="/me/orders">
                {" "}
                Orders{" "}
              </Link>

              <Link className="dropdown-item" to="/me/profile">
                {" "}
                Profile{" "}
              </Link>

              <Link
                className="dropdown-item text-danger"
                to="/"
                onClick={logoutHandler}
              >
                Logout{" "}
              </Link>
            </div>
          </div>
        ) : (
          !isLoading && (
            <Link to="/login" className="btn ms-4" id="login_btn">
              {" "}
              Login{" "}
            </Link>
          )
        )}
      </div>
    </nav>
  );
};

export default Header;
```

- Go to Frontend/src/App.js file & update the code :

```javascript
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { Toaster } from "react-hot-toast";
import ProductDetails from "./components/product/productDetails";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Profile from "./components/user/profile";
import UpdateProfile from "./components/user/UpdateProfile";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UploadAvatar from "./components/user/UploadAvatar";
import UpdatePassword from "./components/user/UpdatePassword";
import ForgotPassword from "./components/auth/ForgotPassword";
import ResetPassword from "./components/auth/ResetPassword";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <Router>
      <div className="App">
        <Toaster position="top-center" />
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/password/forgot" element={<ForgotPassword />} />
            <Route path="/password/reset/:token" element={<ResetPassword />} />

            <Route
              path="/me/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            <Route
              path="/me/update-profile"
              element={
                <ProtectedRoute>
                  <UpdateProfile />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Routes>
            path="/me/update-avatar" element=
            {
              <ProtectedRoute>
                <UploadAvatar />
              </ProtectedRoute>
            }
          </Routes>
          <Routes>
            path="/me/update-password" element=
            {
              <ProtectedRoute>
                <UpdatePassword />
              </ProtectedRoute>
            }
          </Routes>
          <Routes path="/cart" element={<Cart />} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
```

### Handle Quantity Of Cart

- Go to frontend/src/components/cart/Cart.jsx file and update the code :

```javascript
import { useDispatch, useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import { Link } from "react-router-dom";
import { setCartItem } from "../../redux/slices/cartSlice";

function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const increseQty = (item, quantity) => {
    const newQty = quantity + 1;
    if (newQty > item?.stock) return;

    setItemToCart(item, newQty);
  };

  const decreseQty = (item, quantity) => {
    const newQty = quantity - 1;
    if (newQty <= 0) return;
    setItemToCart(item, newQty);
  };

  const setItemToCart = (item, newQty) => {
    const cartItem = {
      productId: item?.productId,
      name: item?.name,
      price: item?.price,
      image: item?.images,
      stock: item?.stock,
      quantity: newQty,
    };

    dispatch(setCartItem(cartItem));
  };

  return (
    <>
      <MetaData title={"Your Cart"} />
      {cartItems.length === 0 ? (
        <h2 className="mt-5">Your Cart is Empty</h2>
      ) : (
        <>
          <h2 className="mt-5">
            Your Cart: <b>{cartItems.length} items</b>
          </h2>
          <div className="row d-flex justify-content-between">
            <div className="col-12 col-lg-8">
              {cartItems?.map((item) => (
                <>
                  <hr />
                  <div className="cart-item" data-key="product1">
                    <div className="row">
                      <div className="col-4 col-lg-3">
                        <img
                          src={item?.image}
                          alt="Laptop"
                          height="90"
                          width="115"
                        />
                      </div>
                      <div className="col-5 col-lg-3">
                        <Link to={`/products/${item?.id}`}> {item?.name} </Link>
                      </div>
                      <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                        <p id="card_item_price">${item?.price.toFixed(2)}</p>
                      </div>
                      <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                        <div className="stockCounter d-inline">
                          <span
                            className="btn btn-danger minus"
                            onClick={() => decreseQty(item, item?.quantity)}
                          >
                            -
                          </span>
                          <input
                            type="number"
                            className="form-control count d-inline"
                            value={item?.quantity}
                            readonly
                          />
                          <span
                            className="btn btn-primary plus"
                            onClick={() => increseQty(item, item?.quantity)}
                          >
                            {" "}
                            +{" "}
                          </span>
                        </div>
                      </div>
                      <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                        <i
                          id="delete_cart_item"
                          className="fa fa-trash btn btn-danger"
                        ></i>
                      </div>
                    </div>
                  </div>
                  <hr />
                </>
              ))}
            </div>

            <div className="col-12 col-lg-3 my-4">
              <div id="order_summary">
                <h4>Order Summary</h4>
                <hr />
                <p>
                  Subtotal:{" "}
                  <span className="order-summary-values">8 (Units)</span>
                </p>
                <p>
                  Est. total:{" "}
                  <span className="order-summary-values">$1499.97</span>
                </p>
                <hr />
                <button id="checkout_btn" className="btn btn-primary w-100">
                  Check out
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Cart;
```

### Remove Cart Items

- Go to frontend/src/components/cart/Cart.jsx file and update the code :

```javascript
import { useDispatch, useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import { Link } from "react-router-dom";
import { setCartItem, removeCartItem } from "../../redux/slices/cartSlice";

function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const increseQty = (item, quantity) => {
    const newQty = quantity + 1;
    if (newQty > item?.stock) return;

    setItemToCart(item, newQty);
  };

  const decreseQty = (item, quantity) => {
    const newQty = quantity - 1;
    if (newQty <= 0) return;
    setItemToCart(item, newQty);
  };

  const setItemToCart = (item, newQty) => {
    const cartItem = {
      productId: item?.productId,
      name: item?.name,
      price: item?.price,
      image: item?.images,
      stock: item?.stock,
      quantity: newQty,
    };

    dispatch(setCartItem(cartItem));
  };

  const removeCartItemHandler = (id) => {
    dispatch(removeCartItem(id));
  };

  return (
    <>
      <MetaData title={"Your Cart"} />
      {cartItems.length === 0 ? (
        <h2 className="mt-5">Your Cart is Empty</h2>
      ) : (
        <>
          <h2 className="mt-5">
            Your Cart: <b>{cartItems.length} items</b>
          </h2>
          <div className="row d-flex justify-content-between">
            <div className="col-12 col-lg-8">
              {cartItems?.map((item) => (
                <>
                  <hr />
                  <div className="cart-item" data-key="product1">
                    <div className="row">
                      <div className="col-4 col-lg-3">
                        <img
                          src={item?.image}
                          alt="Laptop"
                          height="90"
                          width="115"
                        />
                      </div>
                      <div className="col-5 col-lg-3">
                        <Link to={`/products/${item?.id}`}> {item?.name} </Link>
                      </div>
                      <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                        <p id="card_item_price">${item?.price.toFixed(2)}</p>
                      </div>
                      <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                        <div className="stockCounter d-inline">
                          <span
                            className="btn btn-danger minus"
                            onClick={() => decreseQty(item, item?.quantity)}
                          >
                            -
                          </span>
                          <input
                            type="number"
                            className="form-control count d-inline"
                            value={item?.quantity}
                            readonly
                          />
                          <span
                            className="btn btn-primary plus"
                            onClick={() => increseQty(item, item?.quantity)}
                          >
                            {" "}
                            +{" "}
                          </span>
                        </div>
                      </div>
                      <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                        <i
                          id="delete_cart_item"
                          className="fa fa-trash btn btn-danger"
                          onClick={() => removeCartItemHandler(item?.productId)}
                        ></i>
                      </div>
                    </div>
                  </div>
                  <hr />
                </>
              ))}
            </div>

            <div className="col-12 col-lg-3 my-4">
              <div id="order_summary">
                <h4>Order Summary</h4>
                <hr />
                <p>
                  Subtotal:{" "}
                  <span className="order-summary-values">8 (Units)</span>
                </p>
                <p>
                  Est. total:{" "}
                  <span className="order-summary-values">$1499.97</span>
                </p>
                <hr />
                <button id="checkout_btn" className="btn btn-primary w-100">
                  Check out
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Cart;
```

- GO to frontend/src/redux/features/cartSlice.js file & update the code :

```javascript
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
};

export const cartSlice = createSlice({
  initialState,
  name: "cartSlice",
  reducers: {
    setCartItem: (state, action) => {
      const item = action.payload;

      const isItemExist = state.cartItems.find(
        (i) => i.productId === item.product,
      );
      if (isItemExist) {
        state.cartItems = state.cartItems.map((i) =>
          i.product === isItemExist.product ? item : i,
        );
      } else {
        state.cartItems.push(item);
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (i) => i.productId !== action.payload,
      );
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export default cartSlice.reducer;
export const { setCartItem, removeCartItem } = cartSlice.actions;
```

### Handle Cart Summary

- Go to frontend/src/components/cart/Cart.jsx file and update the code :

```javascript
import { useDispatch, useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import { Link } from "react-router-dom";
import { setCartItem, removeCartItem } from "../../redux/slices/cartSlice";

function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const increseQty = (item, quantity) => {
    const newQty = quantity + 1;
    if (newQty > item?.stock) return;

    setItemToCart(item, newQty);
  };

  const decreseQty = (item, quantity) => {
    const newQty = quantity - 1;
    if (newQty <= 0) return;
    setItemToCart(item, newQty);
  };

  const setItemToCart = (item, newQty) => {
    const cartItem = {
      productId: item?.productId,
      name: item?.name,
      price: item?.price,
      image: item?.images,
      stock: item?.stock,
      quantity: newQty,
    };

    dispatch(setCartItem(cartItem));
  };

  const removeCartItemHandler = (id) => {
    dispatch(removeCartItem(id));
  };

  return (
    <>
      <MetaData title={"Your Cart"} />
      {cartItems.length === 0 ? (
        <h2 className="mt-5">Your Cart is Empty</h2>
      ) : (
        <>
          <h2 className="mt-5">
            Your Cart: <b>{cartItems.length} items</b>
          </h2>
          <div className="row d-flex justify-content-between">
            <div className="col-12 col-lg-8">
              {cartItems?.map((item) => (
                <>
                  <hr />
                  <div className="cart-item" data-key="product1">
                    <div className="row">
                      <div className="col-4 col-lg-3">
                        <img
                          src={item?.image}
                          alt="Laptop"
                          height="90"
                          width="115"
                        />
                      </div>
                      <div className="col-5 col-lg-3">
                        <Link to={`/products/${item?.id}`}> {item?.name} </Link>
                      </div>
                      <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                        <p id="card_item_price">${item?.price.toFixed(2)}</p>
                      </div>
                      <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                        <div className="stockCounter d-inline">
                          <span
                            className="btn btn-danger minus"
                            onClick={() => decreseQty(item, item?.quantity)}
                          >
                            -
                          </span>
                          <input
                            type="number"
                            className="form-control count d-inline"
                            value={item?.quantity}
                            readonly
                          />
                          <span
                            className="btn btn-primary plus"
                            onClick={() => increseQty(item, item?.quantity)}
                          >
                            {" "}
                            +{" "}
                          </span>
                        </div>
                      </div>
                      <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                        <i
                          id="delete_cart_item"
                          className="fa fa-trash btn btn-danger"
                          onClick={() => removeCartItemHandler(item?.productId)}
                        ></i>
                      </div>
                    </div>
                  </div>
                  <hr />
                </>
              ))}
            </div>

            <div className="col-12 col-lg-3 my-4">
              <div id="order_summary">
                <h4>Order Summary</h4>
                <hr />
                <p>
                  Units:{" "}
                  <span className="order-summary-values">
                    {cartItems?.reduce((acc, item) => acc + item?.quantity, 0)}{" "}
                    (Units)
                  </span>
                </p>
                <p>
                  Est. total:{" "}
                  <span className="order-summary-values">
                    $
                    {cartItems
                      ?.reduce(
                        (acc, item) => acc + item?.quantity * item?.price,
                        0,
                      )
                      .toFixed(2)}
                  </span>
                </p>
                <hr />
                <button id="checkout_btn" className="btn btn-primary w-100">
                  Check out
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Cart;
```

## Handle Checkout & COD Order

### Handle Shipping Info

- Go to frontend/src/components/cart folder then create a new file `Shipping.jsx` & Add this code :

```javascript
import { useEffect, useState } from "react";
import { countries } from "countries-list";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingInfo } from "../../redux/features/cartSlice";

function Shipping() {
  const countryList = Object.values(countries);

  const dispatch = useDispatch();

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [country, setCountry] = useState("");

  const { ShippingInfo } = useSelector((state) => state.cart);

  useEffect(() => {
    if (ShippingInfo) {
      setAddress(ShippingInfo.address);
      setCity(ShippingInfo.city);
      setZipCode(ShippingInfo.zipCode);
      setPhoneNo(ShippingInfo.phoneNo);
      setCountry(ShippingInfo.country);
    }
  }, [ShippingInfo]);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(saveShippingInfo({ address, city, zipCode, phoneNo, country }));
  };

  return (
    <>
      <div className="row wrapper mb-5">
        <div className="col-10 col-lg-5">
          <form className="shadow rounded bg-body" onSubmit={submitHandler}>
            <h2 className="mb-4">Shipping Info</h2>
            <div className="mb-3">
              <label htmlFor="address_field" className="form-label">
                Address
              </label>
              <input
                type="text"
                id="address_field"
                className="form-control"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="city_field" className="form-label">
                City
              </label>
              <input
                type="text"
                id="city_field"
                className="form-control"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phone_field" className="form-label">
                Phone No
              </label>
              <input
                type="tel"
                id="phone_field"
                className="form-control"
                name="phoneNo"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="zip_code_field" className="form-label">
                Zip Code
              </label>
              <input
                type="number"
                id="zip_code_field"
                className="form-control"
                name="postalCode"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="country_field" className="form-label">
                Country
              </label>
              <select
                id="country_field"
                className="form-select"
                name="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              >
                {countryList.map((country) => (
                  <option key={country?.name} value={country?.name}>
                    {country?.name}
                  </option>
                ))}
              </select>
            </div>

            <button id="shipping_btn" type="submit" className="btn w-100 py-2">
              CONTINUE
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Shipping;
```

- Go to frontend/src/redux/features/cartSlice.js file & update the code :

```javascript
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],

  shippingInfo: localStorage.getItem("shippingInfo")
    ? JSON.parse(localStorage.getItem("shippingInfo"))
    : {},
};

export const cartSlice = createSlice({
  initialState,
  name: "cartSlice",
  reducers: {
    setCartItem: (state, action) => {
      const item = action.payload;

      const isItemExist = state.cartItems.find(
        (i) => i.productId === item.product,
      );
      if (isItemExist) {
        state.cartItems = state.cartItems.map((i) =>
          i.product === isItemExist.product ? item : i,
        );
      } else {
        state.cartItems.push(item);
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (i) => i.productId !== action.payload,
      );
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    saveShippingInfo: (state, action) => {
      state.shippingInfo = action.payload;
      localStorage.setItem("shippingInfo", JSON.stringify(state.shippingInfo));
    },
  },
});

export default cartSlice.reducer;
export const { setCartItem, removeCartItem, saveShippingInfo } =
  cartSlice.actions;
```

- Go to frontend/src/components/cart/Cart.jsx file then update the code :

```javascript
import { useDispatch, useSelector } from "react-redux";
import MetaData from "../layout/layout/MetaData";
import { Link, useNavigate } from "react-router-dom";
import { setCartItem, removeCartItem } from "../../redux/slices/cartSlice";

function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const increseQty = (item, quantity) => {
    const newQty = quantity + 1;
    if (newQty > item?.stock) return;

    setItemToCart(item, newQty);
  };

  const decreseQty = (item, quantity) => {
    const newQty = quantity - 1;
    if (newQty <= 0) return;
    setItemToCart(item, newQty);
  };

  const setItemToCart = (item, newQty) => {
    const cartItem = {
      productId: item?.productId,
      name: item?.name,
      price: item?.price,
      image: item?.images,
      stock: item?.stock,
      quantity: newQty,
    };

    dispatch(setCartItem(cartItem));
  };

  const removeCartItemHandler = (id) => {
    dispatch(removeCartItem(id));
  };

  const checkoutHandler = () => {
    navigate("/shipping");
  };

  return (
    <>
      <MetaData title={"Your Cart"} />
      {cartItems.length === 0 ? (
        <h2 className="mt-5">Your Cart is Empty</h2>
      ) : (
        <>
          <h2 className="mt-5">
            Your Cart: <b>{cartItems.length} items</b>
          </h2>
          <div className="row d-flex justify-content-between">
            <div className="col-12 col-lg-8">
              {cartItems?.map((item) => (
                <>
                  <hr />
                  <div className="cart-item" data-key="product1">
                    <div className="row">
                      <div className="col-4 col-lg-3">
                        <img
                          src={item?.image}
                          alt="Laptop"
                          height="90"
                          width="115"
                        />
                      </div>
                      <div className="col-5 col-lg-3">
                        <Link to={`/products/${item?.id}`}> {item?.name} </Link>
                      </div>
                      <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                        <p id="card_item_price">${item?.price.toFixed(2)}</p>
                      </div>
                      <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                        <div className="stockCounter d-inline">
                          <span
                            className="btn btn-danger minus"
                            onClick={() => decreseQty(item, item?.quantity)}
                          >
                            -
                          </span>
                          <input
                            type="number"
                            className="form-control count d-inline"
                            value={item?.quantity}
                            readonly
                          />
                          <span
                            className="btn btn-primary plus"
                            onClick={() => increseQty(item, item?.quantity)}
                          >
                            {" "}
                            +{" "}
                          </span>
                        </div>
                      </div>
                      <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                        <i
                          id="delete_cart_item"
                          className="fa fa-trash btn btn-danger"
                          onClick={() => removeCartItemHandler(item?.productId)}
                        ></i>
                      </div>
                    </div>
                  </div>
                  <hr />
                </>
              ))}
            </div>

            <div className="col-12 col-lg-3 my-4">
              <div id="order_summary">
                <h4>Order Summary</h4>
                <hr />
                <p>
                  Units:{" "}
                  <span className="order-summary-values">
                    {cartItems?.reduce((acc, item) => acc + item?.quantity, 0)}{" "}
                    (Units)
                  </span>
                </p>
                <p>
                  Est. total:{" "}
                  <span className="order-summary-values">
                    $
                    {cartItems
                      ?.reduce(
                        (acc, item) => acc + item?.quantity * item?.price,
                        0,
                      )
                      .toFixed(2)}
                  </span>
                </p>
                <hr />
                <button
                  id="checkout_btn"
                  className="btn btn-primary w-100"
                  onClick={checkoutHandler}
                >
                  Check out
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Cart;
```

- Go to Frontend/src/App.js file & update the code :

```javascript
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { Toaster } from "react-hot-toast";
import ProductDetails from "./components/product/productDetails";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Profile from "./components/user/profile";
import UpdateProfile from "./components/user/UpdateProfile";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UploadAvatar from "./components/user/UploadAvatar";
import UpdatePassword from "./components/user/UpdatePassword";
import ForgotPassword from "./components/auth/ForgotPassword";
import ResetPassword from "./components/auth/ResetPassword";
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";

function App() {
  return (
    <Router>
      <div className="App">
        <Toaster position="top-center" />
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/password/forgot" element={<ForgotPassword />} />
            <Route path="/password/reset/:token" element={<ResetPassword />} />

            <Route
              path="/me/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            <Route
              path="/me/update-profile"
              element={
                <ProtectedRoute>
                  <UpdateProfile />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Routes>
            path="/me/update-avatar" element=
            {
              <ProtectedRoute>
                <UploadAvatar />
              </ProtectedRoute>
            }
          </Routes>
          <Routes>
            path="/me/update-password" element=
            {
              <ProtectedRoute>
                <UpdatePassword />
              </ProtectedRoute>
            }
          </Routes>
          <Routes path="/cart" element={<Cart />} />
          <Routes
            path="/shipping"
            element={
              <ProtectedRoute>
                <Shipping />
              </ProtectedRoute>
            }
          />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
```
