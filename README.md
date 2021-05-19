## Intro

This project is a demo React project for the Red Light Crypto app.

A live demo version is available here: [https://i7a6t8kzhrxk.moralis.io/](https://i7a6t8kzhrxk.moralis.io/)

In order to use it, you must use _Metamask_ with _Binance Smart Chain - Testnet_

## TestRLC

In order to demo the app, I created a _TestRLC_ ERC20 token on the _Binance Smart Chain - Testnet_. The contract address is `0x9B0d8B7114231518B885EAd7826e639F86ca135F`. The contract allows the user to set the balance of _TestRLC_ for any address.

## Pages

### Home page

The _Home_ page is a standard landing page and does not require the user to be connected, but presents the menu and connect button to allow the user to connect with _Metamask_.

Once the user is connected to the _Binance Smart Chain - Testnet_, the homepage will display relevant informations such as the current account address and the TestRLC token balance. A button is also added to set the current account's TestRLC token balance. This will communicate with the smart contract and replace the current amount of TestRLC for that account. The total supply of tokens for the contract is adjusted at the same time.

### Restricted page

In order to access the _Restrcited_ page, the user needs to have a minimum of 100 RLC at their address. If they have access, _Access granted!_ message is displayed. Otherwise, an instruction message will be displayed.

## Other features

Not a big deal, but you can switch color theme from light to dark, like everywhere else...
