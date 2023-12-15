#!/bin/bash

version="4.0.6"
npm i
git add .
git commit -m "update to version $version"
npm version $version
git push
sleep 10
npm run build
npm publish

