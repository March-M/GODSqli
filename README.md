# GODSqli
GODSqli est un script de test d'injection sql de type UNION QUERY

Dérivé du script SQiGOD de makman, celui ci est une version améliorée, corrigée et surtout plus légère !

#Qu'est ce que c'est?

GODSqli est un script qui permet de tester et docuimenter un type précis de faille SQL, les UNION QUERY.
Celui si ce place dans l'url comprennant la faille et permet d'afficher un outil presque tout en un permettant d'avoir diverses informations sur la/les base(s) de donnée(s), leurs contenu, etc, tel que le ferais un phpmyadmin.

#/!\ATTENTION/!\
IL est évident que cet outil NE DOIS PAS être utilisé dans un contexte malveillant. Il ne dois être utilisé que contre vos propres serveurs ou avec l'accord du propriétaire du serveur visé. L'auteur de GODSqli ne pourra en aucun cas être tenu responçable de toute utilisation malveillante et non autorisée de ce script.

#Améliorations 

En plus des améliorations en cour d'ajout (dump de fichier par exemple), GODSqli a vu son système de dump recodé afin de fournir un dump au format CSV. 
Sa taille à été considérablement réduite aussi, en externalisant le script JS, passant sa taille d'environ 7900 caractère a moins de 740!

#Comment ça fonctionne

Il suffit de mettre en ligne le contenu de source.js sur votre serveur, et d'injecter dans l'urlla syntaxe de syntax.txt en remplaçant "URL_OF_YOUR_HEBERGED_SCRIPT" par l'adresse de votre version hébergée de source.js
La version All-in-one existant au début à été supprimée, elle étais devenue trop lourde pour 90% des serveurs si on y intégrais les mise a jour a partir de la v1.0.1, et surtout inutile au vu des améliorations disponible dans la v1.1, qui ne justifiais plus la présence de la "all-in-one", et puis ce n'est pas compliquée d'héberger le code du script JS sur des éditeur de texte en ligne avec fonction d'affichage "raw" ;)

#Problème connu

Parfois il peut arriver qu'un addslashes() pose problème avec les 'http://www.url.com/of/your/script.js', dans ce cas il vous suffit d'encoder votre url en hexadécimal et lui faire prendre en compte comm ça en remplaçant " ,'URL_OF_YOUR_HEBERGED_SCRIPT', " par " ,0xYOUR_URL_HEXADECIMAL_ENCODED, ".
Utilisez l'addon HackBar sur firefox pour encoder en hexa votre url, ou le site www.rapidtables.com/convert/number/ascii-to-hex.htm 

#Changelog

**V1.1** : 
Refonte du script de dump : 
Le dump est désormais au format CSV
Affiche une première ligne contenant les nom de tables avant les données

**V1.0.1** : Correction d'un bug faisant planter l'injection dans de rare cas. 
Imaginons, nous avons ce code : 

$result = nl2br($mysql['result']['somevariable']);
echo $result;

Et bien nl2br va venir nous faire chier et mettre des <br /> partout. ce qui fait beuger la première partie du script contenant les informations. Corrigé par le retrait des saut de ligne inutile ainsi que l'ajour de // à chaque fin de phrase pour commenter les éventuels <br /> ajouté.


**V1.0** : first release !

#Futur 

v1.2 : Ajout d'infos en plus (hostane notament), amélioration de la page listant les colonnes d'une table, fonction de dump de fichier sur le serveur
