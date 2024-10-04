
import general from './general';

export enum RequestMethod {
  GET = 'GET',
  DELETE = 'DELETE',
  HEAD = 'HEAD',
  OPTIONS = 'OPTIONS',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  PURGE = 'PURGE',
  LINK = 'LINK',
  UNLINK = 'UNLINK'
}

export enum RequestBodyType {
  /**If request id in application/x-www-form-urlencoded as string*/
  QUERYSTRING = 'QUERY-STRING',
  /**If request is in formdata*/
  FORMDATA = 'FORM-DATA',
  /**If request requires Bearer*/
  AUTH = 'AUTH',
  /**If request is open*/
  NOAUTH = 'NO-AUTH',
  FILE = 'FILE'
}

/**
 * API detail with query keys associated with it
 */
export interface APIDetailType {
  /**Query Keys Action Name */
  queryKeyName: string;
  /**Request API URI */
  controllerName: string;
  /**Request Method; Defaults as GET */
  requestMethod?: RequestMethod;
  /**Request Body Type */
  requestBodyType?: RequestBodyType;
}

const apiDetails = {
  general: { ...general },
};

type ApiList = typeof apiDetails;

export const apiList: ApiList = apiDetails;
