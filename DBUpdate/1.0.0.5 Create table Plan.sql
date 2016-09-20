USE 'Tester';

CREATE TABLE IF NOT EXISTS `Plan` (
  `PlanId` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) NOT NULL,
  `Descriptin` varchar(300) NOT NULL,
  `ProjectId` int(11) NOT NULL,
  `StartDate` date NOT NULL,
  `FinalDate` date NOT NULL,
  PRIMARY KEY (`PlanId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
