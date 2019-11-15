import React from "react";
import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import { MockedProvider, wait } from "@apollo/react-testing";
import { ALL_EPISODES_QUERY } from "../../queries/episodeQueries";
import EpisodesPage from "../../screens/episodes/EpisodesPage";

describe("Episodes component", () => {
  it("Renders episodes", async () => {
    const mock = {
      request: {
        query: ALL_EPISODES_QUERY,
        variables: {}
      },
      result: {
        data: {
          allEpisodes: {
            edges: [
              {
                node: {
                  id: "films.1",
                  title: "A New Hope",
                  episodeId: 4,
                  image:
                    "https://m.media-amazon.com/images/I/81r+LN-YReL._SS500_.jpg",
                  openingCrawl: "bala"
                }
              }
            ]
          }
        }
      }
    };

    let result = renderer.create(
      <MemoryRouter initialEntries={["/episodes"]}>
        <MockedProvider mocks={[mock]} addTypename={false}>
          <EpisodesPage />
        </MockedProvider>
      </MemoryRouter>
    );
    await renderer.act(async () => {
      await wait(0);
    });

    expect(result).toMatchSnapshot();
  });
});
