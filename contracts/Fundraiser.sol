// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";

/** 每一个合约的就代表着一个捐赠过程 */
contract Fundraiser is Ownable {
    string public name;
    string public url;
    string public imageURL;
    string public description; 
    address payable public beneficiary;
    address public custodian;
    struct Donation {
        uint256 value;
        uint256 date; 
    }
    mapping (address => Donation[]) private _donations;
    uint256 public totalDonations;
    uint256 public donationsCount;

    event DonationReceived (address indexed donor, uint256 value);
    event Withdraw(uint256 amount);

    constructor (string memory _name, string memory _url, string memory _imageURL, string memory _description, address payable _beneficiary, address _custodian) {
        name = _name;
        url = _url;
        imageURL = _imageURL;
        description = _description;
        beneficiary = _beneficiary;
        transferOwnership(_custodian);//因为继承了Ownable合约，所以在构造函数中得把，Ownable中的_owner 成员进行更新
    }
    /** 设置获得捐助的人 */
    function setBeneficiary (address payable _beneficiary) public onlyOwner {
        beneficiary = _beneficiary;
    }
    /** 获取个人的捐赠记录 */
    function myDonationsCount () public view returns (uint256) {
        return _donations[msg.sender].length;
    }

    /** 捐助过程，需要进行转帐 */
    function donate () public payable {
        Donation memory donation = Donation({
            value: msg.value,
            date: block.timestamp
        });
        _donations[msg.sender].push(donation);//捐赠记录  map -> list[]
        totalDonations = totalDonations + msg.value;//捐赠总数
        donationsCount++;//次数
        emit DonationReceived (msg.sender, msg.value);//日志，后续也可以通过区块链日志进行数据统计
      }

   /**获取个人所有的转账记录 */
    function myDonations () public view returns (uint256[] memory values, uint256[] memory dates) {
        uint256 count = myDonationsCount();
        values = new uint256[](count);
        dates = new uint256[](count);
        for (uint256 i = 0; i < count; i++) {
            Donation storage donation = _donations[msg.sender][i];//捐赠记录  map -> list[]
            values[i] = donation.value;
            dates[i] = donation.date;
        }
        return (values, dates);
    }
    /** 提取转账数据，限制当前合约所有人 */
    function withdraw () public onlyOwner {
        uint256 balance = address(this).balance;
        beneficiary.transfer(balance);
        emit Withdraw(balance);
    }


    fallback () external payable {
        
    }
    /**因为receive 存在，所以不使用 fallback */
    receive() external payable{
        totalDonations = totalDonations + msg.value;
        donationsCount++;
    }
}
