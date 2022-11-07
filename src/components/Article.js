import moment from 'moment';

const Article = ({title,date,length,snippet}) => {

  return (
    <article className='article'>
    <h2>{title}</h2>
    <p>{moment(date).format('dddd Do, YYYY')} {length} min read</p>
    <p>{snippet}</p>
    </article>
  );
};

export default Article;
