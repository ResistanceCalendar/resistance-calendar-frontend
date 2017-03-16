export default function (events) {
  return events._embedded['osdi:events'].map(event => ({
    ...event,
    uuid: event.identifiers[0]
  }));
}
