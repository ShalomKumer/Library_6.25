import { useState } from "react";
// import { useNavigate } from 'react-router-dom'
import axios from "axios";

function AddBook() {
  // const navigat = useNavigate()
  const [url, setUrl] = useState("");
  const [alt, setAlt] = useState("");
  const [bookName, setBookName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [year, setYear] = useState("");
  const [writer, setWriter] = useState("");

  function urlChang(e) {
    setUrl(e.target.value);
  }
  function altChang(e) {
    setAlt(e.target.value);
  }
  function BookNameChang(e) {
    setBookName(e.target.value);
  }
  function descriptionChang(e) {
    setDescription(e.target.value);
  }
  function priceChang(e) {
    setPrice(e.target.value);
  }
  function yearChang(e) {
    setYear(e.target.value);
  }
  function writerChang(e) {
    setWriter(e.target.value);
  }
  async function addNewBook() {
    if (
      url.trim() !== "" ||
      bookName.trim() !== "" ||
      price.trim() !== "" ||
      year.trim() !== "" ||
      writer.trim() !== ""
    ) {
      let newBook = {
        imageURL: url,
        alt: alt,
        book_name: bookName,
        description: description,
        price: price,
        year: year,
        writer: writer,
      };
      try {
        let postBook = await axios.post("/api/books", newBook);
        console.log(`book added: `, postBook);
        setUrl("");
        setAlt("");
        setBookName("");
        setDescription("");
        setPrice("");
        setYear("");
        setWriter("");
      } catch (err) {
        console.log(err);
      }
    }
  }
  return (
    <div className="page-container">
      <h1>Add New Book</h1>
      <div className="form-card">
        <div className="book-inputs">
          <input
            type="url"
            placeholder="Enter image Url"
            value={url}
            id="rul-intup"
            onChange={urlChang}
          />
          <input
            type="text"
            placeholder="Enter alt.."
            value={alt}
            id="alt-intup"
            onChange={altChang}
          />
          <input
            type="text"
            placeholder="Enter Book Name..."
            value={bookName}
            id="bookName-intup"
            onChange={BookNameChang}
          />
          <input
            type="text"
            placeholder="Enter Description.."
            value={description}
            id="description-intup"
            onChange={descriptionChang}
          />
          <input
            type="number"
            placeholder="Enter price.."
            value={price}
            id="price-intup"
            onChange={priceChang}
          />
          <input
            type="number"
            placeholder="Enter year.."
            value={year}
            id="year-intup"
            onChange={yearChang}
          />
          <input
            type="text"
            placeholder="Enter writer.."
            value={writer}
            id="writer-intup"
            onChange={writerChang}
          />
          <button onClick={addNewBook}>Add Book</button>
          {/* <button onClick={() => navigat('/api/books')}>Back To Home</button> */}
        </div>
      </div>
    </div>
  );
}

export default AddBook;
