// This import statement correctly loads the Ethers v6 library.
import { ethers } from "ethers";


// --- Smart Contract Configuration ---
const contractAddress = "0x2bd62B755128af9Db181B047Cc6BF28d2565b404";
const contractABI = [  {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "candidateId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "name": "CandidateAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "ElectionReset",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "enum Voting.VotingState",
          "name": "newState",
          "type": "uint8"
        }
      ],
      "name": "ElectionStateChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "voter",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "candidateId",
          "type": "uint256"
        }
      ],
      "name": "Voted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "voterAddress",
          "type": "address"
        }
      ],
      "name": "VoterWhitelisted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "VotesTallied",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "candidates",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "voteCount",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "candidatesCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "voterAddresses",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "voters",
      "outputs": [
        {
          "internalType": "bool",
          "name": "isWhitelisted",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "hasVoted",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "votedForCandidateId",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "votesHaveBeenTallied",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "votingState",
      "outputs": [
        {
          "internalType": "enum Voting.VotingState",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_aadhaarHash",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "_voterAddress",
          "type": "address"
        }
      ],
      "name": "whitelistAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        }
      ],
      "name": "addCandidate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "startVoting",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "endVoting",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "tallyVotes",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "resetElection",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_candidateId",
          "type": "uint256"
        }
      ],
      "name": "vote",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_candidateId",
          "type": "uint256"
        }
      ],
      "name": "getCandidate",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_voterAddress",
          "type": "address"
        }
      ],
      "name": "getVoterStatus",
      "outputs": [
        {
          "internalType": "bool",
          "name": "isWhitelisted",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "hasVoted",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    } ];

// --- Global State ---
 let provider;
let signer;
let contract;
let userAddress;

// --- DOM Elements ---
const connectWalletBtn = document.getElementById('connect-wallet-btn');
const userInfo = document.getElementById('user-info');
const userAddressEl = document.getElementById('user-address');
const connectionStatusEl = document.getElementById('connection-status');

const voterView = document.getElementById('voter-view');
const adminView = document.getElementById('admin-view');
const showVoterViewBtn = document.getElementById('show-voter-view-btn');
const showAdminViewBtn = document.getElementById('show-admin-view-btn');

const electionStatusPanel = document.getElementById('election-status-panel');
const electionStateText = document.getElementById('election-state-text');
const votingArea = document.getElementById('voting-area');
const resultsArea = document.getElementById('results-area');

const whitelistBtn = document.getElementById('whitelist-btn');
const addCandidateBtn = document.getElementById('add-candidate-btn');
const startVoteBtn = document.getElementById('start-vote-btn');
const endVoteBtn = document.getElementById('end-vote-btn');
const tallyVotesBtn = document.getElementById('tally-votes-btn');
const resetElectionBtn = document.getElementById('reset-election-btn');

const adminButtons = [whitelistBtn, addCandidateBtn, startVoteBtn, endVoteBtn, tallyVotesBtn, resetElectionBtn];

// --- Main Initializer ---
function init() {
    console.log("Application script running.");
    
    if (typeof window.ethereum === 'undefined') {
        console.error("MetaMask is not installed.");
        showNotification('MetaMask is not installed. Please install it to use this DApp.', 'error', true);
        connectWalletBtn.disabled = true;
        connectWalletBtn.innerText = "MetaMask Not Found";
        return;
    }
    
    setupEventListeners();
    console.log("Initialization complete. Ready for wallet connection.");
}

function setupEventListeners() {
    connectWalletBtn.addEventListener('click', handleConnectWallet);
    showVoterViewBtn.addEventListener('click', () => switchView('voter'));
    showAdminViewBtn.addEventListener('click', () => switchView('admin'));
    
    whitelistBtn.addEventListener('click', handleWhitelist);
    addCandidateBtn.addEventListener('click', handleAddCandidate);
    startVoteBtn.addEventListener('click', handleStartVoting);
    endVoteBtn.addEventListener('click', handleEndVoting);
    tallyVotesBtn.addEventListener('click', handleTallyVotes);
    resetElectionBtn.addEventListener('click', handleResetElection);
}

// --- Core Functions ---

async function handleConnectWallet() {
    if (contractAddress === "YOUR_CONTRACT_ADDRESS_HERE" || contractABI.length === 0) {
        showNotification("Configuration Error: Please replace the placeholder contract address and ABI in main.js.", "error", true);
        return;
    }

    try {
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
        userAddress = await signer.getAddress();
        
        contract = new ethers.Contract(contractAddress, contractABI, signer);

        if (!contract.target) {
            showNotification("Failed to connect to the smart contract. Check the contract address and ABI.", "error");
            return;
        }

        connectWalletBtn.classList.add('hidden');
        userInfo.classList.remove('hidden');
        userAddressEl.innerText = userAddress;
        connectionStatusEl.innerText = "Connected";

        setupAppListeners();
        updateUI();
        console.log("Connection successful.");

    } catch (error) {
        console.error("Error connecting wallet:", error);
        showNotification(`Connection failed: ${error.message}`, 'error');
        resetApp();
    }
}

function setupAppListeners() {
    window.ethereum.removeAllListeners();
    window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length > 0) handleConnectWallet(); else resetApp();
    });
    window.ethereum.on('chainChanged', () => window.location.reload());
    listenForContractEvents();
}

async function updateUI() {
    if (!contract) return;
    try {
        const state = await contract.votingState();
        const owner = await contract.owner();
        const isOwner = userAddress && userAddress.toLowerCase() === owner.toLowerCase();

        electionStatusPanel.classList.remove('hidden');

        adminButtons.forEach(btn => btn.disabled = true);

        switch(Number(state)) {
    case 0: // NotStarted
        electionStateText.innerText = "Not Started";
        electionStateText.className = "text-xl font-semibold text-gray-500";
        if (isOwner) {
            whitelistBtn.disabled = false;
            addCandidateBtn.disabled = false;
            startVoteBtn.disabled = false;
        }
        await displayCandidates(false);
        resultsArea.classList.add('hidden');
        votingArea.classList.remove('hidden');
        break;
    case 1: // Running
        electionStateText.innerText = "Live";
        electionStateText.className = "text-xl font-semibold text-green-600 animate-pulse";
        if (isOwner) endVoteBtn.disabled = false;
        await displayCandidates(true);
        resultsArea.classList.add('hidden');
        votingArea.classList.remove('hidden');
        break;
    case 2: // Ended
        electionStateText.innerText = "Ended";
        electionStateText.className = "text-xl font-semibold text-red-600";
        if (isOwner) {
            tallyVotesBtn.disabled = false;
            resetElectionBtn.disabled = false; // Enable the reset button
        }
        votingArea.classList.add('hidden');
        await displayResults();
        break;
}
    } catch (error) {
        console.error("Error updating UI:", error);
        showNotification("Could not fetch election status. Is your wallet connected to the correct network?", "error");
    }
}

async function displayCandidates(isVotingActive) {
    if (!userAddress) {
        votingArea.innerHTML = '<p class="text-center text-gray-500">Please connect your wallet to see candidates.</p>';
        return;
    }
    const voterStatus = await contract.getVoterStatus(userAddress);
    const isWhitelisted = voterStatus.isWhitelisted;
    const hasVoted = voterStatus.hasVoted;
    
    votingArea.innerHTML = '';
    const count = await contract.candidatesCount();
    if (count === 0n) {
        votingArea.innerHTML = '<p class="text-center text-gray-500">No candidates have been added yet.</p>';
        return;
    }

    let headerText = isVotingActive ? "Cast Your Vote" : "Registered Candidates";
    let header = `<h3 class="text-3xl font-bold text-center mb-6">${headerText}</h3>`;
    
    if (isVotingActive && !isWhitelisted) {
         header += '<p class="text-center text-red-500 font-semibold">Your address is not whitelisted to vote.</p>';
    }
    if (isVotingActive && hasVoted) {
         header += '<p class="text-center text-green-500 font-semibold">Thank you! Your vote has been recorded.</p>';
    }

    const grid = document.createElement('div');
    grid.className = 'grid md:grid-cols-2 lg:grid-cols-3 gap-6';

    for (let i = 1n; i <= count; i++) {
        const candidate = await contract.candidates(i);
        const card = document.createElement('div');
        card.className = 'card text-center p-6';
        card.innerHTML = `
            <div class="mb-4">
                <img src="https://placehold.co/100x100/E2E8F0/4A5568?text=${candidate.name.charAt(0)}" class="w-24 h-24 rounded-full mx-auto shadow-lg">
            </div>
            <h4 class="text-xl font-bold">${candidate.name}</h4>
            <p class="text-gray-500">Candidate #${candidate.id}</p>
        `;
        if (isVotingActive && isWhitelisted && !hasVoted) {
            const voteButton = document.createElement('button');
            voteButton.innerText = 'Vote';
            voteButton.className = 'btn btn-primary mt-4';
            voteButton.onclick = () => castVote(candidate.id);
            card.appendChild(voteButton);
        }
        grid.appendChild(card);
    }
    votingArea.innerHTML = header;
    votingArea.appendChild(grid);
}

async function displayResults() {
    resultsArea.innerHTML = '';
    const count = await contract.candidatesCount();
    if (count === 0n) {
        resultsArea.innerHTML = '<p class="text-center text-lg text-gray-600">The election has ended. Results will be shown here after they are tallied.</p>';
        resultsArea.classList.remove('hidden');
        return;
    }

   const hasTallyHappened = await contract.votesHaveBeenTallied();

    if (!hasTallyHappened) {
    let tallyMessage = '<p class="text-center text-lg text-gray-600">Voting has ended. Results are being finalized.</p>';
    const owner = await contract.owner();
    if (userAddress && userAddress.toLowerCase() === owner.toLowerCase()) {
        tallyMessage = '<p class="text-center text-lg text-yellow-700">Voting has ended. Please click "Tally & Reveal Results" to make them public.</p>';
    }
    resultsArea.innerHTML = tallyMessage;
    resultsArea.classList.remove('hidden');
    return;
}
    
    const resultsContainer = document.createElement('div');
    resultsContainer.className = 'space-y-4 max-w-2xl mx-auto';
    let totalVotes = 0n;
    const candidateResults = [];

    for (let i = 1n; i <= count; i++) {
        const candidate = await contract.candidates(i);
        candidateResults.push({ name: candidate.name, votes: candidate.voteCount });
        totalVotes += candidate.voteCount;
    }
    
    candidateResults.sort((a, b) => (b.votes > a.votes ? 1 : -1));

    candidateResults.forEach(res => {
        const percentage = totalVotes > 0n ? Number((res.votes * 100n) / totalVotes) : 0;
        const bar = document.createElement('div');
        bar.className = 'bg-white p-4 rounded-lg shadow';
        bar.innerHTML = `
            <div class="flex justify-between items-center mb-1">
                <span class="font-bold text-lg">${res.name}</span>
                <span class="text-gray-600">${res.votes.toString()} Votes (${percentage}%)</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-4">
                <div class="bg-indigo-600 h-4 rounded-full" style="width: ${percentage}%"></div>
            </div>
        `;
        resultsContainer.appendChild(bar);
    });
    
    resultsArea.innerHTML = ` <h3 class="text-3xl font-bold text-center mb-6">Final Election Results</h3>`;
    resultsArea.appendChild(resultsContainer);
    resultsArea.classList.remove('hidden');
}

async function performContractAction(action, ...args) {
    if (!contract || !signer) {
        showNotification("Not connected to wallet. Please connect first.", "error");
        return false;
    }
    try {
        const tx = await contract[action](...args);
        showNotification('Transaction sent... waiting for confirmation.', 'info');
        await tx.wait();
        return true;
    } catch (error) {
        console.error(`Error in action ${action}:`, error);
        const message = error.reason || (error.data ? error.data.message : error.message);
        showNotification(message, 'error');
        return false;
    }
}

async function castVote(candidateId) {
    await performContractAction('vote', candidateId);
}

async function handleWhitelist() {
    const aadhaar = document.getElementById('aadhaar-number').value;
    const address = document.getElementById('voter-address').value;
    if (!aadhaar || !address) { return showNotification('Please fill all fields.', 'error'); }
    if (!ethers.isAddress(address)) { return showNotification('Invalid Ethereum address.', 'error'); }
    
    const aadhaarHash = ethers.keccak256(ethers.toUtf8Bytes(aadhaar));
    const success = await performContractAction('whitelistAddress', aadhaarHash, address);
    if (success) {
        showNotification('Address whitelisted successfully!', 'success');
        document.getElementById('aadhaar-number').value = '';
        document.getElementById('voter-address').value = '';
    }
}

async function handleAddCandidate() {
     const name = document.getElementById('candidate-name').value;
     if (!name) { return showNotification('Please enter a candidate name.', 'error'); }
     const success = await performContractAction('addCandidate', name);
     if (success) {
        showNotification('Candidate added successfully!', 'success');
        document.getElementById('candidate-name').value = '';
        updateUI();
     }
}

async function handleStartVoting() {
    await performContractAction('startVoting');
}

async function handleEndVoting() {
    await performContractAction('endVoting');
}

async function handleTallyVotes() {
    await performContractAction('tallyVotes');
}
async function handleResetElection() {
    await performContractAction('resetElection');
}
function listenForContractEvents() {
    if(!contract) return;
    contract.removeAllListeners();
    contract.on("Voted", (voter) => {
        if (voter.toLowerCase() === userAddress.toLowerCase()) {
            showNotification("Your vote was successfully recorded on the blockchain.", "success");
            updateUI();
        }
    });
    contract.on("ElectionStateChanged", () => {
        showNotification("The election state has changed.", "info");
        updateUI();
    });
     contract.on("VotesTallied", () => {
        showNotification("Votes have been successfully tallied!", "success");
        updateUI(); // This will now correctly display the results
    });
    contract.on("ElectionReset", () => {
    showNotification("A new election has been started!", "success");
    updateUI();
    });
}

function switchView(viewName) {
    voterView.classList.remove('active');
    adminView.classList.remove('active');
    document.getElementById(viewName === 'admin' ? 'admin-view' : 'voter-view').classList.add('active');
}

function showNotification(message, type = 'info', isPermanent = false) {
    const notification = document.getElementById('notification');
    const notificationMessage = document.getElementById('notification-message');
    notificationMessage.textContent = message;
    notification.className = 'fixed top-5 right-5 shadow-lg rounded-lg p-4 max-w-sm z-50';
    const typeClasses = {
        success: 'bg-green-100 text-green-800',
        error: 'bg-red-100 text-red-800',
        info: 'bg-blue-100 text-blue-800'
    };
    notification.classList.add(...(typeClasses[type] || typeClasses.info).split(' '));
    notification.classList.remove('hidden');
    if (!isPermanent) {
        setTimeout(() => notification.classList.add('hidden'), 5000);
    }
}

function resetApp() {
    console.log("Resetting application state.");
    userAddress = null;
    signer = null;
    contract = null;
    connectWalletBtn.classList.remove('hidden');
    userInfo.classList.add('hidden');
    electionStatusPanel.classList.add('hidden');
    votingArea.classList.add('hidden');
    resultsArea.classList.add('hidden');
    connectionStatusEl.innerText = "Not Connected";
    connectionStatusEl.className = "font-mono text-red-600";
    adminButtons.forEach(btn => btn.disabled = true);
}

// Start the application.
init();