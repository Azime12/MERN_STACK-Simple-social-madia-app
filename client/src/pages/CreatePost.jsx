import React from 'react'
import {Formik,Field,Form} from 'formik'
import '../App.css'
const CreatePost = () => {
  return (
	<Formik className="Formmik row">
		
		<Form className=" input-group row w-50  containerform form-group w-40 m-lg-5 ">
		<div class="form-group">
    
    
	<label for="exampleInputPassword1">Title</label>
		<Field 
		className="form-control p-2 col-7"
		id="inputCreatePost"
		name="title"
		placeholder="Add body of the post"/>
		</div>
		<div class="form-group">
    
    
	<label for="exampleInputPassword1">PostText</label>
		<Field 
		className="form-control "
		id="inputCreatePost"
		name="title"
		placeholder="Add body of the post"/>
		</div>
		<div class="form-group">
    
    
	<label for="exampleInputPassword1">username</label>
		<Field 
		className="form-control "
		id="inputCreatePost"
		name="title"
		placeholder="Add body of the post"/>
		</div>
		</Form>
	</Formik>
  )
}

export default CreatePost
