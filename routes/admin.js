const express = require("express");

const router = express.Router();

router.get("/director", (req, res) => {
  res.send("<form action='/admin/director' method='POST'> <input type='text' name='title' id='title' /> <button type='submit'>Submit</button> </form>");
});

router.post("/director", (req,res) => {
    console.log(req.body)
    res.redirect('/')
})

module.exports = router;
