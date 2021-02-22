FROM lambci/lambda:build-nodejs12.x

WORKDIR /layer

COPY package.json .

RUN npm install

RUN mkdir -p /layer/nodejs
RUN mv ./node_modules /layer/nodejs

RUN cd /layer; zip -r9q layer.zip nodejs
RUN ls /layer