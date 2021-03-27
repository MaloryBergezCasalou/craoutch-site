// quand tu dépose un ficher sur le site

<!DOCTYPE html>
<html>
    <head>
    <meta charset="utf-8">
    <title>Zone de glisser-déposer des fichiers ?</title>
    <style>
    #zone {
    background-color: #EEE;
    border: #000 4px dashed;
    width: 400px;
    padding: 8px;
    font-size: 18px;
    }

    #envoi {
    width:50%;
    margin:0 auto;
    }
    
    #envoi p {
    text-align: center;
    }

    #envoi #fichier {
    display: none;
    }

    #nom_fichiers {
    font-size: 14px;;
    }
    
    </style>
    </head>
        <body>
            <div id="zone" ondrop="glisser_fichier(event)" ondragover="this.style.background = '#CCC';return false" ondragleave="this.style.background = '#EEE'">
                <div id="envoi">
                    <p>Glisser les fichiers ici<br>ou<br><input type="button" value="Sélectionner les fichiers" onclick="parcourir_fichier();"></p>
                        <input type="file" id="fichier">
                    <p id="nom_fichiers"></p>
                </div>
            </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script>
            var fichier;

            function glisser_fichier(e) 
            {
            e.preventDefault();
            document.getElementById('zone').style.background = "#CCC";
            for (i = 0; i < e.dataTransfer.files.length; i++) 
            {
            fichier = e.dataTransfer.files[i];
            document.getElementById('nom_fichiers').innerHTML += "" + fichier.name + "<br>";
            envoi_fichier(fichier);
            }
            }
            
            function parcourir_fichier() 
            {
                document.getElementById('fichier').click();
                document.getElementById('fichier').onchange = function() 
            {
                    fichier = document.getElementById('fichier').files[0];
            document.getElementById('nom_fichiers').innerHTML += "" + fichier.name + "<br>";
                    envoi_fichier(fichier);
                };
            }
            
            function envoi_fichier(fichier) 
            {
                if(fichier != undefined) 
            {
                    var form_data = new FormData();                  
                    form_data.append('file', fichier);
                    $.ajax({
                        type: 'POST',
                        url: 'envoi.php',
                        contentType: false,
                        processData: false,
                        data: form_data,
                        success:function(response) {
                            alert(response);
                            $('#fichier').val('');
                        }
                    });
                }
            }
            </script>
        </body>
</html>