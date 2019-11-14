//DO I NEED THIS PAGE?

import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Quote } from '../models/quote'

export class InMemoryQuoteDBService implements InMemoryDbService {
    createDb() {
        const quotes = [
            //Imports quotes json style
        ]

        return { quotes }

    }
}