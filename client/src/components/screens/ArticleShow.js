import React from "react";
import { connect } from "react-redux";
import { fetchArticle } from "../../actions";

class ArticleShow extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchArticle(id);
  }
  render() {
    if (!this.props.article) {
      return <div>Loading...</div>;
    }
    const { article_title, article_authors } = this.props.article;

    return (
      <div>
        <h4>Article Details</h4>
        <h1>{article_title}</h1>
        <h5>{article_authors}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { article: state.articles[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchArticle })(ArticleShow);
