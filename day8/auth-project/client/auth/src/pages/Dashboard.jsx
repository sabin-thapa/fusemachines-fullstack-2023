import React, { useEffect } from "react";

const Dashboard = () => {
    const history = useHistory()
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
    //   const user = jwt.decode(token);
    //   console.log(user);
      if(!user) {
        localStorage.removeItem('token')
        window.location.href = "/"
      }
    }
    return () => {};
  }, [third]);

  return <div>Dashboard</div>;
};

export default Dashboard;
