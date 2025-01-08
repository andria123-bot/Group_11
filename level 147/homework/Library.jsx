import { useState, useEffect } from 'react'

const Library = ({ updateBooks }) => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [library, setLibrary] = useState(() => {
    const storedLibrary = localStorage.getItem('library');
    return storedLibrary ? JSON.parse(storedLibrary) : [];
  });

  useEffect(() => {
    localStorage.setItem('library', JSON.stringify(library));
  }, [library]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query) return;
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    const data = await response.json();
    setBooks(data.items || []);
  };

  const addToLibrary = (book) => {
    const updatedLibrary = [...library, book];
    setLibrary(updatedLibrary);
  };

  const toggleReadStatus = (bookId) => {
    const updatedLibrary = library.map(book =>
      book.id === bookId ? { ...book, read: !book.read } : book
    );
    setLibrary(updatedLibrary);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for books"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div>
        {books.map((book) => (
          <div key={book.id}>
            <h3>{book.volumeInfo.title}</h3>
            <p>Author: {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown'}</p>
            <p>{book.volumeInfo.description}</p>
            <img
              src={book.volumeInfo.imageLinks?.thumbnail}
              alt={book.volumeInfo.title}
            />
            <button onClick={() => addToLibrary(book)}>Add to Library</button>
          </div>
        ))}
      </div>

      <div>
        <h3>Your Library</h3>
        {library.map((book) => (
          <div key={book.id}>
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.read ? 'Read' : 'Unread'}</p>
            <button onClick={() => toggleReadStatus(book.id)}>
              Mark as {book.read ? 'Unread' : 'Read'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
