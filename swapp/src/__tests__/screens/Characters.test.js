import React from "react";
import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import { MockedProvider } from "@apollo/react-testing";
import { ALL_PEOPLE_QUERY } from "../../queries/characterQueries";
import CharactersPage from "../../screens/characters/CharactersPage";

describe("Characters component", () => {
  it("Renders mock data", () => {
    const mocks = [
      {
        request: {
          query: ALL_PEOPLE_QUERY,
          variables: { first: 12 }
        },
        result: {
          data: {
            allPeople: {
              pageInfo: {
                hasNextPage: false,
                endCursor: "blah"
              },
              edges: [
                {
                  node: {
                    id: "people.1",
                    name: "Luke Skywalker",
                    image: "http://jhg"
                  }
                }
              ]
            }
          }
        }
      }
    ];

    let result = renderer.create(
      <MemoryRouter initialEntries={["/characters"]}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <CharactersPage />
        </MockedProvider>
      </MemoryRouter>
    );
    expect(result).toMatchSnapshot();
  });
});
