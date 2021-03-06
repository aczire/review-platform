// web3 loader Metamask/Mist ---------------------------------------------------
// Checking if Web3 has been injected by the browser (Mist/MetaMask)

//Function "prototypes"
var reviewSubmitedReward = null;
var sendDCN = null;
var generateInviteCode = null;
var account = null;
window.addEventListener('load', function() {
    var noWalletActions = function() {
        $('#has-no-wallet').show();
        $('#has-wallet').hide();
        $('#transfer-widget').hide();
    }

    if(typeof Web3 == 'undefined') {
        noWalletActions();
        return;
    }


    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
        // Use Mist/MetaMask's provider
        window.web3 = new Web3(web3.currentProvider);
    } else {
        console.log('No web3? You should consider trying MetaMask!')
        // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
        window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }


    // setup DCN token address
    const DCNaddress = "0x08d32b0da63e2C3bcF8019c9c5d849d7a9d791e6";
    // setup token contract ABI
    const tokenABI =[ { "constant": true, "inputs": [], "name": "sellPriceEth", "outputs": [ { "name": "", "type": "uint256", "value": "1000000000000000" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "buyDentacoinsAgainstEther", "outputs": [ { "name": "amount", "type": "uint256" } ], "payable": true, "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [ { "name": "", "type": "string", "value": "Dentacoin" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "approve", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "newGasReserveInWei", "type": "uint256" } ], "name": "setGasReserve", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [ { "name": "", "type": "uint256", "value": "8000000000000" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [ { "name": "", "type": "uint8", "value": "0" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "newDCNAmount", "type": "uint256" } ], "name": "setDCNForGas", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "directTradeAllowed", "outputs": [ { "name": "", "type": "bool", "value": true } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "minBalanceForAccounts", "outputs": [ { "name": "", "type": "uint256", "value": "10000000000000000" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "newBuyPriceEth", "type": "uint256" }, { "name": "newSellPriceEth", "type": "uint256" } ], "name": "setEtherPrices", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "buyPriceEth", "outputs": [ { "name": "", "type": "uint256", "value": "1000000000000000" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "amountOfEth", "type": "uint256" }, { "name": "dcn", "type": "uint256" } ], "name": "refundToOwner", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "newGasAmountInWei", "type": "uint256" } ], "name": "setGasForDCN", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "_owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "balance", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "amount", "type": "uint256" } ], "name": "sellDentacoinsAgainstEther", "outputs": [ { "name": "revenue", "type": "uint256" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "haltDirectTrade", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address", "value": "0xc99f67433019d1da18c311e767faa2b8ec250886" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "name": "", "type": "string", "value": "ЩЁ" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "transfer", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "DentacoinAddress", "outputs": [ { "name": "", "type": "address", "value": "0x08d32b0da63e2c3bcf8019c9c5d849d7a9d791e6" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "DCNForGas", "outputs": [ { "name": "", "type": "uint256", "value": "10" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "gasForDCN", "outputs": [ { "name": "", "type": "uint256", "value": "5000000000000000" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "minimumBalanceInWei", "type": "uint256" } ], "name": "setMinBalance", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "_owner", "type": "address" }, { "name": "_spender", "type": "address" } ], "name": "allowance", "outputs": [ { "name": "remaining", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "unhaltDirectTrade", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "gasReserve", "outputs": [ { "name": "", "type": "uint256", "value": "100000000000000000" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "payable": false, "type": "function" }, { "inputs": [], "payable": false, "type": "constructor" }, { "payable": true, "type": "fallback" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "_from", "type": "address" }, { "indexed": true, "name": "_to", "type": "address" }, { "indexed": false, "name": "_value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "_owner", "type": "address" }, { "indexed": true, "name": "_spender", "type": "address" }, { "indexed": false, "name": "_value", "type": "uint256" } ], "name": "Approval", "type": "event" } ];
    // setup Token contract factory
    var Token = web3.eth.contract(tokenABI);
    // setup token instance
    var token = Token.at(DCNaddress);

    // review.sol integration ------------------------------------------------------

    const contractAdr = "0x0dFd95Fbe9c726F2896b857C835d7bF4C514e313";
    const abi =
    [{"constant":true,"inputs":[],"name":"count","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"hashedInviteSecret","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_content","type":"bytes"},{"name":"_submitSecret","type":"string"},{"name":"_inviteSecret","type":"string"}],"name":"submitReview","outputs":[{"name":"trusted","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"secretCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"hashedInSecret","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_arrayOfHashedSecrets","type":"bytes8[]"}],"name":"addSubmitSecrets","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_dentist","type":"address"}],"name":"setDentistOnWhitelist","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"refundToOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_dentist","type":"address"}],"name":"removeDentistFromWhitelist","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getContractBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReviewCount","outputs":[{"name":"reviewCount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"dcnAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"hashedSubmitSecrets","outputs":[{"name":"","type":"bytes8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"dcnAmountTrusted","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getHashedSecrets","outputs":[{"name":"hashedSecrets","type":"bytes8[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_secret","type":"string"}],"name":"setInviteSecret","outputs":[{"name":"result","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"dentistWhitelist","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokenAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"reviewID","outputs":[{"name":"timeStamp","type":"uint256"},{"name":"writtenByAddress","type":"address"},{"name":"content","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_dcnAmount","type":"uint256"},{"name":"_dcnAmountTrusted","type":"uint256"}],"name":"setDCNAmounts","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"SubmitEvent","type":"event"}];

    // setup review contract
    const Contract = web3.eth.contract(abi);
    // setup contract instance
    const contract = Contract.at(contractAdr);


    web3.eth.getAccounts(function(error, accounts){
      console.log(accounts);
      account = accounts[0];
      $('#transfer-reward-address').val( account );
      $('#reviewer-address').val(account);
    });

    //Wallet updates
    var walletUpdater = function() {

        if (typeof(token) == 'undefined' || !token) {
            return
        }
        //auto refresh account
        if (!account) {
              noWalletActions();
              web3.eth.getAccounts(function(error, accounts){
              console.log(accounts);
              account = accounts[0];
            });
        } else {
          hasWalletActions();
        }
        //auto refresh balance
        if(account) {
            token.balanceOf(account, function(error, balance) {
                return $("#wallet-balance").val(String(balance.toString(10)) + " ^");
            });
        }
        // auto refresh address
        $("#wallet-address").val(account);
    };
    walletUpdater();
    setInterval(walletUpdater, 2000);

    // Transfer Dentacoins
    sendDCN = function(dcn_address, amount) {
        $('#transfer-succcess').hide();
        $('#transfer-error').hide();
        $('#transfer-invalid').hide();

        console.log("Transfer Details", dcn_address, amount);

        amount = amount.replace(',', '.');
        var isAddress = web3.isAddress(dcn_address);
        var isAmount = parseFloat(amount);
        if (!isAddress || !isAmount) {
            $('#transfer-invalid').show();
            return;
        }

        var transactionObject = {
            from: account,
            to: dcn_address,
            gas: 200000,
            amount: amount
        };

        console.log(transactionObject);


       // transfer tokens
       token.transfer(dcn_address, amount, transactionObject, function(error, transactionHash){
           if(error) {
              $('#transfer-error').show();
              $('#transfer-reason').show().html( String(error) );
              return error;
           }

           $('#transfer-succcess').show();
         });

       token.Transfer({}, function(error, result){
           if(error) {
               $("#transferTokenResponse").show();
               return $("#transferTokenResponse_body").html("There was an error transfering your Dentacoins: " + String(error));
           }

           $("#transferTokenResponse").show();
           return $("#transferTokenResponse_body").html("Your Dentacoins have been transfered! " + String(result.transactionHash));
       });
    }

})