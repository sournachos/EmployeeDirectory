import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";
import EmployeeContext from "../utils/employeeContext";

function SearchResultContainer(){
  const [employees, setEmployees] = useState({
    name: "",
    picture: "",
    dob: "",
    email: ""
  });
  

  // When the component mounts, a call will be made to get random users.
  useEffect(() => {
    API.search()
    .then(data => {
      setEmployees({
        name: data.results[0].name,
        picture: data.results[0].picture.medium,
        dob: data.results[0].dob.date,
        email: data.results[0].email
      });
      console.log(employees)
    })
    .catch(err => console.log(err));
  }, []);



  function handleBtnClick(event) {
  

  }

    return (
     <EmployeeContext.Provider value={{name, email, dob, picture}}>
      <div>
        <SearchForm/>
        <ResultList/>
      </div>
   </EmployeeContext.Provider>
    );
  }

export default SearchResultContainer;
