import React, { useEffect, useState } from 'react'
import "./Timeline.css"
import TweetBox from './TweetBox/TweetBox'
import Post from './Post/Post'
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import db from '../../firebase'
import FlipMove from "react-flip-move";

const Timeline = () => {

  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    const postItems =  collection(db, "posts");
    const q = query(postItems,orderBy("timestamp","desc"));

    onSnapshot(q,querySnapshot=>{
      setPosts(querySnapshot.docs.map(doc=>doc.data()));
    })
  },[]);


  return (
    <div className='timeline'>
      <div className="timeline_header">
        <h2>ホーム</h2>
      </div>
      <TweetBox />
      <FlipMove>
      {posts.map((post,i)=>(
        <Post post={post} key={i}/>
      ))}
      </FlipMove>
    </div>
  )
}

export default Timeline
