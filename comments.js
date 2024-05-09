//create web service
const express = require('express');
const router = express.Router();
const db = require('../db');
//get all comments
router.get('/', (req, res) => {
    db.query('SELECT * FROM comments', (err, rows) => {
        if (err) {
            console.log(err)
        } else {
            res.send(rows)
        }
    })
});
//get comment by id
router.get('/:id', (req, res) => {
    db.query(`SELECT * FROM comments WHERE id = ${req.params.id}`, (err, rows) => {
        if (err) {
            console.log(err)
        } else {
            res.send(rows)
        }
    })
});
//create new comment
router.post('/', (req, res) => {
    db.query(`INSERT INTO comments (author, content, post_id) VALUES ('${req.body.author}', '${req.body.content}', ${req.body.post_id})`, (err, rows) => {
        if (err) {
            console.log(err)
        } else {
            res.send('Comment added')
        }
    })
});
//update comment
router.put('/:id', (req, res) => {
    db.query(`UPDATE comments SET author = '${req.body.author}', content = '${req.body.content}', post_id = ${req.body.post_id} WHERE id = ${req.params.id}`, (err, rows) => {
        if (err) {
            console.log(err)
        } else {
            res.send('Comment updated')
        }
    })
});
//delete comment
router.delete('/:id', (req, res) => {
    db.query(`DELETE FROM comments WHERE id = ${req.params.id}`, (err, rows) => {
        if (err) {
            console.log(err)
        } else {
            res.send('Comment deleted')
        }
    })
});
module.exports = router;