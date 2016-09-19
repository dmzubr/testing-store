USE `Tester`;

CREATE TABLE IF NOT EXISTS  `User` (
  `UserId` int(11) NOT NULL AUTO_INCREMENT,
  `Login` varchar(100) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `LastName` varchar(45) NOT NULL,
  `FirstName` varchar(45) NOT NULL,
  PRIMARY KEY (`UserId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
