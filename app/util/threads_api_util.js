import { getRequest } from './api_util';

const API_URL = 'https://a.4cdn.org/';
const BOARD_NAME = 'ck';

const THUMB_URL = 'https://t.4cdn.org/';
const IMAGE_URL = 'https://i.4cdn.org/';

// https://a.4cdn.org/board/catalog.json
export const fetchThreads = async (success) => {
  const response = await getRequest(`${API_URL}${BOARD_NAME}/catalog.json`);
  success(response);
};

// https://t.4cdn.org/board/tim.jpg
export const thumbSrc = thread => {
  return `${THUMB_URL}${BOARD_NAME}/${thread.tim}s.jpg`;
};

// https://i.4cdn.org/board/tim.ext
export const imageSrc = thread => {
  return `${IMAGE_URL}${BOARD_NAME}/${thread.tim}.${thread.ext}`;
};
