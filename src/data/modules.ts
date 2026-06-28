/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TrainingModule } from "../types";

export const TRAINING_MODULES: TrainingModule[] = [
  {
    id: 1,
    title: "Découverte du métier de téléconseiller",
    duration: "45 min",
    description: "Comprendre le rôle, les différents types de centres d'appels, la journée type et les indicateurs clés de performance (KPI) incontournables.",
    coursText: `Le téléconseiller (ou conseiller client à distance) est le premier point de contact entre une entreprise et ses clients. Ce métier exige une excellente élocution, une grande capacité d'écoute et une résistance au stress.

### Les deux grands types d'activités
* **Les appels entrants (Inbound) :** Le client appelle le centre de sa propre initiative. L'objectif est d'apporter une solution rapide et qualitative (assistance technique, service après-vente, information commerciale ou résolution de réclamation).
* **Les appels sortants (Outbound) :** C'est le conseiller qui contacte une liste de prospects ou de clients. L'objectif est souvent commercial ou de fidélisation (télévente, prospection, enquêtes de satisfaction, prise de rendez-vous ou relance de factures impayées).

### Les Indicateurs Clés de Performance (KPI)
Pour mesurer l'efficacité d'un téléconseiller et du plateau, les managers suivent des KPI très précis :
1. **La DMT (Durée Moyenne de Traitement) :** Temps total consacré à un dossier (Temps d'attente de mise en relation + Temps de conversation active + Temps de qualification dans le CRM après l'appel, nommé 'Wrap-up'). Une bonne DMT concilie rapidité et satisfaction client.
2. **Le Taux de Décroché :** Pourcentage d'appels pris en charge par l'équipe par rapport au nombre total d'appels reçus. L'objectif standard se situe souvent au-dessus de 95%.
3. **Le FCR (First Contact Resolution) :** Taux de résolution dès le premier appel. C'est l'indicateur roi de la satisfaction client.

### La journée type
Une journée de téléconseiller commence par un briefing d'équipe (les indicateurs de la veille, les objectifs du jour et les cas sensibles). Ensuite, les sessions d'appels s'enchaînent selon des créneaux précis, alternant conversations, saisies de formulaires de suivi et courtes pauses réglementaires.

### Les secteurs qui recrutent le plus
Le métier ne se limite pas à la téléphonie. On trouve des conseillers clients dans la banque et l'assurance (gestion de contrats, sinistres), les télécoms et le e-commerce (SAV, livraisons), l'énergie (relevés, contestations de facture), et la santé (prise de rendez-vous, tiers payant). Chaque secteur a son propre vocabulaire technique à apprendre, mais la méthode d'entretien téléphonique reste la même.

### Les qualités humaines (soft skills) qui font la différence
Au-delà des techniques enseignées dans ce parcours, certains traits comportementaux distinguent un bon conseiller : la régulation émotionnelle (ne pas prendre l'agressivité d'un client pour soi), la capacité à reformuler sans déformer, et la discipline d'écrire des fiches CRM claires pour les collègues qui reprendront le dossier après vous.`,
    extraHTMLTable: [
      { kpi: "Posture requise", entrant: "Empathie, réactivité et sens aigu de l'écoute", sortant: "Persévérance, dynamisme et force de persuasion" },
      { kpi: "Flux d'activité", entrant: "Subi (dépend des pics d'appels clients)", sortant: "Maîtrisé (géré par le numéroteur automatique CRM)" },
      { kpi: "Objectif principal", entrant: "Résoudre le problème, rassurer et fidéliser", sortant: "Argumenter, convaincre et conclure la vente ou le RDV" },
      { kpi: "Principale difficulté", entrant: "Gérer l'agressivité des clients mécontents", sortant: "Essuyer de nombreux refus ou raccrochages" }
    ],
    retractionText: "Retenez qu'un bon téléconseiller doit maîtriser ses indicateurs clés : minimiser la DMT tout en maximisant la satisfaction client (FCR). Les appels entrants requièrent plus de patience pour résoudre les difficultés, tandis que les appels sortants demandent de la ténacité face au rejet.",
    quiz: [
      {
        id: 101,
        question: "Que signifie concrètement l'acronyme 'DMT' ?",
        options: [
          "Durée Minimale de Transmission",
          "Durée Moyenne de Traitement",
          "Délai Maximal de Transit d'appel",
          "Distribution Multicanale Directe"
        ],
        correctAnswerIndex: 1,
        explanation: "La DMT (Durée Moyenne de Traitement) mesure le temps de communication additionné au temps de traitement post-appel (wrap-up) et de l'attente éventuelle."
      },
      {
        id: 102,
        question: "Parmi les activités suivantes, laquelle relève des 'appels sortants' ?",
        options: [
          "L'assistance technique d'un SAV de téléphones portables",
          "Le traitement des réclamations de facturation d'un client",
          "La relance téléphonique de factures impayées",
          "La prise de commande d'un catalogue après un spot TV"
        ],
        correctAnswerIndex: 2,
        explanation: "La relance de factures impayées consiste à appeler un client de manière proactive. C'est une activité d'appels sortants (Outbound)."
      },
      {
        id: 103,
        question: "Qu'est-ce que le 'FCR' (First Contact Resolution) ?",
        options: [
          "Le taux de résolution dès le premier appel",
          "La rapidité de décroché du premier agent libre",
          "La formule de calcul du ratio de conversion",
          "Le fait de transférer rapidement l'appel vers un niveau expert"
        ],
        correctAnswerIndex: 0,
        explanation: "Le FCR mesure la proportion de problèmes résolus complètement dès la première prise de contact, évitant ainsi un rappel du client."
      },
      {
        id: 104,
        question: "Qu'englobe le temps de traitement post-appel appelé 'Wrap-up' ?",
        options: [
          "Le temps d'attente du client avant la mise en relation",
          "La rédaction du résumé de l'appel et de la mise à jour de la fiche client dans le CRM",
          "La pause café accordée après un appel stressant et long",
          "La numérotation automatique du dossier d'appel suivant"
        ],
        correctAnswerIndex: 1,
        explanation: "Le Wrap-up est la phase post-appel où le conseiller rédige l'historique et qualifie la fiche prospect/client dans le logiciel CRM."
      },
      {
        id: 105,
        question: "Un taux de décroché de 96% signifie que :",
        options: [
          "96% des appels entrants sont abandonnés par les clients",
          "Le conseiller passe 96% de son temps en conversation active",
          "Seuls 4% des appels entrants n'ont pas été pris en charge",
          "96% des ventes à distance ont été conclues avec succès"
        ],
        correctAnswerIndex: 2,
        explanation: "Le taux de décroché de 96% indique que sur 100 appels arrivés sur le serveur de l'entreprise, 96 ont été répondus par un conseiller. 4% restent en échec."
      }
    ]
  },
  {
    id: 2,
    title: "La relation client à distance",
    duration: "60 min",
    description: "Maîtriser les piliers de l'accueil à distance : écoute active, empathie naturelle, écueils verbaux et reformulation professionnelle.",
    coursText: `Parler au téléphone requiert une technique solide. Puisque vous ne disposez pas du langage corporel visuel, tout passe par le ton, l'écoute et les mots choisis.

### L'Écoute Active : La technique reine du téléconseiller
L'écoute active consiste à se focaliser pleinement sur ce que dit le client, sans l'interrompre, en l'accueillant sans jugement. Elle comporte 3 étapes fondamentales :
1. **La réceptivité :** Laisser le client exposer son cas entièrement, en émettant des petits signaux d'attention phoniques neutres ('Oui', 'D'accord', 'Je comprends').
2. **L'empathie :** Valider et verbaliser l'émotion du client ('Je comprends tout à fait votre mécontentement', 'Je mesure la gêne occasionnée').
3. **La reformulation :** Valider la bonne compréhension de la demande avant d'agir en répétant les points clés : "Si j'ai bien compris, vous souhaitez que...".

### 6 Dialogues Comparatifs (Mauvais vs Bon Exemples)
Analysez attentivement comment une mauvaise posture bloque le client et comment une posture empathique désamorce la tension et résout la situation.

### Le lexique à bannir et ses alternatives
Certains mots, même prononcés sans mauvaise intention, ferment le dialogue ou installent une posture défensive. Voici les substitutions à automatiser :
- « C'est impossible » → « Voici ce que je peux vous proposer »
- « Vous devez » → « Je vous invite à »
- « Le problème » → « Le point à régler » ou « la situation »
- « Je ne sais pas » → « Je me renseigne immédiatement pour vous »
- « C'est pas mon service » → « Je vous mets en relation avec le bon interlocuteur »`,
    dialoguesList: [
      {
        title: "Cas 1: Le client pressé face à un problème de livraison",
        badText: "Client : Bonjour, j'ai commandé hier et je n'ai toujours rien ! C'est urgent !\nConseiller : Ben déjà bonjour, la livraison prend 48h madame, donc c'est normal. Faut attendre demain.",
        goodText: "Client : Bonjour, j'ai commandé hier et je n'ai toujours rien ! C'est urgent !\nConseiller : Bonjour Madame. Je comprends parfaitement votre urgence. Nous allons vérifier ensemble le statut actuel de votre envoi. Pouvez-vous me transmettre votre numéro de commande, s'il vous plaît ?"
      },
      {
        title: "Cas 2: Une erreur de facturation évidente",
        badText: "Client : On m'a prélevé deux fois la même mensualité, c'est intolérable !\nConseiller : C'est pas moi qui fait les comptes de l'entreprise monsieur. Je peux rien y faire, faut faire un mail au service financier.",
        goodText: "Client : On m'a prélevé deux fois la même mensualité, c'est intolérable !\nConseiller : Je comprends tout à fait votre mécontentement, c'est en effet une anomalie. Soyez rassuré, je prends immédiatement en charge votre dossier pour identifier ce prélèvement et lancer la procédure de remboursement règlementaire aujourd'hui."
      },
      {
        title: "Cas 3: Le conseiller qui utilise un jargon trop complexe",
        badText: "Client : Mon boîtier internet clignote rouge.\nConseiller : Ah c'est un problème d'interopérabilité DHCP sur le module WAN. Je vais push un hard reset du DSLAM, repassez sur l'interface IPv4.",
        goodText: "Client : Mon boîtier internet clignote rouge.\nConseiller : C'est un simple défaut d'échange de signal entre votre décodeur et votre ligne. Ne vous inquiétez pas, nous allons effectuer ensemble une petite manipulation de redémarrage qui ne prendra qu'une minute."
      },
      {
        title: "Cas 4: Demande d'un profil hors-critère",
        badText: "Client : Est-il possible d'avoir une dérogation pour ce forfait exclu ?\nConseiller : Non, c'est impossible. C'est écrit dans le contrat de vente que c'est réservé aux nouveaux arrivants.",
        goodText: "Client : Est-il possible d'avoir une dérogation pour ce forfait exclu ?\nConseiller : Cette offre est effectivement exclusivement réservée à nos nouveaux abonnés. Cependant, au vu de votre fidélité, je vous propose d'étudier nos solutions alternatives équivalentes pour ajuster au mieux votre tarif actuel."
      },
      {
        title: "Cas 5: Le client qui s'impatiente durant une recherche",
        badText: "Conseiller : (Silence radio pendant 2 minutes)\nClient : Allô ? Y a quelqu'un ? Je parle tout seul ?\nConseiller : Je cherche monsieur, faut me laisser le temps.",
        goodText: "Conseiller : Je procède à la recherche informatique sur votre dossier, cela prend environ 30 secondes. Je vous garde en ligne, vous m'entendez bien ?\nClient : Oui, d'accord.\nConseiller : Parfait, la recherche progresse, j'accède immédiatement à vos données."
      },
      {
        title: "Cas 6: Le client qui menace de partir chez un concurrent",
        badText: "Client : Si c'est comme ça, je pars chez le concurrent, c'est moins cher chez eux !\nConseiller : Ben allez-y si vous voulez, c'est votre droit, je peux pas vous retenir de force.",
        goodText: "Client : Si c'est comme ça, je pars chez le concurrent, c'est moins cher chez eux !\nConseiller : Je comprends votre sensibilité au prix, et je ne veux pas vous voir partir sur cette frustration. Avant toute décision, laissez-moi regarder s'il existe une offre plus adaptée à votre usage actuel."
      }
    ],
    retractionText: "À retenir : Évitez à tout prix le jargon professionnel agressif, les négations directes ('Non', 'Impossible') et le silence non annoncé. Privilégiez la reformulation empathique et l'engagement d'aide immédiat pour asseoir votre professionnalisme.",
    quiz: [
      {
        id: 201,
        question: "Quelle attitude respecte la règle d'or du traitement d'un client au téléphone ?",
        options: [
          "L'interrompre dès qu'on a repéré la solution pour gagner du temps",
          "Écouter activement sans couper la parole, puis reformuler pour confirmer la demande",
          "Lui expliquer le fonctionnement interne des serveurs informatiques",
          "Conserver un silence complet sans l'informer des manipulations que l'on effectue en arrière-plan"
        ],
        correctAnswerIndex: 1,
        explanation: "L'écoute active et la reformulation permettent d'éviter les malentendus et font se sentir le client considéré et écouté."
      },
      {
        id: 202,
        question: "Quelle phrase est une bonne marque d'empathie professionnelle ?",
        options: [
          "Calmez-vous monsieur, ça ne sert à rien de s'énerver pour si peu.",
          "C'est un problème généralisé, vous n'êtes pas le seul dans ce cas de figure.",
          "Je comprends tout à fait la gêne que cela vous cause, et je vous propose d'y remédier tout de suite.",
          "C'est dommage, mais nos conditions générales de ventes interdisent tout remboursement."
        ],
        correctAnswerIndex: 2,
        explanation: "Valider l'émotion du client ('Je comprends la gêne') et enchaîner sur une proposition concrète d'action est la structure idéale d'une réponse empathique."
      },
      {
        id: 203,
        question: "Pourquoi est-il crucial de reformuler la demande du client ?",
        options: [
          "Pour allonger artificiellement la durée de l'appel",
          "Pour montrer que l'on maîtrise mieux le vocabulaire technique que lui",
          "Pour valider d'un commun accord que l'on a parfaitement compris son problème",
          "Pour lui faire répéter ses coordonnées personnelles de facturation"
        ],
        correctAnswerIndex: 2,
        explanation: "La reformulation est l'étape de validation d'un commun accord de la compréhension mutuelle de la situation."
      },
      {
        id: 204,
        question: "Lors d'une recherche informatique de 45 secondes, que doit faire le conseiller ?",
        options: [
          "Laisser le client s'occuper seul dans le silence sans prévenir",
          "Prévenir le client de l'attente, l'informer que l'on reste en ligne, et meubler ponctuellement",
          "Mettre en garde le client que le système informatique est très défaillant",
          "Raccrocher à son nez et espérer qu'il sera rappelé par un autre collègue"
        ],
        correctAnswerIndex: 1,
        explanation: "Le silence crée de l'anxiété au bout du fil. Il convient de rassurer le client en l'informant de la recherche et du maintien du contact vocal."
      },
      {
        id: 205,
        question: "Quel terme représente un 'écueil de communication' (mot noir à bannir) ?",
        options: [
          "Absolument",
          "Je vous propose d'étudier...",
          "C'est impossible",
          "Parfaitement"
        ],
        correctAnswerIndex: 2,
        explanation: "Les tournures absolues négatives comme 'C'est impossible' dressent un mur face au client. Privilégiez des reformulations d'orientations constructives."
      },
      {
        id: 206,
        question: "Un client menace de partir chez un concurrent moins cher. Quelle est la meilleure réaction ?",
        options: [
          "Le laisser partir immédiatement, c'est son droit le plus strict",
          "Reconnaître sa préoccupation tarifaire et proposer d'étudier une solution adaptée avant qu'il ne décide",
          "Lui expliquer que le concurrent a une mauvaise qualité de service",
          "Lui proposer une remise immédiate sans poser de question"
        ],
        correctAnswerIndex: 1,
        explanation: "Accueillir la préoccupation sans se braquer, puis proposer d'étudier une alternative, permet souvent de retenir le client sans céder précipitamment sur le prix."
      }
    ]
  },
  {
    id: 3,
    title: "La communication verbale et vocale",
    duration: "45 min",
    description: "Apprivoiser les paramètres physiques de la voix : ton, débit de parole, le sourire s'entendant au téléphone, et les scripts d'accueil réglementaires.",
    coursText: `Parce que votre interlocuteur ne vous voit pas, votre voix véhicule toute l'image professionnelle de votre entreprise. 

### Les 4 paramètres de la voix (les piliers de l'impact vocal)
1. **L'Intonation (le Ton) :** Il doit être chaleureux, dynamique et bienveillant. Évitez le ton monocorde, mécanique, rappelant un répondeur vocal désincarné.
2. **Le Débit :** Adaptez votre débit à celui du client. S'il parle posément, ralentissez. Si le client est pressé, soyez alerte. Idéalement, visez un débit moyen de 130 à 150 mots par minute.
3. **Le Volume :** Ajustez le volume pour être audible sans pour autant crier dans votre casque.
4. **L'Articulation :** Détachez bien les syllabes, en particulier lors de la dictée de coordonnées (noms, adresses, emails, numéros de dossier).

### Le sourire au téléphone s'entend
Un sourire modifie physiquement la forme de la cavité buccale, ce qui apporte des fréquences plus aiguës et harmonieuses au timbre de la voix. Un sourire immédiat lors du décroché crée un sentiment instantané d'accueil chaleureux.

### 4 Scripts d'accueil de niveau professionnel
Découvrez les phrases d'accueil types dans quatre secteurs d'activités majeurs : la Banque, l'opérateur Télécom, le SAV Multimarques et le e-commerce.`,
    scriptsList: [
      {
        title: "Script 1 : Secteur Bancaire - Gestion haut de gamme",
        context: "Appel entrant standard de gestion de comptes de particuliers.",
        dialogue: [
          { speaker: "Conseiller", text: "« Banque Nationale Privée, bonjour. Laurent à votre écoute, en quoi puis-je vous être utile aujourd'hui ? »", comment: "Sourire perceptible, voix posée, identification claire de l'enseigne et du prénom de l'agent." },
          { speaker: "Client", text: "Bonjour, je voudrais connaître le plafond de ma carte bancaire s'il vous plaît.", comment: "Demande simple à identifier." },
          { speaker: "Conseiller", text: "« Tout à fait, je vais accéder immédiatement à votre dossier bancaire. Pour ce faire, pouvez-vous me communiquer votre identifiant à 8 chiffres ou votre nom de famille ? »", comment: "Enchaînement professionnel et sécurisé." }
        ]
      },
      {
        title: "Script 2 : Opérateur Télécom - Assistance Commerciale",
        context: "Appel entrant sur abonnement ADSL/Fibre résidentiel.",
        dialogue: [
          { speaker: "Conseiller", text: "« Horizon Télécom, bonjour. Je m'appelle Sophia, j'ai le plaisir de vous accompagner pour vos services Internet. Quel est le but de votre appel ? »", comment: "Empathique, valorise le rôle de conseiller." },
          { speaker: "Client", text: "Allô bonjour, je voudrais rajouter l'option TV Monde à mon offre.", comment: "Opportunité commerciale d'upgrade d'offre." },
          { speaker: "Conseiller", text: "« C'est une excellente idée ! Je me charge d'activer cette option sur votre ligne sur-le-champ. Permettez-moi simplement de relever le numéro de contrat figurant sur votre facture. »", comment: "Sourire enthousiaste, rebond direct." }
        ]
      },
      {
        title: "Script 3 : Service Après-Vente (SAV) - Électroménager",
        context: "Appel d'un client inquiet pour un appareil sous garantie en panne.",
        dialogue: [
          { speaker: "Conseiller", text: "« Service clients France Tech-SAV, bonjour. Thomas à votre service. Comment puis-je vous accompagner ? »", comment: "Ton très orienté service, rassurant." },
          { speaker: "Client", text: "Bonjour, mon lave-vaisselle acheté il y a 3 mois fuit partout dans la cuisine, c'est intolérable !", comment: "Client stressé et mécontent." },
          { speaker: "Conseiller", text: "« Oh, je mesure combien le désagrément est important pour votre foyer. Rassurez-vous, nous allons immédiatement identifier une solution de dépannage ou de remplacement d'un technicien. »", comment: "Empathie immédiate, validation de la douleur avant toute recherche de preuve." }
        ]
      },
      {
        title: "Script 4 : E-commerce - Suivi de colis",
        context: "Appel entrant d'un client qui suit sa commande sur une marketplace généraliste.",
        dialogue: [
          { speaker: "Conseiller", text: "« Bonjour et bienvenue sur le service client ShopLine, je suis Inès. Comment puis-je vous aider concernant votre commande ? »", comment: "Identification de la marque, prénom, ton dynamique et orienté solution." },
          { speaker: "Client", text: "Bonjour, mon colis devait arriver hier et le suivi ne bouge plus depuis 3 jours.", comment: "Inquiétude légitime, le client veut de la visibilité." },
          { speaker: "Conseiller", text: "« Je comprends votre inquiétude, un suivi figé peut être source de stress. Je vérifie immédiatement le statut auprès du transporteur et je reviens vers vous avec une réponse précise dans l'instant. »", comment: "Reformulation empathique suivie d'une action concrète et d'un délai annoncé." }
        ]
      }
    ],
    retractionText: "À retenir : Articulez parfaitement, souriez en parlant car la voix s'illumine instantanément. Ne négligez jamais la phrase d'accueil réglementaire : Enseigne + Prénom + Formule de politesse.",
    quiz: [
      {
        id: 301,
        question: "Pourquoi dit-on scientifiquement que 'le sourire s'entend au téléphone' ?",
        options: [
          "Parce que la caméra de l'ordinateur transmet des ondes de bienveillance",
          "Le sourire étire les cordes vocales et la cavité buccale, rendant le son plus clair et aigu",
          "C'est un mythe inventé par les directeurs de centres d'appels pour faire plaisir",
          "Cela réduit automatiquement la durée de traitement post-appel"
        ],
        correctAnswerIndex: 1,
        explanation: "Sourire modifie la configuration phonatoire, ce qui donne un timbre plus chaleureux, harmonieux et engageant à l'oreille de votre interlocuteur."
      },
      {
        id: 302,
        question: "Quelle est la structure recommandée pour un script d'accueil standard ?",
        options: [
          "Nom du conseiller + Allô qu'est-ce que vous voulez ?",
          "Nom de l'entreprise + Prénom du conseiller + Formule de politesse chaleureuse",
          "Numéro de dossier direct pour gagner du temps + Bonjour",
          "Veuillez patienter je vous prie"
        ],
        correctAnswerIndex: 1,
        explanation: "Une ouverture institutionnelle irréprochable se structure ainsi : Marque de l'entreprise + Prénom de l'agent + Formule de politesse d'invitation au dialogue."
      },
      {
        id: 303,
        question: "Idéalement, de combien doit être le débit verbal d'un conseiller ?",
        options: [
          "De 50 mots par minute, pour bien articuler chaque lettre comme un robot",
          "De 130 à 150 mots par minute, adapté au rythme de confort du client",
          "De plus de 250 mots par minute pour écourter la DMT",
          "Peu importe, le client n'écoute pas la vitesse mais la solution technique"
        ],
        correctAnswerIndex: 1,
        explanation: "Un rythme moyen de 130-150 mots/minute assure clarté, compréhension aisée, sans agresser ni lasser l'interlocuteur."
      },
      {
        id: 304,
        question: "Comment corriger un client qui parle d'une voix très basse et inaudible ?",
        options: [
          "Lui crier dessus : 'Allô vous m'entendez ?! Parlez plus fort !'",
          "Régler son micro et lui proposer poliment : 'Pardonnez-moi, je vous entends très faiblement, pouvez-vous vous rapprocher un peu de votre combiné ?'",
          "Soupirer ostensiblement pour lui faire remarquer son erreur d'éloignement",
          "Changer d'interlocuteur immédiatement sans avertissement préalable"
        ],
        correctAnswerIndex: 1,
        explanation: "Repérer un défaut technique avec courtoisie en faisant peser la responsabilité gentiment sur l'éloignement physique du micro est idéal."
      },
      {
        id: 305,
        question: "Si un client énonce les lettres d'une adresse email à toute vitesse, il convient de :",
        options: [
          "Taper au hasard ce que l'on croit comprendre",
          "L'interrompre brusquement et dire de renvoyer un courrier postal",
          "Demander de ralentir poliment : 'Je note l'adresse au fur et à mesure, pour être certain de bien l'enregistrer, pouvez-vous me donner les lettres une à une ?'",
          "Écrire l'email en phonétique française classique"
        ],
        correctAnswerIndex: 2,
        explanation: "Faire valider l'exactitude de la prise d'information en cadrant le rythme avec délicatesse évite les erreurs de retranscription, préjudiciables au FCR."
      },
      {
        id: 306,
        question: "Un client s'inquiète car le suivi de son colis ne bouge plus depuis plusieurs jours. Quelle réponse respecte la méthode vue dans ce module ?",
        options: [
          "« C'est normal, les transporteurs sont souvent en retard, il n'y a rien à faire. »",
          "« Je comprends votre inquiétude, je vérifie immédiatement le statut auprès du transporteur et je vous réponds avec précision. »",
          "« Le suivi de colis n'est pas de mon ressort, contactez directement le transporteur. »",
          "« Attendez encore quelques jours avant de vous inquiéter. »"
        ],
        correctAnswerIndex: 1,
        explanation: "On valide l'émotion du client puis on annonce une action concrète et un retour précis — c'est la structure empathique enseignée tout au long du module."
      }
    ]
  },
  {
    id: 4,
    title: "La structure d'appel CROC",
    duration: "60 min",
    description: "Assimiler et appliquer la méthode CROC : la colonne vertébrale absolue de tout appel réussi étape par étape.",
    coursText: `La méthode **CROC** est le canevas de référence en centre de contact. Elle garantit que l'appel suit un fil directeur logique, professionnel, sans perte de temps inutile.

### Les 4 étapes de l'acronyme CROC
* **C - Contact :** Bonjour, identification de la marque, se présenter, valider l'identité du client (sécurisation du dossier).
* **R - Raison du contact :** Poser le motif de l'appel de manière claire et concise. "Je vous sollicite aujourd'hui au sujet de..." ou côté entrant : "Expliquez-moi en détail..."
* **O - Objectif :** La phase créatrice de l'appel. C'est ici que l'on argumente, questionne, résout la panne ou conclut la transaction commerciale.
* **C - Congé :** Clôture de l'appel. Résumer les actions convenues, demander de valider la solution, souhaiter une excellente fin de journée en souriant et raccrocher sans brutalité.

### Évitez le flou artistique
Sans la structure CROC, un conseiller passe 15 minutes à tourner autour du pot sans jamais acter la décision. Elle aide également à rationaliser la fameuse **DMT** (Durée Moyenne de Traitement).`,
    scriptsList: [
      {
        title: "Script CROC 1 : Enquête de satisfaction immobilière",
        context: "Appel sortant suite à livraison d'un appartement neuf.",
        dialogue: [
          { speaker: "Conseiller (C-Tact)", text: "« Bonjour Monsieur Martin. Ici Juliette de Dynastie Immobilier. Comment allez-vous aujourd'hui ? »", comment: "Contact chaleureux, identification rapide." },
          { speaker: "Conseiller (R-Aison)", text: "« Je me permets de vous contacter car vous avez récemment emménagé dans votre résidence de Lyon Presqu'île. »", comment: "Fixe immédiatement le sujet de l'appel." },
          { speaker: "Conseiller (O-Bjectif)", text: "« L'objectif est de réaliser un court point de satisfaction d'une minute sur la qualité des parties communes et votre accueil. Vos réponses nous sont précieuses. Acceptez-vous d'y répondre ? »", comment: "Verrouille l'accord du client et engage l'action." },
          { speaker: "Conseiller (C-Ongé)", text: "« Vos retours ont bien été consignés. Je vous remercie infiniment de votre temps. Je vous souhaite une excellente installation dans vos murs. Au revoir et à bientôt. »", comment: "Fermeture soignée et élégante." }
        ]
      },
      {
        title: "Script CROC 2 : SAV Litige livraison e-commerce",
        context: "Appel entrant suite à un colis arrivé endommagé.",
        dialogue: [
          { speaker: "Conseiller (C-Tact)", text: "« ShoppingExpress, bonjour. Damien à votre écoute. Permettez-moi de prendre votre nom de famille pour votre dossier ? »", comment: "Prend l'identité immédiate." },
          { speaker: "Client (R-Aison)", text: "Oui bonjour, j'ai reçu ma cafetière ce matin et la vitre en verre est complètement brisée !", comment: "Rappelle le litige physique." },
          { speaker: "Conseiller (O-Bjectif)", text: "« Oh, j'en suis sincèrement désolé. Nous allons résoudre cela. Je valide la référence de l'article sur mon écran, et je déclenche le renvoi express d'une nouvelle verseuse aujourd'hui même. »", comment: "L'objectif de traitement administratif est atteint immédiatement." },
          { speaker: "Conseiller (C-Ongé)", text: "« En tout cas, je reste à votre disposition. Le colis arrivera sous 48h. Avez-vous une autre question ? Parfait. Excellente dégustation à venir, au revoir. »", comment: "Reconduction de politesse et congé souriant." }
        ]
      }
    ],
    retractionText: "À retenir : CROC est votre carte routière. Un appel structuré limite les digressions, rassure l'interlocuteur sur vos compétences professionnelles et accélère le temps de traitement de l'incident.",
    quiz: [
      {
        id: 401,
        question: "Que signifie précisément l'acronyme CROC ?",
        options: [
          "Contact - Raison - Objectif - Congé",
          "Calcul - Relance - Option - Clôture",
          "Correction - Réception - Orientation - Conseil",
          "Client - Réclamation - Offre - Commande"
        ],
        correctAnswerIndex: 0,
        explanation: "CROC signifie Contact, Raison, Objectif et Congé. C'est l'ossature essentielle de tout traitement d'appel."
      },
      {
        id: 402,
        question: "À quelle étape du CROC correspond la phrase d'accueil réglementaire ?",
        options: [
          "Raison (R)",
          "Objectif (O)",
          "Contact (C)",
          "Congé (C)"
        ],
        correctAnswerIndex: 2,
        explanation: "La phrase d'accueil et d'identification de l'appelant relève logiquement de la première phase de Contact (C)."
      },
      {
        id: 403,
        question: "Que fait concrètement le conseiller durant la phase 'Objectif' ?",
        options: [
          "Il dit au revoir chaleureusement",
          "Il pose toutes ses questions, argumente son offre commerciale ou formule sa solution de dépannage",
          "Il se présente et décline l'identité de son entreprise",
          "Il rédige en silence le résumé dans son CRM"
        ],
        correctAnswerIndex: 1,
        explanation: "La phase 'Objectif' est le cœur opérationnel de l'échange : diagnostic informatique, proposition commerciale, traitement du cas."
      },
      {
        id: 404,
        question: "Quelle phrase illustre le compromis idéal de la phase de 'Congé' ?",
        options: [
          "Ouais c'est bon, à plus, bisous.",
          "C'est noté. Je vous remercie de nous avoir appelés. Je vous souhaite une excellente fin de journée. Au revoir.",
          "Bon, puisque j'ai fini de taper vos données, vous pouvez raccrocher maintenant.",
          "Rappelez-nous si jamais ça retombe en panne, au revoir."
        ],
        correctAnswerIndex: 1,
        explanation: "Une bonne conclusion assure la satisfaction finale du client et ferme la communication sur une formule courtoise et valorisante."
      },
      {
        id: 405,
        question: "Pourquoi l'étape 'Raison' doit-elle être explicitée clairement au début de la conversation ?",
        options: [
          "Pour forcer le client à se taire",
          "Pour focaliser l'attention mutuelle sur l'intérêt direct de l'appel et éviter les dérives",
          "Pour justifier le prélèvement d'un supplément sur la facture télécom",
          "Pour que le superviseur puisse enregistrer l'appel"
        ],
        correctAnswerIndex: 1,
        explanation: "Énoncer la raison du contact permet à l'esprit du conseiller et du client de s'accorder instantanément sur la thématique de travail."
      }
    ]
  },
  {
    id: 5,
    title: "Le questionnement et l'entonnoir",
    duration: "50 min",
    description: "Structurez vos diagnostics. Différencier questions ouvertes, fermées, alternatives et appliquer avec rigueur l'outil QQOQCP.",
    coursText: `Pour résoudre ou vendre, il faut d'abord poser un diagnostic d'une clarté de diamant. C'est l'art d'utiliser la technique dite de **l'Entonnoir**.

### La technique de l'entonnoir commerciale et technique
On commence toujours large (questions ouvertes) pour faire parler le client et obtenir du contexte, puis on resserre avec des questions ciblées (questions alternatives), pour finir par figer l'accord avec des validations (questions fermées).

* **La question ouverte :** Stimule l'échange, invite au développement ('Comment s'est manifestée la panne ?').
* **La question alternative :** Propose deux choix pour orienter ('Préférez-vous être livré le matin ou l'après-midi ?').
* **La question fermée :** Valide un point précis, appelle une réponse binaire récapitulative ('Avez-vous bien reçu notre email de validation ?').

### L'aide-mémoire ultime : Le QQOQCP
* **Q**uoi ? (Quel est le problème précis ?)
* **Q**ui ? (Qui est impacté ? Le propriétaire ? Un locataire ?)
* **O**ù ? (Sur quel équipement ou dans quelle pièce ?)
* **Q**uand ? (Depuis quelle date ou heure précise ?)
* **C**omment ? (Quelles actions ont déclenché l'anomalie ?)
* **P**ourquoi ? (Quels sont les objectifs secondaires du client ?)`,
    extraHTMLTable: [
      { type: "Questions Ouvertes", exemple: "Comment s'est produit l'incident ?", utilite: "Faire s'exprimer le client libéralement au début de l'appel" },
      { type: "Questions Fermées", exemple: "Disposez-vous de votre clé ?", utilite: "Obtenir une confirmation binaire ferme et rapide" },
      { type: "Questions Alternatives", exemple: "Mardi à 10h ou jeudi à 15h ?", utilite: "Orienter le choix en évitant les réponses de type 'Non'" },
      { type: "Questions de Rebond", exemple: "Vous mentionniez cela, c'est-à-dire ?", utilite: "Approfondir un aspect flou de la formulation interne" }
    ],
    retractionText: "À retenir : Conduisez l'entretien ! Ne subissez pas le flux de paroles du client. Utilisez les questions ouvertes au début pour comprendre, fermées à la fin pour acter la signature ou la validation.",
    quiz: [
      {
        id: 501,
        question: "Quel type de question débute idéalement la phase de diagnostic ?",
        options: [
          "Une question fermée directive",
          "Une question ouverte qui invite à l'expression large",
          "Une question alternative piégeuse",
          "Pas de question, le conseiller doit deviner seul"
        ],
        correctAnswerIndex: 1,
        explanation: "Une question ouverte donne la parole au client pour exposer le contexte entier sans barrières d'emblée."
      },
      {
        id: 502,
        question: "Laquelle de ces questions est une question alternative ?",
        options: [
          "Dites-moi tout, qu'est-ce qui cloche ?",
          "Mettez-vous votre carte de crédit là ?",
          "Souhaitez-vous être rappelé par le manager ce soir ou demain matin ?",
          "Confirmez-vous être d'accord ?"
        ],
        correctAnswerIndex: 2,
        explanation: "La question alternative propose deux options valables pour encourager la décision sans ouvrir la porte au refus brut."
      },
      {
        id: 503,
        question: "Que signifie l'acronyme QQOQCP ?",
        options: [
          "Quoi, Qui, Où, Quand, Comment, Pourquoi",
          "Qualité, Quantité, Option, Outillage, Client, Prix",
          "Questionner, Qualifier, Orienter, Obtenir, Confirmer, Prendre note",
          "Quotien, Quartier, Optionnel, Quantifiable, Coût, Plus"
        ],
        correctAnswerIndex: 0,
        explanation: "Il s'agit d'une suite logique de questionnement systématique pour appréhender n'importe quelle situation sans zone d'ombre : Quoi, Qui, Où, Quand, Comment, Pourquoi."
      },
      {
        id: 504,
        question: "Quelle phrase représente une question fermée évidente ?",
        options: [
          "Où se trouve votre prise principale ?",
          "Pourquoi votre abonnement a-t-il été résilié à cette date ?",
          "Avez-vous cliqué sur le bouton rouge ?",
          "D'après vous, comment pouvons-nous régler cela ?"
        ],
        correctAnswerIndex: 2,
        explanation: "La question 'Avez-vous cliqué...' n'admet que deux réponses possibles : Oui ou Non. Elle est donc fermée."
      },
      {
        id: 505,
        question: "Quel est le principal défaut d'un diagnostic mené uniquement avec des questions fermées ?",
        options: [
          "Il est beaucoup trop long",
          "Il donne le sentiment au client de subir un interrogatoire de police froid et agressif",
          "Il n'apporte aucune information solide",
          "Il empêche de tarifer les options commerciales du dossier"
        ],
        correctAnswerIndex: 1,
        explanation: "Un enchaînement ininterrompu de questions fermées crée une ambiance coercitive et empêche le partage de détails subtils importants."
      }
    ]
  },
  {
    id: 6,
    title: "L'argumentation avec la méthode CAB",
    duration: "60 min",
    description: "Apprendre à vendre et valoriser les offres grâce à l'ossature CAB : Caractéristique, Avantage concurrentiel et Bénéfice pour le client.",
    coursText: `Pour convaincre un prospect, lister des données brutes ne suffit pas. Un client n'achète pas un produit pour ses propriétés techniques, mais pour ce que celles-ci lui apportent au quotidien. C'est l'essence même de la méthode **CAB**.

### Comment construire un bon argument CAB ?
1. **C - Caractéristique :** Le fait technique, la propriété intrinsèque, incontestable du produit ou service (ex: 'Cette batterie fait 5000 mAh').
2. **A - Avantage :** Ce que cette caractéristique permet de faire de mieux par rapport au marché (ex: 'Elle offre une autonomie supérieure de 30% par rapport aux autres modèles').
3. **B - Bénéfice client :** La traduction personnalisée de l'avantage dans le quotidien de ce client précis (ex: 'Vous pourrez utiliser votre GPS en randonnée toute la journée sans craindre la coupure, plus besoin d'emporter un chargeur encombrant').

### Lier l'argument au besoin
Un bon téléconseiller doit d'abord identifier le besoin du client (sécurité, confort, argent, nouveauté) lors de l'entonnoir et choisir le bénéfice correspondant.`,
    extraHTMLTable: [
      { item: "Fiche 1: Forfait Fibre Pro", cab: "C: Débit symétrique de 1 Gbps | A: Envoi de fichiers volumineux 10 fois plus rapide | B: Vos équipes graphiques gagnent 2h de productivité par jour." },
      { item: "Fiche 2: Mutuelle Seniors", cab: "C: Prise en charge des soins d'optique à 300% | A: Reste à charge proche de zéro chez nos opticiens agréés | B: Vous changez de lunettes haut de gamme sans toucher à vos économies." },
      { item: "Fiche 3: Solution Cloud Auto", cab: "C: Chiffrement de données en AES-256 bits | A: Cryptage de niveau défense militaire impossible à déchiffrer | B: Vos brevets d'invention sont en sécurité absolue contre l'espionnage industriel." },
      { item: "Fiche 4: Thermostat Intelligent", cab: "C: Algorithme prédictif météo intégré | A: Coupe le chauffage dès que le soleil réchauffe les vitres | B: Vous économisez jusqu'à 250 € par an sur votre facture énergétique d'hiver." },
      { item: "Fiche 5: Assistante Administrative", cab: "C: Assistante dédiée bilingue diplômée | A: Gestion des relances et des agendas sans charges patronales | B: Vous vous concentrez à 100% sur le développement commercial de votre entreprise." },
      { item: "Fiche 6: Assurance Voiture Multi", cab: "C: Option assistance zéro kilomètre incluse | A: Dépannage gratuit devant votre propre domicile | B: Aucun stress le matin si votre batterie lâche, un mécanicien vient la réparer." }
    ],
    retractionText: "À retenir : Ne parlez jamais d'une caractéristique brute sans l'associer à son bénéfice pour le client. C'est le bénéfice (le gain de temps, d'argent, de confort ou de sécurité) qui déclenche l'acte d'achat.",
    quiz: [
      {
        id: 601,
        question: "Que signifie au juste la formule 'CAB' ?",
        options: [
          "Client - Achat - Budget",
          "Caractéristique - Avantage - Bénéfice",
          "Contrat - Adhésion - Bilan",
          "Communication - Aptitude - Bienveillance"
        ],
        correctAnswerIndex: 1,
        explanation: "CAB signifie Caractéristique, Avantage, Bénéfice. C'est l'ossature de base de la persuasion en vente."
      },
      {
        id: 602,
        question: "Laquelle de ces affirmations est une 'Caractéristique' pure ?",
        options: [
          "Ce chauffe-eau a une capacité de 200 litres en acier inoxydable.",
          "Grâce à cela, vos enfants auront toujours de l'eau chaude disponible !",
          "C'est la solution la plus économique du marché actuel.",
          "Vous allez faire de substantielles économies sur votre facture électrique."
        ],
        correctAnswerIndex: 0,
        explanation: "La capacité physique de 200L et le matériel acier inoxydable constituent des faits techniques, donc des Caractéristiques précises."
      },
      {
        id: 603,
        question: "Qu'est-ce qui différencie l'Avantage (A) du Bénéfice client (B) ?",
        options: [
          "Il n'y a aucune différence réelle, ce sont des synonymes exacts",
          "L'avantage est général alors que le bénéfice est personnalisé aux attentes spécifiques du client",
          "L'avantage est le prix de l'adhésion mensuelle tandis que le bénéfice est la marge brute du vendeur",
          "L'avantage est juridique alors que le bénéfice est strictement à caractère obligatoire"
        ],
        correctAnswerIndex: 1,
        explanation: "L'avantage est un atout générique du produit par rapport à ses concurrents. Le bénéfice est l'impact de cet atout adapté à la vie intime de ce client précis."
      },
      {
        id: 604,
        question: "Quelle transition permet de lier idéalement une caractéristique à un avantage ?",
        options: [
          "« Ce qui vous permet de ... »",
          "« C'est dommage pour vous ... »",
          "« Je vous force à choisir cela ... »",
          "« Nous avons l'obligation de ... »"
        ],
        correctAnswerIndex: 0,
        explanation: "La locution 'ce qui vous permet de...' ou 'grâce à cela vous allez...' permet de glisser élégamment du fait brut à la valeur pratique."
      },
      {
        id: 605,
        question: "Pourquoi les commerciaux novices échouent-ils souvent dans l'argumentation ?",
        options: [
          "Ils parlent trop de caractéristiques techniques ennuyeuses au lieu de projeter le client dans ses bénéfices concrets",
          "Ils ne proposent jamais d'options d'achat",
          "Leur voix est trop rauque et difficile à comprendre",
          "Ils n'ont pas accès au logiciel CRM de l'entreprise"
        ],
        correctAnswerIndex: 0,
        explanation: "Un excès de données techniques fatigue l'acheteur potentiel si ces dernières ne sont pas corrélées à une valeur d'usage valorisante pour sa vie de tous les jours."
      }
    ]
  },
  {
    id: 7,
    title: "Le traitement des objections - Niveau 1 (Prix)",
    duration: "55 min",
    description: "Apprivoiser l'objection majeure en télévente : le prix. Utiliser la méthode CRAC avec brio pour défendre vos valeurs.",
    coursText: `L'objection n'est pas un refus définitif. C'est la preuve que le prospect s'intéresse, mais qu'il a besoin d'être rassuré ou convaincu de la valeur de la proposition. Face à l'objection tarifaire, nous utilisons la méthode **CRAC**.

### Les 4 étapes de la méthode CRAC
1. **C - Creuser / Accueillir :** Ne jamais contester l'objection. Validez-la pour baisser la garde ('Je comprends tout à fait que le prix est un critère important pour vous...'). Puis posez des questions pour comprendre à quoi il compare votre offre.
2. **R - Rebondir :** Recadrer la perspective en montrant que la qualité ou les économies futures justifient l'investissement.
3. **A - Argumenter :** Développer un argumentaire CAB centré sur la rentabilité à long terme et la tranquillité d'esprit du client.
4. **C - Conclure / Valider :** Vérifier que le frein est levé et enchaîner sur la proposition de souscription ('Sommes-nous bien en accord sur ce point ?').

### 8 Objections Prix Types et Réponses Modèles (CRAC)
Étudiez ces 8 formulations écrites indispensables pour briller en entretien et sur le plateau.`,
    objectionsList: [
      { objection: "« C'est trop cher ! »", freinType: "Comparaison floue ou manque de valeur perçue.", remedes: ["C - Je comprends que vous fassiez attention à votre budget. Permettez-moi de vous demander, trop cher par rapport à quoi ?", "R/A - Notre pack inclut l'installation complète à domicile et une garantie de 5 ans pièces et main d'œuvre.", "C - Avec ces garanties, l'offre vous paraît-elle plus avantageuse ?"] },
      { objection: "« Je n'ai pas le budget ce mois-ci. »", freinType: "Trésorerie immédiate ou fausse barbe.", remedes: ["C - C'est récurrent en milieu de trimestre et je le conçois.", "R/A - C'est pourquoi nous proposons des facilités de paiement en sans frais avec un démarrage des prélèvements dans 60 jours seulement.", "C - Est-ce que cela rendrait l'acquisition plus fluide pour vous ?"] },
      { objection: "« Le concurrent X propose la même chose pour 15% de moins. »", freinType: "Comparaison directe.", remedes: ["C - Le concurrent X propose effectivement de bons tarifs.", "R/A - Cependant, avez-vous vérifié si le service d'assistance 7j/7 est inclus chez eux comme c'est le cas chez nous ? Car sans cela, une panne un dimanche bloque toute votre production.", "C - C'est cette sécurité de production qui fait la différence, êtes-vous d'accord ?"] },
      { objection: "« Je n'aime pas m'engager sur 12 mois. »", freinType: "Peur du contrat et besoin de liberté.", remedes: ["C - La liberté de choix est essentielle, je vous rejoins.", "R/A - L'engagement nous permet en contrepartie de vous prêter le matériel gratuitement et de stabiliser votre tarif contre l'inflation pendant un an.", "C - Préféreriez-vous payer le boîtier initial 200€ pour être libre d'arrêter ?"] },
      { objection: "« Je vais payer des frais de résiliation ailleurs. »", freinType: "Frais de rupture de contrat.", remedes: ["C - C'est effectivement un frein légitime.", "R/A - Notre groupe rembourse vos frais de résiliation actuels à hauteur de 150 € sur simple envoi de votre dernière facture.", "C - Cela lève-t-il cette contrainte financière pour vous ?"] },
      { objection: "« C'était gratuit avant, pourquoi payer maintenant ? »", freinType: "Changement de modèle économique.", remedes: ["C - C'est une excellente question, le passage au payant interroge toujours.", "R/A - L'abonnement finance l'absence totale de publicité et notre nouveau service client basé en France disponible en 2 clics.", "C - Le confort d'utilisation mérite-t-il ce faible investissement ?"] },
      { objection: "« Je n'amortirai jamais ce produit. »", freinType: "Peur d'inutilité et retour d'investissement faible.", remedes: ["C - C'est très judicieux de calculer la rentabilité d'avance.", "R/A - Nos clients constatent en moyenne un gain de 15h de travail par mois. Calculez votre taux horaire, le logiciel est rentabilisé dès le deuxième jour d'usage.", "C - Qu'en pensez-vous au vu de ces chiffres ?"] },
      { objection: "« Pouvez-vous me faire un rabais immédiat de 30% d'office ? »", freinType: "Négociation agressive ou opportunisme.", remedes: ["C - Vous aimez négocier et je respecte cela de la part d'un gestionnaire d'entreprise.", "R/A - Un rabais de 30% détruirait notre marge de service. En revanche, je peux vous offrir le premier mois de service d'une valeur de 50€ pour vous souhaiter la bienvenue.", "C - Ce geste de bienvenue vous convient-il ?"] }
    ],
    retractionText: "À retenir : Ne paniquez pas face au 'trop cher'. C'est une objection réflexe standard. Appliquez le CRAC : accueillez l'avis du client, posez des questions pour comprendre sa référence, puis valorisez les services inclus spécifiques à son problème.",
    quiz: [
      {
        id: 701,
        question: "Que signifie précisément la méthode de traitement des objections 'CRAC' ?",
        options: [
          "Convertir - Réfuter - Actionner - Conclure",
          "Creuser - Rebondir - Argumenter - Conclure",
          "Corriger - Relever - Affronter - Convaincre",
          "Crier - Réagir - Annuler - Clôturer"
        ],
        correctAnswerIndex: 1,
        explanation: "CRAC signifie Creuser (comprendre le frein par le questionnement), Rebondir (modifier le cadre de vision), Argumenter (par un atout CAB) et Conclure (vérifier la levée de l'objection)."
      },
      {
        id: 702,
        question: "Comment doit réagir un téléconseiller face à un client qui crie : 'C'est hors de prix !' ?",
        options: [
          "Contredire immédiatement : 'Mais pas du tout, c'est très bon marché !'",
          "Accueillir l'affirmation : 'Je comprends que l'aspect budgétaire soit important à vos yeux, étudions pourquoi.'",
          "Raccrocher l'appel pour impolitesse commerciale",
          "Lui donner immédiatement une réduction maximale de 50%"
        ],
        correctAnswerIndex: 1,
        explanation: "La première étape du CRAC est d'accueillir calmement et avec empathie l'objection pour faire tomber les barrières de tension du client."
      },
      {
        id: 703,
        question: "Pourquoi l'objection prix est-elle souvent qualifiée d'objection 'réflexe' ?",
        options: [
          "Parce que les clients n'ont plus d'argent de nos jours",
          "Parce que le cerveau humain cherche naturellement à préserver ses ressources financières avant d'avoir perçu la vraie valeur de l'offre",
          "Parce que le logiciel CRM impose un tarif fixe obligatoire",
          "Parce que les superviseurs écoutent prioritairement la durée d'appel"
        ],
        correctAnswerIndex: 1,
        explanation: "Dire 'c'est trop cher' est une réponse naturelle d'autoprotection du consommateur tant qu'il n'a pas compris la valeur utile ou le bénéfice individuel qu'il va en retirer."
      },
      {
        id: 704,
        question: "Qu'est-ce que l'étape 'Creuser' dans la méthode CRAC ?",
        options: [
          "Interrompre le client pour lui imposer une offre low-cost d'office",
          "Poser des questions précises pour identifier le vrai frein qui se cache derrière une affirmation vague",
          "Prendre note du niveau social supposé du prospect à l'aide de sa voix",
          "Insister lourdement sur la signature immédiate du contrat papier"
        ],
        correctAnswerIndex: 1,
        explanation: "Creuser consiste à poser des questions de clarification comme 'Par rapport à quelle offre faites-vous cette évaluation ?' pour comprendre à quoi se compare précisément le client."
      },
      {
        id: 705,
        question: "Si le concurrent propose un tarif inférieur, quelle est la posture de rebond recommandée ?",
        options: [
          "Dénigrer le concurrent en affirmant que ce sont des escrocs ou des menteurs",
          "Expliquer que notre tarif de qualité inclut des engagements de tranquillité supérieurs (SAV réactif, pièces d'origine, service 24/7)",
          "Baisser les bras et conseiller au client d'aller immédiatement s'abonner là-bas",
          "Se taire et passer à un autre appel sans conclure"
        ],
        correctAnswerIndex: 1,
        explanation: "Le rebond intelligent s'appuie sur la valeur supérieure globale offerte (le coût total d'usage, les garanties additionnelles, le SAV de proximité) plutôt que le dénigrement stérile du concurrent."
      }
    ]
  },
  {
    id: 8,
    title: "Le traitement des objections - Niveau 2 (Divers)",
    duration: "50 min",
    description: "Faire face aux objections complexes courantes : 'Je réfléchis', 'Déjà client ailleurs' ou encore 'Envoyez-moi un email'.",
    coursText: `Après l'objection budgétaire, d'autres pièges de communication guettent le conseiller pour clore l'appel prématurément. Ce sont souvent des paravents de politesse que l'on doit décoder pour orienter la discussion.

### Analyse des 3 pièges fondamentaux du dialogue commercial
Ces trois objections mènent au raccrochage si l'on ne formule pas le bon questionnement de rebond immédiat.

1. **L'objection d'esquive : « Je dois y réfléchir »**
   * *La réalité :* C'est dans 90% des cas une façon polie de terminer l'appel pour ne pas avoir à dire 'non' directement.
   * *La démarche pro :* Identifier le point d'ombre immédiat : est-ce un doute sur la qualité, sur le prix, ou le client manque-t-il d'autorité décisionnelle ?

2. **L'objection de fidélité : « Je suis déjà client chez le concurrent Y »**
   * *La réalité :* Le client est dans sa zone de confort et craint le changement.
   * *La démarche pro :* Valoriser ce choix car le client a compris l'utilité du service, puis lui proposer de comparer et d'auditer s'il tire la rentabilité maximale de son contrat actuel.

3. **L'objection d'envois : « Envoyez-moi un email et on verra »**
   * *La réalité :* Le prospect cherche à se débarrasser du démarcheur par une fausse promesse de lecture.
   * *La démarche pro :* Expliquer poliment qu'un email n'offre qu'un descriptif générique et que l'entretien personnel d'une minute permet de sélectionner les seules informations utiles à son profil.`,
    objectionsList: [
      { objection: "« Je dois y réfléchir, rappelez-moi dans un mois. »", freinType: "Esquive polie masquant un doute non exprimé.", remedes: ["Je comprends tout à fait l'envie de prendre du recul.", "Pour m'assurer de bien vous éclairer d'ici notre prochain échange, sur quel point précis souhaitez-vous réfléchir : la garantie, le tarif, ou le moment de la mise en place ?", "Si je résous ce point dès maintenant, seriez-vous prêt à valider aujourd'hui ?"] },
      { objection: "« Je suis déjà client chez votre concurrent, ça me convient. »", freinType: "Confort acquis et aversion au changement.", remedes: ["C'est très bien, cela montre que vous avez déjà identifié l'utilité de ce type de service.", "Beaucoup de nos clients actuels étaient aussi chez ce concurrent avant de comparer en détail nos garanties.", "Accepteriez-vous un comparatif rapide et sans engagement pour vérifier que vous avez bien le meilleur rapport qualité-prix actuellement ?"] },
      { objection: "« Envoyez-moi simplement un email, je regarderai. »", freinType: "Tentative de clore l'appel sans confrontation directe.", remedes: ["Avec plaisir, je vous envoie un récapitulatif complet.", "Pour qu'il soit vraiment utile et non générique, puis-je vous poser deux questions rapides afin de cibler exactement ce qui vous concerne ?", "Ainsi, l'email ne contiendra que les informations qui vous sont réellement utiles."] },
      { objection: "« Je n'ai pas confiance dans la vente par téléphone. »", freinType: "Méfiance générale envers le canal de vente à distance.", remedes: ["C'est une réserve tout à fait légitime, beaucoup de gens la partagent.", "Sachez que vous recevrez une confirmation écrite par email avant tout engagement définitif, et un délai de rétractation légal de 14 jours s'applique.", "Cela répond-il à votre inquiétude sur la fiabilité de la démarche ?"] }
    ],
    retractionText: "À retenir : Ne dites jamais 'D'accord, je vous laisse réfléchir et je vous rappelle dans un mois'. Prenez les devants pour comprendre immédiatement ce qui pose question dans l'esprit du client.",
    quiz: [
      {
        id: 801,
        question: "Quelle est la meilleure réaction face à un client qui dit : 'Envoyez-moi un email par écrit' ?",
        options: [
          "L'envoyer immédiatement sans poser de question",
          "Expliquer poliment qu'un email sans point d'étape est impersonnel, et valider un ou deux critères de personnalisation clés en direct",
          "Lui rétorquer qu'il ne lira jamais son email de toute façon",
          "Raccrocher au nez"
        ],
        correctAnswerIndex: 1,
        explanation: "L'envoi par mail passif est souvent un cimetière commercial. Un pont conversationnel direct d'une minute permet de cibler le document transmis en restant en contact actif."
      },
      {
        id: 802,
        question: "Derrière un 'Je dois y réfléchir', que se cache-t-il dans 90% des cas ?",
        options: [
          "Un client qui va passer la nuit à lire la documentation",
          "Une technique d'évitement polie pour masquer une hésitation non formulée ou un refus",
          "Une panne d'électricité à son domicile",
          "Un besoin de contacter l'assistance juridique de sa banque"
        ],
        correctAnswerIndex: 1,
        explanation: "'Y réfléchir' est souvent un bouclier pour clore l'appel sans faire face à une prise de décision. Il faut déceler le vrai doute sous-jacent avec tact."
      },
      {
        id: 803,
        question: "Comment rebondir face à : 'Je suis déjà engagé chez votre concurrent principal' ?",
        options: [
          "Féliciter le choix, car le client a compris l'intérêt de la solution, puis proposer un comparatif d'opportunités sans engagement",
          "Affirmer que le concurrent principal est au bord du dépôt de bilan",
          "S'excuser platement et couper immédiatement la ligne",
          "Insister en hurlant que notre solution est dix fois plus renommée"
        ],
        correctAnswerIndex: 0,
        explanation: "Féliciter le client d'être déjà équipé valide son besoin. C'est le point de départ idéal pour proposer un audit ou un comparatif d'atouts concurrentiels."
      },
      {
        id: 804,
        question: "Quelle question permet de déverrouiller un 'Je dois réfléchir' constructif ?",
        options: [
          "Réfléchir à quoi ? Vous n'avez pas de tête ?",
          "Je comprends. Sur quel aspect de notre échange souhaitez-vous mûrir votre réflexion : la qualité de la garantie ou les options budgétaires ?",
          "Donnez-moi le numéro de votre carte bleue d'abord, s'il vous plaît",
          "Est-ce que je peux vous appeler ce soir pendant votre dîner ?"
        ],
        correctAnswerIndex: 1,
        explanation: "Cette question alternative oriente l'attention sur les deux grands critères généraux de doute (le produit ou l'argent) pour faire s'exprimer le prospect de façon franche."
      },
      {
        id: 805,
        question: "Pourquoi est-il interdit d'insister lourdement face à un refus réitéré et motivé du client ?",
        options: [
          "Pour respecter la charte de déontologie réglementaire des centres de contact et préserver l'image de l'entreprise",
          "Parce que sinon le téléphone peut être désactivé à distance par l'administration locale",
          "Parce que le client risque d'appeler l'ACD central",
          "Pour maximiser la DMT au détriment des ventes"
        ],
        correctAnswerIndex: 0,
        explanation: "Insister lourdement après un non qualifié et ferme nuit à la réputation de l'entreprise et flirte avec le harcèlement téléphonique réprimé par la législation."
      }
    ]
  },
  {
    id: 9,
    title: "La conclusion d'appel (Closing & Congé)",
    duration: "40 min",
    description: "Apprendre à clore une conversation de manière professionnelle, verrouiller l'engagement et soigner la dernière impression.",
    coursText: `Le 'Congé' est l'étape ultime de la méthode CROC. C'est l'un des moments les plus stratégiques de l'appel : les derniers mots du conseiller constituent la dernière impression marquante dans l'esprit du client de son parcours de traitement.

### Les 4 étapes d'une conclusion d'appel impeccable
1. **La synthèse des engagements réciproques :** Résumer ce qui a été convenu pour que tout soit d'une clarté absolue.
2. **La validation client :** S'assurer que l'interlocuteur acquiesce et valide vos affirmations.
3. **Le traitement de politesse :** Proposer de l'aide complémentaire ('Puis-je faire autre chose pour vous ?').
4. **La prise de congé positive :** Formuler un souhait chaleureux et souriant en raccrochant lentement.

### 4 Scripts de Closing Types à analyser`,
    scriptsList: [
      {
        title: "Script 1 : Conclusion après validation de Vente Directe",
        context: "S'assurer de l'activation du prélèvement et de l'envoi du colis.",
        dialogue: [
          { speaker: "Conseiller", text: "« Parfait. Nous avons donc acté votre adhésion au forfait Horizon illimité à 19,99 € par mois. Votre nouvelle carte SIM est expédiée ce jour à votre domicile de Lyon, et elle s'activera automatiquement sous 48h dès sa réception. »", comment: "Récapitulatif ultra-précis." },
          { speaker: "Client", text: "C'est parfait, c'est très clair.", comment: "Verrouillage de l'accord." },
          { speaker: "Conseiller", text: "« Très bien. Avez-vous besoin d'une information complémentaire sur votre espace client ? Non ? Dans ce cas, je vous remercie chaleureusement de votre confiance et je vous souhaite de passer une excellente fin de journée. Au revoir Madame. »", comment: "Prise de congé avec réassurance." }
        ]
      },
      {
        title: "Script 2 : Prise de Rendez-vous Commercial (BtoB)",
        context: "Finalisation de rendez-vous d'affaires dans l'agenda.",
        dialogue: [
          { speaker: "Conseiller", text: "« C'est noté, Monsieur Gautier. Notre expert technique, M. Lefèvre, se présentera donc dans vos locaux de la Défense le mardi 14 juin à 14h00 précises, pour auditer vos systèmes informatiques. »", comment: "Répète les 3 clés du RDV : Qui, Où, Quand." },
          { speaker: "Client", text: "Très bien, j'ai bien noté sur mon agenda.", comment: "Engagement formel." },
          { speaker: "Conseiller", text: "« Je vous envoie à l'instant une confirmation de rendez-vous par email avec la liste des documents préparatoires. Je vous remercie de notre échange constructif, passez une excellente fin de journée ! »", comment: "Livre un document de réassurance immédiat." }
        ]
      },
      {
        title: "Script 3 : Traitement d'un dossier de Refus Commercial",
        context: "Le client exprime un refus ferme mais poli en fin d'entretien.",
        dialogue: [
          { speaker: "Client", text: "Non merci, je ne donnerai pas suite à votre projet.", comment: "Refus définitif." },
          { speaker: "Conseiller", text: "« C'est tout à fait entendu. Je prends note de votre refus dans notre fichier pour éviter de vous solliciter à nouveau inutilement sur cette gamme à l'avenir. »", comment: "Respecte l'avis du client, reste poli." },
          { speaker: "Conseiller", text: "« Je vous remercie en tout cas de m'avoir accordé ces quelques minutes de discussion courtoise. Je vous souhaite une excellente continuation professionnelle. Au revoir Monsieur. »", comment: "Laisse une empreinte d'extrême respectabilité." }
        ]
      },
      {
        title: "Script 4 : Clôture après résolution de Réclamation",
        context: "Sortir par le haut après un gros coup de stress sur un produit en panne.",
        dialogue: [
          { speaker: "Conseiller", text: "« Voilà, nous avons reparamétré votre décodeur en ligne et l'ensemble de vos chaînes préférées est à nouveau opérationnel à la maison. Confirmez-vous que l'image est impeccable ? »", comment: "Fait tester la réussite de l'intervention." },
          { speaker: "Client", text: "Ah oui, ça y est ! Ça marche enfin, merci infiniment de votre gentillesse.", comment: "Soulagement et gratitude." },
          { speaker: "Conseiller", text: "« C'était un réel plaisir de vous accompagner pour cette remise en marche. Nous restons à votre entière disposition s'il y avait le moindre dysfonctionnement. Passez une excellente fin de semaine en famille ! Au revoir. »", comment: "Ton de satisfaction dévouée." }
        ]
      }
    ],
    retractionText: "À retenir : Ne raccrochez jamais brusquement ! Le client doit toujours entendre votre dernière formule chaleureuse (les 'mots doux' : merci de votre appel, excellente fin de journée, au revoir) s'éteindre lentement sur la ligne.",
    quiz: [
      {
        id: 901,
        question: "Pourquoi l'étape de synthèse (récapituler les engagements) est-elle essentielle lors du closing ?",
        options: [
          "Elle évite les malentendus futurs et s'assure de l'accord complet et mutuel des deux parties sur les actions à mener",
          "Elle sert à augmenter la DMT pour rassurer le chef de plateau d'appels",
          "Elle est facultative, seul le au revoir compte vraiment",
          "Elle permet au client d'annuler sa commande plus facilement"
        ],
        correctAnswerIndex: 0,
        explanation: "Récapituler à haute voix valide l'engagement contractuel, élimine les zones d'ombres techniques et évite les contestations post-appel."
      },
      {
        id: 902,
        question: "Quelle question d'enchaînement de politesse finale illustre au mieux le sens du service clients ?",
        options: [
          "« Allez salut, c'est bon pour vous c'est ça ? »",
          "« Puis-je faire autre chose pour vous accompagner aujourd'hui ? »",
          "« Quelle note comptez-vous m'attribuer au questionnaire d'avis ? »",
          "« Dépêchez-vous s'il vous plaît, j'ai une file d'attente sur mon écran. »"
        ],
        correctAnswerIndex: 1,
        explanation: "Proposer une ouverture de service complémentaire ('Puis-je faire autre chose...') est la marque ultime d'un accompagnement attentionné et professionnel."
      },
      {
        id: 903,
        question: "Lors de la conclusion d'un Rendez-vous (RDV), quels sont les 3 éléments impératifs à faire répéter ou valider ?",
        options: [
          "Le montant des actions en bourse, l'âge du conseiller et la marque de l'ordinateur",
          "La date précise, l'heure convenue du rendez-vous et l'adresse physique exacte",
          "Le sexe du technicien, sa nationalité et ses expériences antérieures",
          "Le numéro de carte bancaire, la clé secrète et la date d'expiration"
        ],
        correctAnswerIndex: 1,
        explanation: "Un rendez-vous manqué coûte cher. Valider fermement la Date, l'Heure et l'Adresse évite tout déplacement inutile pour nos techniciens."
      },
      {
        id: 904,
        question: "Un prospect refuse fermement votre offre. Quelle attitude adopter ?",
        options: [
          "Raccrocher au nez immédiatement sans dire au revoir car c'est une perte de temps financière",
          "Régler la situation avec élégance, le remercier pour son temps d'échange courtois et lui souhaiter une bonne continuation",
          "Insister encore et encore jusqu'à ce qu'il se mette en colère et insulte le service clients",
          "Prendre congé en bredouillant de manière vexée 'tant pis pour vous alors' !"
        ],
        correctAnswerIndex: 1,
        explanation: "Un refus élégamment traité protège la marque de l'entreprise. Ce prospect poli aujourd'hui pourra se souvenir de vous de façon chaleureuse s'il doit s'équiper demain."
      },
      {
        id: 905,
        question: "Qui doit physiquement raccrocher le combiné téléphonique en premier ?",
        options: [
          "Le conseiller, immédiatement dès que la phrase 'au revoir' est entamée pour gagner une demi-seconde de DMT",
          "Le client, pour être certain qu'il a bien fini d'exprimer ses au revoir et ne s'est pas senti jeté hors de la ligne",
          "Le superviseur en appuyant sur le bouton d'interception générale",
          "La machine de numérotation automatique sans formule"
        ],
        correctAnswerIndex: 1,
        explanation: "Attendre une à deux secondes après la phrase de politesse pour laisser le client couper la ligne évite le sentiment désagréable de se faire raccrocher au nez brusquement."
      }
    ]
  },
  {
    id: 10,
    title: "La gestion d'appels difficiles (DESC)",
    duration: "65 min",
    description: "Comment désamorcer l'agressivité d'un client fâché et traiter les litiges graves avec calme en utilisant la méthode DESC.",
    coursText: `Les centres de contacts reçoivent de nombreux clients mécontents, stressés ou en colère. Face à l'agressivité verbale d'un particulier, le conseiller doit avoir des nerfs d'acier et une posture psychologique solide.

### La Méthode DESC : Désamorcer par la structure objective
La technique DESC permet d'exprimer un recadrage ferme et poli sans susciter la contre-attaque ou la dispute stérile :

1. **D - Décrire les faits :** Poser la réalité physique de manière entièrement objective, clinique, neutre et sans adjectif accusateur ('Je constate que notre technicien n'est pas arrivé au créneau convenu et que vous êtes sans chauffage').
2. **E - Exprimer l'émotion / le Ressenti professionnel :** Valider l'état émotionnel du client tout en fixant les limites de respect de l'interaction ('Je mesure parfaitement le désaccord et la frustration que cela vous provoque. Au même titre, je souhaite que nos échanges se construisent de manière respectueuse pour trouver ensemble la solution').
3. **S - Solutionner :** Proposer une solution concrète à effet immédiat ('Je prends attache immédiatement avec le livreur en liaison radio pour identifier son heure d'arrivée ou programmer notre technicien d'astreinte sous deux heures').
4. **C - Conclure :** Valider les bénéfices à long terme d'un retour au calme ('Ainsi, vous retrouverez votre service ce midi et nous ferons un geste commercial de compensation sur votre dossier').

### 3 Études de Cas d'Appels Difficiles et Corrigés
Analysez et mémorisez ces trois scénarios critiques vécus en centre d'appels.`,
    extraHTMLTable: [
      { cas: "Étude 1: Le client hurlant", details: "Le client hurle des insultes à cause d'une panne réseau Internet de 3 jours.", corriger: "Ne jamais s'énerver. Garder une voix posée à un volume légèrement inférieur à la normale pour le forcer à tendre l'oreille. Appliquer DESC. Rappeler poliment : 'Monsieur, je suis désireux de trouver une issue à cette panne, mais pour y parvenir, je vous invite à baisser d'un ton afin d'échanger au calme.' S'il persiste, prévenir élégamment du raccrochage réglementaire." },
      { cas: "Étude 2: La réclamation tarifaire", details: "Une cliente découvre des frais cachés de 49€ suite à de mauvaises explications.", corriger: "Ne pas nier l'erreur ou fuir derrière les conditions de contrat. Assumer sincèrement : 'Je constate ce prélèvement et je comprends votre colère. Il y a manifestement eu un défaut de clarté de notre part lors de la souscription.' Créditer sa fiche client immédiatement en direct de 49€ pour désamorcer la crise avant toute autre présentation de produit." },
      { cas: "Étude 3: Le colis perdu de Noël", details: "Un cadeau de Noël d'un enfant n'arrive pas le 23 décembre et figure perdu dans le réseau postal.", corriger: "Empathie totale et traitement de crise. Ne pas dire 'c'est la faute de la Poste, on y peut rien'. Prendre le contrôle : 'C'est une situation dramatique à l'approche de Noël, je le conçois'. Expédier via coursier premium privé un produit identique directement ou débloquer un bon d'achat pour un magasin physique de sa région sous 30 min." }
    ],
    retractionText: "À retenir : Restez de glace, le client s'en prend à la marque, jamais à votre personne physique ! Utilisez une voix calme et plus lente pour apaiser les cris. Appliquez le DESC pour ramener le dialogue sur le terrain des faits objectifs.",
    quiz: [
      {
        id: 1001,
        question: "Que signifie concrètement l'outil de gestion d'incidents 'DESC' ?",
        options: [
          "Description - Émotion - Solution - Conclusion",
          "Distribution - Envoi - Standard - Client",
          "Devoir - Empathie - Sourire - Congé",
          "Direct - Évaluation - Synthèse - Clôture"
        ],
        correctAnswerIndex: 0,
        explanation: "DESC : Décrire les faits, Exprimer le ressenti d'empathie ou de recadrage poli, Solutionner avec des engagements concrets, et Conclure sur les bénéfices mutuels."
      },
      {
        id: 1002,
        question: "Comment réagir physiquement si le client hurle des insanités dans votre casque téléphonique ?",
        options: [
          "Lui hurler dessus encore plus fort pour asseoir sa supériorité vocale",
          "Garder un silence pesant puis lui raccrocher subitement au nez sans prévenir",
          "Garder son calme, baisser légèrement sa voix et réguler son rythme pour forcer l'interlocuteur à imiter notre apaisement",
          "Pleurer audiblement pour faire culpabiliser le client fâché"
        ],
        correctAnswerIndex: 2,
        explanation: "Contre-intuitif mais efficace, baisser de volume et ralentir le débit oblige l'interlocuteur en colère à se calmer pour écouter, désamorçant ainsi l'escalade agressive passivement."
      },
      {
        id: 1003,
        question: "Que doit faire le conseiller si le client profère des menaces ou insultes nominatives graves ?",
        options: [
          "L'insulter à son tour pour rééquilibrer la conversation",
          "Avertir calmement et poliment que si le ton injurieux persiste, il se verra contraint d'écourter l'entretien réglementairement, puis s'exécuter si l'agression se poursuit",
          "Transférer l'appel vers la police nationale directement en une seconde",
          "Effacer toutes les coordonnées du client dans la base de données informatique"
        ],
        correctAnswerIndex: 1,
        explanation: "La charte professionnelle autorise la prise de congé pour injure après avoir posé un premier avertissement de courtoisie explicite resté infructueux."
      },
      {
        id: 1004,
        question: "Pourquoi est-il interdit de dire : 'Calmez-vous, ce n'est pas si grave' à un client mécontent ?",
        options: [
          "Parce que cette phrase minimise sa douleur et jette de l'huile sur le feu en le faisant se sentir méprisé et ridiculisé",
          "Parce que le logiciel CRM bloque l'appel si cette phrase est reconnue phonologiquement",
          "Parce que le coût d'une réclamation est toujours très élevé",
          "Parce que le mot 'Calmez-vous' est breveté par la concurrence"
        ],
        correctAnswerIndex: 0,
        explanation: "Donner un ordre émotionnel ('Calmez-vous') combiné au mépris de son préjudice ('ce n'est pas si grave') décuple instantanément la colère du client. Validez l'émotion plutôt !"
      },
      {
        id: 1005,
        question: "Quelle phase du DESC illustre l'étape de la 'Solution' ?",
        options: [
          "« Bonjour monsieur, racontez-moi votre souci... »",
          "« Je vous propose de créditer immédiatement les 40 € trop-perçus et de vous débloquer un mois de service gratuit à titre de dédommagement aujourd'hui. »",
          "« Je constate que votre livraison a 4 jours de retard sur l'estimation de départ. »",
          "« Au revoir monsieur, merci d'avoir choisi nos services. »"
        ],
        correctAnswerIndex: 1,
        explanation: "Proposer un geste financier doublé d'une résolution immédiate ('Je crédite... et vous débloque...') constitue le traitement concret constitutif de la Solution (S)."
      }
    ]
  },
  {
    id: 11,
    title: "Les outils du téléconseiller (Lexique & CRM)",
    duration: "55 min",
    description: "Apprendre à naviguer dans le jargon professionnel (ACD, SVI...) et maîtriser le fonctionnement d'un CRM à travers un outil de simulation interactive.",
    coursText: `Le téléconseiller travaille au carrefour de plusieurs technologies. Pour être à l'aise dès votre intégration, vous devez maîtriser le lexique technique et l'utilisation du **CRM** (Customer Relationship Management).

### Le Lexique des 5 termes clés incontournables en entretien
1. **ACD (Automatic Call Distribution) :** Le répartiteur automatique d'appels qui oriente les communications vers le premier conseiller compétent libre.
2. **SVI (Serveur Vocal Interactif) :** Le menu automatique à touches ('Tapez 1, Tapez 2...') qui pré-qualifie le besoin du client avant de le mettre en relation.
3. **Le CRM (Gestion de la Relation Client) :** Le logiciel pivot où sont centralisées toutes les informations du client (coordonnées, factures, contrats, historique de chaque conversation téléphonique passée).
4. **La Grille d'Écoute :** L'outil d'évaluation utilisé par les superviseurs qualité pour noter la pertinence de vos appels (respect du script, politesse, méthode CROC).
5. **Le Post-Appel (Wrap-up) :** Le laps de temps après l'appel requis pour sauvegarder la fiche client avant d'accepter l'appel suivant.

### CRM Virtuel CallPro
Ci-dessous, découvrez la structure d'une fiche CRM type. Vous devez systématiquement remplir chaque champ lors du traitement pour assurer la traçabilité des actions commerciales. Un CRM mal qualifié ralentit l'ensemble des équipes de l'entreprise.`,
    crmScenarios: [
      {
        scenario: "Le client Jean-Pierre Martin vous appelle car le boîtier fibre clignote en rouge. Vous effectuez un redémarrage électrique de la passerelle ; la connexion reprend à 980 Mbps. Le client est rassuré, aucun dédommagement n'est nécessaire.",
        fields: [
          { label: "Nom du client", key: "nom", type: "text", required: true, value: "" },
          { label: "Numéro de téléphone", key: "tel", type: "tel", required: true, value: "" },
          { label: "Adresse e-mail", key: "email", type: "email", required: true, value: "" },
          { label: "Type de contrat actuel", key: "contrat", type: "select", options: ["Forfait Intégral Pro", "Forfait Duo Résidentiel", "Aucun contrat"], required: true, value: "" },
          { label: "Raison de l'appel", key: "motif", type: "select", options: ["Demande de tarification", "Panne technique", "Réclamation financière", "Résiliation de contrat"], required: true, value: "" },
          { label: "Résumé détaillé de l'appel", key: "notes", type: "textarea", required: true, value: "" }
        ],
        expectedKeywords: [
          { key: "motif", keywords: ["panne technique"], hint: "Le motif de cet appel est une panne technique, pas une question commerciale." },
          { key: "notes", keywords: ["redémarr", "fibre", "rouge", "980"], hint: "Le résumé devrait mentionner le redémarrage de la passerelle et le rétablissement de la connexion." }
        ]
      },
      {
        scenario: "Madame Sophie Lambert conteste sa dernière facture, deux fois plus élevée que d'habitude. Après vérification, vous identifiez une option « Bouquet Sport » souscrite par erreur lors d'un appel précédent. Vous la désactivez et proposez un avoir de 15€ sur la prochaine facture.",
        fields: [
          { label: "Nom du client", key: "nom", type: "text", required: true, value: "" },
          { label: "Numéro de téléphone", key: "tel", type: "tel", required: true, value: "" },
          { label: "Adresse e-mail", key: "email", type: "email", required: true, value: "" },
          { label: "Type de contrat actuel", key: "contrat", type: "select", options: ["Forfait Intégral Pro", "Forfait Duo Résidentiel", "Aucun contrat"], required: true, value: "" },
          { label: "Raison de l'appel", key: "motif", type: "select", options: ["Demande de tarification", "Panne technique", "Réclamation financière", "Résiliation de contrat"], required: true, value: "" },
          { label: "Résumé détaillé de l'appel", key: "notes", type: "textarea", required: true, value: "" }
        ],
        expectedKeywords: [
          { key: "motif", keywords: ["réclamation financière"], hint: "Une contestation de facture est une réclamation financière, pas une panne technique." },
          { key: "notes", keywords: ["bouquet sport", "option", "avoir", "15"], hint: "Précisez l'option erronée désactivée et le montant de l'avoir accordé." }
        ]
      },
      {
        scenario: "Monsieur Karim Belkacem souhaite résilier son abonnement pour partir chez un concurrent moins cher. Vous explorez ses motifs, proposez une remise de fidélité de 20% pendant 6 mois ; il accepte de rester.",
        fields: [
          { label: "Nom du client", key: "nom", type: "text", required: true, value: "" },
          { label: "Numéro de téléphone", key: "tel", type: "tel", required: true, value: "" },
          { label: "Adresse e-mail", key: "email", type: "email", required: true, value: "" },
          { label: "Type de contrat actuel", key: "contrat", type: "select", options: ["Forfait Intégral Pro", "Forfait Duo Résidentiel", "Aucun contrat"], required: true, value: "" },
          { label: "Raison de l'appel", key: "motif", type: "select", options: ["Demande de tarification", "Panne technique", "Réclamation financière", "Résiliation de contrat"], required: true, value: "" },
          { label: "Résumé détaillé de l'appel", key: "notes", type: "textarea", required: true, value: "" }
        ],
        expectedKeywords: [
          { key: "motif", keywords: ["résiliation"], hint: "Une demande de départ vers un concurrent relève d'une résiliation de contrat." },
          { key: "notes", keywords: ["fidélité", "20", "rest"], hint: "Mentionnez la remise de fidélité proposée et l'issue positive (client conservé)." }
        ]
      }
    ],
    retractionText: "À retenir : Un bon téléconseiller doit renseigner le CRM fidèlement, de manière claire et concise. Évitez les commentaires humoristiques ou déplacés dans l'historique client : ces données peuvent être relues par n'importe quel autre conseiller ou par le client en vertu du RGPD !",
    quiz: [
      {
        id: 1101,
        question: "Qu'est-ce qu'un 'SVI' dans l'écosystème d'un centre de contact ?",
        options: [
          "Un Système de Vente Intégrée par internet",
          "Un Serveur Vocal Interactif ('Tapez 1, Tapez 2...') filtrant le flux d'entrée",
          "Une Surchauffe de Volume d'Incidents critiques",
          "La Saisie Visuelle de l'Identifiant de l'agent"
        ],
        correctAnswerIndex: 1,
        explanation: "Le SVI qualifie et trie les appels du client via des menus de guidage numérique automatique avant de l'envoyer au plateau de travail adapté."
      },
      {
        id: 1102,
        question: "À quoi sert principalement le logiciel de 'CRM' ?",
        options: [
          "À écouter les enregistrements audio des appels de mes collègues",
          "À centraliser, suivre et modifier l'ensemble des informations, contrats et historiques de contact de chaque client",
          "À calculer mes congés payés et mes primes de productivité mensuelles",
          "À filtrer le bruit ambiant du plateau d'appels"
        ],
        correctAnswerIndex: 1,
        explanation: "CRM (Customer Relationship Management) est l'outil indispensable du conseiller de clientèle, recensant l'historique de chaque fiche prospect/client."
      },
      {
        id: 1103,
        question: "Qu'est-ce que l'ACD (Automatic Call Distribution) ?",
        options: [
          "L'acheminement automatique des appels entrants vers l'agent libre le plus qualifié",
          "Un rapport de facturation des forfaits téléphoniques",
          "L'activation d'un bouton de numérotation rapide",
          "La coupure générale de la climatisation du centre d'appels"
        ],
        correctAnswerIndex: 0,
        explanation: "L'ACD gère l'intelligence de file d'attente globale en connectant automatiquement l'appelant au conseiller disponible doté des bonnes compétences techniques."
      },
      {
        id: 1104,
        question: "Qu'est-ce qu'une 'Grille d'Écoute' pour un téléconseiller ?",
        options: [
          "Une liste d'insultes de clients à éviter",
          "Une fiche d'évaluation qualité mesurant le respect de la politesse, des scripts d'accueil, du CROC et de l'empathie lors d'appels mystères ou enregistrés",
          "Une radio du crâne pour valider l'aptitude physique du conseiller",
          "Une méthode d'interception d'appels frauduleux"
        ],
        correctAnswerIndex: 1,
        explanation: "La Grille d'Écoute est le document d'audit qualité rempli par le superviseur pour valider la conformité de l'expression orale et de la démarche de l'agent."
      },
      {
        id: 1105,
        question: "Pourquoi les notes rédigées dans le CRM doivent-elles être objectives, neutres et dénuées de jugements personnels ?",
        options: [
          "Pour réduire l'espace d'hébergement sur le serveur de l'ordinateur",
          "Parce que le RGPD autorise légalement le client à demander à lire l'intégralité de sa fiche historique, de plus ces notes sont partagées avec tous les collègues de la marque",
          "Parce que la grille tarifaire de facturation change selon les mots écrits",
          "Parce que l'ordinateur n'accepte pas la ponctuation française complexe"
        ],
        correctAnswerIndex: 1,
        explanation: "Le Règlement Général sur la Protection des Données (RGPD) permet l'accès de l'utilisateur à ses données. Tout propos injurieux ou subjectif du conseiller ('Client insupportable et bête') inscrit en CRM l'exposerait à de lourdes sanctions de l'entreprise."
      }
    ]
  },
  {
    id: 12,
    title: "Réussir son entretien d'embauche",
    duration: "60 min",
    description: "Préparer vos réponses modèles aux 25 questions phares des recruteurs, passer au crible la checklist d'intégration et simuler l'oral.",
    coursText: `Félicitations, vous arrivez au terme de la formation théorique CallPro. La dernière étape consiste à transformer cet apprentissage intellectuel en contrat d'embauche. Les centres de contact recrutent massivement, mais ils traquent les profils paresseux dans l'élocution ou instables devant de gros volumes d'appel.

### La Checklist ultime d'entretien en 10 points clés
1. **La Ponctualité :** Soyez connecté 5 min en avance pour les entretiens à distance (Teams / Zoom).
2. **Le Matériel technique :** Casque micro USB filaire branché, connexion internet stable, fond visuel neutre.
3. **Le Calme absolu :** Aucun bruit de pièce de vie (enfants, animaux) en arrière-plan durant l'évaluation.
4. **La Posture vocale :** Élocution fluide, diction nette des consonnes, ton chaleureux d'emblée.
5. **Le Sourire permanent :** C'est la signature de l'entretien, l'énergie d'accueil se voit et s'entend.
6. **Le Vocabulaire :** Utilisez avec assurance les techniques : CROC, DMT, SVI, CRM, CAB, CRAC, DESC.
7. **La Posture relationnelle :** Se montrer réactif, empathique et à l'aise avec la contradiction.
8. **La Clôture d'entretien :** Poser des questions au recruteur sur les outils logiciels ou l'ambiance du plateau de travail.
9. **Le Traitement post-oral :** Envoyer un court email de remerciement résumant votre motivation sous 2h.
10. **La Persévérance :** Si le dossier ne passe pas, solliciter un débriefing de la part des RH pour progresser.

### Simulation écrite de la mise en situation de recrutement
Analysez ci-dessous les 25 questions redoutables posées par les RH et Managers en centre d'appels, ainsi que les réponses modèles à formuler pour décrocher votre validation d'embauche.`,
    questionsRHList: [
      { question: "« Pourquoi postulez-vous dans notre centre d'appels plutôt qu'un autre ? »", answer: "« J'ai choisi votre groupe car vous proposez des parcours de formation continue solides et vos campagnes sectorielles (télécom/énergie...) sont réputées pour valoriser la qualité plutôt que la rentabilité aveugle, ce qui s'accorde avec ma posture de conseiller. »" },
      { question: "« Comment réagissez-vous si un client commence à vous insulter violemment ? »", answer: "« Je garde mon sang-froid, sans prendre l'attaque personnellement. J'utilise la méthode DESC : je formule les faits au neutre d'une voix calme et basse pour apaiser la crise, j'énonce l'empathie, puis je rappelle l'exigence de respect mutuel réglementaire. »" },
      { question: "« Qu'est-ce que la DMT pour vous et comment allez-vous la gérer de façon optimale ? »", answer: "« La DMT représente la Durée Moyenne de Traitement. Pour la piloter au mieux, j'applique la structure CROC qui évite de dériver hors du cadre utile, je qualifie ma fiche CRM au fur et à mesure de l'échange, et je cible mes questions via la méthode de l'entonnoir. »" },
      { question: "« Préférez-vous traiter des appels entrants ou passer des appels sortants ? »", answer: "« Je suis formé et à l'aise avec les deux postures. En appel entrant, je valorise l'écoute active, l'empathie et le FCR. En appel sortant, je mets à profit ma persévérance commerciale en appliquant la méthode CAB et le traitement d'objections CRAC. »" },
      { question: "« Que faites-vous si la panne de l'utilisateur n'est pas répertoriée dans vos fiches de résolutions ? »", answer: "« Je prends d'abord en charge l'anxiété du client, je lui indique procéder à une recherche approfondie ou prendre attache avec notre pôle d'ingénieurs d'astreinte en le plaçant sous attente active rassurante, sans jamais formuler de phrases négatives comme 'je ne sais pas'. »" },
      { question: "« Le travail répétitif sur plateau d'appel ne risque-t-il pas de vous décourager rapidement ? »", answer: "« Chaque appel met en relation un être humain différent avec sa sensibilité thermique unique, il n'y a donc aucune monotonie pour un conseiller doué d'empathie. Mon objectif de productivité qualifiée relève du challenge professionnel quotidien stimulant. »" },
      { question: "« Comment réagissez-vous par rapport à l'écoute mystère de vos appels par un superviseur ? »", answer: "« Je la perçois comme une formidable opportunité de formation continue et d'ajustement de ma voix. C'est le meilleur outil d'auto-évaluation pour corriger mes tics verbaux ou mes écarts par rapport aux grilles d'écoute officielles. »" },
      { question: "« Si un client fait durer l'appel uniquement pour bavarder de son quotidien ? »", answer: "« J'écoute avec courtoisie quelques instants, puis je reformule avec sympathie mais fermement en le ramenant au sujet de traitement de l'appel : 'C'est un récit de vie passionnant madame, pour en revenir au bon raccordement de votre boîtier optique...' »" },
      { question: "« Quelle est votre méthode ultime pour résister au stress du flux d'appels continus ? »", answer: "« Je me concentre entièrement sur l'appel en cours comme s'il était le seul et l'unique de la journée, sans anticiper les suivants. Je prends deux inspirations abdominales profondes entre chaque conversation et je m'assure de l'ergonomie de mon poste de travail. »" },
      { question: "« Êtes-vous à l'aise avec les outils informatiques complexes et la dactylographie ? »", answer: "« Oui, je maîtrise la gestion de plusieurs écrans simultanés, les raccourcis système de navigation et je sais saisir à l'aveugle les faits marquants dans le CRM pendant que le client s'exprime, garantissant de minimiser le temps de Wrap-up post-appel. »" },
      { question: "« Parlez-moi d'une situation où vous avez dû gérer un client mécontent. Comment avez-vous procédé ? »", answer: "« Je commence toujours par accueillir l'émotion sans la minimiser, puis je décris les faits de façon neutre avant de proposer une solution concrète. C'est la structure DESC : elle évite l'escalade et recentre l'échange sur une issue constructive. »" },
      { question: "« Quelle est selon vous la différence entre un bon et un excellent conseiller client ? »", answer: "« Un bon conseiller résout le problème posé. Un excellent conseiller anticipe la question suivante du client, vérifie sa satisfaction réelle avant de clore, et laisse une trace CRM suffisamment claire pour que le prochain collègue n'ait pas à tout redemander. »" },
      { question: "« Comment vous organisez-vous pour ne pas faire d'erreur de saisie dans le CRM en pleine conversation ? »", answer: "« Je qualifie le dossier au fur et à mesure de l'échange plutôt qu'à la fin, je relis toujours les informations sensibles (email, numéro de contrat) en les faisant valider à voix haute par le client avant validation finale. »" },
      { question: "« Que feriez-vous si vous ne connaissez pas la réponse technique demandée par un client ? »", answer: "« Je ne dis jamais 'je ne sais pas'. Je rassure le client, je consulte ma base de connaissances ou je sollicite un collègue ou superviseur en mise en attente courte, puis je reviens avec une réponse fiable plutôt qu'une approximation risquée. »" },
      { question: "« Comment gérez-vous une journée où vous accumulez plusieurs refus consécutifs en appels sortants ? »", answer: "« Je considère chaque appel comme indépendant du précédent. Un refus est une donnée statistique, pas un jugement personnel. Je fais une courte pause de respiration entre deux appels difficiles pour repartir avec la même énergie d'accueil. »" },
      { question: "« Quels sont vos points faibles en matière de relation client, et comment les travaillez-vous ? »", answer: "« J'ai parfois tendance à vouloir trop expliquer techniquement un sujet ; je travaille à synthétiser mes explications avec des mots simples adaptés au profil du client, quitte à proposer un email de récapitulatif si le sujet est complexe. »" },
      { question: "« Comment réagiriez-vous si un client vous demandait quelque chose qui sort du cadre de vos procédures ? »", answer: "« Je n'improvise jamais une réponse hors cadre qui pourrait engager l'entreprise à tort. J'explique la limite de mon périmètre avec tact, et j'oriente vers le bon service ou j'escalade la demande à mon superviseur pour validation. »" },
      { question: "« Quelle est votre disponibilité horaire, notamment pour le travail en soirée ou le week-end ? »", answer: "« Je suis disponible selon les plannings tournants habituels du secteur, y compris en soirée ou le week-end si le poste le requiert, et je m'organise pour garantir une présence fiable sur les créneaux convenus. »" },
      { question: "« Pouvez-vous me donner un exemple où vous avez dépassé les attentes d'un client ? »", answer: "« Lors d'une réclamation pour un colis perdu, au-delà du remboursement standard, j'ai proposé un geste commercial complémentaire et un suivi personnalisé jusqu'à réception du nouveau produit, ce qui a transformé une insatisfaction en fidélité. »" },
      { question: "« Comment expliquez-vous la méthode CROC à quelqu'un qui ne connaît pas le métier ? »", answer: "« CROC structure un appel en quatre temps : on prend Contact en se présentant, on énonce la Raison de l'appel, on traite l'Objectif (la demande ou la vente), puis on prend Congé poliment. Cela évite de tourner en rond et rassure le client sur notre professionnalisme. »" },
      { question: "« Que pensez-vous du travail en openspace avec un volume sonore important ? »", answer: "« J'y suis habitué et je sais m'isoler mentalement grâce à mon casque et à ma concentration sur l'appel en cours. Je considère aussi que l'ambiance collective d'un plateau motivé est stimulante plutôt que gênante. »" },
      { question: "« Quels indicateurs de performance pensez-vous être évalué sur ce poste ? »", answer: "« Probablement la DMT, le taux de résolution au premier contact (FCR), la qualité perçue via les grilles d'écoute, et pour les postes commerciaux, le taux de transformation. Je sais qu'il faut équilibrer rapidité et qualité, sans sacrifier l'un pour l'autre. »" },
      { question: "« Comment réagissez-vous à la critique constructive de votre superviseur après une écoute qualité ? »", answer: "« Je l'accueille comme un outil de progression et non comme une sanction. Je note les axes d'amélioration précis et je les applique dès l'appel suivant pour démontrer ma capacité d'évolution rapide. »" },
      { question: "« Avez-vous des questions à nous poser avant de conclure cet entretien ? »", answer: "« Oui : quels sont les outils de CRM et de téléphonie utilisés sur le plateau, quelle est la durée et le contenu de la formation initiale, et quels indicateurs sont les plus suivis par l'équipe qualité ? Cela montre un intérêt sincère et une maturité professionnelle. »" }
    ],
    retractionText: "À retenir : Maîtrisez le jargon technique et montrez que vous avez du dynamisme à revendre ! Un recruteur en call center cherche de belles voix, du tempérament positif résistant au stress, et des agents capables de s'adapter aux outils numériques avec aisance.",
    quiz: [
      {
        id: 1201,
        question: "Comment prouver sa posture de téléconseiller dès le premier instant de l'entretien d'embauche ?",
        options: [
          "En arrivant habillé en tenue de plage décontractée",
          "En s'exprimant d'une voix claire, polie, dynamique et avec un sourire constant perceptible de bout en bout",
          "En refusant de répondre aux questions RH de base",
          "En parlant le plus vite possible pour battre le record de DMT"
        ],
        correctAnswerIndex: 1,
        explanation: "La communication orale est évaluée dès les premières secondes. Diction nette, ton chaleureux et sourire communicatif prouvent votre capital d'élocution immédiat."
      },
      {
        id: 1202,
        question: "Quelle est la meilleure réponse RH si on vous demande comment vous gérez la pression du flux continu d'appels ?",
        options: [
          "« Je prendrai des pauses de 15 minutes dès que l'écran affichera plus de 5 personnes en attente. »",
          "« Je traite chaque client comme s'il était l'unique de ma journée avec une concentration totale, et je respire calmement entre les dossiers de qualification. »",
          "« J'accélèrerai le débit de voix pour raccrocher sauvagement au bout d'une minute d'appel. »",
          "« J'indiquerai aux clients de rappeler un autre jour de la semaine d'affluence normale. »"
        ],
        correctAnswerIndex: 1,
        explanation: "Une attention unitaire qualitative jointe à une régulation calme du souffle est la formule des conseillers d'élite qui préservent leur santé face à de gros flux."
      },
      {
        id: 1203,
        question: "Pourquoi est-il payant d'envoyer un email de remerciement post-entretien dans les 2 heures ?",
        options: [
          "Cela montre une réactivité opérationnelle immédiate, un sens aiguisé du suivi des dossiers et valide votre haut professionnalisme",
          "C'est une obligation légale inscrite dans le code de déontologie syndicale",
          "Pour forcer le recruteur à donner sa réponse finale sous une heure de délai ferme",
          "Pour demander de réajuster le salaire d'embauche de 20%"
        ],
        correctAnswerIndex: 0,
        explanation: "Le suivi de dossier est une qualité reine du téléconseiller. Envoyer un mail de synthèse pro et soigné confirme vos excellentes dispositions professionnelles."
      },
      {
        id: 1204,
        question: "Quelle question finale est-il très valorisant de poser au manager d'équipe en fin de réunion ?",
        options: [
          "« Est-ce que je peux avoir des pauses illimitées si j'ai mal à la tête ? »",
          "« Quels sont les outils de CRM et de téléphonie spécifiques déployés sur vos plateaux, et quels sont les indicateurs clés les plus valorisés par vos équipes qualité ? »",
          "« Dans combien d'années comptez-vous prendre votre retraite ? »",
          "« Puis-je utiliser mon téléphone personnel en cachette sur le plateau ? »"
        ],
        correctAnswerIndex: 1,
        explanation: "S'intéresser sincèrement à la stack technique de l'entreprise (CRM, téléphonie) et à la gouvernance de la qualité prouve une maturité métier avancée."
      },
      {
        id: 1205,
        question: "Quelle posture RH démontre sa capacité à surmonter les échecs en télévente Outbound ?",
        options: [
          "« Si un client me dit non, je me sens insulté et je refuse de numéroter de la journée. »",
          "« Je comprends que le non fait partie intégrante de la statistique commerciale, chaque refus me rapproche de ma prochaine validation constructive sans abîmer mon enthousiasme. »",
          "« Je vais pirater les numéros concurrents pour truquer les ventes. »",
          "« Je pleurerai auprès de mon superviseur opérationnel d'équipe. »"
        ],
        correctAnswerIndex: 1,
        explanation: "La résilience psychologique face au rejet commercial est le secret des télévendeurs performants. Un refus n'altère pas le dynamisme de l'appel suivant."
      },
      {
        id: 1206,
        question: "Un recruteur vous demande ce que vous feriez face à une question technique dont vous ignorez la réponse. Quelle attitude est la plus professionnelle ?",
        options: [
          "Répondre par une approximation plausible pour ne pas perdre la confiance du client",
          "Dire honnêtement 'je ne sais pas' et changer de sujet",
          "Rassurer le client, consulter sa base de connaissances ou un collègue, puis revenir avec une réponse fiable",
          "Transférer l'appel sans explication"
        ],
        correctAnswerIndex: 2,
        explanation: "Une réponse approximative peut engager l'entreprise à tort et nuire au client. Mieux vaut rassurer puis vérifier l'information avant de répondre."
      },
      {
        id: 1207,
        question: "Quelle question est la plus pertinente à poser au recruteur en fin d'entretien pour montrer sa maturité professionnelle ?",
        options: [
          "« Quel est le salaire exact au bout de 6 mois ? »",
          "« Quels outils CRM et téléphonie sont utilisés, et quels indicateurs sont les plus suivis par l'équipe qualité ? »",
          "« Est-ce qu'on peut sortir fumer une cigarette toutes les heures ? »",
          "« Combien de jours de congé ai-je le droit de prendre la première année ? »"
        ],
        correctAnswerIndex: 1,
        explanation: "S'intéresser aux outils et aux indicateurs de qualité suivis par l'équipe démontre une compréhension fine du métier et un investissement sincère dans le poste."
      }
    ]
  }
];
