import { eventName, eventCategory, eventLabel } from '../constants/analytics';

const eventTracker = (eventAction) => {
  console.log(
    `EventTracker action [valid: ${typeof dataLayer === 'function'}] = `,
    eventAction
  ); // TODO: remove after testing
  if (typeof dataLayer === 'function')
    dataLayer.push({
      event: eventName,
      eventCategory,
      eventAction,
      eventLabel,
    });
};

export { eventTracker };
