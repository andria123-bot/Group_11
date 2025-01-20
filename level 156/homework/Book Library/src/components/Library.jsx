import { useEffect, useState } from "react";

const LiBook = ({ book, handleAdd }) => {
  return (
    <li>
      <p>Title: {book.volumeInfo.title}</p>
      <img src={book.volumeInfo.imageLinks.smallThumbnail} />
      <p>Description: {book.volumeInfo.description}</p>
      <p>Authors: {book.volumeInfo.authors}</p>
      <p>Categories: {book.volumeInfo.categories}</p>
      <button onClick={() => handleAdd(book)}>Add To Saved</button>
    </li>
  );
};

function Library() {
  const [books, setBooks] = useState(null);
  const [savedBooks, setSavedBooks] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${e.target.name.value}`
    );
    const data = await res.json();

    setBooks(data.items);
  };

  const handleAdd = (book) => {
    setSavedBooks([...savedBooks, book]);
  };

  console.log(savedBooks);

  return (
    <main>
      <section>
        <h2>Search by name</h2>

        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Book's name" />
          <button>Search</button>
        </form>
      </section>

      <section>
        <h2>Searched Books</h2>
        {books ? (
          <ul>
            {books.map((book, index) => {
              return <LiBook key={book.id} book={book} handleAdd={handleAdd} />;
            })}
          </ul>
        ) : (
          <p>Please search first.</p>
        )}
      </section>

      <section>
        <h2>Saved Books</h2>
        {savedBooks ? (
          <ul>
            {savedBooks.map((book, index) => {
              return <LiBook key={book.id} book={book} handleAdd={handleAdd} />;
            })}
          </ul>
        ) : (
          <p>Please add first.</p>
        )}
      </section>
    </main>
  );
}

export default Library;