import React from "react";
import { create, act, ReactTestRenderer } from "react-test-renderer";

import LoadingContainer from "./LoadingContainer";

describe("<LoadingContainer />", () => {
  let rendered: ReactTestRenderer;

  it("should render null", () => {
    act(() => {
      rendered = create(<LoadingContainer message={null} isLoading={false} />);
    });
    const tree = rendered.toJSON();
    expect(tree).toBeNull();
  });

  it("should render childrens", () => {
    act(() => {
      rendered.update(
        <LoadingContainer message={null} isLoading={false}>
          some children
        </LoadingContainer>
      );
    });
    const tree = rendered.toJSON();
    expect(tree).toBe("some children");
  });

  it("should render message when receiving that", () => {
    act(() => {
      rendered.update(
        <LoadingContainer message={"some message"} isLoading={false}>
          some children
        </LoadingContainer>
      );
    });
    const testInstance = rendered.root;
    expect(testInstance.findByType('p')).toBeTruthy();
  });

  // it("should render <ActivityIndicator /> when receiving loading status", () => {
  //   act(() => {
  //     rendered.update(
  //       <LoadingContainer message={null} isLoading={true}>
  //         some children
  //       </LoadingContainer>
  //     );
  //   });
  //   const testInstance = rendered.root;
  //   expect(testInstance.findByType(ActivityIndicator)).toBeTruthy();
  // });

  // it('App test against snapshot', () => {
  //   const tree = renderer.create(<App />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});
