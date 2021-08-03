//this is our container component which holds state

// import React, { useState, useEffect } from "react";

const MemeGenerator = () => {
    const [inputText, setinputText] = useState({
        topText: "",
        bottomText: ""
    });
    const [randomImage, setRandomImage] = useState(
        "https://i.imgflip.com/26am.jpg"
    );
    const [allMemeImgs, setAllMemeImgs] = useState([]);

    const handleChange = e => {
        setinputText({
            ...inputText,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        const randNum = Math.floor(Math.random() * allMemeImgs.length);
        const randMemeImgUrl = allMemeImgs[randNum].url;
        setRandomImage(randMemeImgUrl);
    }

}

export default MemeGenerator;
