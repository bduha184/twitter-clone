import React from 'react'
import "./Widget.css";
import { Search } from '@mui/icons-material';
import { TwitterTweetEmbed,TwitterTimelineEmbed, TwitterShareButton } from 'react-twitter-embed';
const Widget = () => {
  return (
    <div className='widgets'>
      <div className="widgets_input">
        <Search className='widgets_searchIcon' />
        <input type="text" placeholder='キーワード検索' />
      </div>
      <div className="widgets_widgetContainer">
        <h2>いまどうしてる？</h2>
        <TwitterTweetEmbed tweetId={'1475764828208009220'} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="@Shin_Engineer"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={'https://twitter.com/Shin_Enginner'}
          options={{ text: '#react.js勉強中', via: 'Shin_Engineer' }}
        />
      </div>
    </div>
  )
}

export default Widget
