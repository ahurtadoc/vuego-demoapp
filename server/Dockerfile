# Build stage to compilo go project -----------------------
FROM golang:alpine3.14 AS builder

WORKDIR /server

#copy files from host project to build container
COPY . ./

#compile go aplication
RUN go build -o /go-demoapp

# Run app in lightweight linux server -----------------------
FROM alpine:3.14

#get app built from previous stage
COPY --from=builder /go-demoapp /app/go-demoapp

# expose port 4001
EXPOSE 4001

#run app in container
CMD ["/app/go-demoapp"]