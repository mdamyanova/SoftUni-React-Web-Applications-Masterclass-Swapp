let subscriptions = {
    loginUser: [],
    notification: []
};

export default {
    events: {
        loginUser: "loginUser",
        notification: "notification"
    },
    subscribe: (eventName, func) => subscriptions[eventName].push(func),
    trigger: (eventName, data) =>
        subscriptions[eventName].forEach(func => func(data))
};