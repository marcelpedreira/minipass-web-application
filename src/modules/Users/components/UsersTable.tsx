import React from 'react'
import MaterialTable from "material-table";
import {User} from '../containers/UsersContainer'

interface UsersTableProps {
  history: any; 
  data: User[];
  // remove: (ref: string) => {};
};

export default function UsersTable({history, data}: UsersTableProps) {
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
        //   onClick: (event, rowData) => history.push(`/users/edit/${rowData.ref}`)
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
          onClick: (event) => history.push('/users/new')
        },
      ]}
      columns={[
        {
          title: "email",
          field: "email",
          // render: (rowData) => (<Typography>{rowData.serial}</Typography>)
        },
        {
          title: "role",
          field: "role",
          // render: (rowData) => (<Typography>{rowData.name}</Typography>)
        },
      ]}
      data={data}
      title="Users"
    />
  );
}
