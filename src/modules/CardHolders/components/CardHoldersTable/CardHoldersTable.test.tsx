import React from "react";
import { create, act, ReactTestRenderer } from "react-test-renderer";
import { createRender } from '@material-ui/core/test-utils';

import CardHoldersTable from "./CardHoldersTable";
import {CardHolder} from '../../containers/CardHoldersContainer'

const data: CardHolder[] = [
  {id: '1', name: 'user1', card_number: '111111'},
  {id: '2', name: 'user2', card_number: '222222'},
];

describe("<CardHoldersTable />", () => {
  let rendered: ReactTestRenderer;

  it("render okay", () => {
    act(() => {
      rendered = create(
        <CardHoldersTable
          data={data}
          remove={() => {}}
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
