import React from "react";
import { create, act, ReactTestRenderer } from "react-test-renderer";

import MatchScreen from "./MatchScreen";

describe("<MatchScreen />", () => {
  let rendered: ReactTestRenderer;

  it("render okay", () => {
    act(() => {
      rendered = create(
        <MatchScreen
          user={{
            id: 7,
            username: "leablanco",
            name: "leablanco",
            email: "leablanco",
            birthday: new Date("1989-03-11"),
            gender: "female",
            look_for: "male",
            description: "Encontrar amigos y el amor",
            coins: 1854,
            image: 1
          }}
          viewProfile={() => {}}
          refresh={() => {}}
        />
      );
    });
    expect(rendered).toBeTruthy();
  });

  // it("Test against snapshot", () => {
  //   const tree = rendered.toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});
