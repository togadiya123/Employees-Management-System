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
        technicalMessage: `Token not provided in header, Pass the token with 'x-access-token' or 'authorization' key in header.`,
        message: `Token not provided in header.`,
    },
    {
        value: `invalid token`,
        statusCode: 403,
        technicalMessage: `Provided token is not valid.`,
        message: `Provided token is not valid.`,
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
        message: `Successfully Passed User Information.`,
    },
];

const deleteUnnecessaryValue = (data) => {
    data = JSON.parse(JSON.stringify(data));
    if (data) {
        data._id && delete data._id;
        data.tokens && delete data.tokens;
        data.password && delete data.password;
        data.createdAt && delete data.createdAt;
        data.updatedAt && delete data.updatedAt;
        data.__v && delete data["__v"];
    }
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