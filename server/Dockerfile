FROM golang:alpine3.14

WORKDIR /server

COPY . ./

RUN go build -o /go-demoapp

CMD ["/go-demoapp" ]

EXPOSE 4001