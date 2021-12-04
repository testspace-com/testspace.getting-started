function handler(payload) {

    console.log("SETUP Handler running ..");
    console.log("Payload: ", payload.a, payload.b);
}

handler(JSON.parse(process.env.IN_PAYLOAD));
