import React from "react";
import { create, act, ReactTestRenderer } from "react-test-renderer";
import { createRender } from '@material-ui/core/test-utils';

import CardHoldersForm from "./CardHoldersHookForm";
import {CardHolder} from '../../containers/CardHoldersContainer'

const values: CardHolder = {id: '2', name: 'user2', card_number: '222222'};

describe("<CardHoldersForm />", () => {
  let rendered: ReactTestRenderer;

  it("render okay", () => {
    act(() => {
      rendered = create(
        <CardHoldersForm
          title={"some-title"}
          submit={() => {}}
          cancel={() => {}}
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
