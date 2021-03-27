
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


--
-- Base de données :  `api_rest`
--
DROP DATABASE IF EXISTS `api_rest`;
CREATE DATABASE IF NOT EXISTS `api_rest` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `api_rest`;

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` varchar(64) NOT NULL,
  `nom` varchar(32) NOT NULL,
  `email` text NOT NULL,
  `created_at` datetime NOT NULL,
  `pseudo` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id`, `nom`, `email`, `created_at`, `pseudo`) VALUES
(1, 'johndoe', 'johndoe@mail.com', '2021-03-25 12:00:00', 'jojo'),
(1, 'janedoe', 'janedoe@mail.com', '2021-03-25 12:00:00', 'jaja');

-- --------------------------------------------------------

--
-- Structure de la table `produits`
--

DROP TABLE IF EXISTS `produits`;
CREATE TABLE `produits` (
  `id` int(11) NOT NULL,
  `nom` varchar(32) NOT NULL,
  `description` text NOT NULL,
  `prix` decimal(10,0) NOT NULL,
  `categories_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `produits`
--

INSERT INTO `produits` (`id`, `nom`, `description`, `prix`, `categories_id`, `created_at`, `updated_at`) VALUES
(65, 'Samsung Galaxy S 10', 'Le dernier né des téléphones Samsung', '899', 2, '2019-09-07 21:19:09', '2019-09-07 19:19:09'),
(66, 'Habemus Piratam', 'Le livre à propos d\'un pirate informatique', '13', 6, '2019-09-07 21:21:11', '2019-09-07 19:21:11');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `produits`
--
ALTER TABLE `produits`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categories_id` (`categories_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT pour la table `produits`
--
ALTER TABLE `produits`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `produits`
--
ALTER TABLE `produits`
  ADD CONSTRAINT `produits_ibfk_1` FOREIGN KEY (`categories_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
