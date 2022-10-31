-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 31, 2022 at 08:14 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `auth_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `product_id`, `user_id`, `createdAt`, `updatedAt`) VALUES
(1, 7, 5, '2022-10-31 19:02:55', '2022-10-31 19:02:55');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `details` text DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `image`, `category`, `brand`, `price`, `color`, `rating`, `details`, `createdAt`, `updatedAt`) VALUES
(7, 'iPhone 12 Pro', '6.1-inch display', '/images/iphone12pro.jpg', 'phone', 'Apple', '999', 'Black', 5, 'The iPhone 12 features a 6.1-inch (15 cm) display with Super Retina XDR OLED technology at a resolution of 2532 × 1170 pixels and a pixel density of about 460 ppi. The iPhone 12 Mini features a 5.4-inch (14 cm) display with the same technology at a resolution of 2340 × 1080 pixels and a pixel density of about 476 ppi.', '2022-10-30 19:51:13', '2022-10-30 19:51:13'),
(10, 'Redmi Note 12', '6.67-inch display', '/images/redmi2.jpg', 'phone', 'Xiaomi', '299', 'Black', 4, 'The phone comes with a 90 Hz refresh rate 6.43-inch touchscreen display offering a resolution of 1080x2400 pixels at a pixel density of 409 pixels per inch (ppi) and an aspect ratio of 20:9. Redmi Note 11 is powered by an octa-core Qualcomm Snapdragon 680 processor. It comes with 4GB, 6GB of RAM.', '2022-10-30 22:24:28', '2022-10-30 22:24:28'),
(11, 'iPhone 12', '5.4-inch mini display', '/images/iphone12.jpg', 'phone', 'Apple', '699', 'Black', 3, 'The iPhone 12 features a 6.1-inch (15 cm) display with Super Retina XDR OLED technology at a resolution of 2532 × 1170 pixels and a pixel density of about 460 ppi. The iPhone 12 Mini features a 5.4-inch (14 cm) display with the same technology at a resolution of 2340 × 1080 pixels and a pixel density of about 476 ppi.', '2022-10-30 22:36:24', '2022-10-30 22:36:24'),
(12, 'Galaxy S', '6.5-inch display', '/images/galaxyS.png', 'phone', 'Samsung', '399', 'Black', 4, 'The Samsung Galaxy S series is a line of high-end Android smartphones produced by Samsung Electronics. Together with the foldable Galaxy Z series and the now discontinued Galaxy Note series, the lineup serves as Samsung\'s flagship smartphone lineup.', '2022-10-30 22:37:29', '2022-10-30 22:37:29'),
(13, 'Asus Zenphone', '5.9-inch display', '/images/zenfone3.jpg', 'phone', 'Asus', '399', 'Black', 4, 'Asus ZenFone is a series of Android smartphones designed, marketed and produced by Asus. The first-generation ZenFones were announced at the 2014 Consumer Electronic Show in Las Vegas, Nevada. Various models are powered by a series of Intel Atom, Qualcomm Snapdragon, and MediaTek processors.', '2022-10-30 22:40:40', '2022-10-30 22:40:40'),
(14, 'Acer Predator Triton 500 SE', '16-inch display', '/images/acer.png', 'laptop', 'Acer', '799', 'Black', 2, 'Housed in its all-silver chassis, the $2,999.99 configuration of the Triton 500 SE we tested includes a 12th Gen Core i9-12900H processor, RTX 3080 Ti graphics card, 32GB of RAM, and 1TB of PCIe NVME storage. This hardware is more than enough to take full advantage of its 16-inch 240Hz 2560 x 1600 display.', '2022-10-30 22:41:40', '2022-10-30 22:41:40'),
(15, 'Asus Zenbook Pro 14', '14.5-inch display', '/images/asus.jpg', 'laptop', 'Asus', '1399', 'Black', 5, 'Get ready to meet the seriously powerful Zenbook Pro 14 Duo OLED, an Intel® Evo™-certified powerhouse that lets you turn up your creative powers to the max. The flagship Intel CPU and creator-grade NVIDIA® GPU are cooled for extreme performance by ASUS IceCool Plus technology, aided by the brand-new AAS Ultra mechanism, which vents the chassis and also tilts the next-generation ScreenPad™ Plus secondary touchscreen to a comfortable angle for a seamless and immersive visual experience.', '2022-10-30 22:42:41', '2022-10-30 22:42:41'),
(16, 'OMEN', '17.3-inch display', '/images/hp1.jpg', 'laptop', 'Hp', '1349', 'Shadow black cover and base, shadow black aluminum keyboard frame', 4, 'A selection of strong hardware components in the HP Omen 17 ensures very strong performance in the processor benchmarks. The 2022 version of the gaming laptop now makes use of an Intel Core i7-12700H from the latest processor generation, which is accompanied by 16 GB DDR5 RAM and a 1 TB NVMe SSD from Western Digital.', '2022-10-30 22:43:18', '2022-10-30 22:43:18'),
(17, 'Asus Vivobook S15', '17.3-inch display', '/images/asus7.png', 'laptop', 'Asus', '2500', 'Shadow black cover and base, shadow black aluminum keyboard frame', 5, 'Brand new leptop for making your life better. fastest CPU and usable in gaming.', '2022-10-30 22:44:08', '2022-10-30 22:44:08'),
(18, 'Acer Nitro 7', '20-inch display', '/images/acer2.jpg', 'laptop', 'Acer', '2500', 'Shadow black cover and base, shadow black aluminum keyboard frame', 3, '\"Acer leptop for gaming. New design and new futures for Acer.', '2022-10-30 22:44:45', '2022-10-30 22:44:45'),
(19, 'Redess hat', 'white hat for winter', '/images/hat.jpg', 'clothes', 'Redess', '99', 'White', 2, 'Brand new hat for winter', '2022-10-30 23:09:09', '2022-10-30 23:09:09'),
(20, 'Barts hat', 'Hat from BARTS', '/images/hat6.jpg', 'clothes', 'Barts', '399', 'White', 3, 'Brand new hat for winter', '2022-10-30 23:10:08', '2022-10-30 23:10:08'),
(21, 'Adidas', 'Shoe', '/images/shoe4.jpg', 'clothes', 'Adidas', '599', 'White', 3, 'New design adidas.', '2022-10-30 23:10:45', '2022-10-30 23:10:45'),
(22, 'Boody shirt', 'Shirt', '/images/Shirt.jpg', 'clothes', 'Noody', '399', 'White', 5, 'New Boody shirt for summer.', '2022-10-30 23:11:41', '2022-10-30 23:11:41'),
(23, 'Trouser', 'Black trouser', '/images/trouser.jpg', 'clothes', 'Nike', '399', 'White', 3, 'Black trouser for Businessmen.', '2022-10-30 23:12:24', '2022-10-30 23:12:24');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `refresh_token` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `isAdmin` bit(1) DEFAULT b'0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `refresh_token`, `createdAt`, `updatedAt`, `isAdmin`) VALUES
(1, 'M Fikri', 'email@gmail.com', '$2b$10$Wr4EunRyINxZpyEWft9weuS6e04KuGYnLhuiiiKTiPTrDcv3ftv4i', NULL, '2021-10-26 04:41:29', '2021-10-26 07:18:50', b'1'),
(2, 'John Doe', 'john@gmail.com', '$2b$10$xp6VYwckwTrjhUCWgf5X3u4lFZq/NDC0/PGPh9TFT0lDICNDriPla', NULL, '2021-10-31 15:18:26', '2021-11-02 03:51:10', b'1'),
(3, 'Not Admin', 'notadmin@gmail.com', '$2b$10$e5T2jHcxijeIPILU0DQCmOgUcY9GmsxD73JjZ8t9fGE.I8dHowWM.', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsIm5hbWUiOiJOb3QgQWRtaW4iLCJlbWFpbCI6Im5vdGFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY2NzI0MzAwMywiZXhwIjoxNjY3MzI5NDAzfQ.57LeD7U3UmB-sEC0KlX9eGHVVTtFxi-FVUMagBLjtNc', '2022-10-29 11:44:36', '2022-10-31 19:03:23', b'1'),
(4, 'glexilexo', 'gorixar123@gmail.com', '$2b$10$QpnIe.N.vI4m.JuDEGTpWe5g4x6zy5WAgi3637/w4ey14NerhkWU.', NULL, '2022-10-29 16:40:55', '2022-10-29 16:40:55', b'0'),
(5, 'zangi', 'notadmin1@gmail.com', '$2b$10$cV.grU9rjzOrGpa94j/lJOtPoRZNZ78LXpaYXAElfNfmRjE6mp0L2', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsIm5hbWUiOiJ6YW5naSIsImVtYWlsIjoibm90YWRtaW4xQGdtYWlsLmNvbSIsImlhdCI6MTY2NzI0Mjk2OSwiZXhwIjoxNjY3MzI5MzY5fQ.5igs3qkHIiwt8Zy-bdX31MYgPNNAbk3k5zebrrqLbOs', '2022-10-29 16:42:14', '2022-10-31 19:02:49', b'0');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
