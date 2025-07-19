# Decentralized Voting DApp

This is a secure, tamper-proof voting application built on the Ethereum blockchain. It uses a Solidity smart contract for the backend logic and a Vite-based vanilla JavaScript application for the frontend.

## Project Structure

-   `/contracts-truffle`: The Truffle project containing the Solidity smart contract.
-   `/frontend-vite`: The Vite project for the user interface.

## How to Run

### Prerequisites

-   Node.js & npm
-   Truffle (`npm install -g truffle`)
-   Ganache (or other local blockchain)

### 1. Backend Setup (Smart Contract)

1.  Navigate to the contract directory:
    `cd contracts-truffle`
2.  Install dependencies:
    `npm install` (if you have a package.json, otherwise skip)
3.  Start your local blockchain (Ganache).
4.  Deploy the contract:
    `truffle migrate --network development`
5.  Copy the deployed contract address and the ABI from `build/contracts/Voting.json`.

### 2. Frontend Setup

1.  Navigate to the frontend directory:
    `cd ../frontend-vite`
2.  Install dependencies:
    `npm install`
3.  Paste the contract address and ABI into `main.js`.
4.  Run the development server:
    `npm run dev`
5.  Open the provided localhost URL in your browser.
