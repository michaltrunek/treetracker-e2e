# use node and chrome preinstall image
FROM buildkite/puppeteer as dependency
WORKDIR /usr/source
COPY package.json package-lock.json .npmrc ./
RUN npm ci --silent

FROM dependency 
WORKDIR /usr/source
COPY . .
# set default test run environment vars
ENV testFilter='./tests/**/*Test.js' environment=prod GREP=@test workers=5 slackChannel='#regression'
ENTRYPOINT testFilter=$testFilter environment=$environment slackChannel=$slackChannel ./node_modules/codeceptjs/bin/codecept.js run-workers --suites $workers --grep $GREP