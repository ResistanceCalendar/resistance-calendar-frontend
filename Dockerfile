FROM node:6.10

# Create app directory
WORKDIR /app/

# Install app dependencies
COPY * /app/

ENV NODE_ENV development
RUN yarn

EXPOSE 5050
CMD [ "yarn", "run", "build" ]

