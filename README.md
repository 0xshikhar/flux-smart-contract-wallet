# Flux Wallet

Flux Wallet is a customized Smart Contract Wallet based on ERC-4337 standard.Flux Wallet is improving Web3 wallet UX and aim to bring next wave of Web3 users securely.

### Features -

- **Security**: **2FA (factor authenciation)** feature using **Google Authenticator** which makes Flux wallet more secure than any traditional wallet
- **Recovery Management:** Flux wallet has **Social Recovery** management option so you can recover your wallet with help of your friends.
- **User-friendly interface**: The user interface of Flux Wallet is intuitive and easy to use, making it accessible to both novice and experienced users. It is very to use for any web users to use it like a **Google account**
- **Decentralization**: Flux Wallet is fully based on smart contract implementing ERC4337 at its core and for 2FA, we are using **Zero Knowledge proofs** to verify user **OTP** which make it even more secure.
- **Customization:** It can be customized according to user needs.
- **Push notifications:** User will recieve push notifications(using **Push Protocol**) whenever there is any activity on their wallet such as receiving or sending payments. (will be implemented soon)

## Smart Contracts

**Ethereum Goerli Testnet**
Blockchain Explorer Link - https://goerli.etherscan.io/address/0x33a15964328a3419ec55f6192fccb81a3e3861e2#code

```
entryPoint:"0xB890B15AF9bF4edcE2d39D5Ef321D33d876f8378”,
 fluxWalletFactory: '0x33a15964328a3419ec55f6192fccb81a3e3861e2',
  sampleRecipient: '0x1DB39c988920E6662e711EFeFE5e48aA320c89Bb',
  signerAddress: '0xdeaa150597535Eed8c95Ad090757815F1B9Da15d’,
  otpFactoryContract: '0x8bE7560eEb4fF64aB2914ffa573A38f003d9E739',
verifierContract : "0xAA8De56927542E7Af85AE3F68Fb69594E7cF8613"

```

**Gnosis Chiodo Testnet**

```
  entryPoint: '0xf3E04ec30d589cF4Ec62CEc425FC0d1D6DA3596B'
  walletFactory: '0x33a15964328a3419ec55f6192fccb81a3e3861e2',
  sampleRecipient: '0xBf74142818c2e5E42F7f7349a1Af02a1Dcd5814D',
  signerAddress: '0xdeaa150597535Eed8c95Ad090757815F1B9Da15d'
otpFactory: "0x72c186Fbff451a87E2b538219BC6Ffefd19F7aEA"
verifierContract : "0x2cDc47369bb86C05198Ea2CFF8c548b73b919Bb1"
```

**Sepolia Testnet**
Blockchain Explorer link - https://sepolia.etherscan.io/address/0x33a15964328a3419ec55f6192fccb81a3e3861e2#code

```
"entryPoint":"0x43ccc7277E12d6dD3363B9897e0cf5BB22e93735","fluxWalletFactory":"0xfaf2900c2063573f2faa347d0f5e735f403eb66a","sampleRecipient":"0x72c186Fbff451a87E2b538219BC6Ffefd19F7aEA","signerAddress":"0xdeaa150597535Eed8c95Ad090757815F1B9Da15d"
```

### Screenshots of the current Web App

**Main Dashboard Page**
![Image](/image/flux-1.png)

**Connecting Wallet**
![Image](/image/flux-6.png)

**Deploying Flux Wallet Smart Contract**
![Image](/image/flux-deploy.png)

**Setting Up 2FA using Zero Knowledge**
![Image](/image/flux-2fa.png)

**Make Transaction With 2FA**
![Image](/image/flux-send-txn.png)

**Guardian Setup**
![Image](/image/flux-2.png)

**Social Recovery Dashboard**
![Image](/image/flux-3.png)
**Start Flux Wallet Recovery**
![Image](/image/flux-4.png)

**Page**
![Image](/image)

### The Problems It Solves

- Non Custodial wallets in Blockchain are not easy to use for lots of Web2 people.
- Billions of dollars have been lost from hot wallets every year and there is no way a user can recover the amount.
- Lots of users' wallets got compromised in making a transaction and interacting with suspicious websites.
- On the other hand, cold wallets are hard to use for any new user and manage.
- 60%+ web3 users fear that their wallet will be compromised.
- Everyone can not get cold wallets as users will need to buy them for around $50 to $200.
- Users usually keep around 20% of their portfolio on web-based wallets because they don’t find them safe.
- Traditional wallets dont have customized features that users want due to nature of tradional wallets

## Tech Stack & Tools

- Next.js as a frontend framework
- TailwindCSS for CSS design
- ERC 4337 Standard Implementation
- Circom for Arthematic circuits implemation
- Snark.js for implementing Zero Knowledge Proof
- ENS for user profiles names
- Ethereum Goerli Testnet (for development purposes)
- Hardhat for Smart Contract Testing
- Solidity for writing smart contract

```

```
