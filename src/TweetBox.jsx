import React,{useState} from 'react'
import "./TweetBox.css";
import {Avatar,Button} from "@mui/material";
import db from "./Firebase";

function TweetBox() {

    const[tweetMessage,setTweetMessage] = useState("");

    const sendTweet = (e) => {

        e.preventDefault();

        db.collection("posts").add({
            id: db.collection("posts").doc().id,
            displayName: "Kusum",
            username: "Kusum2613",
            verified: true,
            text: tweetMessage,
            avatar:
            "https://img.icons8.com/?size=100&id=ovTJRuVq9f3b&format=png&color=000000",
        });

        setTweetMessage("");

    };


    return (
        <div className = "tweetBox">
            <form>
                <div className = "tweetBox__input">
                <Avatar src = "https://img.icons8.com/?size=100&id=ovTJRuVq9f3b&format=png&color=000000" />

                <input
                    onChange = {(e) => setTweetMessage(e.target.value)}
                    value = {tweetMessage}
                    placeholder = "What's on your mind ?"
                    type = "text"
                
                />
                </div>

                <Button 
                    onClick = {sendTweet}
                    type = "submit"
                    className = "tweetBox__tweetButton"
                >
                    Tweet 
                </Button>


            </form>
            
        </div>

    )
}

export default TweetBox