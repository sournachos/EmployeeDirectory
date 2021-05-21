import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

function SearchForm(props) {
  return (
    <form className="container">
      <div className="form-group mx-5">
        <h2 className="position-relative" htmlFor="search">Employee Directory</h2>
        <input
          className="d-inline"
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search Employee By Name"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
