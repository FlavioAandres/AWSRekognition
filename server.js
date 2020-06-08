const express = require('express')
const multer = require('multer')
const rekognitionController = require('./rekognition')
const multerMiddleware = multer()
const server = express()

const {
    SERVER_PORT = 8080
} = process.env

server.get('/', (req,res)=>{
    res.send({
        message: 'im alive, you can use me for everything you want'
    })
})

server.post('/text', [multerMiddleware.single('image'), rekognitionController.rekognizeText ] )

server.listen(SERVER_PORT, ()=>{
    console.log('Rekognition API Started at port 8080')
})
