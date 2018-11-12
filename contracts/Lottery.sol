pragma solidity ^0.4.17;

contract Lottery {
    address public manager;
    address[] public players;

    constructor () public {
        manager = msg.sender;
    }

    function enter() public payable {
        require(msg.value >= 0.01 ether, "0.01+ ether required to enter this Lottery");
        players.push(msg.sender);
    }

    function random() private view returns (uint) {
        return uint(keccak256(abi.encodePacked(block.difficulty, now, players)));
    }

    function pickWinner() public restricted {
        uint index = random() % players.length;
        players[index].transfer(this.balance);
        players = new address[](0);
    }

    modifier restricted() {
        require(msg.sender == manager, "You are not authorized to perform this function");
        _;
    }

    function getPlayers() public view returns (address[]) {
        return players;
    }

    function numPlayers() public view returns (uint) {
        return players.length;
    }
}