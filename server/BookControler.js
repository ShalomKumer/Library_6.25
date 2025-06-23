const BookModel = require("./BookModel.js");

exports.creatBook = async function (req, res) {
  try {
    let b = req.body;
    let newBook = await BookModel.create(b);
    res.status(200).json({
      saved: newBook,
    });
  } catch (err) {
    res.status(400).json({ ERROR: err });
  }
};
exports.deleteBookByName = async function (req, res) {
  try {
    let delBook = await BookModel.deleteOne({ book_name: req.params.name });
    res.status(200).json(`Deleted!`);
  } catch (err) {
    res.status(400).json({ ERROR: err });
  }
};
exports.getByName = async function (req, res) {
  try {
    let name = req.params.name;
    let one = await BookModel.findOne({ book_name: name });
    res.status(200).json(one);
  } catch (err) {
    res.status(400).json({ ERROR: err });
  }
};
exports.allWriterBooks = async function (req, res) {
  try {
    let allWriterBooks = await BookModel.find({ writer: req.params.writer });
    res.status(200).json({ writer: allWriterBooks });
  } catch (err) {
    res.status(400).json({ ERROR: err });
  }
};
exports.allBooks = async function (req, res) {
  try {
    let allBooks = await BookModel.find();
    res.status(200).json(allBooks);
  } catch (err) {
    res.status(400).json({ ERROR: err });
  }
};
exports.updateById = async function (req, res){
  try{
    let oneById = await BookModel.findByIdAndUpdate(req.params.id)
    res.status(200).json({up:oneById, req: req.body})
  }
  catch(err){
    res.status(400).json({ERROR:err})
  }
}