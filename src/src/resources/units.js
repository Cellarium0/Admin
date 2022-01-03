import * as React from "react";
import {
    List,
    Show,
    Create,
    Edit,
    Datagrid,
    TopToolbar,
    ListButton,
    EditButton,
    DeleteButton,
    TextField,
    TextInput,
    required,
    SimpleForm,
    SimpleShowLayout,
} from 'react-admin';

export const UnitList = props => (
    <List filters={[<TextInput source="search" label="Search" alwaysOn />]} {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="name" />
            <EditButton />
        </Datagrid>
    </List>
);

const UnitShowActions = ({ basePath, data, resource }) => (
    <TopToolbar>
        <ListButton basePath={basePath} record={data} />
        <EditButton basePath={basePath} record={data} />
        <DeleteButton basePath={basePath} record={data} />
    </TopToolbar>
);

export const UnitShow = props => (
    <Show actions={<UnitShowActions />} {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
        </SimpleShowLayout>
    </Show>
);

export const UnitCreate = props => (
    <Create {...props}>
        <SimpleForm redirect="show">
            <TextInput validate={required()} source="name" />
        </SimpleForm>
    </Create>
);

export const UnitEdit = props => (
    <Edit {...props}>
        <SimpleForm redirect="show">
            <TextInput disabled source="id" />
            <TextInput validate={required()} source="name" />
        </SimpleForm>
    </Edit>
);
