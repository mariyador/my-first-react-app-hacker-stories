import * as React from 'react'


function App() {

  const stories = [
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

  const javascriptLibraries = [
    {
      title: 'jQuery',
      url: 'https://jQuery.org/',
      author: 'Jorh Resig',
      num_comments: 3,
      points: 4,
      objectID: 0,
    }, 
    {
      title: 'Angular',
      url: 'https://angularjs.org/',
      author: 'Google',
      num_comments: 2,
      points: 5,
      objectID: 1,
    }, 
  ];

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search />
      <hr />
      <List list={stories} title="React Ecosystem"/>
      <List list={javascriptLibraries} title="JavaScript Libraries"/>
    </div>
  );
}

function List(props) {
  return(
    <div>
      <h2>{props.title}</h2>
    <ul>
      {props.list.map(function(item) {
        return (<Item item={item} />);
      })}  
    </ul>
    </div>
  )
}

const Item = ({ item }) => {
  return (
    <li key={item.objectID}>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </li>
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
  const [searchTerm, setSearchTerm] = React.useState('');

  console.log(`Rendering search with searchTerm ${searchTerm}`)

const handleChange = (event) => {
  console.log(`Before entering searchTerm: ${searchTerm}`);
  setSearchTerm(event.target.value);
  console.log(`After entering searchTerm: ${searchTerm}`)
}

  return (
    <div>
      <label htmlFor="sarch">Search: </label>
      <input id="search" type="text"  onChange={handleChange}/>

      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </div>
    
  )
}

export default App;