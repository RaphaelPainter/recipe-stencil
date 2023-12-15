#!/bin/bash

version="4.0.4"
npm i
npm version $version
git add .
git commit -m "update to version $version"
git push
sleep 10
npm run build
npm publish

