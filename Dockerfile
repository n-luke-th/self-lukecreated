FROM debian:latest AS build-env

RUN apt-get update
# Install necessary dependencies for running Flutter on web
RUN apt-get install -y libxi6 libgtk-3-0 libxrender1 libxtst6 libxslt1.1 curl git wget unzip libgconf-2-4 gdb libstdc++6 libglu1-mesa fonts-droid-fallback lib32stdc++6 python3
RUN apt-get clean

RUN git clone https://github.com/flutter/flutter.git /usr/local/flutter

# Set Flutter path
ENV PATH="/usr/local/flutter/bin:/usr/local/flutter/bin/cache/dart-sdk/bin:${PATH}"

RUN flutter doctor -v
RUN flutter channel stable
RUN flutter upgrade

# Enable web support
RUN flutter config --enable-web

RUN mkdir /app/
COPY . /app/
# Set the working directory inside the container
WORKDIR /app/

# Build the Flutter web application
RUN cd serie3 && flutter build web

FROM nginx:1.27.4-alpine
COPY --from=build-env /app/serie3/build/web /usr/share/nginx/html

# EXPOSE <EXPOSE PORT THAT YOU WANT>
EXPOSE 8080
