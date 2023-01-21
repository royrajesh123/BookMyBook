var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products=[
{
name:"A Bright Ray Of Darkness",
author:"Ethan Hawke",
description:"The blistering story of a young man making his Broadway debut in Henry IV just as his marriage implodes",
image:"https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/12/b960fb_da4d27d584ae4e0ea3f5cc9c608c874emv2-1.jpeg?resize=1000%2C1000&ssl=1"

},
{
name:"Jaws",
author:"Peter Benchley",
description:"Jaws is a 1974 novel by American writer Peter Benchley. It tells the story of a great white shark that preys upon a small resort town and the voyage of three men trying to kill it.",
image:"https://www.creatopy.com/blog/wp-content/uploads/2020/08/Jaws-Book-Cover-400x600.jpg"

},
{
name:"The Good Sister And Her Flying Monkeys",
author:"Alexa Blye",
description:"Elena Lacosta, a paranoid, take-no-prisoners drug trafficker turned FBI fugitive, marries a cop and fights her inner demons; her new life depends on it.",
image:"https://images-platform.99static.com//-tUjEZmbTnIMpiyAMy6CiS85KYY=/137x101:962x926/fit-in/500x500/projects-files/101/10168/1016819/4d520fb3-bab8-4d4a-a209-17731bb9da86.jpg"

}

  ]
  res.render('index', { products ,admin:false});
});

module.exports = router;
