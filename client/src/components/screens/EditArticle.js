import React, { useState, useEffect } from "react";
import { fetchArticleDetail, updateArticle } from "../../actions/index";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

function EditArticle(props) {
  // const article = useSelector((state) => state.article);
  const initialFieldValues = {
    title: "",
    authors: "",
    pub_type: "",
    pub: "",
    doi: "",
    year: "",
  };
  const articleId = props.match.params.id;
  const [values, setvalues] = useState(initialFieldValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setvalues({ ...values, [name]: value });
  };

  useEffect(() => {
    props.fetchArticleDetail(props.match.params.id);
  }, []);

  useEffect(() => {
    // const { article } = props;
    const info = {
      title: props.article.article_title,
      authors: props.article.article_authors,
      pub_type: props.article.article_publication_type,
      pub: props.article.article_publication,
      doi: props.article.article_doi,
      year: props.article.article_year,
    };
    setvalues(info);
  }, [props.article]);

  const rule = {
    title: {
      required: true,
      err: "Title is required",
    },
    authors: {
      required: true,
      err: "Authors is required",
    },
    year: {
      required: true,
      err: "Year is required",
    },
  };
  const validate = (rule, values) => {
    for (const prop in rule) {
      if (rule[prop].required) {
        if (!values[prop]) {
          alert(rule[prop].err);
          return false;
        }
      }
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      validate(rule, {
        title: values.title,
        authors: values.authors,
        year: values.year,
      })
    ) {
      const obj = {
        article_title: values.title,
        article_authors: values.authors,
        article_publication_type: values.pub_type,
        article_publication: values.pub,
        article_doi: values.doi,
        article_year: values.year,
      };
      // console.log(obj);
      if (obj) {
        props.updateArticle(articleId, obj);
        props.history.push(`/myarticles`);
      }
    }
  };

  return (
    <div className="container">
      <p>Update article</p>
      <form onSubmit={handleSubmit} className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="Enter title here"
              name="title"
              type="text"
              className="validate"
              value={values.title}
              onChange={handleInputChange}
            />
            <label for="first_name">Title</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="Enter authors here"
              name="authors"
              type="text"
              className="validate"
              value={values.authors}
              onChange={handleInputChange}
            />
            <label for="first_name">Authors</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input
              placeholder="Enter publication type here"
              name="pub_type"
              type="text"
              className="validate"
              value={values.pub_type}
              onChange={handleInputChange}
            />
            <label for="first_name">Publication Type:</label>
          </div>
          <div className="input-field col s6">
            <input
              placeholder="Enter publication here"
              name="pub"
              type="text"
              className="validate"
              value={values.pub}
              onChange={handleInputChange}
            />
            <label for="first_name">Publication:</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s6">
            <input
              placeholder="Enter DOI here"
              name="doi"
              type="text"
              className="validate"
              value={values.doi}
              onChange={handleInputChange}
            />
            <label for="first_name">DOI</label>
          </div>
          <div className="input-field col s6">
            <input
              placeholder="Enter year here"
              name="year"
              type="text"
              className="validate"
              value={values.year}
              onChange={handleInputChange}
            />
            <label for="first_name">Year</label>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-success"
        >
          Update
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    article: state.article.detail,
  };
};

export default connect(mapStateToProps, { fetchArticleDetail, updateArticle })(
  EditArticle
);
