import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import axios from "axios";
import Navbar from './Components/Navbar';
import Auth from './Components/Auth';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';

function App() {
  const [paginatedItems, setPaginatedItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [searchData,setSearchData]=useState('');
  const [user,setUser]=useState('');
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (hasNextPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  
const loadPage=(p)=>{
  axios.get(`${process.env.REACT_APP_API_URL}page`).then((data)=>{
    console.log("------------>",data);
  //   setPaginatedItems(data?.data?.data);
  // setHasNextPage(data?.data?.has_next);

  }).catch((err)=>{
    console.error('Error loading page:', err);
  })
}

const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(rowsPerPage)
  loadPage(currentPage)
}
const handleSearch=(e)=>{
  e.preventDefault();
  console.log(searchData)
  loadPage(currentPage)
}

useEffect(()=>{
  const user=localStorage.getItem('CognitoIdentityServiceProvider.15tebea328r4iu74dinskqonih.LastAuthUser');
  console.log(user);
  setUser(user);
  console.log(process.env.REACT_APP_API_URL)
  axios.get(process.env.REACT_APP_API_URL).then((res)=>{
    console.log(res);
    console.log(res?.data);

  }).catch((err)=>{
    console.log("------>",err);
  })

  loadPage(currentPage);
},[currentPage]);

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Auth/>}/>

        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
