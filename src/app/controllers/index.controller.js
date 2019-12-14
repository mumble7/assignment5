import express from "express"
export let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Quotes' })
})

import { Quote } from '../models/quotes'

/* GET home page. */
export const indexPage = (req, res, next) => {
  Quote.find().exec((err, quotes) => {
    res.render('layout', { content: 'index', title: 'Ten Awesome Quotes', quotes });
  })
}

// About page 
export const aboutPage = (req, res, next) => {
  res.render('layout', { content: 'about', title: 'Ten Awesome Quotes' })
}
