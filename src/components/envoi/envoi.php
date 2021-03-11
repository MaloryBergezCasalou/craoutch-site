<?php
$valid_extensions = array('png','jpg','jpeg');
$img = $_FILES['file']['name'];
$ext = strtolower(pathinfo($img, PATHINFO_EXTENSION));
if(in_array($ext, $valid_extensions)) 
{ 
if (!file_exists('fichiers')) 
{
mkdir('fichiers', 0777);
}
move_uploaded_file($_FILES['file']['tmp_name'], 'fichiers/' . $_FILES['file']['name']);
echo "Fichier ". $_FILES['file']['name']." envoyé avec succès";
}
else echo "Fichier non envoyé";
