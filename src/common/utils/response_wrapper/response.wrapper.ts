import { statusCode } from '../../interfaces/response_wrapper.interface';

export class ResponseWrapper {
    constructor() { }
    /**
    * @desc    Send any success response
    * @param   {string} message
    * @param   {object | array} data
    * @param   {number} code
    **/
    success(message: string, data: object | Array<any>, code: number) {
        return {
            message,
            error: false,
            code,
            data
        };
    }

    /**
    * @desc  Send any error response
    * @param   {string} message
     * @param   {number} statusCode
    */
    error(message: string, code: number) {
        return {
            message,
            code,
            error: true
        };
    };

    /**
     * @desc Send any validation response
     * @param   {object | array} errors
     */
    validation(errors: object | Array<any>) {
        return {
            message: "Validation errors",
            error: true,
            code: statusCode.DATA_NOT_VALID,
            errors
        };
    };
}
