#!/bin/bash

version="4.0.3"
npm i
npm version $version
git add .
git commit -m "update to version $version"
git push
npm run build
npm publish

