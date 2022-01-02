import {isNullUndefinedEmpty} from "../../../HelperFunction";
import moment from "moment";
import config from "../../../config";
import {
    PlaylistAddCheckIcon,
    AppRegistrationIcon,
    CancelScheduleSendIcon,
    DangerousIcon,
    FactCheckIcon,
    ThumbDownIcon
} from "../../../HelperFunction/icons";
import {getObjArrayFromObjOfArrayOfArray} from "../../CommonComponents/Form/utiles";

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
                obj.value === `Approved` && (obj.color = `success`)
                obj.value === `Canceled` && (obj.color = `error`)
                obj.value === `Rejected` && (obj.color = `error`)
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
        isValid: true,
        isInitialValue: false,
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
        isValid: true,
        isInitialValue: false,
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
        validationType: `date`,
        required: true,
        value: moment(startingDate).format(config.REGULAR_DATE_FORMAT) || ``,
        minDate: moment().format(config.DEFAULT_DATE_FORMAT),
        maxDate: moment(endingDate).format(config.DEFAULT_DATE_FORMAT),
        size: 'small',
        helperText: ``,
        isValid: true,
        isInitialValue: false,
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
        validationType: `date`,
        required: true,
        value: moment(endingDate).format(config.REGULAR_DATE_FORMAT) || ``,
        minDate: moment(startingDate).format(config.DEFAULT_DATE_FORMAT),
        maxDate: moment().add(3, `month`).format(config.DEFAULT_DATE_FORMAT),
        size: 'small',
        helperText: ``,
        isValid: true,
        isInitialValue: false,
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
        fieldType: `select`,
        validationType: ``,
        required: true,
        value: type || '',
        option: [
            {
                id: `Privilege Leave`,
                label: `Privilege Leave`,
                value: `Privilege Leave`,
            },
            {
                id: `Sick Leave`,
                label: `Sick Leave`,
                value: `Sick Leave`,
            },
            {
                id: `Compensatory Leave`,
                label: `Compensatory Leave`,
                value: `Compensatory Leave`,
            },
            {
                id: `Less of pay Leave`,
                label: `Less of pay Leave`,
                value: `Less of pay Leave`,
            },
        ],
        size: `small`,
        fullWidth: true,
        helperText: ``,
        isValid: true,
        isInitialValue: false,
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
        validationType: `stringLength`,
        multiline: true,
        minChar: 10,
        maxChar: 120,
        required: true,
        value: description || '',
        size: `small`,
        fullWidth: true,
        helperText: ``,
        isValid: true,
        isInitialValue: false,
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
        isValid: true,
        isInitialValue: false,
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
        isValid: true,
        isInitialValue: false,
    }],
];

export const userEditOption = () => [
    {
        fieldId: `startingDate`,
        editType: `input`,
        dataKey: `startingDate`,
        format: (e) => moment(e, config.REGULAR_DATE_FORMAT).format(config.DEFAULT_DATE_FORMAT),
        dataKeyValueFormat: (e) => moment(e).format(config.DEFAULT_DATE_FORMAT),
    },
    {
        fieldId: `endingDate`,
        editType: `input`,
        dataKey: `endingDate`,
        format: (e) => moment(e, config.REGULAR_DATE_FORMAT).format(config.DEFAULT_DATE_FORMAT),
        dataKeyValueFormat: (e) => moment(e).format(config.DEFAULT_DATE_FORMAT),
    },
    {
        fieldId: `type`,
        editType: `input`,
        dataKey: `type`,
    },
    {
        fieldId: `description`,
        editType: `input`,
        dataKey: `description`,
    }];

export const setLeaveModalDataToEditForm = (formData) => {
    const data = JSON.parse(JSON.stringify(formData));
    return data.map(eachRow => eachRow.map(eachField => {
        const userFieldObject = (userEditOption() || []).find(obj => obj.fieldId === eachField.id)
        return userFieldObject ? {
            ...eachField,
            type: userFieldObject.editType,
            value: userFieldObject.format ? userFieldObject.format(eachField.value) : eachField.value
        } : eachField;
    }))
};

export const checkChangedDataValue = (formData, originalData) => {
    let obj = {isChanged: false, changedValue: [], formattedChangedValue: {}}
    getObjArrayFromObjOfArrayOfArray(formData).forEach(eachField => {
        const editObj = userEditOption().find(eachObj => eachObj.fieldId === eachField.id)
        if (editObj && eachField.value !== (editObj.dataKeyValueFormat ? editObj.dataKeyValueFormat(originalData[editObj.dataKey]) : originalData[editObj.dataKey])) {
            obj = {
                ...obj,
                isChanged: true,
                changedValue: [...obj.changedValue, {field: editObj.dataKey, value: eachField.value}],
                formattedChangedValue: {
                    ...obj.formattedChangedValue,
                    [editObj.dataKey]: eachField.value,
                }
            }
        }
    })
    return obj;
};

export const actionButton = ({
                                 status,
                                 startingDate,
                                 openActionMode,
                                 userType,
                                 onCancelHandler,
                                 onEditHandler,
                                 onEditCancelHandler,
                                 onEditSaveHandler,
                                 onRejectHandler,
                                 onApproveHandler
                             }) => [
    {
        id: `cancel`,
        label: `Cancel`,
        icon: <CancelScheduleSendIcon/>,
        color: `error`,
        onClick: onCancelHandler,
        showAbleValidation: openActionMode === `` && [`Pending`].every(e => e === status) && [config.POSITION_TYPE_II].some(e => e === userType) && moment().diff(startingDate, "days") < -1
    },
    {
        id: `edit`,
        label: `Edit`,
        icon: <AppRegistrationIcon/>,
        color: `primary`,
        onClick: onEditHandler,
        showAbleValidation: openActionMode === `` && [`Pending`].every(e => e === status) && [config.POSITION_TYPE_II].some(e => e === userType) && moment().diff(startingDate, "days") < -1
    },
    {
        id: `cancel`,
        label: `Cancel`,
        icon: <DangerousIcon/>,
        color: `error`,
        onClick: onEditCancelHandler,
        showAbleValidation: openActionMode === `edit`
    },
    {
        id: `save`,
        label: `Save`,
        icon: <PlaylistAddCheckIcon/>,
        color: `primary`,
        onClick: onEditSaveHandler,
        showAbleValidation: openActionMode === `edit`
    },
    {
        id: `reject`,
        label: `Reject`,
        icon: <ThumbDownIcon/>,
        color: `error`,
        onClick: onRejectHandler,
        showAbleValidation: openActionMode === `` && [`Pending`].every(e => e === status) && [config.POSITION_TYPE_I].some(e => e === userType) && moment().diff(startingDate, "days") < 1
    },
    {
        id: `approve`,
        label: `Approve`,
        icon: <FactCheckIcon/>,
        color: `success`,
        onClick: onApproveHandler,
        showAbleValidation: openActionMode === `` && [`Pending`].every(e => e === status) && [config.POSITION_TYPE_I].some(e => e === userType) && moment().diff(startingDate, "days") < 1
    },
];

export const minAndMaxDateSet = (data) => {
    data.forEach(eachRow => eachRow.forEach((eachField) => {
        if (eachField.id === `startingDate`) {
            eachField.minDate = moment().format(config.DEFAULT_DATE_FORMAT);
            eachField.maxDate = document.getElementById(`endingDate-input`)?.value;
        } else if (eachField.id === `endingDate`) {
            eachField.minDate = document.getElementById(`startingDate-input`)?.value;
        }
    }));
    return data;
};