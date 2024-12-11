import { useEffect, useState } from "react"

function App() {
  const [currentTab, setCurrentTab] = useState(1);
  const [tabData, setTabData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(function() {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/todos/${currentTab}`)
      .then(async res => {
        const json = await res.json();
        setTabData(json);
        setLoading(false);
      });
  }, [currentTab]);

  return <div>
    <button onClick={function() {
      setCurrentTab(1);
    }} style={{color: currentTab == 1 ? "red" : "black"}}>Todo #1</button>
    <button onClick={function() {
      setCurrentTab(2);
    }} style={{color: currentTab == 2 ? "red" : "black"}}>Todo #2</button>
    <button onClick={function() {
      setCurrentTab(3);
    }} style={{color: currentTab == 3 ? "red" : "black"}}>Todo #3</button>
    <button onClick={function() {
      setCurrentTab(4);
    }} style={{color: currentTab == 4 ? "red" : "black"}}>Todo #4</button>

    <br />
    {loading ? "loading..." : tabData.title}

  </div>
}

export default App

// import { useEffect, useState } from "react";

// function App() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();
//         setUsers(data);
//       } catch (error) {
//         console.error("Error while fetching data", error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchData();
//   }, []);

//   if(loading) {
//     return <div>loading...</div>
//   }

//   return <div>
//     <ul>
//       {users.map(user => (
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </ul>
//   </div>
// };

// export default App

// import { useState } from "react";
// import { PostComponent } from "./Post";

// function App() {
//   const [posts, setPosts] = useState([]);

//   const postComponents = posts.map(post => <PostComponent 
//     name={post.name} 
//     subTitle={post.subTitle} 
//     time={post.time} 
//     image={post.image} 
//     description={post.description} 
//   />)

//   function addPost() {
//     setPosts([...posts, {
//       name: "ishav",
//       subTitle: "100 followers",
//       time: "10m ago",
//       image: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
//       description: "What to know how to win big? Check out how these folks won $6000 in bounties."
//     }]);
//   }

//   return (
//     <div>
//       <button onClick={addPost}>Add post</button>
//       <div style={{background: "#dfe6e9", height: "100vh", display: "flex", justifyContent: "center", alignItems: "start" }}>
//         <div>
//            {postComponents}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App
