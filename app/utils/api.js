import 'whatwg-fetch';

import {
  IPFS_PUBLIC_GATEWAY,
  INDEX_HASH
} from 'utils/constants';

function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  return response;

  /*
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  */
}

function getTunes() {
  return fetch(IPFS_PUBLIC_GATEWAY.concat(INDEX_HASH), {
    method: 'GET'
  })
    .then(checkStatus)
    .then(parseJSON);
}

function getTune(id) {
  return id;
}

function tuneSlug(tune) {
  return tune.title
    .replace(/[^a-zA-Z0-9\s\:]*/, '')
    .replace(/ /g, '-')
    .toLowerCase();
}

export const Tune = {
  get: getTune,
  list: getTunes,
  slug: tuneSlug,
};
