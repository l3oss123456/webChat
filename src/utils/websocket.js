const client = new WebSocket(process.env.REACT_APP_WEBSOCKET_URL);

client.onopen = () => {
  //   console.log("Websocket Connected");
};
client.onerror = () => {
  //   console.log("Websocket Connection Error");
};
client.onmessage = (e) => {
  // setWebSocketData(e.data);
};
export default client;
