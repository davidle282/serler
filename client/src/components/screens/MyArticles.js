import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchMyArticles, deleteArticle } from "../../actions/index";

function MyArticles(props) {
  const onDelete = (id) => {
    props.deleteArticle(id);
    props.fetchMyArticles();
  };
  useEffect(() => {
    props.fetchMyArticles();
  }, []);
  return (
    <div className="container">
      <p>My articles</p>
      <table className="striped">
        <thead className="card-panel teal lighten-2">
          <td>Title</td>
          <td>Authors</td>
          <td>Year</td>
          <td>Status</td>
          <td>Edit</td>
          <td>Delete</td>
        </thead>
        <tbody>
          {props.articles.map((article) => (
            <tr key={article._id}>
              <td>
                <a href={`/detail/${article._id}`}>{article.article_title}</a>
              </td>
              <td>{article.article_authors}</td>
              <td>{article.article_year}</td>
              <td>{article.article_status}</td>
              <td>
                <button className="btn btn-primary">
                  <a href={`/edit/${article._id}`}>Edit</a>
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => onDelete(article._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    articles: state.article.myArticles,
  };
};

export default connect(mapStateToProps, { fetchMyArticles, deleteArticle })(
  MyArticles
);
