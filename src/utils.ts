import { PubSub } from 'pubsub-js';

export const TOPIC = 'WINDOW_RESIZE';

export const publishResize = () => {
  PubSub.publish(TOPIC);
};
