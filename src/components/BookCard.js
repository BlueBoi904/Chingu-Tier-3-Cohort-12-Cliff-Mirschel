import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';
// import { Card, Button } from 'antd';

const BookCard = ({ book, showModal }) => (
  <div
    tabIndex={0}
    role="button"
    className="book-card"
    onClick={() => showModal(book)}
    onKeyDown={() => showModal(book)}
  >

    {book.volumeInfo.title ? <p>{book.volumeInfo.title}</p> : null}
    <p>
    By:
      {' '}
      {book.volumeInfo.authors[0] ? <p>{book.volumeInfo.authors[0]}</p> : null}
    </p>

    {book.volumeInfo.imageLinks ? (
      <img
        className="card-img"
        alt={book.volumeInfo.title}
        src={book.volumeInfo.imageLinks.smallThumbnail}
      />
    ) : null}
    {/* <Button size="small" type="primary">Primary</Button> */}
  </div>
  // <div>
  //   <Card
  //     title={book.volumeInfo.title ? <p>{book.volumeInfo.title}</p> : null}
  //     style={{ width: 300 }}
  //   >
  //     {book.volumeInfo.imageLinks ? (
  //       <img
  //         alt={book.volumeInfo.title}
  //         src={book.volumeInfo.imageLinks.smallThumbnail}
  //       />
  //     ) : null}
  //     <Button type="primary" size="small">
  //       {' '}
  //       Primary
  //     </Button>
  //     <p>Card content</p>
  //   </Card>
  // </div>
);

export default BookCard;
