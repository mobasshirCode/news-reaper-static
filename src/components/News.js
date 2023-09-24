import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

const News = (props) => {
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const updateNews = async () => {
    let parsedData = props.navKey;
    setArticles(parsedData.articles);
    setLoading(false);
  };
  useEffect(() => {
    document.title = `${capitalize(
      props.category === "general" ? "home" : props.category
    )}  - News Reaper`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h1 className="text-center" style={{ margin: "90px 0px 10px 0px" }}>
        News Reaper - Top {capitalize(props.category)} Headlines
      </h1>
      {loading && <Spinner />}
      <div className="container my-2">
        <div className="row my-3 ">
        
          {articles.map((element) => {
           
            return (
              <div className="col-md-4 my-3" key={element.url}>
                <NewsItem
                  mode={props.mode}
                  title={element.title ? element.title : ""}
                  description={
                    element.description ? element.description.slice(0, 100) : ""
                  }
                  newsUrl={element.url}
                  imageUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://thumbs.dreamstime.com/b/newspaper-wooden-table-93401143.jpg"
                  }
                  author={element.author ? element.author : "Unknown"}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
              
            ); 
          })} 
        </div>
      </div>
    </>
  );
};
export default News;
