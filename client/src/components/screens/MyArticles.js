import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchMyArticles, deleteArticle } from "../../actions/index";

function MyArticles(props) {
  const onDelete = (id) => {
    props.deleteArticle(id);
    props.fetchMyArticles();
  };
  useEffect(() => {
    if (!props.auth) {
      props.history.push("/");
    }
    props.fetchMyArticles();
  }, [props.auth]);
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
                <a
                  class="waves-effect waves-light btn"
                  href={`/edit/${article._id}`}
                >
                  <i class="material-icons">edit</i>
                </a>
              </td>
              <td>
                <a
                  class="waves-effect waves-light btn"
                  onClick={() => onDelete(article._id)}
                >
                  <i class="material-icons">delete</i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <a
        class="btn-floating btn-large waves-effect waves-light red"
        href="/add"
      >
        <i class="material-icons">add</i>
      </a>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    articles: state.article.myArticles,
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { fetchMyArticles, deleteArticle })(
  MyArticles
);
