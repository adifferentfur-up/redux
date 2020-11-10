import {produce} from 'immer';

let book = {title: "Harry Potter"};

function publish(book){
  return produce(book, draftBook => {
    draftBook.isPublished = true;
  });

  console.log(book);
  console.log(produce);
}