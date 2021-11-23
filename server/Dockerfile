FROM golang:alpine3.14 AS builder

WORKDIR /server

COPY . ./

RUN go build -o /go-demoapp

FROM alpine:3.14

COPY --from=builder /go-demoapp /app/go-demoapp

EXPOSE 4001

CMD ["/app/go-demoapp"]