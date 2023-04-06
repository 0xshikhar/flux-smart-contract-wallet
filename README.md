# Flux Wallet

Flux Wallet is a customized Smart Contract Wallet based on ERC-4337 standard.Flux Wallet is improving Web3 wallet UX and aim to bring next wave of Web3 users securely.

### Features -

- **Security**: **2FA (factor authenciation)** feature using **Google Authenticator** which makes Flux wallet more secure than any traditional wallet
- **Recovery Management:** Flux wallet has **Social Recovery** management option so you can recover your wallet with help of your friends.
- **User-friendly interface**: The user interface of Flux Wallet is intuitive and easy to use, making it accessible to both novice and experienced users. It is very to use for any web users to use it like a **Google account**
- **Decentralization**: Flux Wallet is fully based on smart contract implementing ERC4337 at its core and for 2FA, we are using **Zero Knowledge proofs** to verify user **OTP** which make it even more secure.
- **Customization:** It can be customized according to user needs.
- **Push notifications:** User will recieve push notifications(using **Push Protocol**) whenever there is any activity on their wallet such as receiving or sending payments. (will be implemented soon)

### Some Screenshots of the current Web App

**Main Dashboard Page**
![Image](/image/flux-1.png)

**Connecting Wallet**
![Image](/image/flux-6.png)

**Deploying Flux Wallet Contract**
[Image](/image/flux-deploy.png)

**2FA Setup Page**
[Image](/image/flux-2fa.png)

**Make Transaction With 2FA**
[Image](/image/flux-send-txn.png)

**Guardian Setup **
[Image](/image/flux-2.png)

**Social Recovery Dashboard**
[Image](/image/flux-3.png)
**Start Flux Wallet Recovery**
[Image](/image/flux-4.png)

**Page**
[Image](/image)

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
