import { eventName, eventCategory, eventLabel } from '../constants/analytics';

const eventTracker = (eventAction) => {
  console.log(
    `EventTracker action "${eventAction}" valid status = `,
    Array.isArray(window.dataLayer)
  ); // TODO: remove after testing

  if (Array.isArray(window.dataLayer))
    dataLayer.push({
      event: eventName,
      eventCategory,
      eventAction,
      eventLabel,
    });
};

export { eventTracker };
