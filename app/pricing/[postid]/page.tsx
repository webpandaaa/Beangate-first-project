"use client"

// import { useParams} from 'next/navigation'
import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';

// Components
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";



const page = ({params} :any) => {
const [details, setDetails] = useState<any>({});

  const id = params.postid;
  // console.log(id);

  const data = async () =>{
    try{
        const res = await axios(`https://dummyjson.com/posts/${id}`);
        setDetails(res.data);
        
    }catch(e){
        console.log(e);
    }
};



  useEffect(()=>{
    data();
  });

  console.log(details);



  return (
    <>
     <Card>
      <CardBody>
      <h1 className='text-xl text-center'>{details.id} : {details.title}</h1>
      <div className="">
        <p className='text-left'>Post body : {details.body}</p>
        <p className='text-left'>Post tags : {details.tags + ", "}</p>
        <p className='text-left'>Post views : {details.views}</p>
        <p className='text-left'>Post likes : {details.reactions?.likes}</p>
        <p className='text-left'>Post dislikes : {details.reactions?.dislikes}</p>
        <p className='text-left'>Post userId : {details.userId}</p>
      </div>
      </CardBody>
    </Card>
    {/* <div>
      <h1 className='text-2xl text-center'>Title : {details.title}</h1>
      <br />
      <div className="">
        <h1 className='text-left'>Post id : {details.id}</h1>
        <p className='text-left'>Post body : {details.body}</p>
        <p className='text-left'>Post tags : {details.tags + ", "}</p>
        <p className='text-left'>Post views : {details.views}</p>
        <p className='text-left'>Post likes : {details.reactions?.likes}</p>
        <p className='text-left'>Post dislikes : {details.reactions?.dislikes}</p>
        <p className='text-left'>Post userId : {details.userId}</p>

      </div>
    </div> */}
    </>
  )
}

export default page
