const Answer = require('../models/answer.model');
const AnswerModel = require('../models/answer.model');

//get all data = get all answers located in database
exports.getAnswerslist = (req,res) => {
    console.log('Get all data (in our DB we will get all answers) from DB');
    AnswerModel.getAllAnswers((err, answers) => {
        console.log('Info is here')
        if(err)
        res.send(err);  
        console.log('Answer', answers);
        res.send(answers);
    })
}

//get row by id = get answer with setted id
exports.getAnswerById = (req,res) => {
    console.log('Get row with specified id from table. In our case we will get answer with specified id');
    AnswerModel.getAnswerById(req.params.id, (err, answers) => {
        console.log('Info is here')
        if(err)
        res.send(err);  
        console.log('Specified answer data', answers);
        res.send(answers);
    })
}

//create new record = add answer to db
exports.createNewAnswer = (req,res) => {
    console.log('req body', req.body);
    const answerReqData = new Answer(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Check field data'});
    }
    else{
        console.log('Data is valid');
        AnswerModel.createAnswer(answerReqData, (err, answer) =>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Record created successfully', data: answer});
            })
        }
    }

    //update record = update answer
    exports.updateAnswer = (req,res) => {
        const answerReqData = new Answer(req.body);
        console.log('answerReqData', req.body);
        if (req.body.constructor === Object && Object.keys(req.body).length === 0){
            res.send(400).send({success: false, message: 'Check field data'});
        }
        else{
            console.log('Data is valid');
            AnswerModel.updateAnswer(req.params.id, answerReqData, (err, answer) =>{
                if(err)
                res.send(err);
                res.json({status: true, message: 'Record updated successfully', data: answer});
                })
            }
        }

    //delete record = delete answer
    exports.deleteAnswer = (req,res) => {
        AnswerModel.deleteAnswer(req.params.id, (err, answer)=>{
            if(err)
            res.send(err);
            res.json({success: true, message: 'Answer deleted'});
        })
    }