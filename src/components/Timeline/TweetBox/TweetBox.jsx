import React, { useState } from 'react'
import "./TweetBox.css"
import { Avatar,Button } from "@mui/material";
import { collection ,addDoc, serverTimestamp} from 'firebase/firestore';
import db from '../../../firebase';
const TweetBox = () => {

  const [tweetMessage,setTweetMessage] = useState("");
  const [tweetImage,setTweetImage] = useState("");


  const handleClick =  (e) => {
    e.preventDefault();
    addDoc(collection(db, "posts"), {
      avatar:"http://shincode.info/wp-content/uploads/2021/12/icon.png",
      displayName: "プログラミングチュートリアル",
      image: tweetImage,
      text:tweetMessage,
      useName:"Shine_Engineer",
      verified:true,
      timestamp: serverTimestamp(),
    });
    setTweetImage("");
    setTweetMessage("");
  }


  return (
    <div className='tweetBox'>
      <form>
          <div className="tweetBox_input">
        <Avatar />
        <input
          type="text"
          placeholder='今どうしてる？'
          onChange={e=>setTweetMessage(e.target.value)}
          value={tweetMessage}
        />
          </div>
        <input
          type="text"
          className='tweetBox_imageInput'
          placeholder='画像のURLを入力してください'
          onChange={e=>setTweetImage(e.target.value)}
          value={tweetImage}
          />
        <Button
          className='tweetBox_tweetButton'
          type='submit'
          onClick={handleClick}
        >
          ツイートする
        </Button>
      </form>
    </div>
  )
}

export default TweetBox
