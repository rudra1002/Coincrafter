# Coin Crafter

Coin Crafter is a decentralized application (DApp) that allows users to deploy their own MemeCoin tokens on the Ethereum blockchain and transfer them seamlessly. This platform simplifies the process of creating and interacting with custom ERC-20 tokens, utilizing Web3.js for Ethereum integration.

## Features

### 1. **Deploy MemeCoin**
   - **Purpose**: Allows users to create their own custom ERC-20 token.
   - **How it works**:
     - Users can specify the token’s **name**, **symbol**, and **initial supply**.
     - Once the inputs are provided, the user can click **Deploy MemeCoin** to deploy the contract on the Ethereum blockchain.
     - Upon successful deployment, the contract address is displayed for the user, which can be used for future interactions with the token.

### 2. **Transfer MemeCoins**
   - **Purpose**: Enables users to transfer MemeCoins to any Ethereum address.
   - **How it works**:
     - After deploying the MemeCoin token, users can enter a **recipient Ethereum address** and the **amount of coins** they wish to send.
     - The user clicks **Send MemeCoins**, and the transaction is initiated.
     - The transfer status is updated to inform the user about the success or failure of the transaction, along with the transaction hash for verification.

## Contract Details

- **Contract Address of the Coin Deployed using this Dapp**: `0xFE642bfd1Fa2c85B8eeb477a636052009B19d403`
- **Network**: Mantle Sepolia Testnet
## Deployment

- **Contract Address**: [View on Explorer](https://explorer.sepolia.mantle.xyz/address/0xFE642bfd1Fa2c85B8eeb477a636052009B19d403)
- **Coin Used**: MNT


## Technologies Used

- **Web3.js**: A JavaScript library for interacting with the Ethereum blockchain, used for connecting the front end to the Ethereum network, managing accounts, deploying contracts, and sending transactions.
- **Solidity**: The smart contract language used to write the ERC-20 contract for the MemeCoin.
- **Ethereum Network**: The public blockchain where the MemeCoin contract is deployed and where transactions take place.
- **MetaMask**: A browser extension that serves as a wallet and allows users to interact with the Ethereum network directly from the browser.

## Functionality Breakdown

### 1. **Deploying MemeCoin**

   **Function**: Deploys a new custom ERC-20 token contract.
   - **Parameters**:
     - **Coin Name**: The name of the coin, e.g., "MemeCoin".
     - **Coin Symbol**: The token symbol, e.g., "MEM".
     - **Initial Supply**: The initial number of tokens available, specified by the user (e.g., 100).
   - **Steps**:
     1. The user enters the necessary details: **Coin Name**, **Coin Symbol**, and **Initial Supply**.
     2. The user clicks the **Deploy MemeCoin** button.
     3. Web3.js interacts with MetaMask to request account access, then the contract is deployed using the provided details.
     4. The transaction is sent to the Ethereum network, and the contract is deployed.
     5. Once deployment is successful, the **Contract Address** is displayed, allowing the user to interact with their token.

### 2. **Transferring MemeCoins**

   **Function**: Transfers MemeCoins from the user’s wallet to a specified Ethereum address.
   - **Parameters**:
     - **Recipient Address**: The Ethereum address of the recipient.
     - **Amount to Send**: The amount of MemeCoins to send (in the contract’s token decimals).
   - **Steps**:
     1. After deploying the MemeCoin, the user enters the **Recipient Address** and the **Amount to Send**.
     2. The user clicks **Send MemeCoins** to initiate the transfer.
     3. Web3.js sends the transaction to the Ethereum network.
     4. If successful, a transaction hash is provided to the user for tracking the transaction.
     5. The **Transfer Status** is updated to indicate the success or failure of the transaction.

### 3. **Error Handling and User Feedback**

   Both the deployment and transfer functions include robust error handling:
   - **Wallet Connection Issues**: The app checks if the user’s Ethereum wallet (MetaMask) is connected and requests permission to access accounts.
   - **Missing Inputs**: If any of the required fields (like Coin Name, Coin Symbol, or Initial Supply) are left empty, the app alerts the user to complete the form.
   - **Deployment Errors**: Specific error messages are provided for common issues such as insufficient funds for gas, transaction rejections by the user, or Ethereum network errors.
   - **Transfer Errors**: Similar to the deployment function, transfer errors such as insufficient funds or rejected transactions are caught and displayed clearly.

## User Interface

The user interface is designed to be intuitive and easy to navigate:
1. **Deploy Your MemeCoin**:
   - Users can input the **name**, **symbol**, and **initial supply** of their token.
   - After entering the details, users click the **Deploy MemeCoin** button to deploy the token.
   - The **Contract Address** is displayed once the token is deployed.
   
2. **Transfer MemeCoin**:
   - After deploying the token, users can specify the **recipient address** and the **amount** of MemeCoins to send.
   - Clicking **Send MemeCoins** initiates the transfer, and the transfer status is updated accordingly.

3. **Status Updates**:
   - Throughout both processes, status messages are displayed to inform users of the progress:
     - **Deployment**: Messages like "Connecting wallet...", "Preparing deployment...", "Deploying contract...", and "Deployment successful!".
     - **Transfer**: Messages like "Sending MemeCoins...", "Transfer successful!", and the transaction hash.

## Features Under Development

- **Multi-token Support**: The ability to manage multiple token contracts at once.
- **Gas Optimization**: Enhancing transaction speeds and reducing gas costs for deployments and transfers.
- **Transaction History**: Implementing a feature to view past transfers directly within the DApp.
- **Enhanced UI**: A more polished and responsive design with advanced user interactions.