#!/bin/bash

version="4.0.1"
npm i
npm version $version
npm run build
npm publish

