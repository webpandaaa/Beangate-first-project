"use client"

// import { useParams} from 'next/navigation'
import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';

// Components
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import { ThumbsUp } from 'lucide-react';
import { ThumbsDown } from 'lucide-react';
import { Eye } from 'lucide-react';



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
        <p className='text-left m-2'>Post userId : {details.userId}</p>
        <p className='text-center m-2'> {details.body}</p>
        <div className='flex justify-between p-5 cursor-pointer'>
        <p className='text-left'><Eye className='text-yellow-500' />{details.views}</p>
        <p className='text-left'><ThumbsUp className='text-danger' /> {details.reactions?.likes}</p>
        <p className='text-left'><ThumbsDown className='text-blue-600' /> {details.reactions?.dislikes}</p>
        </div>
        
      </div>
      </CardBody>
    </Card>
    </>
  )
}

export default page
