USE `Tester`;

CREATE TABLE IF NOT EXISTS `scenario` (
  `scenarioId` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) CHARACTER SET ucs2 NOT NULL,
  `planId` int(11) NOT NULL,
  `description` varchar(150) CHARACTER SET ucs2 NOT NULL,
  PRIMARY KEY (`scenarioId`),
  UNIQUE KEY `scenarioId_UNIQUE` (`scenarioId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
