import React, { useState, useEffect } from "react"
import { useOutletContext } from "react-router-dom";





const Posts = () => {
  const {infoArr: [info, setInfo]} = useOutletContext();

  useEffect(() => {
    async function postHandler (event){
        
        try {
            const response = await fetch("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts")
            const transData = await response.json();
            setInfo(transData.data.posts);
        } catch (error) {
            console.log(error)
        }
    }
  postHandler();

}, [])


  return(
    <div>
        { info && info.length 
          ? info.map((event) => {
        return(
          <>
         <div className="posts" > 
           <div >
              {event.title}
            </div>
            <div>
              {event.description}
            </div>
            <div>
              {event.price}
            </div>
            <div>
              {event.author.username}
            </div>
        </div> 

               </>
          
        )    
           
          }): null }
        </div>
        
        
      
      
   
  )
};



export default Posts