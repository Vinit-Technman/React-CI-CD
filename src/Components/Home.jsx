import React from 'react'
import {useEffect, useState} from 'react';
import axios from "axios";
const Home = () => {
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
    console.log("------------>",data?.data);
    setPaginatedItems(data?.data);
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
    <div className='container'>
    {user!==null ?<>
      {/* <form class="d-flex mt-4 flex-row gap-5 w-25" role="search" onSubmit={handleSearch}>
        <label htmlFor="student">Search Student</label>
        <p className='d-flex flex-row'>
    <input class="me-2" id='student' type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setSearchData(e.target.value)} />
    <button class="btn btn-outline-success" type="submit">Search</button>
        </p>
</form>

      <form class="d-flex mt-5 gap-1" onSubmit={handleSubmit}>
        <label htmlFor="rows">Enter No.of Rows </label>
    <input class="me-2" id='rows'  type="text" name="rows" placeholder="Per rows " aria-label="Search"
    onChange={(e)=>setRowsPerPage(e.target.value)}
    />
    <button class="btn btn-outline-success" type="submit">Enter</button>
</form> */}
      <table className="table">
    <thead>
      <tr>
        <th scope="col">Rollno</th>
        <th scope="col">Name</th>
        {/* <th scope="col">Last</th>
        <th scope="col">Handle</th> */}
      </tr>
    </thead>
    <tbody>
      {paginatedItems && console.log(paginatedItems)}
      <tr>
        <td>{paginatedItems.name}</td>
      </tr>
      {paginatedItems && console.log(typeof(paginatedItems))}
      {
        paginatedItems?.map((e,id)=>{
          console.log(e);
          return (<tr key={id}>
            <td>{e?.rollno}</td>
            <td>{e?.name}</td>
          </tr>)
        })
      }
              {/* {paginatedItems && 
          paginatedItems?.map((e,id)=>{
            return (<tr key={id}>
              <td>{e?.rollno}</td>
              <td>{e?.name}</td>
            </tr>)
          })
        } */}
        
    </tbody>
  </table>
  <p>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
  
          <li class="page-item" onClick={handlePrevPage}>
            {/* <a class="page-link" href="?page={{ paginated_items.previous_page_number }}">
              </a> */}
              <a class="page-link" href="javascript:void(0);">
              Previous
              </a>
              </li>
          <li class="page-item">
            <a class="page-link" href="#">Page no, {currentPage} </a></li>
            
          <li class="page-item" onClick={handleNextPage}>
            {/* <a class="page-link" href="?page={{ paginated_items.next_page_number }}">
            </a> */}
            <a class="page-link" href="javascript:void(0);">
            Next
            </a>
            </li>
        </ul>
      </nav>
  </p>
  </>:
  <>
  <h1>
    <center>Hey Buddy You're not Authenticate.</center>
  </h1>
  </>
  }
    </div>
  )
}

export default Home