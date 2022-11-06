import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// import LoadingImage from "../assets/loading.gif";

const SingleRepository = () => {
  const [data, setData] = useState([]);
  let { id } = useParams();

  const FetchGitHubData = () => {

    // API Endpoint
    const singleRepoUrl = `https://api.github.com/repos/blyncnov/${id}`;
   
    // Fetch Github Data
    axios.get(singleRepoUrl).then((res) => {
      setData(res.data);
    });
    
  };

  useEffect(() => {
    FetchGitHubData();
  }, []);

  return (
    <>
      {data ? (
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <br />
          <br />
          <div className="container">
            <div className="home-profile-card">
              <div>
                <div className="profile-image-container">
                  <img src={data.owner.avatar_url} alt="avatar" />
                </div>
                <div className="profile-information-card">
                  <h1>{data.name}</h1>

                  <a
                    href={"https://" + data.homepage}
                    style={{
                      textDecoration: "underline",
                      color: "blue",
                      cursor: "pointer",
                    }}
                  >
                    <p>View demo</p>
                    <br />
                  </a>
                </div>
                <p>{data.bio}</p>
                <div
                  className="home-container-grid-card-slots"
                  style={{
                    display: "flex",
                    gap: "1em",
                    flexDirection: "column",
                  }}
                >
                  <div className="slot-card">
                    <h4>Owner: {data.owner.login}</h4>
                  </div>
                  <div className="slot-card">
                    <h4>Visibility: {data.visibility}</h4>
                  </div>
                  <div className="slot-card">
                    <h4>Watchers: {data.watchers}</h4>
                  </div>
                  <div className="slot-card">
                    <h4>
                      Subscribers Count:{" "}
                      <a href="https://twitter.com/FavourP69766003">
                        {data.subscribers_count}
                      </a>
                    </h4>
                  </div>
                  <div className="slot-card">
                    <h4>
                      Date:{" "}
                      <a href="https://favex.netlify.app/">
                        {data.pushed_at}
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        "Loading"
      )}
      <br />
    </>
  );
};

export default SingleRepository;