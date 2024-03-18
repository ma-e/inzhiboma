import React from 'react';
import ImageTitle from './ImageTitle';
import book from './book.png';

function Publication() {
    const content = "This children's book follows the journey of a young girl who gains a deeper understanding of time through various experiences. As she navigates through different adventures and encounters, she begins to appreciate the passage of time in a new light. With its gentle storytelling and engaging illustrations, this book is perfect for bedtime reading, offering young readers a comforting and thought-provoking tale to drift off to sleep with. ";
    const title = "The Girl and TIme";
    return (
      <div className="home">
      <ImageTitle image={book} title={title} content={content}/>        
      </div>
    );
}

export default Publication;
