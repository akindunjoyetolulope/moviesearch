import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Result from "../models/films";
import { formatDateStr } from "../helper/helper";
import media from "../styles/media";

const Body = () => {
  const [result, setResult] = useState<Result[]>([]);
  const [filterTitle, setFilterTitle] = useState("");

  const api = async () => {
    const data = await fetch("https://swapi.dev/api/films/", {
      method: "GET",
    });
    const jsonData = await data.json();
    setResult(jsonData.results);
  };

  useEffect(() => {
    api();
  }, []);

  const newResult = result.filter((title) =>
    title.title.toLocaleLowerCase().includes(filterTitle)
  );

  return (
    <>
      <FormContainer>
        <form>
          <label htmlFor="search"> Search </label>
          <br />
          <input
            type="text"
            value={filterTitle}
            onChange={(e) => setFilterTitle(e.target.value.toLocaleLowerCase())}
          />
        </form>
      </FormContainer>
      <MovieSection>
        <h5>Movie Titles</h5>
        <CardContainer>
          <div className="row">
            {newResult &&
              newResult.map((i, index) => (
                <div className="card" key={index}>
                  <p className="card-text">
                    {i.title} <br /> {formatDateStr(i.created)}
                  </p>
                </div>
              ))}
          </div>
          {newResult.length === 0 && (
            <div className="errorMessage">
              <h1>Sorry! No Movie Name {filterTitle} Here 😂 </h1>
            </div>
          )}
        </CardContainer>
      </MovieSection>
    </>
  );
};

export default Body;

const FormContainer = styled.div`
  padding: 63px 57px 48px 77px;

  form {
    input {
      height: 54px;
      width: 100%;
    }

    input[type="text"],
    select {
      font-size: 14px;
      width: 100%;
      padding: 12px 20px;
      margin: 8px 0;
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }
  }

  @media (max-width: 500px) {
    padding: 63px 27px 48px 28px;
  }
`;

const CardContainer = styled.div`
  .row {
    align-items: stretch;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    gap: 10px;
  }
  .card {
    border-radius: 12px;
    background: black;
    color: white;
    width: 300px;
    height: 300px;
    padding: 0.75rem;
    margin: 2rem 0px;
    border: 0;
    flex-basis: auto;
    flex-grow: 0;
    flex-shrink: 0;
  }

  ${media.mobile} {
    .card {
      border-radius: 12px;
      background: black;
      color: white;
      width: 200px;
      height: 200px;
      padding: 0.75rem;
      margin: 2rem 0px;
      border: 0;
      flex-basis: auto;
      flex-grow: 0;
      flex-shrink: 0;
    }
  }

  .card-text {
    text-align: center;
    padding-top: calc(100% - 160px);
  }

  .errorMessage {
    height: 300px;
    padding: 1rem;
    margin: 2rem;

    h1 {
      text-align: center;
      padding-top: 50px;
    }
  }
`;

const MovieSection = styled.div`
  padding: 0px 0px 0px 77px;

  ${media.mobile} {
    padding: 0px 0px 0px 28px;
  }

  h1 {
    color: black;
    text-align: center;
  }
`;
