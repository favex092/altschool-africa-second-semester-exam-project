import React, { useState, useEffect } from "react";
import axios from "axios";

import Pagination from "../../utils/Pagination";

import LoadingImage from "../../assets/loading.gif";

//API Endpoint
const repoUrl = " https://api.github.com/users/favex092/repos";

const Repository = () => {
  const [repository, setRepository] = useState([]);
  const [ReposPerPage] = useState(5);
  const [currentRepository, setcurrentRepository] = useState(1);

  const indexOfLastPage = ReposPerPage * currentRepository; 
  const indexOfFirstPage = indexOfLastPage - ReposPerPage; 
  const ModifiedReposCount = repository.slice(
    indexOfFirstPage,
    indexOfLastPage
  ); 

  const FetchGitHubData = () => {
    // Fetch Repository Data
    axios.get(repoUrl).then((res) => {
      setRepository(res.data);
    });
  };

  useEffect(() => {
    FetchGitHubData();
  }, []);

  console.log(repository);

  return (
    <>
      {repository?.length !== 0 ? (
        <div className="repository-container">
          <div className="repository-container-tag">
            <p>Repository Section</p>
          </div>
          <div className="repository-container-content">
            {ModifiedReposCount.map((repo, index) => {
              return (
                <div className="repository-contents" key={repo.id}>
                  <a href={repo.url}>
                    <p>
                      {index}. {repo.name}
                    </p>
                  </a>
                </div>
              );
            })}
            <br />
            <Pagination
              repositoryApIResult={repository}
              ReposPerPage={ReposPerPage}
              currentRepository={currentRepository}
              setcurrentRepository={setcurrentRepository}
            />
          </div>
        </div>
      ) : (
        <div className="loading-state">
          <img src={LoadingImage} alt="loading" />
        </div>
      )}
    </>
  );
};

export default Repository;