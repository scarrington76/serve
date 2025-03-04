FROM node:18-alpine3.21 AS JS_BUILD
COPY webapp /webapp
WORKDIR /webapp
RUN npm install && npm run build

FROM golang:1.23.4-alpine3.21 AS GO_BUILD
COPY server /server
WORKDIR /server
RUN go build -o /go/bin/server

FROM alpine:3.21
COPY --from=JS_BUILD /webapp/build* ./webapp/
COPY --from=GO_BUILD /go/bin/server ./
CMD ./server
