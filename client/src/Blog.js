// import React, { useState } from 'react';

const Blog = () => {
  // const [feedData, setFeedData] = useState([]);

  // useEffect(() => {
  //   // Fetch the RSS feed
  //   fetch('/api/rss-feed') // Replace with the actual endpoint
  //     .then((response) => response.json())
  //     .then((data) => setFeedData(data.items)); // Adjust based on your feed structure
  // }, []);

  return (
    <div style={{alignItems: "center"}}>
      {/* <h1>Latest Blog Posts</h1> */}
      <h1>BLOGS UNDER CONSTRUCTION</h1>
      <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Under_construction_animated.gif" alt="under_construction" />
      <ul>
        {/* {feedData.map((item) => (
          <li key={item.guid}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default Blog;
