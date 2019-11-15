import React from "react";
import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import { MockedProvider, wait } from "@apollo/react-testing";
import { AUTHENTICATED_QUERY } from "../../queries/userQueries";
import StartScreen from "../../screens/StartScreen";

describe("StartScreen component", () => {
  // TODO - Fix
  it("Renders without crashing", () => {
    const mocks = [
      {
        request: {
          query: AUTHENTICATED_QUERY
        },
        result: {
          data: {
            authenticated: true
          }
        }
      }
    ];

    const result = renderer.create(
      <MemoryRouter initialEntries={["/episodes"]}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <StartScreen />
        </MockedProvider>
      </MemoryRouter>
    );
    expect(result).toMatchSnapshot();
  });
});
