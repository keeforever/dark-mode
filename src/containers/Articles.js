import Article from "../components/Article";
import articles from "../data";

const Articles = () => {

  const articleList=articles.map((article,index)=>{

    return (

      <Article key={index} {...article}/>

    )
  })
  return (
    <>
    {
      articleList
    }
    </>
  );
};

export default Articles;
