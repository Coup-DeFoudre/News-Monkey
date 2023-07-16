import React, { useEffect, useState } from "react";
import NewsItem from "./components/NewsItem";
import Spinner from "./components/Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    document.title = `${capitalize(props.category)} - NewsMonkey`;
    updateNews();
    
  }, []);

  const fetchMoreData = () => {
    setTimeout(async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        props.country
      }&category=${props.category}&apiKey=${props.apiKey}&page=${
        page + 1
      }&pageSize=${props.pageSize}`;
      setPage(page + 1);
      setLoading(true);
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(articles.concat(parsedData.articles));
      setTotalResults(parsedData.totalResults);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className=" m-5 space-y-5">
      <h1 className="text-3xl font-semibold text-white ">
        NewsMonkey-Top Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className=" flex flex-wrap space-x-10 space-y-10 items-center justify-start py-2">
          <br />

          {articles.map((element) => {
            return (
              <NewsItem
                key={element.url}
                title={element.title ? element.title.slice(0, 45) : ""}
                description={
                  element.description ? element.description.slice(0, 88) : ""
                }
                imgUrl={element.urlToImage}
                newsUrl={element.url}
                publishedAt={element.publishedAt}
                author={element.author}
                source={element.source.name}
              />
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
  apiKey: process.env.REACT_APP_NEWS_API,
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apiKey: PropTypes.string,
};

export default News;
