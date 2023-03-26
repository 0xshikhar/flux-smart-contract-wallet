# Flux Wallet : 2FA Account Abstraction with Social Recovery

Flux Wallet is built with the aim of providing better security to user in a decentralized way.
We are enabling users to authenticate transactions with a second layer of security while maintaining privacy. Users have to provide a second factor in the form of a pin generated on google authenticator to validate a transaction. Two-factor authentication is done by providing a Zero Knowledge Proof-based two-factor authentication system. The advantage of using ZKP is that we can proof of our identity without revealing the secret information we have (here, secret info is OTP) to the verifier system. We can prove that we know the information, and verification of the proof takes place on the chain.
