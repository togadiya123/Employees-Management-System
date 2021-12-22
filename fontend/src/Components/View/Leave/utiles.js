import {isNullUndefinedEmpty} from "../../../HelperFunction";
import moment from "moment";
import config from "../../../config";
import {AppRegistrationIcon, CancelScheduleSendIcon, FactCheckIcon, ThumbDownIcon} from "../../../HelperFunction/icons";

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
};

export const getLeaveInformationModalBodyFormData = ({
                                                         userFullName,
                                                         applicationDate,
                                                         startingDate,
                                                         endingDate,
                                                         description,
                                                         status,
                                                         type,
                                                         statusDescription
                                                     }) => [
    [{
        id: `fullName`,
        label: ``,
        leftSideLabel: `FullName : `,
        leftSideLabelVariant: `subtitle1`,
        leftSideLabelSx: {
            fontWeight: 550,
            minWidth: `160px`
        },
        type: `readOnly`,
        fieldType: `text`,
        validationType: ``,
        required: true,
        value: userFullName || '',
        size: `small`,
        fullWidth: true,
        helperText: ``,
        isValid: false,
        isInitialValue: true,
    }],
    [{
        id: `applicationDate`,
        label: ``,
        leftSideLabel: `Application Date :`,
        leftSideLabelVariant: `subtitle1`,
        leftSideLabelSx: {
            fontWeight: 550,
            minWidth: `160px`
        },
        type: `readOnly`,
        fieldType: `datetime-local`,
        fullWidth: false,
        validationType: ``,
        required: true,
        value: moment(applicationDate).format(config.REGULAR_DATE_FORMAT) || ``,
        size: 'small',
        helperText: ``,
        isValid: false,
        isInitialValue: true,
    }],
    [{
        id: `startingDate`,
        label: ``,
        leftSideLabel: `Starting Date : `,
        leftSideLabelVariant: `subtitle1`,
        leftSideLabelSx: {
            fontWeight: 550,
            minWidth: `160px`
        },
        type: `readOnly`,
        fieldType: `datetime-local`,
        fullWidth: false,
        validationType: ``,
        required: true,
        value: moment(startingDate).format(config.REGULAR_DATE_FORMAT) || ``,
        size: 'small',
        helperText: ``,
        isValid: false,
        isInitialValue: true,
    }],
    [{
        id: `endingDate`,
        label: ``,
        leftSideLabel: `Ending Date :`,
        leftSideLabelVariant: `subtitle1`,
        leftSideLabelSx: {
            fontWeight: 550,
            minWidth: `160px`
        },
        type: `readOnly`,
        fieldType: `datetime-local`,
        fullWidth: false,
        validationType: ``,
        required: true,
        value: moment(endingDate).format(config.REGULAR_DATE_FORMAT) || ``,
        size: 'small',
        helperText: ``,
        isValid: false,
        isInitialValue: true,
    }],
    [{
        id: `type`,
        label: ``,
        leftSideLabel: `Type : `,
        leftSideLabelVariant: `subtitle1`,
        leftSideLabelSx: {
            fontWeight: 550,
            minWidth: `160px`
        },
        type: `readOnly`,
        fieldType: `text`,
        validationType: ``,
        required: true,
        value: type || '',
        size: `small`,
        fullWidth: true,
        helperText: ``,
        isValid: false,
        isInitialValue: true,
    }],
    [{
        id: `description`,
        label: ``,
        leftSideLabel: `Description : `,
        leftSideLabelVariant: `subtitle1`,
        leftSideLabelSx: {
            fontWeight: 550,
            minWidth: `160px`
        },
        type: `readOnly`,
        fieldType: `text`,
        validationType: ``,
        required: true,
        value: description || '',
        size: `small`,
        fullWidth: true,
        helperText: ``,
        isValid: false,
        isInitialValue: true,
    }],
    [{
        id: `status`,
        label: ``,
        leftSideLabel: `Status : `,
        leftSideLabelVariant: `subtitle1`,
        leftSideLabelSx: {
            fontWeight: 550,
            minWidth: `160px`
        },
        type: `readOnly`,
        fieldType: `text`,
        validationType: ``,
        required: true,
        value: status || '',
        size: `small`,
        fullWidth: true,
        helperText: ``,
        isValid: false,
        isInitialValue: true,
    }],
    [{
        id: `statusDescription`,
        label: ``,
        leftSideLabel: `Status Description : `,
        leftSideLabelVariant: `subtitle1`,
        leftSideLabelSx: {
            fontWeight: 550,
            minWidth: `160px`
        },
        type: `readOnly`,
        fieldType: `text`,
        validationType: ``,
        required: true,
        value: statusDescription || '',
        size: `small`,
        fullWidth: true,
        helperText: ``,
        isValid: false,
        isInitialValue: true,
    }],
];

export const userEditOption = () => [`startingDate`, `endingDate`, `type`, `description`];

export const actionButton = ({
                                 status,
                                 startingDate,
                                 userType,
                                 onCancelHandler,
                                 onEditHandler,
                                 onRejectHandler,
                                 onApproveHandler
                             }) => [
    {
        id: `cancel`,
        label: `Cancel`,
        icon: <CancelScheduleSendIcon/>,
        color: `error`,
        onClick: onCancelHandler,
        showAbleValidation: [`Pending`].every(e => e === status) && [config.POSITION_TYPE_II].some(e => e === userType) && moment().diff(startingDate, "days") < -1
    },
    {
        id: `edit`,
        label: `Edit`,
        icon: <AppRegistrationIcon/>,
        color: `primary`,
        onClick: onEditHandler,
        showAbleValidation: [`Pending`].every(e => e === status) && [config.POSITION_TYPE_II].some(e => e === userType) && moment().diff(startingDate, "days") < -1
    },
    {
        id: `reject`,
        label: `Reject`,
        icon: <ThumbDownIcon/>,
        color: `error`,
        onClick: onRejectHandler,
        showAbleValidation: [`Pending`].every(e => e === status) && [config.POSITION_TYPE_I].some(e => e === userType) && moment().diff(startingDate, "days") < 1
    },
    {
        id: `approve`,
        label: `Approve`,
        icon: <FactCheckIcon/>,
        color: `success`,
        onClick: onApproveHandler,
        showAbleValidation: [`Pending`].every(e => e === status) && [config.POSITION_TYPE_I].some(e => e === userType) && moment().diff(startingDate, "days") < 1
    },
];