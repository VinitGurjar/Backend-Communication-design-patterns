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

## 📸Demo screenshot of SSE

### Meta Data in network tab 👇
![1](https://github.com/VinitGurjar/Backend-Engineering/assets/97173586/491713d5-79b5-4a4a-800d-3bedc6077daf)

### After consoleing getting never-ending response👇
![2](https://github.com/VinitGurjar/Backend-Engineering/assets/97173586/211b5517-09e4-4a99-9ab7-6fd3eb9b1e83)

### Look the response is not completed yet👇
![3](https://github.com/VinitGurjar/Backend-Engineering/assets/97173586/e00fe7e2-f899-406e-94f6-bf8453667cd9)




