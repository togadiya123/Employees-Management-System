import {isNullUndefinedEmpty} from "./helperFunction.js";

const RESPONSE_LIST = [
    {
        value: `invalid email`,
        statusCode: 400,
        technicalMessage: `Email-Id isn't Registered.`,
        message: `Error : Email-Id not found.`,
    },
    {
        value: `invalid password`,
        statusCode: 400,
        technicalMessage: `Invalid Password.`,
        message: `Error : Invalid Password, You can try to Forget a Password.`,
    },
    {
        value: `invalid email or password`,
        statusCode: 400,
        technicalMessage: `Wrong Email-Id and Password`,
        message: `Error : Require valid Email-Id and Password.`,
    },
    {
        value: `login success`,
        statusCode: 200,
        technicalMessage: `User has been login successfully.`,
        message: `Login successfully`,
    },
    {
        value: `logout success`,
        statusCode: 200,
        technicalMessage: `User has been logout successfully.`,
        message: `Logout successfully`,
    },
    {
        value: `register success`,
        statusCode: 200,
        technicalMessage: `User has been registered successfully.`,
        message: `User has been registered successfully.`,
    },
    {
        value: `token missing`,
        statusCode: 403,
        technicalMessage: `Token not provided in header, Pass the token with 'authorization' key in header.`,
        message: `Token not provided in header.`,
    },
    {
        value: `invalid token`,
        statusCode: 403,
        technicalMessage: `Provided token is not valid.`,
        message: `Provided token is not valid.`,
    },
    {
        value: `invalid user request`,
        statusCode: 403,
        technicalMessage: `Request can not approve due to invalid user request.`,
        message: `Invalid user request.`,
    },
    {
        value: `invalid props`,
        statusCode: 403,
        technicalMessage: `Request can not approve due to invalid body data.`,
        message: `Invalid request.`,
    },
    {
        value: `user not found`,
        statusCode: 403,
        technicalMessage: `User not found, when try to get information of user by id in middleware.`,
        message: `User not found.`,
    },
    {
        value: `expired token`,
        statusCode: 403,
        technicalMessage: `Authentication is failed, Due to Token Expired.`,
        message: `Authentication is failed.`,
    },
    {
        value: `passed user info`,
        statusCode: 201,
        technicalMessage: `Successfully Passed User Information.`,
        message: `Successfully Get User Information.`,
    },
    {
        value: `succeeds apply to leave`,
        statusCode: 200,
        technicalMessage: `Successfully Created Leave Application.`,
        message: `Successfully Created Leave Application.`,
    },
    {
        value: `route not found`,
        statusCode: 404,
        technicalMessage: `Can not found given route.`,
        message: `route not found`
    },
    {
        value: `unauthorized`,
        statusCode: 400,
        technicalMessage: `Your request is unauthorized.`,
        message: `unauthorized request`
    },
    {
        value: `succeeds get to leavesList`,
        statusCode: 200,
        technicalMessage: `Successfully get Leave List.`,
        message: `Successfully get Leave List.`,
    },
    {
        value: `undefined leave application id`,
        statusCode: 400,
        technicalMessage: `Request not proceed due to undefined leave application id.`,
        message: `Pass the leave application id as "leaveApplicationId" key value in body.`,
    },
    {
        value: `successful`,
        statusCode: 200,
        technicalMessage: `Request approve successfully.`,
        message: `Request approve successfully.`
    }
];

const deleteUnnecessaryValue = (data) => {

    data = JSON.parse(JSON.stringify(data));
    (Array.isArray(data) ? data : [data]).forEach(eachDataObject => {
        if (eachDataObject) {
            !isNullUndefinedEmpty(eachDataObject.tokens) && delete eachDataObject.tokens;
            !isNullUndefinedEmpty(eachDataObject.password) && delete eachDataObject.password;
            !isNullUndefinedEmpty(eachDataObject.createdAt) && delete eachDataObject.createdAt;
            !isNullUndefinedEmpty(eachDataObject.updatedAt) && delete eachDataObject.updatedAt;
            !isNullUndefinedEmpty(eachDataObject.__v) && delete eachDataObject.__v;
        }
    });

    return data;
};

export default (value, res, data) => {
    let response = RESPONSE_LIST.find(eachResponse => eachResponse.value === value);
    if (!response)
        response = {value, statusCode: 400, technicalMessage: `Error : Error for ${value}`, message: value};

    const message = {
        technicalMessage: response.technicalMessage,
        message: response.message,
        statusCode: response.statusCode
    };
    return res.status(response.statusCode).send(data ? {data: deleteUnnecessaryValue(data), ...message} : message);
};