import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import loadingImg from '../assets/loading.png';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 800px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px){
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  // useEffect에 전달하는 콜백함수에 async 키워드를 바로 붙이면 안된다.
  useEffect(() => {
    // 익명함수를 다시 정의한다.
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://newsapi.org/v2/top-headlines?country=kr&apiKey=c1634fb6a0a644fc854782f6d81155a0");
        
        // 임시 로딩 테스트       
        const afterTime = new Date().getTime() + 3000;
        while (new Date().getTime() < afterTime) {
        }

        setArticles(response.data.articles);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);


  // 대기중일 때
  if (loading) {
    return <NewsListBlock><img src={loadingImg} alt='신문기사 다운로드중..'/></NewsListBlock>;
    //  return <NewsListBlock><img src="/img/loading.png" alt='신문기사 다운로드중..'/></NewsListBlock>;
  }
  // 아직 articles 값이 설정되지 않았을 때
  if (!articles) {
    return null;
  }

  return (
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
