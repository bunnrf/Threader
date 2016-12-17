export const ThreadsConstants = {
  REQUEST_THREADS: "REQUEST_THREADS",
  RECEIVE_THREADS: "RECEIVE_THREADS",
  REQUEST_THREAD: "REQUEST_THREAD",
  RECEIVET_THREAD: "RECEIVET_THREAD",
}

export const ThreadsActions = {
  requestThreads: () => ({
    type: ThreadsConstants.REQUEST_THREADS,
  }),

  receiveThreads: threads => ({
    type: ThreadsConstants.RECEIVE_THREADS,
    threads,
  }),

  requestThread: threadId => ({
    type: ThreadConstants.REQUEST_THREAD,
    threadId,
  }),

  receiveThread: thread => ({
    type: ThreadConstants.RECEIVE_THREAD,
    thread,
  }),
};
