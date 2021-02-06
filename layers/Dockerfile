FROM lambci/lambda:nodejs12.x

WORKDIR /usr/src/package/nodejs

ENV PATH=/var/lang/bin:$PATH \
    LD_LIBRARY_PATH=/var/lang/lib:$LD_LIBRARY_PATH \
    AWS_EXECUTION_ENV=AWS_Lambda_nodejs12.x \
    NODE_PATH=/opt/nodejs/node12/node_modules:/opt/nodejs/node_modules:/var/runtime/node_modules

# Copy files
COPY package.json /usr/src/nodejs/.

RUN npm install

# packaging
RUN rm /usr/src/package/node/code.zip; echo "deleting zip if exists"
RUN cd /usr/src/package/; zip -r9q ../code.zip .
RUN mv /usr/src/code.zip /usr/src/package/nodejs