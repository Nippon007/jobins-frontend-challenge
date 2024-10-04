import { RequestBodyType, RequestMethod } from '../request';

export const userList = '/api/jobins/users';

export const general = {
  userList: {
    controllerName: userList,
    queryKeyName: 'USER_LIST',
    requestBodyType: RequestBodyType.NOAUTH,
    requestMethod: RequestMethod.GET
  },
};
export default general;
