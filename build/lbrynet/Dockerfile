FROM alpine:latest
EXPOSE 5279

RUN apk update && \
    apk add --no-cache \
    git curl

WORKDIR /app

#RUN git clone https://github.com/lbryio/docker-lbrynet .
RUN curl -OL "https://github.com/lbryio/lbry-sdk/releases/download/v0.113.0/lbrynet-linux.zip"
RUN unzip lbrynet-linux.zip
RUN rm lbrynet-linux.zip

RUN ls -la
#RUN mv lbrynet /usr/bin


COPY launcher.sh ./


ENTRYPOINT ["./lbrynet", "start"]
#CMD ["./lbrynet", "start"]
#CMD ["/usr/bin/lbrynet"]
#CMD ["./launcher.sh"]