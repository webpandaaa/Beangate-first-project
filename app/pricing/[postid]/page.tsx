"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Components
import { Card, CardBody } from "@nextui-org/card";
import { ThumbsUp, ThumbsDown, Eye } from 'lucide-react';

const Page = ({ params }: any) => {
  const [details, setDetails] = useState<any>({});
  const [thumbsUpActive, setThumbsUpActive] = useState(false);
  const [thumbsDownActive, setThumbsDownActive] = useState(false);

  const id = params.postid;

  const fetchData = async () => {
    try {
      const res = await axios(`https://dummyjson.com/posts/${id}`);
      setDetails(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]); // Adding id as a dependency to fetch data when it changes

  const handleThumbsUpClick = () => {
    setThumbsUpActive(!thumbsUpActive);
    if (thumbsDownActive) setThumbsDownActive(false); // Reset thumbs down
  };

  const handleThumbsDownClick = () => {
    setThumbsDownActive(!thumbsDownActive);
    if (thumbsUpActive) setThumbsUpActive(false); // Reset thumbs up
  };

  return (
    <>
      <Card>
        <CardBody>
          <h1 className='text-xl text-center'>{details.id} : {details.title}</h1>
          <div className="">
            <p className='text-left m-2'>Post userId : {details.userId}</p>
            <p className='text-center m-2'>{details.body}</p>
            <div className='flex justify-between p-5 cursor-pointer'>
              <p className='text-left'>
                <Eye className='text-yellow-500' />{details.views}
              </p>
              <p 
                className={`text-left ${thumbsUpActive ? 'text-blue-600' : ''}`} 
                onClick={handleThumbsUpClick}
              >
                <ThumbsUp className={`${thumbsUpActive ? 'fill-blue-600' : ''}`} /> {details.reactions?.likes}
              </p>
              <p 
                className={`text-left ${thumbsDownActive ? 'text-danger' : ''}`} 
                onClick={handleThumbsDownClick}
              >
                <ThumbsDown className={`${thumbsDownActive ? 'fill-red-600' : ''}`} /> {details.reactions?.dislikes}
              </p>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default Page;
