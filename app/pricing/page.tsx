"use client"
import { title } from "@/components/primitives";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

//components
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Button, ButtonGroup} from "@nextui-org/button";
import { HeartIcon } from "@/components/HeartIcon";

export default function PricingPage() {

  const [posts, setPosts] = useState<any>([]);


   const getposts = async () =>{
        try{
            const res = await axios('https://dummyjson.com/posts');
            // console.log(res.data.posts);
            setPosts(res.data.posts);
            console.log(posts);
        }catch(e){
            console.log(e);
        }
    };

    useEffect(()=>{
        getposts();
    },[]);

  return (
    <>

      <div className="">
        { posts.map((p:any, i:number)=> (
          <Link 
          key={i}
          href={`/pricing/${p.id}`}>
            
            <Card>
              <CardBody>
            <h1 className="text-xl text-center">{p.title}</h1>
            {p.tags.map((tag:string,i:number)=><span className="">{tag} <br /></span>)}
            
            <Button isIconOnly color="danger" aria-label="Like">
              <HeartIcon/>
              {p.reactions.likes} 
            </Button>
            <br />

            {p.reactions.dislikes}
              </CardBody>
            </Card>
            <br />
            <br />
          </Link>
          ))}

      </div>
      
    </>
  );
}
