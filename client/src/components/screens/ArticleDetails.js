import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { fetchArticleDetail } from "../../actions/index";
import Header from "../commons/Header";
import Footer from "../commons/Footer";

class ArticleDetails extends React.Component {
  // call API to get article details by id
  componentDidMount() {
    this.props.fetchArticleDetail(this.props.match.params.id);
  }
  // display article details by assign all the states to the htlm tag
  render() {
    return (
      <div className="container">
        <ul className="collection with-header">
          <li className="collection-header">
            <h4>{this.props.article.article_title}</h4>
          </li>

          <table>
            <tr>
              <td colspan="2">
                <h6 className="thick-blue">General Information</h6>
              </td>
            </tr>
            <tr>
              <td>
                <span className="thick">Author</span>
              </td>
              <td>{this.props.article.article_authors}</td>
            </tr>
            <tr>
              <td>
                <span className="thick">Publication Type: </span>
              </td>
              <td>{this.props.article.article_publication_type}</td>
            </tr>
            <tr>
              <td>
                <span className="thick">Publication:</span>
              </td>
              <td>{this.props.article.article_publication}</td>
            </tr>
            <tr>
              <td>
                <span className="thick">Year:</span>
              </td>
              <td>{this.props.article.article_year}</td>
            </tr>
            <tr>
              <td>
                <span className="thick">Location:</span>
              </td>
              <td>{this.props.article.article_location}</td>
            </tr>
            <tr>
              <td>
                <span className="thick">Rating:</span>
              </td>
              <td>{this.props.article.article_rating}</td>
            </tr>

            <tr>
              <td colspan="2">
                <h6 className="thick-blue">Analysis Information</h6>
              </td>
            </tr>
            <tr>
              <td>
                <span className="thick">SE Method:</span>
              </td>
              <td>{this.props.article.article_semethod}</td>
            </tr>
            <tr>
              <td>
                <span className="thick">SE Methodology:</span>
              </td>
              <td>{this.props.article.article_semethodology}</td>
            </tr>
            <tr>
              <td>
                <span className="thick">Research Question:</span>
              </td>
              <td>{this.props.article.article_researchQuestion}</td>
            </tr>
            <tr>
              <td>
                <span className="thick">Research Result:</span>
              </td>
              <td>{this.props.article.article_researchResult}</td>
            </tr>
          </table>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    article: state.article.detail,
  };
};

export default connect(mapStateToProps, { fetchArticleDetail })(ArticleDetails);
