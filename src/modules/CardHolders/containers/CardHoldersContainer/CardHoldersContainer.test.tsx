import React from "react";
import { create, act, ReactTestRenderer } from "react-test-renderer";

import CardHoldersContainer from "./CardHoldersContainer";

jest.mock("common/utils/FirebaseHook/FirebaseHook", () => {
  return () => ({
    state: {
      data: [],
      loading: false,
      error: null
    },
    fetchData: () => {},
    removeData: () => {}
  })
});

describe("<CardHoldersContainer />", () => {
  let rendered: ReactTestRenderer;

  it("render okay", () => {
    act(() => {
      rendered = create(<CardHoldersContainer />);
    });

    expect(rendered).toBeTruthy();
  });

  // it("should not render <UserList />", () => {
  //   const testInstance = rendered.root.findAllByType(UserList);
  //   expect(testInstance).toHaveLength(0);
  // });

  // it("should render <UserList />", () => {
  //   useDispatch.mockImplementationOnce(() => {});
  //   useSelector.mockImplementationOnce(() => ({
  //     data: [
  //       {
  //         id: 1,
  //         username: "luu",
  //         birthdate: "1989-03-11",
  //         gender: "female",
  //         look_for: "male",
  //         description: "Encontrar amigos y el amor",
  //         coins: 1854,
  //         token: "luu",
  //         image: 1
  //       }
  //     ],
  //     loading: false,
  //     error: null
  //   }));

  //   act(() => {
  //     rendered.update(<FavoriteListScreenContainer />);
  //   });

  //   const testInstance = rendered.root.findAllByType(UserList);
  //   expect(testInstance).toHaveLength(1);
  // });

  // it('App test against snapshot', () => {
  //   const tree = renderer.create(<App />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});
