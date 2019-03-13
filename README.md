# React Window Bigness 📏

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Build Status](https://travis-ci.org/iamjoshellis/react-window-bigness.svg?branch=master)](https://travis-ci.org/iamjoshellis/react-window-bigness)
[![npm](https://img.shields.io/npm/v/react-window-bigness.svg)](https://www.npmjs.com/package/react-window-bigness)
[![Netlify Status](https://api.netlify.com/api/v1/badges/374efa8a-4ed2-4e40-a95b-e4063bba1ab3/deploy-status)](https://app.netlify.com/sites/react-window-bigness/deploys)

Performantly pass window dimensions as props! 📐

## [Demo](https://react-window-bigness.netlify.com/)

## Render Props Usage:
```js
import * as React from 'react';
import { WindowSize } from 'react-window-bigness';

const MyComponent = () => (
  <WindowSize>
    {({ windowWidth, windowHeight }) => JSON.stringify({ windowWidth, windowHeight })}
  </WindowSize>
);

export default MyComponent;
```

## HOC Usage:
```js
import * as React from 'react';
import { withWindowSize } from 'react-window-bigness';

const MyComponent = ({ windowWidth, windowHeight }) => (
  JSON.stringify({ windowWidth, windowHeight })
);

export default withWindowSize(MyComponent);
```