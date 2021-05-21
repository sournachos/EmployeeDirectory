import React from "react";

const EmployeeContext = React.createContext({
    name: "",
    picture: "",
    dob: "",
    email: "",
});

export default EmployeeContext;