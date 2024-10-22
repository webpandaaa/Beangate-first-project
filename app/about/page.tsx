'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";

import { Play } from "lucide-react";
import { useState } from "react";



export default function AboutPage() {

  const [autoPlay, setautoPlay] = useState(false);
  const [flag, setflag] = useState(0);

  const playHandler = () => {
    const poster = document.getElementById('poster');
    const video = document.getElementById('video');
    const button = document.getElementById('button')

    if (flag == 0) {
      poster.style.display = "none";
      button.style.display = "none";
      video.play();
      setflag(1);

    } else {
      poster.style.display = "initial";
      button.style.display = "initial";
      video.pause();
      setflag(0);
    }



  }



  return (
    <div className=' h-[50vh] flex'>
      <Container>
        <h1>Show Video</h1>
        <div onClick={playHandler} className="flex relative w-[50vw] h-[50vh] overflow-hidden border-2">
          <div className="z-20 w-[100%] h-[40vh] absolute flex items-center justify-center ">
            <button id="button" onClick={playHandler} className="p-2 rounded-full border-2"><Play className="text-white" /></button>
          </div>
          <img id="poster" className="z-10 absolute 	" src="https://res.cloudinary.com/dfkoznpdm/image/upload/v1726215486/Panda-Wallpaper_xehn7b.jpg" alt="" />
          <video id="video" className='object-center object-contain w-[50vw] h-[50vh]'autoPlay={autoPlay} muted loop src="https://framerusercontent.com/assets/jR8Btpi6SDsDQYIr3GJ3sCn9tWk.mp4" controls></video>

        </div>
      </Container>



    </div>
  );
}
