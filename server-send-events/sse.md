# SERVER-SEND-EVENTS: Backend Communication pattern

>One request, very very long response ⌛

## CONCEPT
- A client sends a request and gets a very very..... `long Response` that has no end.
- Client `parses` the response and finds the appropriate events hidden in the response.

## 🤔What is Server-Send-Events
- A response has a start and end
- Client sends a request
- Server sends logical events as part of a response
- Server never writes the end of the response
- It is still a request but an unending response
- Client parses the stream data looking for events
- Works with both request/response and (HTTP)

