import express from 'express';
const app = express()

/**
 * @module api
 */

/**
 * Index Route
 * @name index
 * @path {GET} /
 */
app.get('/', (req, res) => res.send('Welcome'))

/**
 * Index Route
 * @name users
 * @path {POST /users
 */
app.post('/users', (req, res) => res.send('Welcome'))

/**
 * Index Route
 * @name products
 * @path {DELETE} /products
 */
app.delete('/products', (req, res) => res.send('Welcome'))

/**
 * Index Route
 * @name signin
 * @path {POST} /signin
 */
app.post('/signin', (req, res) => res.send('Welcome'))