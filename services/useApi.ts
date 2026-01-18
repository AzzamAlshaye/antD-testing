import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import queryString from 'qs';
import { handleApiError } from '@utils';

const handleHtmlError = ({
  error,
  keyword,
  selector,
  removeSelector,
  errorMessage,
}: {
  error: AxiosError;
  keyword: string;
  selector?: string;
  removeSelector?: string;
  errorMessage?: string;
}) => {
  if (
    error.response?.headers['content-type']?.includes('text/html') &&
    (error.response?.data as string)?.toLowerCase().includes(keyword)
  ) {
    const doc = new DOMParser().parseFromString(
      error.response.data as string,
      'text/html',
    );
    if (removeSelector) {
      const removeElement = doc.querySelector(removeSelector);
      removeElement?.remove();
    }
    let message;
    if (selector) {
      message = doc
        .querySelector(selector)
        ?.textContent?.replace(/\n/g, '') // remove new lines
        // remove multi spaces to one space to have one sentence
        .replace(/\s+/g, ' ');
    }
    if (errorMessage) message = errorMessage;
    if (message) alert(message);
  }
};

const options: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_BASE_URL,
  paramsSerializer: {
    serialize: (params) => {
      return queryString.stringify(params, {
        skipNulls: true,
        arrayFormat: 'comma',
      });
    },
  },
};

export const useApi = () => {
  const apiAxios = axios.create(options);
  // Add a request interceptor
  apiAxios.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    },
  );

  // Add a response interceptor
  apiAxios.interceptors.response.use(
    function (config) {
      // Any status code that lie within the range of 2xx cause this function to
      // trigger Do something with response data
      return config;
    },
    function (error: AxiosError) {
      // WAF
      // handleHtmlError(error, 'support id', 'body', 'a');
      handleHtmlError({
        error,
        keyword: 'support id',
        selector: 'body',
        removeSelector: 'a',
      });

      handleApiError(error);
      // Any status codes that falls outside the range of 2xx cause this
      // function to trigger Do something with response error
      return Promise.reject(error);
    },
  );

  return { apiAxios };
};
