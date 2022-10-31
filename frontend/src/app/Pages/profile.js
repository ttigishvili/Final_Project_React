import React from "react";
import "../Styles/profile.css";

const Profile = () => {
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const createdAt = localStorage.getItem("time");
  const id = localStorage.getItem("id");
  const isAdmin = localStorage.getItem("isAdmin");
  let hidden = 1;
  if (isAdmin == "true") {
    hidden = 0;
  }
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
      ></link>
      <div className="main">
        <h2>IDENTITY</h2>
        <div className="card">
          <div className="card-body">
            <i className="fa fa-pen fa-xs edit"></i>
            <table>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>:</td>
                  <td>{name}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>:</td>
                  <td>{email}</td>
                </tr>
                <tr>
                  <td>Member Since</td>
                  <td>:</td>
                  <td>{createdAt}</td>
                </tr>
                {!hidden ? (
                  <tr>
                    <td>Id In the System</td>
                    <td>:</td>
                    <td>{id}</td>
                  </tr>
                ) : (
                  ""
                )}
                {!hidden ? (
                  <tr>
                    <td>Admin</td>
                    <td>:</td>
                    <td>{isAdmin}</td>
                  </tr>
                ) : (
                  ""
                )}

                <tr>
                  <td>Job</td>
                  <td>:</td>
                  <td>Web Developer</td>
                </tr>
                <tr>
                  <td>Skill</td>
                  <td>:</td>
                  <td>PHP, HTML, CSS, Java</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2>SOCIAL MEDIA</h2>
        <div className="card">
          <div className="card-body">
            <i className="fa fa-pen fa-xs edit"></i>
            <div className="social-media">
              <span className="fa-stack fa-sm">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-facebook fa-stack-1x fa-inverse"></i>
              </span>
              <span className="fa-stack fa-sm">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
              </span>
              <span className="fa-stack fa-sm">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-instagram fa-stack-1x fa-inverse"></i>
              </span>
              <span className="fa-stack fa-sm">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-invision fa-stack-1x fa-inverse"></i>
              </span>
              <span className="fa-stack fa-sm">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-github fa-stack-1x fa-inverse"></i>
              </span>
              <span className="fa-stack fa-sm">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-whatsapp fa-stack-1x fa-inverse"></i>
              </span>
              <span className="fa-stack fa-sm">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-snapchat fa-stack-1x fa-inverse"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
