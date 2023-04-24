import React,{useState} from 'react';
import {BiSearch} from "react-icons/bi"
import Header from '../Header';
import Footer from '../Footer';
import './index.css';

const Blogs = () => {
  const[userInput,setUserInput]=useState("")
  const blogsData = [
    {
      id: 1,
      title: 'Blog  1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae arcu nunc. Pellentesque sed ligula euismod, congue eros ac, semper lacus. Suspendisse potenti.',
      image: 'https://picsum.photos/id/1002/400/300',
      date: 'April 22, 2023',
    },
    {
      id: 2,
      title: 'Title 2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae arcu nunc. Pellentesque sed ligula euismod, congue eros ac, semper lacus. Suspendisse potenti.',
      image: 'https://picsum.photos/id/1015/400/300',
      date: 'April 21, 2023',
    },
    {
      id: 3,
      title: 'Blog 3',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae arcu nunc. Pellentesque sed ligula euismod, congue eros ac, semper lacus. Suspendisse potenti.',
      image: 'https://picsum.photos/id/1002/400/300',
      date: 'April 22, 2023',
    },
    {
      id: 4,
      title: 'Title 4',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae arcu nunc. Pellentesque sed ligula euismod, congue eros ac, semper lacus. Suspendisse potenti.',
      image: 'https://picsum.photos/id/1015/400/300',
      date: 'April 21, 2023',
    },
    {
      id: 5,
      title: 'Blog 5',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae arcu nunc. Pellentesque sed ligula euismod, congue eros ac, semper lacus. Suspendisse potenti.',
      image: 'https://picsum.photos/id/1002/400/300',
      date: 'April 22, 2023',
    },
    {
      id: 6,
      title: 'Title 6',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae arcu nunc. Pellentesque sed ligula euismod, congue eros ac, semper lacus. Suspendisse potenti.',
      image: 'https://picsum.photos/id/1015/400/300',
      date: 'April 21, 2023',
    },
    {
      id: 7,
      title: 'Blog 7',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae arcu nunc. Pellentesque sed ligula euismod, congue eros ac, semper lacus. Suspendisse potenti.',
      image: 'https://picsum.photos/id/1002/400/300',
      date: 'April 22, 2023',
    },
    {
      id: 8,
      title: 'Title 8',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae arcu nunc. Pellentesque sed ligula euismod, congue eros ac, semper lacus. Suspendisse potenti.',
      image: 'https://picsum.photos/id/1015/400/300',
      date: 'April 21, 2023',
    }
  ];

const getFilteredList=()=>{
  const searchInput=blogsData.filter(each=>each.title.toLowerCase().includes(userInput.toLowerCase()))
  return searchInput
}



  return (
    <>
    <Header/>
    <div className="blogs">
      <h1>Blogs</h1>
      <div className='search-container'>
        <input type="search" className='search-bar' placeholder='Search here for blog using blog title' value={userInput} onChange={(e=>{setUserInput(e.target.value)})}/>
        <BiSearch size={25} color="#05a0e8"/>
      </div>
      <div className="blogs-list">
        {getFilteredList().map((blog) => (
          <div key={blog.id} className="blog">
            <div className="blog-image">
              <img src={blog.image} alt={blog.title} />
            </div>
            <div className="blog-content">
              <h2>{blog.title}</h2>
              <p>{blog.content}</p>
              <span>{blog.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Blogs;
