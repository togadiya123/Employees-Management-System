export const getFormattedResponse = (key, response)=>{
    return {
        key,
        message : response.message,
        technicalMessage: response.technicalMessage,
        statusCode : response.statusCode,
    };
};