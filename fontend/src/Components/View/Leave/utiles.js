import {isNullUndefinedEmpty} from "../../../HelperFunction";

export const LEAVE_TABLE = () => [
    {
        id: `index`,
        label: `Index`,
        sortable: true,
        searchable: true,
        adminView: true,
        userView: true,
    },
    {
        id: `user`,
        label: `User`,
        sortable: true,
        searchable: true,
        adminView: true,
        userView: false,
    },
    {
        id: `createDate`,
        label: `Application Date`,
        sortable: true,
        searchable: true,
        adminView: true,
        userView: true,
    },
    {
        id: `startingDate`,
        label: `Starting Date`,
        sortable: true,
        searchable: true,
        adminView: true,
        userView: true,
    },
    {
        id: `endingDate`,
        label: `Ending Date`,
        sortable: true,
        searchable: true,
        adminView: true,
        userView: true,
    },
    {
        id: `type`,
        label: `Type`,
        sortable: true,
        searchable: true,
        adminView: true,
        userView: true,
    },
    {
        id: `description`,
        label: `Description`,
        sortable: true,
        searchable: true,
        adminView: true,
        userView: true,
    },
    {
        id: `status`,
        label: `Status`,
        sortable: true,
        searchable: true,
        adminView: true,
        userView: true,
    },
];

export const getRows = (columns, data) => {
    return data.map((eachRowData, index) => {
        const row = [];
        columns.forEach(eachColumns => {
            const obj = {id: `${eachColumns.id}_${eachRowData.id}`};
            obj.value = eachColumns.id === `index` ? ++index : isNullUndefinedEmpty(eachRowData[eachColumns.id]) ? '' : eachRowData[eachColumns.id];
            row.push(obj);
        })
        return row;
    })
}