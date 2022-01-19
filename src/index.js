import React  from "react";
import reactDom from "react-dom";
import './index.css';



const books =[{
  id:1,
  img:'https://m.media-amazon.com/images/I/41w5tIjSHML._AC_UY327_FMwebp_QL65_.jpg',
   author:'by Prakash Kumar',title:'China and Japan'
},
{
  id:2,
  img:'https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UY327_FMwebp_QL65_.jpg',
   author:'by Morgen Housel',title:'The Psychology of Money'

},
{
  id:3,
  img:'https://m.media-amazon.com/images/I/71YDsxOFYuL._AC_UY327_FMwebp_QL65_.jpg',
   author:'The House in the Cerulean Sea',title:'by TJ Klune'
},
];


function BookList()
{
  
  return (
    
  <section className='booklist'> 
  {
    books.map((book)=>
    {
      return <Book key={book.id} {...book}></Book>
      
    })
  }
  
  
  </section>
  );
}


const Book = ({img,title,author}) => {
    const clickHandler = ()=>
    {
      alert("Hello World")
    }

    const clickHandler1= ()=>
    {
      alert("Please do not click on this button")
    }
  return( <article>
  
    
    <img src={img} alt="" />
    <p>{title}</p>
    <p>{author}</p>
    <button type="button" onClick={clickHandler}>Example</button>
    <button type="button" onClick={clickHandler1}>Example2</button>

    
  </article>)
}




reactDom.render(<BookList/>,document.getElementById("root"));