import React, { useState } from "react";
import styled from "@emotion/styled";
import debounce from "lodash.debounce";
import media from "../styles/media";
import useHttp from "../hooks/useHttp";
import useUpdatedEffect from "../hooks/useUpdatedEffect";

const Body = () => {
  const [filterTitle, setFilterTitle] = useState("");

  const { result, isLoading, api, hasError } = useHttp();

  const debouncedQueryUpdate = React.useMemo(
    () => debounce((searchString: string) => api(searchString), 1000),
    [api]
  );

  const handleform = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFilterTitle(e.target.value.toLocaleLowerCase());
  };

  useUpdatedEffect(() => {
    if (!(filterTitle.length > 2)) return;
    debouncedQueryUpdate(filterTitle.trim());
  }, [filterTitle]);

  console.log(result);

  const seriesOnes = result?.filter((type) => type.Type === "series");
  const moviesOnes = result?.filter((type) => type.Type === "movie");

  return (
    <>
      <FormContainer>
        <div>
          <label htmlFor="search">
            Search for movies or series ({" "}
            <em>
              <strong>*more than three letter words</strong>
            </em>{" "}
            )
          </label>
          <br />
          <input type="text" value={filterTitle} onChange={handleform} />
        </div>
      </FormContainer>
      {isLoading && (
        <MovieSection>
          <CardContainer>
            <div className="errorMessage">
              <h1>movies loading...</h1>{" "}
            </div>
          </CardContainer>
        </MovieSection>
      )}
      {hasError && (
        <MovieSection>
          <CardContainer>
            <div className="errorMessage">
              <h5>
                Fail To Fetch check your network connection, Try again later.
              </h5>{" "}
            </div>
          </CardContainer>
        </MovieSection>
      )}
      {result?.length > 0 && !isLoading && (
        <div>
          {moviesOnes.length > 0 && (
            <MovieSection>
              <h4>{moviesOnes.length > 1 ? "Movies" : "Movie"}</h4>
              <CardContainer>
                <div className="row">
                  {moviesOnes?.map((i, index) => (
                    <div className="card" key={index}>
                      <p className="card-text">
                        {i.Title} <br /> {i.Year}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContainer>
            </MovieSection>
          )}
          {seriesOnes.length > 0 && (
            <MovieSection>
              <h4>{seriesOnes.length > 1 ? "Series" : "Serie"}</h4>
              <CardContainer>
                <div className="row">
                  {seriesOnes?.map((i, index) => (
                    <div className="card" key={index}>
                      <p className="card-text">
                        {i.Title} <br /> {i.Year}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContainer>
            </MovieSection>
          )}
        </div>
      )}
      {/* : (
        <MovieSection>
          <div className="errorMessage">
            <h3>
              SEARCH FOR MOVIES OR SERIES <br /> ( more than three letter words
              😂 )
            </h3>
          </div>
        </MovieSection>
      ) */}
      {/* <div>
        <MovieSection>
          <div className="errorMessage">
            <h1>Sorry! No Movie Name {filterTitle} Here 😂 </h1>
          </div>
        </MovieSection>
      </div> */}
    </>
  );
};

export default Body;

const FormContainer = styled.div`
  padding: 63px 57px 48px 77px;

  div {
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

  h3 {
    text-align: center;
  }

  h5 {
    text-align: center;
  }

  .search {
    margin-bottom: 20px;
    padding: 12px;
    color: red;
  }
`;
