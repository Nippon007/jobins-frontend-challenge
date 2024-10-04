import Axios, {
  AxiosRequestConfig,
  AxiosResponse,
  CancelTokenSource,
  Method,
} from 'axios';

import initApiRequest, { RequestParam } from '../services/api-request';
import { APIDetailType } from '../store/apiDetails';

enum STATUS_ENUM {
  INPROGRESS = 1,
  PENDING = 2,
  APPROVED = 3,
  REJECTED = 4,
  VERIFIED = 5,
  RE_APPLIED = 6,
  FINAL_SUBMISSION = 7,
  FINAL_REJECTION = 8,
}

export const modulePrefix = {
  masterData: 'master_data',
};

export interface ResponseError {
  message: string;
  data?: any;
  status: boolean | number; // Change to accept both types
  response?: AxiosResponse;
  config?: AxiosRequestConfig;
  noconnection?: boolean;
  isAxiosError?: boolean;
  logout?: boolean;
}

export interface BasicResponse {
  description: string;
  servedBy: string;
  status: number;
  success: boolean;
}

export interface StatusType {
  id: STATUS_ENUM;
  status: string;
  status_np: string;
}

function sanitizeController(
  apiDetail: APIDetailType,
  pathVariables?: { [key: string]: Primitive }
) {
  return pathVariables && Object.keys(pathVariables).length
    ? {
        ...apiDetail,
        controllerName: Object.entries(pathVariables).reduce(
          (acc, [key, value]) =>
            (acc = acc.replace(`{${key}}`, value?.toString())),
          apiDetail.controllerName
        ),
      }
    : apiDetail;
}

export interface APIRequestDetail {
  requestData?: RequestDataType;
  requestMethod?: Method;
  pathVariables?: { [key: string]: Primitive };
  params?: RequestParam;
  cancelSource?: CancelTokenSource;
  disableSuccessToast?: boolean;
  disableFailureToast?: boolean;
  enableSuccessToast?: boolean;
  initialAuthToken?: string;
}

export interface CustomResponse<TData = unknown>
  extends AxiosResponse<TData, any> {
  message: string;
  status: number;
  noconnection: boolean;
  isAxiosError: boolean;
}

export interface CommonArrayResponseTypes<T> {
  description?: string;
  servedBy?: string;
  status?: number;
  success?: boolean;
  data: {
    hasNext?: boolean;
    records: T;
    totalPages: number;
    totalRecords: number;
  };
}

export interface ArrayResponseTypes<T> {
  description?: string;
  servedBy?: string;
  status?: number;
  success?: boolean;
  data: {
    next?: null | number;
    records: T;
    previous?: null | number;
    count?: number;
  };
}

export interface PaginatedParams {
  page_size?: number | string;
  page?: number | string;
  escape_pg?: boolean;
}

export type APIResponseDetail<TData = unknown> = Promise<CustomResponse<TData>>;

const axiosCancelSource = Axios.CancelToken.source();

export default async function performApiAction<TData = unknown>(
  apiDetails: APIDetailType,
  apiRequestDetails: APIRequestDetail = {}
): Promise<CustomResponse<TData>> {
  const {
    requestData,
    requestMethod,
    pathVariables,
    params,
    cancelSource,
    disableSuccessToast = false,
    enableSuccessToast = false,
    initialAuthToken,
  } = apiRequestDetails;

  const sanitizedApiDetails = sanitizeController(apiDetails, pathVariables);

  let responseData: CustomResponse<TData> | undefined;

  try {
    const axiosResponse: AxiosResponse<TData> = await initApiRequest<TData>(
      sanitizedApiDetails,
      requestData,
      requestMethod || sanitizedApiDetails.requestMethod || 'GET',
      params,
      cancelSource || axiosCancelSource,
      initialAuthToken
    );

    // Construct your CustomResponse from the AxiosResponse
    responseData = {
      ...axiosResponse,
      message: 'Success', // Customize this as needed
      noconnection: false, // Or set this based on your logic
      isAxiosError: false, // Set based on your error handling logic
    };

    if (enableSuccessToast) {
      // Show success toast
    }

    if (!disableSuccessToast && !['GET'].includes(requestMethod || '')) {
      // Show success toast
    }
  } catch (error) {
    let errorResponseData: ResponseError = {
      message: 'An error occurred',
      status: false,
      noconnection: false,
      isAxiosError: false,
      data: {},
    };

    if (Axios.isAxiosError(error)) {
      errorResponseData = {
        ...errorResponseData,
        ...error.response,
        isAxiosError: true,
        message: error.message,
      };

      if (error.response?.status === 401) {
        // Handle unauthorized access
      }
    } else if (error instanceof Error) {
      errorResponseData.message = error.message;
    }

    // Handle specific error codes
    if (errorResponseData.response?.status === 413) {
      // Handle payload too large
    }

    // Handle connection issues
    if (errorResponseData.noconnection) {
      // Handle no connection
    }

    throw new Error(errorResponseData.message);
  }

  return responseData as CustomResponse<TData>;
}