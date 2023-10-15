import * as React from 'react'

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  }, 
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  }, 
];

function App() {
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search />
      <hr />
      <List />
    </div>
  );
}

function List() {
  return(
    <ul>
      {list.map(function(item) {
        return (
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </li>
        );
      })}  
    </ul>
  )
}
//Version2
// let List = function() {
//   return(
//     <ul>
//       {list.map(function(item) {
//         return (
//           <li key={item.objectID}>
//             <span>
//               <a href={item.url}>{item.title}</a>
//             </span>
//             <span>{item.author}</span>
//             <span>{item.num_comments}</span>
//             <span>{item.points}</span>
//           </li>
//         );
//       })}  
//     </ul>
//   )
// }
// //Version3
// let List = () => {
//   return(
//     <ul>
//       {list.map(function(item) {
//         return (
//           <li key={item.objectID}>
//             <span>
//               <a href={item.url}>{item.title}</a>
//             </span>
//             <span>{item.author}</span>
//             <span>{item.num_comments}</span>
//             <span>{item.points}</span>
//           </li>
//         );
//       })}  
//     </ul>
//   )
// }

function Search() {
const handleChange = (event) => {
  console.log(event)
}

  return (
    <div>
      <label htmlFor="sarch">Search: </label>
      <input id="search" type="text"  onChange={handleChange}/>
    </div>
    
  )
}

export default App;