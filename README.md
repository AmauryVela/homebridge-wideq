# homebridge-wideq
A [Homebridge][] plugin for controlling/monitoring LG devices via their SmartThinQ platform, based on [WideQ][].

[homebridge]: https://github.com/nfarina/homebridge
[wideq]: https://github.com/NorDroN/wideq-js

Here's how to use this:

1. Install the homebridge-wideq plugin:

        $ npm install -g homebridge-wideq wideq

2. Get refresh token:

   Authenticate with the SmartThinQ service to get a refresh token by running the WideQ script (Eventually, I would like to add a feature to the Homebridge plugin that can let you log in through a UI, but I haven't gotten there yet.):

        $ wideq auth -c US -l en-US

   For the `-c` and `-l` parameters, use your country and language code: SmartThinQ accounts are associated with a specific locale, so be sure to use the country you originally created your account with.
   The script will ask you to open a browser, log in, and then paste the URL you're redirected to. It will then show `"Refresh token: [YOUR_TOKEN_HERE]"` and write a JSON file called `wideq_state.json`. Copy the value.

3. Add the plugin to your config.json:

        {
            "platform": "WideQ",
            "refresh_token": [YOUR_TOKEN_HERE],
            "country": "US",
            "language": "en-US",
            "debug": false,
            "interval": 10
        }

   Use your refresh token and country & language codes. If region and language are not provided, then 'US' and 'en-US' are default.

## Implementation Status

| *Device* | *Implementation* | *Status* | *Control* |
| --- | --- | --- | --- |
| AC | :heavy_check_mark: | :warning: needs testing | :warning: needs testing |
| Refrigerator | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Washer | :heavy_check_mark: | :warning: needs testing | :warning: needs testing |
