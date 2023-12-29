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
    <div>
      <h1>Latest Blog Posts</h1>
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
