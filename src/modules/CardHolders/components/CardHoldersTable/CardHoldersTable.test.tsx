import React from "react";
import Enzyme from 'enzyme';
import { createShallow  } from '@material-ui/core/test-utils';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import CardHoldersTable from "./CardHoldersTable";
import {CardHolder} from '../../containers/CardHoldersContainer'

Enzyme.configure({ adapter: new Adapter() });

const data: CardHolder[] = [
  {id: '1', name: 'user1', card_number: '111111'},
  {id: '2', name: 'user2', card_number: '222222'},
];

describe("<CardHoldersTable />", () => {
    let shallow;

  it("render okay", () => {
    shallow = createShallow();

    const wrapper = shallow(<CardHoldersTable
      data={data}
      remove={() => {}}
    />);
    expect(wrapper).toBeTruthy();
  });

  // it("Test against snapshot", () => {
  //   const tree = rendered.toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});
