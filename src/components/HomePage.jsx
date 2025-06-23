import { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from './BookCard';

function HomePage() {
  const [listBook, setListBook] = useState([]);

  useEffect(() => {
    async function getBooks() {
      try {
        const res = await axios.get('/api/books');
        console.log(res.data); 
        setListBook(res.data); 
      } catch (err) {
        console.log('Error fetching books:', err);
      }
    }

    getBooks();
  }, []);

  return (
    <div>
      {/* <h1>Wellcome to the Kum-Library</h1> */}
      <div className='all-books-homePage'>
        {listBook.map((book) => (
          <BookCard
            key={book._id}
            imageURL={book.imageURL}
            alt={book.alt}
            book_name={book.book_name}
            year={book.year}
            description={book.description}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
