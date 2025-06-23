

function BookCard({ imageURL, alt, book_name, year, description, writer }) {
  return (
    <div className="book-card">
      <img src={imageURL} alt={alt} />
      <div className="book-card-content">
        <h3>{book_name}</h3>
        <p>Year: {year}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default BookCard