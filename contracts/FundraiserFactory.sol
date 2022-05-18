// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.0 <0.9.0;
import "./Fundraiser.sol";

contract FundraiserFactory {
    Fundraiser[] private _fundraisers;
    uint256 constant maxLimit = 20;

    event FundraiserCreated (Fundraiser indexed fundraiser, address indexed owner);

    function fundraisersCount () public view returns (uint256) {
        return _fundraisers.length;
    }
    function createFundraiser (string memory _name, string memory _url, string memory _imageURL, string memory _description, address payable _beneficiary) public {
        Fundraiser fundraiser = new Fundraiser (_name, _url, _imageURL, _description, _beneficiary, msg.sender);
        _fundraisers.push(fundraiser);
        emit FundraiserCreated(fundraiser, msg.sender);
    }

    function fundraisers (uint256 limit, uint256 offset) public view returns (Fundraiser[] memory coll) {    
        require (offset <= fundraisersCount(), "offset out of bounds");
        uint256 size = fundraisersCount() - offset;
        size = size < limit ? size : limit;
        size = size < maxLimit ? size : maxLimit;
        coll = new Fundraiser[](size);

        for (uint256 i = 0; i < size; i++) {
            coll[i] = _fundraisers[offset + i];
        }

        return coll;    
    }
}