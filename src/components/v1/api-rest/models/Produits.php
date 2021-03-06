<?php
class Produits{
    // Connexion
    private $connexion;
    private $table = "produits";

    // object properties
    public $pseudo;
    public $nom;
    public $email;
    public $created_at;

    /**
     * Constructeur avec $db pour la connexion à la base de données
     *
     * @param $db
     */
    public function __construct($db){
        $this->connexion = $db;
    }

    /**
     * Lecture des produits
     *
     * @return void
     */
    public function lire(){
        // Requête
        $sql = "SELECT c.nom as categories_nom, p.id, p.nom, p.description, p.prix, p.categories_id, p.created_at FROM " . $this->table . " p LEFT JOIN categories c ON p.categories_id = c.id ORDER BY p.created_at DESC";
        $query = $this->connexion->prepare($sql);
        $query->execute();
        return $query;
    }

    /**
     * Créer un produit
     *
     * @return void
     */
    public function creer(){

        // Ecriture de la requête SQL en y insérant le nom de la table
        $sql = "INSERT INTO " . $this->table . " SET nom=:nom, prix=:prix, description=:description, categories_id=:categories_id, created_at=:created_at";
        $query = $this->connexion->prepare($sql);

        // Protection contre les sqli
        $this->id=htmlspecialchars(strip_tags($this->id));
        $this->pseudo=htmlspecialchars(strip_tags($this->pseudo));
        $this->nom=htmlspecialchars(strip_tags($this->nom));
        $this->email=htmlspecialchars(strip_tags($this->email));

        // Ajout des données protégées
        $query->bindParam(":nom", $this->nom);
        $query->bindParam(":email", $this->email);
        $query->bindParam(":created_at", $this->created_at);

        // Exécution de la requête
        if($query->execute()){
            return true;
        }
        return false;
    }

    /**
     * Lire un produit
     *
     * @return void
     */
    public function lireUn(){
        // Requête
        $sql = "SELECT c.nom as p.id, p.pseudo, p.nom, p.email, p.created_at FROM " . $this->table . " p LEFT JOIN categories c ON p.id = c.id WHERE p.id = ? LIMIT 0,1";
        $query = $this->connexion->prepare( $sql );
        $query->bindParam(1, $this->pseudo);
        $query->execute();

        // ligne
        $row = $query->fetch(PDO::FETCH_ASSOC);

        // On hydrate l'objet
        $this->id = $row['id'];
        $this->pseudo = $row['pseudo'];
        $this->nom = $row['nom'];
        $this->email = $row['email'];
    }

    /**
     * Supprimer un produit
     *
     * @return void
     */
    public function supprimer(){
        // Requête
        $sql = "DELETE FROM " . $this->table . " WHERE id = ?";
        $query = $this->connexion->prepare( $sql );

        // On sécurise les données
        $this->id=htmlspecialchars(strip_tags($this->pseudo));

        // On attache l'pseudo
        $query->bindParam(1, $this->pseudo);
        if($query->execute()){
            return true;
        }
        
        return false;
    }

    /**
     * Mettre à jour un produit
     *
     * @return void
     */
    public function modifier(){
        // Requête
        $sql = "UPDATE " . $this->table . " SET nom = :nom, email = :email, id = :id WHERE pseudo = :pseudo";
        $query = $this->connexion->prepare($sql);
        
        // On sécurise les données
        $this->pseudo=htmlspecialchars(strip_tags($this->pseudo));
        $this->nom=htmlspecialchars(strip_tags($this->nom));
        $this->email=htmlspecialchars(strip_tags($this->email));
        $this->id=htmlspecialchars(strip_tags($this->id));
        
        // On attache les variables
        $query->bindParam(':nom', $this->nom);
        $query->bindParam(':email', $this->email);
        $query->bindParam(':pseudo', $this->pseudo);
        $query->bindParam(':id', $this->id);
        
        // On exécute
        if($query->execute()){
            return true;
        }
        
        return false;
    }

}