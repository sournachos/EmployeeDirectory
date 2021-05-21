import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";
import EmployeeContext from "../utils/employeeContext";

function SearchResultContainer(){
  const [employees, setEmployees] = useState([]);
  

  // When the component mounts, a call will be made to get random users.
  useEffect(() => {
    API.search()
    .then(employees => {
      setEmployees(employees);
    })
    .catch(err => console.log(err));
    
    console.log(employees)
  }, []);


  function handleBtnClick(event) {
    // Get the title of the clicked button
    const btnName = event.target.getAttribute("data-value");
    if (btnName === "next") {
      const newUserIndex = userIndex + 1;
      nextUser(newUserIndex);
    } else {
      const newUserIndex = userIndex - 1;
      previousUser(newUserIndex);
    }
  }

    return (
      <EmployeeContext.Provider value={{ name, email, picture, dob, handleBtnClick }}>
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList results={this.state.results} />
      </div>
      </EmployeeContext.Provider>
    );
  }

export default SearchResultContainer;
