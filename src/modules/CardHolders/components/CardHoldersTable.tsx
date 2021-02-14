import React from 'react'
import MaterialTable from "material-table";
import {CardHolder} from '../containers/CardHoldersContainer'

interface CardHoldersTableProps {
  history: any; 
  data: CardHolder[];
  remove: (id: string) => void;
};

export default function CardHoldersTable({history, data, remove}: CardHoldersTableProps) {
  return (
    <MaterialTable
      options={{
        actionsColumnIndex: -1,
        search: false
      }}
      actions={[
        rowData => ({
          icon: 'edit',
          tooltip: 'Edit',
          onClick: (event) => history.push(`/cardholders/edit/${rowData.id}`)
          // disabled: rowData.birthYear < 2000
        }),
        rowData => ({
          icon: 'delete',
          tooltip: 'Delete',
          onClick: (event) => remove(rowData.id),
          // disabled: rowData.birthYear < 2000
        }),
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
      title="Card Holders"
    />
  );
}
