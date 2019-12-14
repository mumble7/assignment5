

import express from 'express'
import { indexPage, aboutPage } from '../app/controllers/index.controller'
import { allQuotesAPI, oneQuoteAPI, createQuoteAPI, updateQuoteAPI, deleteQuoteAPI} from '../app/controllers/quotes.controller'
let router = express.Router()

export function configureRoutes(app){
    router.get('/', indexPage)
    router.get('/about', aboutPage)
    
    //Quotes
    router.get('/api/quotes', allQuotesAPI)
    router.get('/api/quotes/:id', oneQuoteAPI)
    router.post('/api/quotes', createQuoteAPI)
    router.put('/api/quotes/:id', updateQuoteAPI)
    router.delete('/api/quotes/:id', deleteQuoteAPI)

    //user
    // router.post('/api/users/register', registerUserAPI)
    // router.post('/api/users/signin', signUserInAPI)

    app.use('/', router)
}