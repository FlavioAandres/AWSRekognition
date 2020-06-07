const express = require('express')
const multer = require('multer')
const rekognitionController = require('./rekognition')
const multerMiddleware = multer()
const server = express()

server.get('/', (req,res)=>{
    res.send({
        message: 'im alive, you can use me for everything you want'
    })
})

server.post('/text', [multerMiddleware.single('image'), rekognitionController.rekognizeText ] )

server.listen(8080, ()=>{
    console.log('Rekognition API Started at port 8080')
})
