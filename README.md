# GODSqli
GODSqli est un script de test d'injection sql de type UNION QUERY

Dérivé du script SQiGOD de makman, celui ci est une version améliorée, corrigée et surtout plus légère !

#Qu'est ce que c'est?

GODSqli est un script qui permet de tester et docuimenter un type précis de faille SQL, les UNION QUERY.
Celui si ce place dans l'url comprennant la faille et permet d'afficher un outil presque tout en un permettant d'avoir diverses informations sur la/les base(s) de donnée(s), leurs contenu, etc, tel que le ferais un phpmyadmin.

#/!\ATTENTION/!\
IL est évident que cet outil NE DOIS PAS être utilisé dans un contexte malveillant. Il ne dois être utilisé que contre vos propres serveurs ou avec l'accord du propriétaire du serveur visé. L'auteur de GODSqli ne pourra en aucun cas être tenu responçable de toute utilisation malveillante et non autorisée de ce script.

#Améliorations 

GODSqli ce présente en deux version : 

  Une version "tout en un", aussi longue que l'original mais ne néssessitant rien d'autre, longue de 7913 caractères
  Une version "décentralisée", qui héberge toute la partie JS sur un serveur de votre choix, réduisant de plus de 90% la taille du script dans l'url, passant à 738 caractères !

#Comment ça fonctionne

Il suffit de mettre en ligne le contenu de source.js sur votre serveur, et d'injecter dans l'urlla syntaxe de syntax.txt en remplaçant "URL_OF_YOUR_HEBERGED_SCRIPT" par l'adresse de votre version hébergée de source.js
Vous pouvez aussi choisir de prendre la version "all in one", qui ne néssessite pas d'hébergement externe du script mais est extrêmement longue (7900 caractères) et provoque souvent des problème du à la taille de l'url.

#Problème connu

Parfois il peut arriver qu'un addslashes() pose problème avec les 'http://www.url.com/of/ytour/script.js', dans ce cas il vous suffit d'encoder votre url en hexadécimal et lui faire prendre en compte comm ça en remplaçant " ,'URL_OF_YOUR_HEBERGED_SCRIPT', " par " ,0xYOUR_URL_HEXADECIMAL_ENCODED, ".
Utilisez l'addon HackBar sur firefox pour encoder en hexa votre url, ou le site www.rapidtables.com/convert/number/ascii-to-hex.htm 

#Changelog

*V1.0.1* : Correction d'un bug faisant planter l'injection dans de rare cas. 
Imaginons, nous avons ce code : 

$result = nl2br($mysql['result']['somevariable']);
echo $result;

Et bien nl2br va venir nous faire chier et mettre des <br /> partout. ce qui fait beuger la première partie du script contenant les informations. Corrigé par le retrait des saut de ligne inutile ainsi que l'ajour de // à chaque fin de phrase pour commenter les éventuels <br /> ajouté.


*V1.0* : first release !

#Futur 

*V1.1* : 
Ajout de la création d'un dump au format CSV conforme
