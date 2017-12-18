# react-messenger-plugin

Component wrapper for [Facebook Messenger checkbox plugin](https://developers.facebook.com/docs/messenger-platform/discovery/checkbox-plugin)

## Installation

```shell
npm install --save react-messenger-checkbox-plugin
```

## Usage

To use the Messenger Plugin, you will need an App Id and a Page Id. You can find create an app [here](https://developers.facebook.com/apps/) and you will find your page Id at the bottom of your Facebook page settings.

You can then use the plugin.

```jsx
var React = require("react");
var render = require("react-dom").render;
var MessengerPlugin = require("react-messenger-plugin");

render(
    <MessengerPlugin
      type="fb-messenger-checkbox"
      appId="<YOUR-APP-ID>"
      pageId="<YOUR-PAGE-ID>"
      prechecked="<true|false>"
      allow_login="<true|false>"
      onRef={ref => (<reference to function> = ref)}
    />,
    document.body
);
```

You can send payload to your server using

```js
    this.<reference>.send(`<PAYLOAD STRING>`);
```
### Notes
Expect a delay before the checkbox appears. This is mainly caused by the time required by the Facebook SDK to load and then the time for it to initialize. To reduce the delay, see the advance usage described below.

### Props
| Name | Type | Required? | Default | Description |
| --- | --- | ---- | --- | --- | --- |
| appId | string | yes | - | Your Facebook app id |
| pageId | string | yes | - | Your Facebook page id |


*Inspired by [react-messenger-plugin](https://github.com/lemieux/react-messenger-plugin)*
