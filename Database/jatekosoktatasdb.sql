-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2022. Ápr 07. 00:27
-- Kiszolgáló verziója: 10.4.19-MariaDB
-- PHP verzió: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `jatekosoktatasdb`
--

DELIMITER $$
--
-- Eljárások
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `ChangeProfileData` (IN `username` VARCHAR(100), IN `email` VARCHAR(100), IN `phone` VARCHAR(100), IN `pw` VARCHAR(100))  UPDATE profile SET email_address = email, phone_number=phone, password=pw
	WHERE profile_id = (SELECT profile_id FROM profile WHERE user_name = username)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `Get_all_game` ()  SELECT game.game_id, game_type.game_type_name, age_group.age_group_name, 	game.game_name, game.game_location, game.last_update, game.game_desc FROM game 
	INNER JOIN game_type ON game_type.game_type_id = game.game_type_id 
	INNER JOIN age_group ON age_group.age_group_id = game.game_age_group_id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `Get_filtered_games` (IN `gameType` VARCHAR(100), IN `ageGroup` VARCHAR(100))  SELECT game.game_id, game.game_name, game_type.game_type_name, age_group.age_group_name, game.game_location, game.last_update, game.game_desc FROM game 
	INNER JOIN game_type ON game_type.game_type_id = game.game_type_id 
	INNER JOIN age_group ON age_group.age_group_id = game.game_age_group_id
	WHERE game_type.game_type_name = gameType AND age_group.age_group_id >= (SELECT age_group_id FROM age_group WHERE age_group_name = ageGroup)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `Get_Highscores` ()  SELECT profile.user_name, SUM(scoreboard.score) AS totalscore FROM scoreboard 
	INNER JOIN profile ON profile.profile_id = scoreboard.profile_id 
	GROUP BY profile.user_name 
	ORDER BY totalscore DESC LIMIT 10$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `Get_ScoreBoard_By_Id` (IN `gameid` VARCHAR(100))  SELECT profile.user_name, scoreboard.score FROM scoreboard 
	INNER JOIN profile ON profile.profile_id = scoreboard.profile_id
	WHERE scoreboard.game_id = gameid ORDER BY scoreboard.score DESC LIMIT 10$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `Get_ScoreBoard_By_Name` (IN `gamename` VARCHAR(100))  SELECT profile.user_name, scoreboard.score FROM scoreboard 
	INNER JOIN profile ON profile.profile_id = scoreboard.profile_id
	WHERE scoreboard.game_id = (SELECT game_id FROM game WHERE game_name = gamename) ORDER BY scoreboard.score DESC LIMIT 10$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `Get_user` (IN `username` VARCHAR(100), IN `email` VARCHAR(100), IN `pw` VARCHAR(100))  SELECT profile_id
	FROM profile
	WHERE (user_name = username
	OR email_address = email)
	AND password = pw$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertNewProfile` (IN `username` VARCHAR(100), IN `email` VARCHAR(100), IN `pw` VARCHAR(100), IN `registerDate` DATE, IN `phone` VARCHAR(100))  INSERT INTO profile(user_name, email_address, phone_number, date_of_registration, password, user_type_id) 
	VALUES(username, email, phone, registerDate, pw, '01')$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdatePersonalScore` (IN `profileId` INT, IN `gameId` INT, IN `newScore` INT)  UPDATE scoreboard SET score = newscore
	WHERE score_id = ( SELECT scoreboard.score_id FROM scoreboard
	INNER JOIN profile ON profile.profile_id = scoreboard.profile_id
	INNER JOIN game ON game.game_id = scoreboard.game_id
	WHERE profile.profile_id = profileId AND game.game_id = gameId)$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `age_group`
--

CREATE TABLE `age_group` (
  `age_group_id` varchar(2) NOT NULL,
  `age_group_name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `age_group`
--

INSERT INTO `age_group` (`age_group_id`, `age_group_name`) VALUES
('01', 'első osztály'),
('02', 'második osztály'),
('03', 'harmadik osztály'),
('04', 'negyedik osztály'),
('05', 'ötödik osztály'),
('06', 'hatodik osztály'),
('07', 'hetedik osztály'),
('08', 'nyolcadik osztály');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `game`
--

CREATE TABLE `game` (
  `game_id` int(11) NOT NULL,
  `game_type_id` varchar(2) DEFAULT NULL,
  `game_age_group_id` varchar(2) DEFAULT NULL,
  `game_name` varchar(100) DEFAULT NULL,
  `game_location` varchar(100) DEFAULT NULL,
  `last_update` date NOT NULL,
  `game_desc` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `game`
--

INSERT INTO `game` (`game_id`, `game_type_id`, `game_age_group_id`, `game_name`, `game_location`, `last_update`, `game_desc`) VALUES
(1, '01', '01', 'A világ legjobb quiz játéka', NULL, '2022-04-05', 'A legeslegjobb quiz játék az univerzumban! Ennek a játéknak a használatával lexikális tudás fejlődése megkérdőjelezhetetlen.');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `game_type`
--

CREATE TABLE `game_type` (
  `game_type_id` varchar(2) NOT NULL,
  `game_type_name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `game_type`
--

INSERT INTO `game_type` (`game_type_id`, `game_type_name`) VALUES
('01', 'quiz'),
('02', 'matek'),
('03', 'rajz'),
('04', 'idegen nyelv'),
('05', 'informatika');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `profile`
--

CREATE TABLE `profile` (
  `profile_id` int(11) NOT NULL,
  `user_name` varchar(100) DEFAULT NULL,
  `email_address` varchar(100) DEFAULT NULL,
  `phone_number` varchar(100) DEFAULT NULL,
  `date_of_registration` date NOT NULL,
  `password` varchar(100) DEFAULT NULL,
  `user_type_id` varchar(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `profile`
--

INSERT INTO `profile` (`profile_id`, `user_name`, `email_address`, `phone_number`, `date_of_registration`, `password`, `user_type_id`) VALUES
(1, 'teszt1', 'teszt1@gmail.com', NULL, '2022-02-03', 'teszt1', '01'),
(2, 'teszt2', 'teszt2@gmail.com', 'NULL', '2019-02-22', 'teszt2', '01'),
(3, 'teszt3', 'teszt3@gmail.com', '36301234556', '2021-06-30', 'teszt3', '01'),
(4, 'teszt4', 'teszt4@gmail.com', NULL, '2022-04-01', 'teszt4', '01'),
(5, 'teszt5', 'teszt5@gmail.com', '30702456666', '2022-04-05', 'teszt5', '01'),
(6, 'admin1', 'admin1@gmail.com', 'NULL', '2022-04-05', 'admin1', '00');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `scoreboard`
--

CREATE TABLE `scoreboard` (
  `score_id` int(11) NOT NULL,
  `game_id` int(11) DEFAULT NULL,
  `profile_id` int(11) DEFAULT NULL,
  `score` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `scoreboard`
--

INSERT INTO `scoreboard` (`score_id`, `game_id`, `profile_id`, `score`) VALUES
(1, 1, 1, 9999),
(2, 1, 2, 3500),
(4, 1, 3, 1001),
(5, 1, 4, 2000);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `user_type`
--

CREATE TABLE `user_type` (
  `user_type_id` varchar(2) NOT NULL,
  `user_type_name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `user_type`
--

INSERT INTO `user_type` (`user_type_id`, `user_type_name`) VALUES
('00', 'admin'),
('01', 'user');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `age_group`
--
ALTER TABLE `age_group`
  ADD PRIMARY KEY (`age_group_id`);

--
-- A tábla indexei `game`
--
ALTER TABLE `game`
  ADD PRIMARY KEY (`game_id`),
  ADD KEY `game_type_fk` (`game_type_id`),
  ADD KEY `game_age_group` (`game_age_group_id`);

--
-- A tábla indexei `game_type`
--
ALTER TABLE `game_type`
  ADD PRIMARY KEY (`game_type_id`);

--
-- A tábla indexei `profile`
--
ALTER TABLE `profile`
  ADD PRIMARY KEY (`profile_id`),
  ADD KEY `user_type_fk` (`user_type_id`);

--
-- A tábla indexei `scoreboard`
--
ALTER TABLE `scoreboard`
  ADD PRIMARY KEY (`score_id`),
  ADD KEY `game_id_fk` (`game_id`),
  ADD KEY `profile_id_fk` (`profile_id`);

--
-- A tábla indexei `user_type`
--
ALTER TABLE `user_type`
  ADD PRIMARY KEY (`user_type_id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `game`
--
ALTER TABLE `game`
  MODIFY `game_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT a táblához `profile`
--
ALTER TABLE `profile`
  MODIFY `profile_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT a táblához `scoreboard`
--
ALTER TABLE `scoreboard`
  MODIFY `score_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `game`
--
ALTER TABLE `game`
  ADD CONSTRAINT `game_age_group` FOREIGN KEY (`game_age_group_id`) REFERENCES `age_group` (`age_group_id`),
  ADD CONSTRAINT `game_type_fk` FOREIGN KEY (`game_type_id`) REFERENCES `game_type` (`game_type_id`);

--
-- Megkötések a táblához `profile`
--
ALTER TABLE `profile`
  ADD CONSTRAINT `user_type_fk` FOREIGN KEY (`user_type_id`) REFERENCES `user_type` (`user_type_id`);

--
-- Megkötések a táblához `scoreboard`
--
ALTER TABLE `scoreboard`
  ADD CONSTRAINT `game_id_fk` FOREIGN KEY (`game_id`) REFERENCES `game` (`game_id`),
  ADD CONSTRAINT `profile_id_fk` FOREIGN KEY (`profile_id`) REFERENCES `profile` (`profile_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
