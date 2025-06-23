const express = require ('express')
const router = express.Router();
const BookControler = require('./BookControler')

router.post("/api/books", BookControler.creatBook);
router.get("/api/books", BookControler.allBooks); 
router.patch("/api/books/:id",BookControler.updateById)
router.get("/api/books/name/:name", BookControler.getByName);       
router.get("/api/books/writer/:writer", BookControler.allWriterBooks); 
router.delete("/api/books/name/:name", BookControler.deleteBookByName); 

module.exports = router;