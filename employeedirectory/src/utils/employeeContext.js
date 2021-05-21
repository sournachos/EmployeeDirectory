import React from "react";

const EmployeeContext = React.createContext({
    name: "",
    picture: "",
    dob: "",
    email: "",
  handleBtnClick: () => {}
});

export default EmployeeContext;