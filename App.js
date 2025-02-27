<!DOCTYPE html>
<html>
  <head>
    <script
      src="https://unpkg.com/react@18/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
      crossorigin
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>
    <div id="mydiv"></div>
    <script type="text/babel">
      const { useState, useEffect } = React;
      function RandomUserData() {
        const [userData, setUserData] = useState(null);
        useEffect(() => {
          const fetchData = async () => {
            try {
              const response = await fetch("https://randomuser.me/api/");

              if (!response.ok) {
                throw new Error("Network response was not ok");
              }
              const data = await response.json();
              setUserData(data.results[0]);
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          };
          fetchData();
        }, []);

        return (
          <div>
            <h1>Random User Data</h1>
            {userData && (
                <div>
                <p>
                  Name: {userData.name.first} {userData.name.last}
                </p>
                <img src={userData.picture.large} alt="User" />
                <p>Email: {userData.email}</p>
                <p>
                  Location: {userData.location.city},{" "}
                  {userData.location.country}
                </p>
              </div>
            )}
          </div>
        );
      }
      const container = document.getElementById("mydiv");
      const root = ReactDOM.createRoot(container);
      root.render(<RandomUserData />);
    </script>
  </body>
</html>
