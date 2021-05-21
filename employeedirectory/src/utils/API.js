import axios from "axios";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function() {
    return new Promise((resolve, reject) => {
      axios
      .get("https://randomuser.me/api/?nat=fr&results=20&inc=picture,name,dob,email"
    ).then(res => {
      const employees = res.data;
      const results = employees.map(employee => {
        return {
          name: employee.name,
          picture: employee.picture,
          dob: employee.dob,
          email: employee.email
        };
      });
      resolve(results);
    })
    .catch(err => reject(err));
  });
}};

