let timeoutId;

const SESSION_TIMEOUT_MINUTES = 0.1;
const TIMEOUT_MS = SESSION_TIMEOUT_MINUTES * 60 * 1000;

export const startSessionTimer = (onTimeout) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
        onTimeout();
    }, TIMEOUT_MS);
};

export const resetSessionTimer = (onTimeout) => {
    startSessionTimer(onTimeout);
};

export const setupInactivityListeners = (onTimeout) => {
    const activityEvents = ['click', 'keydown', 'mousemove', 'scroll'];

    const activityHandler = () => resetSessionTimer(onTimeout);

    activityEvents.forEach((event) =>
        window.addEventListener(event, activityHandler)
    );

    startSessionTimer(onTimeout);

    return () => {
        clearTimeout(timeoutId);
        activityEvents.forEach((event) =>
            window.removeEventListener(event, activityHandler)
        );
    };
};
