import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Result from "../models/films";
import { formatDateStr } from "../helper/helper";

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
        <div>
          <h5>Movie Titles</h5>
          <ul className="cards">
            {newResult &&
              newResult.map((i, index) => (
                <li className="card" key={index}>
                  <div>
                    <p>{i.title}</p>
                    <p>{formatDateStr(i.created)}</p>
                  </div>
                </li>
              ))}
          </ul>
          {newResult.length === 0 && <h1>LOOK FOR SOMETHING ELSE</h1>}
        </div>
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
`;

const MovieSection = styled.div`
  padding: 0px 0px 0px 77px;

  h1 {
    color: black;
    text-align: center;
  }

  p {
    color: white;
  }
  .cards {
    display: grid;
    grid-auto-columns: 100%;
    grid-column-gap: 10px;
    grid-auto-flow: column;
    padding: 25px 0px;
    list-style: none;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
  }

  li {
    div {
      text-align: center;
      margin: auto;
    }
  }

  .card {
    display: flex;
    flex-direction: column;
    padding: 20px;
    height: 280px;
    background: var(--white);
    border-radius: 12px;
    background: black;
    scroll-snap-align: start;
    transition: all 0.2s;
    align-items: center;
  }

  .cards::-webkit-scrollbar {
    height: 12px;
  }

  .cards::-webkit-scrollbar-thumb,
  .cards::-webkit-scrollbar-track {
    border-radius: 92px;
  }

  .cards::-webkit-scrollbar-thumb {
    background: var(--darkorange);
  }

  .cards::-webkit-scrollbar-track {
    background: var(--thumb);
  }

  @media (max-width: 500px) {
    .cards {
      grid-auto-columns: calc(50% - 10px);
      grid-column-gap: 20px;
    }

    .card {
      display: flex;
      flex-direction: column;
      padding: 20px;
      width: 180px;
      height: 180px;
      background: var(--white);
      border-radius: 12px;
      background: black;
      scroll-snap-align: start;
      transition: all 0.2s;
      align-items: center;
    }
  }

  @media (min-width: 700px) {
    .cards {
      grid-auto-columns: calc(calc(100% / 3) - 20px);
      grid-column-gap: 10px;
    }
  }

  @media (min-width: 1100px) {
    .cards {
      grid-auto-columns: calc(25% - 30px);
      grid-column-gap: 10px;
    }
  }

  @media (max-width: 500px) {
    padding: 63px 0px 48px 28px;
  }
`;
