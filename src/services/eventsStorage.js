// Naive cache to store events and event pagination data between page transitions
let eventsStorage = {
  events: [],
  hasMoreEvents: null,
  currentPage: null,
  expirationTimestamp: null,
  scrollPosY: 0
};

function setEventsStorage({ events, hasMoreEvents, currentPage }) {
  eventsStorage = {
    ...eventsStorage,
    events,
    hasMoreEvents,
    currentPage,
    expirationTimestamp: Date.now()
  };
}

function setScrollPos(scrollPosY) {
  eventsStorage = {
    ...eventsStorage,
    scrollPosY
  };
}

function clearCache() {
  eventsStorage = {
    events: [],
    hasMoreEvents: null,
    currentPage: null,
    expirationTimestamp: null,
    scrollPosY: 0
  };

  return eventsStorage;
}

function getEventsStorage() {
  const msInTenMinutes = 600000;

  // Check to see if cache was ever set before, and if it is still valid
  if (eventsStorage.expirationTimestamp && (Date.now() - eventsStorage.expirationTimestamp < msInTenMinutes)) {  // eslint-disable-line max-len
    return eventsStorage;
  }

  return clearCache();
}

export default {
  setEventsStorage,
  setScrollPos,
  getEventsStorage,
  clearCache
};
