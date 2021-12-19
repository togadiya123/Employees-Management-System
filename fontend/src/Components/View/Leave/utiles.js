import {isNullUndefinedEmpty} from "../../../HelperFunction";
import moment from "moment";

export const LEAVE_TABLE = () => [
    {
        id: `index`,
        label: `Index`,
        type: `number`,
        sortable: true,
        searchable: true,
        adminView: true,
        userView: true,
    },
    {
        id: `user`,
        label: `User`,
        type: `string`,
        sortable: true,
        searchable: true,
        adminView: true,
        userView: false,
    },
    {
        id: `applicationDate`,
        label: `Application Date`,
        type: `date`,
        sortable: true,
        searchable: true,
        adminView: true,
        userView: true,
    },
    {
        id: `startingDate`,
        label: `Starting Date`,
        type: `date`,
        sortable: true,
        searchable: true,
        adminView: true,
        userView: true,
    },
    {
        id: `endingDate`,
        label: `Ending Date`,
        type: `date`,
        sortable: true,
        searchable: true,
        adminView: true,
        userView: true,
    },
    {
        id: `type`,
        label: `Type`,
        type: `string`,
        sortable: true,
        searchable: true,
        adminView: true,
        userView: true,
    },
    {
        id: `description`,
        label: `Description`,
        type: `string`,
        sortable: true,
        searchable: true,
        adminView: true,
        userView: true,
    },
    {
        id: `status`,
        label: `Status`,
        type: `chip`,
        sortable: true,
        searchable: true,
        adminView: true,
        userView: true,
    },
    {
        id: `action`,
        label: `Action`,
        type: `button`,
        sortable: true,
        searchable: true,
        adminView: true,
        userView: true,
    },
];

export const getRows = (columns, data, actionCallBack = () => '') => {
    return data.map((eachRowData, index) => {
        const row = [];
        columns.forEach(eachColumns => {
            const obj = {id: `${eachColumns.id}_${eachRowData.id}`};
            obj.value =
                eachColumns.id === `index` ?
                    ++index :
                    eachColumns.id === `user` ?
                        eachRowData.userFullName || `` :
                        eachColumns.id === `action` ?
                            actionCallBack(eachRowData) :
                            isNullUndefinedEmpty(eachRowData[eachColumns.id]) ?
                                '' :
                                eachColumns.type === `date` ?
                                    moment(eachRowData[eachColumns.id]).format(`DD/MM/YYYY`) :
                                    eachRowData[eachColumns.id];
            obj.align = (eachColumns.type === `date` || eachColumns.type === `number`) ? `right` : `left`;
            obj.type = eachColumns.type;
            if (eachColumns.id === `status`) {
                obj.value === `Pending` && (obj.color = `info`)
                obj.value === `Approve` && (obj.color = `success`)
                obj.value === `Reject` && (obj.color = `error`)
            }
            row.push(obj);
        })
        return row;
    })
}