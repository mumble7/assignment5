import { Quote } from '../models/schema'

export const allQuotesAPI = (req, res, next) => {
  Quote.find().select('-author -__v -source').exec((err, quotes) => {
    if(err){
      res.json({success: false, message: "Failed query"})
    }else{
      res.write(JSON.stringify(quotes))
      res.end()
    }
  })
}

export const oneQuoteAPI = (req, res, next) => {
  Quote.findOne({_id: req.params.id}).select('-author -__v -source').exec((err, quote) => {
    if(err){
      res.json({success: false, message: "Failed query"})
    }else{
      res.write(JSON.stringify(quote))
      res.end()
    }
  })
}

export const createQuoteAPI = (req, res, next) => {
  new Quote(req.body).save(err => {
    if(err){
      res.json({success: false, message: "Unable to add quote"})
    }else{
      res.end()
    }
  })
} 

export const updateQuoteAPI = (req, res, next) => {
  Quote.findOne({_id: req.params.id}).select('-author').exec((err, quote) => {
    if(err){
      res.json({success: false, message: "Unable to find quote"})
    }else{
      Object.assign(quote, req.body)
      movie.save(err => {
        if(err){
          res.json({success: false, message: "Unable to update quote"})
        }else{
          res.end();
        }
      })
    }
  })
}

export const deleteQuoteAPI = (req, res, next) => {
  Quote.findByIdAndRemove(req.params.id, err => {
    if(err){
      res.json({success: false, message: "Unable to delete quote"})
    }else{
      res.end();
    }
  })
}