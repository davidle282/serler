import React, { useState, useEffect } from "react";
import axios from "axios";
import BibtexParse from "bibtex-parse-js";
import { connect } from "react-redux";

const initialFieldValues = {
  title: "",
  authors: "",
  pub_type: "",
  pub: "",
  DOI: "",
  year: "",
};

function AddArticle(props) {
  const { auth } = props;

  const [values, setvalues] = useState(initialFieldValues);

  useEffect(() => {
    if (!props.auth) {
      props.history.push("/");
    }
  }, [props.auth]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setvalues({ ...values, [name]: value });
  };

  const readBibFile = (e) => {
    let _input = null;
    let files = e.target.files;
    let reader = new FileReader();

    reader.readAsText(files[0]);

    reader.onload = (e) => {
      _input = e.target.result;
      // part the conent from the bibtex file to json format
      var sample = BibtexParse.toJSON(_input);
      var tags = sample[0].entryTags;
      const valueFromFile = {
        title: tags.title,
        authors: tags.author,
        pub_type: tags.journal,
        pub: tags.publisher,
        DOI: tags.volumn,
        year: tags.year,
      };
      setvalues(valueFromFile);
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      article_title: values.title,
      article_authors: values.authors,
      article_publication_tyle: values.pub_type,
      article_publication: values.pub,
      article_DOI: values.DOI,
      article_posted_by: props.auth._id,
      article_status: "New",
      article_year: values.year,
    };
    axios.post("/articles/add", obj).then((res) => {
      if (res.data.addArticle) {
        setvalues(initialFieldValues);
        alert("Successful!");
      }
    });
  };

  return (
    <div className="container">
      <p>Add new article</p>
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
              name="DOI"
              type="text"
              className="validate"
              value={values.DOI}
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
          Submit
        </button>
      </form>
      <p>Or you can create new article by importing a .bibtex file</p>
      <input className="btn" type="file" accept=".bib" onChange={readBibFile} />
    </div>
  );
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(AddArticle);
