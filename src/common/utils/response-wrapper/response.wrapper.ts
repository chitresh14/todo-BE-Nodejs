import { statusCode } from '../../interfaces/response-wrapper.interface';

export class ResponseWrapper {
    constructor(){}
    /**
    * @desc    Send any success response
    * @param   {string} message
    * @param   {object | array} result
    * @param   {number} code
    **/
    success(message: string, result: object | Array<any>, code: number) {
        return {
            message,
            error: false,
            code,
            result
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
            code: code,
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
