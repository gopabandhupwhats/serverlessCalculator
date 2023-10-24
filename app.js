export const api = async (event, context) => {
    console.log("event",event)
    return event.number1 + event.number2
};
