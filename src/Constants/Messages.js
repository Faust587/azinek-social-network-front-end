const SERVER_STATUSES = {
  OK: 'ok',
  ERROR: 'error',
};

const REQUEST_RESPONSES = {
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL',
  NO_RESPONSE: 'Failed to get response from server. Try again',
  UNABLE_TO_PROCESS: 'The server was unable to process the request',
};

module.exports = {
  REQUEST_RESPONSES,
  SERVER_STATUSES,
};
