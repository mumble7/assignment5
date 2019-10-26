//TODO

import mongoose, { mongo } from 'mongoose'

const Schema = mongoose.Schema

//quotes

let quotesSchema = new Schema({
    quote: String,
    author: String,
    source: String,
    topic: String,
    added: Date,
    updated: Date
})