let dbConn = require('../../config/db.config');
let Answer = function(answer) {
    this.id = answer.id;
    this.date_info = answer.date_info;
    this.user_type = answer.user_type;
    this.user_name = answer.user_name;
    this.usage_period = answer.usage_period;
    this.openQuestion_one = answer.openQuestion_one;
    this.dpdQuestion_two = answer.dpdQuestion_two;
    this.dpdQuestion_three = answer.dpdQuestion_three;
    this.openQuestion_four = answer.openQuestion_four;
    this.dpdQuestion_five = answer.dpdQuestion_five;
}

Answer.getAllAnswers = (result) => {
    dbConn.query('SELECT * FROM core_info', (err, res) =>{
        if(err){
            console.log('Error while fetching answers', err);
            result(null, err);
        }
        else {
            console.log('Answers fetching successfully');
            result(null,res)
        }
    })
}

//get answer by id from database
Answer.getAnswerById = (id, result) =>{
    dbConn.query('SELECT * FROM core_info WHERE id=?', id, (err, res) =>{
        if(err){
            console.log('Error while fetching answers by id', err);
            result(null, err);
        }
        else {
            console.log('Answers fetching by id successfully');
            result(null,res)
        }   
    })
}

// create new answer record
Answer.createAnswer = (answerReqData, result) =>{
    dbConn.query('INSERT INTO core_info SET ?', answerReqData, (err, res) =>{
        if(err){
            console.log('Inserting new answer failed', err);
            result(null, {status: false, message: err});
        }
        else {
            console.log('Adding new answer record completed successfully');
            result(null, {status: true, message: 'Adding new answer record completed successfully', insertId: res.id})
        }
        });
}

//update answer record
Answer.updateAnswer = (id, answerReqData, result) =>{
    dbConn.query("UPDATE core_info SET date_info=?,user_type=?,user_name=?,usage_period=?,openQuestion_one=?,dpdQuestion_two=?,dpdQuestion_three=?,openQuestion_four=?,dpdQuestion_five=? WHERE id=?", [answerReqData.date_info,answerReqData.user_type,answerReqData.user_name,answerReqData.usage_period,answerReqData.openQuestion_one,answerReqData.dpdQuestion_two,answerReqData.dpdQuestion_three,answerReqData.openQuestion_four,answerReqData.dpdQuestion_five, id],(err, res) =>{
        if(err){
            console.log('Updating failed', err);
            result(null, err);
        }
        else {
            console.log('Updating record completed successfully');
            result(null, res)
        }
        });
}

//delete answer record
Answer.deleteAnswer = (id, result) => {
    dbConn.query('DELETE FROM core_info WHERE id=?', [id], (err, res) =>{
        if(err){
            console.log('Deleting failed', err);
            result(null, err);
        }
        else{
            console.log('Deleting record completed successfully');
            result(null, res)
        }
    })
}

module.exports = Answer;