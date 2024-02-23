import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import  { useState } from 'react';

export default function Home2() {
  const [showInput, setShowInput] = useState(false);
  const handleButtonClick = () => {
    setShowInput(!showInput);
  };
  const cardData=[{img:"https://websitedemos.net/book-store-02/wp-content/uploads/sites/834/2021/04/author-book-store-hero-book-cover-img.jpg",myh1:"Best Author Awards 2012 ",myP:'Justo habitant at augue ac sed proin consectetur ac urna nisl elit nulla facilisis viverra dolor sagittis nisi risus  egestas adipiscing nibh euismod.'
},{img:"https://websitedemos.net/book-store-02/wp-content/uploads/sites/834/2021/04/author-book-store-hero-book-cover-img.jpg",myh1:"Best Author Awards 2012 ",myP:'Justo habitant at augue ac sed proin consectetur ac urna nisl elit nulla facilisis viverra dolor sagittis nisi risus  egestas adipiscing nibh euismod.'
},{img:"https://websitedemos.net/book-store-02/wp-content/uploads/sites/834/2021/04/author-book-store-hero-book-cover-img.jpg",myh1:"Best Author Awards 2012 ",myP:'Justo habitant at augue ac sed proin consectetur ac urna nisl elit nulla facilisis viverra dolor sagittis nisi risus  egestas adipiscing nibh euismod.'
},{img:"https://websitedemos.net/book-store-02/wp-content/uploads/sites/834/2021/04/author-book-store-hero-book-cover-img.jpg",myh1:"Best Author Awards 2012 ",myP:'Justo habitant at augue ac sed proin consectetur ac urna nisl elit nulla facilisis viverra dolor sagittis nisi risus  egestas adipiscing nibh euismod.'
}]
  return (
    <>
    <div className='section container'>
<p className='myP'>NEW RELEASE</p>
<h1 className='caption'>The Sons of the <br/>Empire</h1>
<img className='myimg' src='https://websitedemos.net/book-store-02/wp-content/uploads/sites/834/2021/04/author-book-store-hero-book-cover-img.jpg'/>
<p className='lorem'>Justo habitant at augue ac sed proin consectetur ac<br/> urna nisl elit nulla facilisis viverra dolor sagittis nisi risus <br/> egestas adipiscing nibh euismod.</p>
<button type="button" class="btn btn-success btn1">Buy Now</button>
<button type="button" class="btn btn-outline-info   btn2">Read more...</button>
</div>
  <div className='aboutar container'>
  <img className='aboutR 'src='https://websitedemos.net/book-store-02/wp-content/uploads/sites/834/2021/04/author-book-store-author-img.jpg' alt='img'/>
  <p className='myP2'>NEW RELEASE</p>
  <h1 className='caption2'>Mohamed idrissi</h1>
  <p className='lorem2'>Tellus tellus mattis pulvinar nulla euismod fermentum rhoncus sed vestibulum neque praesent pharetra ut fames viverra suscipit gravida dictumst volutpat ullamcorper lacus, malesuada enim proin volutpat mattis nunc amet, eget vitae egestas.
  
  Vulputate vulputate eget cursus nam ultricies mauris, malesuada elementum lacus arcu, sit dolor ipsum, ac felis, egestas vel tortor eget aenean nam.</p>
  <button type="button" class="btn btn-outline-success mybtn3">Read More</button>
  
  
      </div>
    </>


    )}