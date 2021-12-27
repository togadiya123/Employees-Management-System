import {
    CancelScheduleSendIcon, DangerousIcon, FactCheckIcon, PlaylistAddCheckIcon, ThumbDownIcon
} from "../../../HelperFunction/icons";

export const LEAVE_ACTION_MODAL_BODY = (id, negativeOnClick, positiveOnClick, userName, leaveApplicationUserName) => {
    const list = [{
        id: `cancelLeave`,
        header: `Cancel Leave`,
        bodyText: `${userName}, Are you canceling your leave application!`,
        button: [{
            id: `close`, text: `Close`, buttonProps: {
                startIcon: <DangerousIcon/>, color: `primary`, variant: `contained`, onClick: negativeOnClick,
            },
        }, {
            id: `cancelApplication`, text: `Cancel`, buttonProps: {
                startIcon: <CancelScheduleSendIcon/>, color: `error`, variant: `contained`, onClick: positiveOnClick,
            },
        }]
    }, {
        id: `cancelLeaveEdit`,
        header: `Cancel Leave Edit`,
        bodyText: `${userName}, Don't you want to change your leave application!`,
        button: [{
            id: `close`, text: `Close`, buttonProps: {
                startIcon: <DangerousIcon/>, color: `primary`, variant: `contained`, onClick: negativeOnClick,
            },
        }, {
            id: `cancelApplication`, text: `Cancel`, buttonProps: {
                startIcon: <CancelScheduleSendIcon/>, color: `error`, variant: `contained`, onClick: positiveOnClick,
            },
        }]
    }, {
        id: `saveLeaveEdit`,
        header: `Save Leave Edit`,
        bodyText: `${userName}, You are adding some changes in your leave application!`,
        button: [{
            id: `close`, text: `Close`, buttonProps: {
                startIcon: <DangerousIcon/>, color: `primary`, variant: `contained`, onClick: negativeOnClick,
            },
        }, {
            id: `saveEdit`, text: `Save`, buttonProps: {
                startIcon: <PlaylistAddCheckIcon/>, color: `error`, variant: `contained`, onClick: positiveOnClick,
            },
        }]
    }, {
        id: `rejectLeaveApplication`,
        header: `Reject Leave Application`,
        bodyText: `${userName}, You are rejecting ${leaveApplicationUserName}'s leave application!`,
        button: [{
            id: `close`, text: `Close`, buttonProps: {
                startIcon: <DangerousIcon/>, color: `primary`, variant: `contained`, onClick: negativeOnClick,
            },
        }, {
            id: `reject`, text: `Reject`, buttonProps: {
                startIcon: <ThumbDownIcon/>, color: `error`, variant: `contained`, onClick: positiveOnClick,
            },
        }]
    }, {
        id: `approveLeaveApplication`,
        header: `Approve Leave Application`,
        bodyText: `${userName}, You are approving ${leaveApplicationUserName}'s leave application!`,
        button: [{
            id: `close`, text: `Close`, buttonProps: {
                startIcon: <DangerousIcon/>, color: `primary`, variant: `contained`, onClick: negativeOnClick,
            },
        }, {
            id: `approve`, text: `Approve`, buttonProps: {
                startIcon: <FactCheckIcon/>, color: `error`, variant: `contained`, onClick: positiveOnClick,
            },
        }]
    },]

    return list.find(e => e.id === id);
}