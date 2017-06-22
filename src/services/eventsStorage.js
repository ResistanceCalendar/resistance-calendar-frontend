// Naive cache to store events and event pagination data between page transitions
const eventsStorage = {
  events: [],
  hasMoreEvents: null,
  currentPage: null,
  expirationTimestamp: null
};

function setEventsStorage({ events, hasMoreEvents, currentPage }) {
  eventsStorage = {
    events,
    hasMoreEvents,
    currentPage,
    expirationTimestamp: Date.now()
  };
}

function getEventsStorage() {
  const millisecondsInTenMinutes = 600000;

  // Check to see if cache was ever set before, and if it is still valid
  if (eventsStorage.expirationTimestamp && (Date.now() - eventsStorage.expirationTimestamp < millisecondsInTenMinutes)) {
    return eventsStorage;
  }

  return clearCache();
}

function clearCache() {
  eventsStorage = {
    events: [],
    hasMoreEvents: null,
    currentPage: null,
    expirationTimestamp: null
  };

  return eventsStorage;
}

export default {
  setEventsStorage,
  getEventsStorage,
  clearCache
};
