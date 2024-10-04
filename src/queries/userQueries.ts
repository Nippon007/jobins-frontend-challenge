import { useQuery } from 'react-query';
import { apiList } from '../store/apiDetails';
import performApiAction from '../helper/default-action';

const { userList } = apiList.general;
export const useUserList = (params?: { extra: boolean; name: string }) =>
  useQuery([userList.queryKeyName], () =>
    performApiAction<any>(userList, { params })
  );
