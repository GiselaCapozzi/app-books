import { useDispatch, useSelector } from "react-redux"
import BookCatalogue from "./BookCatalogue"
import { useEffect, useState } from "react";
import { getAllBooksUsers } from "../slice/booksAllUser/booksUsersSlice";

const Catalogue = () => {

  const dispatch = useDispatch();
  const { status, booksUsers, error } = useSelector(state => state.booksUsers);

  useEffect(() => {
    dispatch(getAllBooksUsers())
  }, [])

  const mixedArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  }
  
  const mixedBooks = mixedArray(booksUsers);

  return (
    <div className='m-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {
        mixedBooks?.map((book,index) => (
          <BookCatalogue 
            key={index}
            {...book}
          />
        ))
      }
    </div>
  )
}

export default Catalogue