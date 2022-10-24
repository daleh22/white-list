import React, { useState, useEffect } from "react";

const Create = () => {

    const [title, setTitle] = useState()
    const [price, setPrice] = useState()
    const [description, setDescription] = useState()
    const [info, setInfo] = useState([])


    async function createNew (event){
        event.preventDefault();
        try {
            if (!localStorage.getItem("token")){
                alert("You are not logged in.")
                return  
            }
            const response = await fetch("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
            }, 
            body: JSON.stringify({
              post: {
                title,
                description,
                price
                 }
               })
            });

           const data = await response.json();
           setInfo([...info, info.data.posts])
           console.log("this is the new post", data)
           
        } catch (error) {
            console.log(error)
        }
        console.log(price, " ", description, " " , info)
    }

    function updateTitle(event){
        setTitle(event.target.value)
    }

    function updatePrice(event){
        setPrice(event.target.value)
    }

    function updateDescription(event){
        setDescription(event.target.value)
    }



    return(
       
       <div className="createPost" >
        Create Post
        <form onSubmit={createNew} >
        
            <label>
                Enter Title:
            </label>
            <input type="text" value={title}  onChange={(event) => setTitle(event.target.value)} ></input>
            <label>
                Enter Price:
            </label>
            <input type="text" value={price}  onChange={(event) => setPrice(event.target.value)}  ></input>
            <label>
                Enter Description:
            </label>
            <input type="text"  value={description}  onChange={(event) => setDescription(event.target.value)}   ></input>
            <button type="submit" > submit </button>
        </form> 
      
       </div>

    

    )


};

export default Create