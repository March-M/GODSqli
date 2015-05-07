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
