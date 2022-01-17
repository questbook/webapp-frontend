import amplitude from 'amplitude-js';

export const initAmplitude = () => {
  if (process.browser) {
    amplitude.getInstance().init(process.env.NEXT_PUBLIC_AMPLITUDE);
  }
};

export const setAmplitudeUserDevice = (installationToken) => {
  if (process.browser) {
    amplitude.getInstance().init(process.env.NEXT_PUBLIC_AMPLITUDE);
    amplitude.getInstance().setDeviceId(installationToken);
  }
};

export const setAmplitudeUserId = (userId) => {
  if (process.browser) {
    amplitude.getInstance().init(process.env.NEXT_PUBLIC_AMPLITUDE);
    amplitude.getInstance().setUserId(userId);
  }
};

export const setAmplitudeUserProperties = (properties) => {
  if (process.browser) {
    amplitude.getInstance().init(process.env.NEXT_PUBLIC_AMPLITUDE);
    amplitude.getInstance().setUserProperties(properties);
  }
};

export const sendAmplitudeData = (eventType, eventProperties) => {
  if (process.browser) {
    amplitude.getInstance().init(process.env.NEXT_PUBLIC_AMPLITUDE);
    amplitude.getInstance().logEvent(eventType, eventProperties);
  }
};
