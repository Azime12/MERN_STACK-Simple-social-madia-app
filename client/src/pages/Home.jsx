import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
const Home = () => {
	const [listOfPosts,setlistOfPosts]=useState([])
	useEffect(()=>{
		axios.get('http://localhost:3001/posts').then((responce)=>{
			console.log(responce.data);
			setlistOfPosts(responce.data);
		});
	},[]);


  return (
	<div >
		
	{


		listOfPosts.map(value=>{
			return(





// 	<div key={value.id}  className="card border-success mb-3 w-50 m-sm-2 m-md-3 m-lg-5   " >
//   <div className="card-header bg-transparent border-success fw-semibold fs-3"><h3>{value.title}</h3></div>
//   <div className="card-body text-success"> 
    
//     <p className="card-text fs-2"> {value.postText}</p>
//   </div>
//   <div className="card-footer bg-transparent border-success fs-4 fw-semibold">username:{value.username}</div>
// </div>

// <div className="card w-50 " >
//   <img className="card-img-top" src="..." alt="Card image cap"/>
//   <div className="card-body">
//     <h5 className="card-title">{value.title}</h5>
//     <p className="card-text">{value.postText}</p>
//   </div>
  
//   <div className="card-body">
    
// username:{value.username}
//   </div>
// </div>
<div key={value.id} className="post">
<div className="title"> {value.title} </div>
<div
  className="body"
  
>
  {value.postText}
</div>
<div className="footer">
  <div className="username">{value.username}</div>
  <div className="buttons">
	

	{/* <label> {value.Likes.length}</label> */}
  </div>
</div>
</div>	
			
				)
		})

	}
	</div>
  )
}

export default Home
