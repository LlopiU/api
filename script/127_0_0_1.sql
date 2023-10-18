-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-10-2023 a las 20:49:08
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `biblioteca`
--
CREATE DATABASE IF NOT EXISTS `biblioteca` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `biblioteca`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libros`
--
-- Creación: 18-10-2023 a las 02:48:12
-- Última actualización: 18-10-2023 a las 03:37:49
--

CREATE TABLE `libros` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `autor` varchar(30) NOT NULL,
  `categoria` varchar(30) NOT NULL,
  `añopublicacion` date NOT NULL,
  `ISBN` varchar(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `libros`
--

INSERT INTO `libros` (`id`, `nombre`, `autor`, `categoria`, `añopublicacion`, `ISBN`) VALUES
(1, 'El Secreto del Abismo', 'Ana Rodríguez', 'Aventura', '2021-03-10', '1234567890'),
(2, 'El Enigma de la Noche', 'Carlos Pérez', 'Misterio', '2019-06-15', '2345678901'),
(3, 'Ulises', 'Llopi', 'thrillerr', '2021-04-10', '9784535454'),
(4, 'Cazadores de Sueños', 'Juan Martínez', 'Fantasía', '2020-12-05', '4567890123'),
(5, 'Huellas del Silencio', 'Laura Torres', 'Ficción', '2017-08-14', '5678901234'),
(6, 'El Arte de la Ciencia', 'Pedro Sánchez', 'Ciencia', '2016-04-30', '6789012345'),
(7, 'El Viaje en el Tiempo', 'Isabel García', 'Historia', '2015-01-18', '7890123456'),
(8, 'Secretos de una Vida', 'Mario López', 'Biografía', '2022-07-08', '8901234567'),
(9, 'Las Profundidades del Mar', 'María Fernández', 'Aventura', '2014-11-03', '9012345678'),
(10, 'Amor en París', 'Luis Ramírez', 'Romance', '2013-09-27', '0123456789'),
(12, 'Alan', 'Alan Llopi', 'hola', '0000-00-00', '9784545454');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `libros`
--
ALTER TABLE `libros`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `libros`
--
ALTER TABLE `libros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
