import React from 'react'
import MaterialTable from "material-table";
import {CardHolder} from '../containers/CardHoldersContainer'

interface CardHoldersTableProps {
  history: any; 
  data: CardHolder[];
  // remove: (ref: string) => {};
};

export default function CardHoldersTable({history, data}: CardHoldersTableProps) {
  return (
    <MaterialTable
      options={{
        actionsColumnIndex: -1,
        search: false
      }}
      actions={[
        // {
        //   icon: "edit",
        //   tooltip: "Edit",
        //   onClick: (event, rowData) => history.push(`/cardholders/edit/${rowData.ref}`)
        // },
        // {
        //   icon: "delete",
        //   tooltip: "Remove",
        //   onClick: (event, rowData) => remove(rowData.ref)
        // },
        {
          icon: "add",
          tooltip: "Add",
          isFreeAction: true,
          onClick: (event) => history.push('/cardholders/new')
        },
      ]}
      columns={[
        {
          title: "name",
          field: "name",
          // render: (rowData) => (<Typography>{rowData.serial}</Typography>)
        },
        {
          title: "card_number",
          field: "card_number",
          // render: (rowData) => (<Typography>{rowData.name}</Typography>)
        },
      ]}
      data={data}
      title="CardHolders"
    />
  );
}
