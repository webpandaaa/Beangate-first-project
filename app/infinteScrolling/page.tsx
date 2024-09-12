"use client"
import { title } from "@/components/primitives";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

//components
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Button, ButtonGroup} from "@nextui-org/button";
import { Eye } from "lucide-react";
import { Heart } from "lucide-react";
import Loading from "@/components/InfiniteScrolling/Loading";


export default function infinteScrolling() {

  const [posts, setPosts] = useState<any>([]);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(10);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);


   const getposts = async () =>{
        try{
            const res = await axios(`https://dummyjson.com/posts?limit=${limit}&skip=${skip}`);
            // console.log();
            setTotal(res.data.total);
            setPosts((res.data.posts));
            setLoading(false);
            // console.log(res.data);
        }catch(e){
            console.log(e);
        }
    };

    const scrollHandler = async () =>{
        // console.log("scrollHeight" + document.documentElement.scrollHeight);
        // console.log("innerHeight" + window.innerHeight);
        // console.log("scrollTo" + document.documentElement.scrollTop.toFixed());
        try{
            if (
                window.innerHeight + document.documentElement.scrollTop + 1 >=
                document.documentElement.scrollHeight
              ) {
                setLoading(true);
                setSkip((prev) => prev + 10);
              }
            
        }catch(e){
            console.log(e);
        }
    }

    useEffect(()=>{
        getposts();
    },[skip]);

    useEffect(()=>{
        window.addEventListener("scroll" , scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);

    },[]);

  return (
    <div>
      
      <div className="w-full flex flex-wrap">
        { posts.map((p:any, i:number)=> (
          <Link 
          key={i}
          href={`/pricing/${p.id}`} className="w-fit">
            
            <Card className="m-1 w-[25vw]" >
              <CardBody >
            <h1 className="text-xl text-center">{p.title}</h1>
            <p>{p.id}</p>
            {p.tags.map((tag:string,i:number)=><li className="mt-2">{tag} <br /></li>)}
            
            <div className="flex justify-between p-8">
            <div className="flex flex-col justify-center items-center ">
              <Heart className="text-danger fill-danger" />
            {p.reactions.likes}
            </div>
            <div className="flex flex-col justify-center items-center">
            <Eye className="text-yellow-400" />
            {p.reactions.dislikes}
            </div>
            </div>
              </CardBody>
            </Card>
            <br />
            <br />
            
          </Link>
          ))}
        {loading && <Loading />}
      </div>
      
      {/* <div className=" w-[75vw] h-[10vh] flex gap-3 justify-center items-center">
        <Button isDisabled={skip <= 5 ? true : false}  variant="bordered" onClick={prevHandler} >Prev</Button>
        <Button isDisabled={skip >= (total - 10) ? true : false} variant="bordered" onClick={nextHandler}>Next</Button>
      </div> */}
    </div>
  );
}
