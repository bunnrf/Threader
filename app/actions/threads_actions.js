export const ThreadsConstants = {
  REQUEST_THREADS: "REQUEST_THREADS",
  RECEIVE_THREADS: "RECEIVE_THREADS",
}

export const ThreadsActions = {
  requestThreads: () => ({
    type: ThreadsConstants.REQUEST_THREADS,
  }),

  receiveThreads: threads => ({
    type: ThreadsConstants.RECEIVE_THREADS,
    threads,
  }),
};
