import * as React from "react";
import './users.css';
import {
    List, Datagrid, TextField, EmailField,
    Edit,
    SimpleForm,
    TextInput, Create, Filter, ReferenceInput, SelectInput, EditButton, ShowButton} from 'react-admin';

export const UserList = (props) => (
        <List filters={<UserFilter />} {...props}>
                    <Datagrid>
                        <TextField source="id" />
                        <TextField source="name" />
                        <EmailField source="email" />
                        <TextField source="phone" />
                        <TextField source="website" />
                        <TextField source="company.name"/>
                        <ShowButton/>
                        <EditButton/>
                    </Datagrid>
        </List>
);

export const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="username" />
            <TextInput source="email" />
            <TextInput source="address.street" label="Address" />
            <TextInput source="phone" />
            <TextInput source="website" />
            <TextInput source="company.name" label="Company" />
        </SimpleForm>
    </Edit>
);
export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="username" />
            <TextInput source="email" />
            <TextInput source="address.street" label="Address" />
            <TextInput source="phone" />
            <TextInput source="website" />
            <TextInput source="company.name" label="Company" />
        </SimpleForm>
    </Create>
);
const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);
