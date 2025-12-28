# Use lightweight nginx image
FROM nginx:alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy Flutter web build files
COPY serie3/deployment/web /usr/share/nginx/html

# Expose http port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]