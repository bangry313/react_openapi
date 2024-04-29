import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import NewsList from './components/NewsList';

function App() {

  // const [news, setNews] = useState(null);

  // const handleClick = async function() {
  //   // const url = "https://jsonplaceholder.typicode.com/todos/3";
  //   const url = "https://newsapi.org/v2/top-headlines?country=kr&apiKey=c1634fb6a0a644fc854782f6d81155a0";
  //   const response = await axios.get(url);
  //   setNews(response.data);
  // }

  return (
    <div>
      {/* <div><button onClick={handleClick}>데이터 수신</button></div> */}
      {/* <div>{JSON.stringify(news)}</div> */}
      <NewsList />
    </div>


    
  );
}

export default App;
