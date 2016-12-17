import { getRequest } from './api_util';

const API_URL = 'https://a.4cdn.org/';

export const fetchThreads = async (success) => {
  const response = await getRequest(`${API_URL}ck/catalog.json`);
  success(response);
};
