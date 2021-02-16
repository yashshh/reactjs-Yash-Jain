create database mstockdb;
use mstockdb;
show tables;
select * from companystocks;
describe companystocks;
describe companydetails;
describe companywatchlist;
describe user;
insert into user
values
(1,"a@helloworld.com","helloworld"),
(2,"b@helloworld.com","helloworld");
insert into companywatchlist
values
(1,1,1),
(2,2,2),
(3,3,1);

insert into companydetails
values
(1,"BITCOIN(BTC)",35000,"cryptocurrency, 21 million bitcoins, blockchain, decentralization"),
(2,"ETHEREUM(ETH)",800,"cryptocurrency-ether, unlimited, backed by gas, soliditry, smart contracts etc"),
(3,"RIPPLE(XRP)","1","cryptocurrency , payment protocol, Ripple Labs Inc.");
insert into companystocks
values
(1,"2021-02-13",47667,1),
(2,"2021-02-13",1840,2),
(3,"2021-02-13",1,3),
(4,"2021-02-12",4700,1),
(5,"2021-02-12",1740,2),
(6,"2021-02-12",2,3);

