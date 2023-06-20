const express = require('express');
const router = express.Router();
const redis = require('../redis');

router.get('/', async (req, res) => {
    let added_todos = 0;
    await redis.getAsync("added_todos").then(response => added_todos = response);
    console.log(added_todos);

    res.send({
        "added_todos": added_todos
    });
});

module.exports = router;