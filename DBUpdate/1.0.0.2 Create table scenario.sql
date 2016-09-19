USE `Tester`;

CREATE TABLE IF NOT EXISTS `scenario` (
  `ScenarioId` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) CHARACTER SET ucs2 NOT NULL,
  `PlanId` int(11) NOT NULL,
  `Description` varchar(150) CHARACTER SET ucs2 NOT NULL,
  PRIMARY KEY (`scenarioId`),
  UNIQUE KEY `scenarioId_UNIQUE` (`scenarioId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
