// Tableau "deputes" généré à partir du CSV VoxPublic_liste-an.csv
const deputes = [
  {
    "circonscription": "1ère circonscription",
    "departement": "Ain",
    "depute": "M. Breton",
    "email": "contact@xavierbreton.fr|xavier.breton@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Ain",
    "depute": "M. Daubié",
    "email": "romain.daubie@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Ain",
    "depute": "Mme Givernet",
    "email": "olga.givernet@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Ain",
    "depute": "M. Buisson",
    "email": "jerome.buisson@assemblee-nationale.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Ain",
    "depute": "M. Chavent",
    "email": "marc.chavent@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Aisne",
    "depute": "M. Dragon",
    "email": "nicolas.dragon@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Aisne",
    "depute": "M. Dive",
    "email": "julien.dive-permanence@orange.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Aisne",
    "depute": "M. Casterman",
    "email": "eddy.casterman@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Aisne",
    "depute": "M. Beaurain",
    "email": "jose.beaurain@assemblee-nationale.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Aisne",
    "depute": "M. Dessigny",
    "email": "jocelyn.dessigny@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Allier",
    "depute": "M. Monnet",
    "email": "yannick.monnet@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Allier",
    "depute": "M. Bovet",
    "email": "jorys.bovet@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Allier",
    "depute": "M. Ray",
    "email": "nicolas.ray@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Alpes-de-Haute-Provence",
    "depute": "M. Girard",
    "email": "christian.girard@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Alpes-de-Haute-Provence",
    "depute": "Mme Ricourt Vaginay",
    "email": "sophie.vaginay@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Alpes-Maritimes",
    "depute": "M. Ciotti",
    "email": "eric.ciotti@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Alpes-Maritimes",
    "depute": "M. Tivoli",
    "email": "lionel.tivoli@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Alpes-Maritimes",
    "depute": "M. Chaix",
    "email": "bernard.chaix@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Alpes-Maritimes",
    "depute": "Mme Masson",
    "email": "alexandra.masson@assemblee-nationale.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Alpes-Maritimes",
    "depute": "Mme D'Intorni",
    "email": "christelle.dintorni@assemblee-nationale.fr"
  },
  {
    "circonscription": "6° circonscription",
    "departement": "Alpes-Maritimes",
    "depute": "M. Masson",
    "email": "bryan.masson@assemblee-nationale.fr"
  },
  {
    "circonscription": "7° circonscription",
    "departement": "Alpes-Maritimes",
    "depute": "M. Pauget",
    "email": "eric.pauget@assemblee-nationale.fr"
  },
  {
    "circonscription": "8° circonscription",
    "departement": "Alpes-Maritimes",
    "depute": "Mme Martin",
    "email": "alexandra.martin@assemblee-nationale.fr"
  },
  {
    "circonscription": "9° circonscription",
    "departement": "Alpes-Maritimes",
    "depute": "Mme Tabarot",
    "email": "michele.tabarot@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Ardèche",
    "depute": "M. Saulignac",
    "email": "herve.saulignac@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Ardèche",
    "depute": "M. Trébuchet",
    "email": "vincenttrebuchet.ardeche@gmail.com"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Ardèche",
    "depute": "M. Brun",
    "email": "fabrice.brun@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Ardennes",
    "depute": "M. Vuibert",
    "email": "lionel.vuibert@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Ardennes",
    "depute": "M. Cordier",
    "email": "depute-cordier@orange.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Ardennes",
    "depute": "M. Warsmann",
    "email": "jean-luc.warsmann@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Ariège",
    "depute": "Mme Froger",
    "email": "martine.froger@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Ariège",
    "depute": "M. Panifous",
    "email": "laurent.panifous@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Aube",
    "depute": "M. Guitton",
    "email": "jordan.guitton@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Aube",
    "depute": "Mme Bazin-Malgras",
    "email": "valerie.bazin-malgras@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Aube",
    "depute": "Mme Ranc",
    "email": "angelique.ranc@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Aude",
    "depute": "M. Barthès",
    "email": "christophe.barthes@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Aude",
    "depute": "M. Falcon",
    "email": "frederic.falcon@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Aude",
    "depute": "M. Rancoule",
    "email": "julien.rancoule@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Aveyron",
    "depute": "M. Mazars",
    "email": "stephane.mazars@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Aveyron",
    "depute": "M. Alexandre",
    "email": "laurent.alexandre@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Aveyron",
    "depute": "M. Rousset",
    "email": "jean-francois.rousset@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Bas-Rhin",
    "depute": "Mme Regol",
    "email": "sandra.regol@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Bas-Rhin",
    "depute": "M. Fernandes",
    "email": "emmanuel.fernandes@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Bas-Rhin",
    "depute": "M. Sother",
    "email": "thierry.sother@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Bas-Rhin",
    "depute": "Mme Buffet",
    "email": "francoise.buffet@assemblee-nationale.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Bas-Rhin",
    "depute": "M. Sitzenstuhl",
    "email": "charles.sitzenstuhl@assemblee-nationale.fr"
  },
  {
    "circonscription": "6° circonscription",
    "departement": "Bas-Rhin",
    "depute": "Mme Morel",
    "email": "louise.morel@assemblee-nationale.fr"
  },
  {
    "circonscription": "7° circonscription",
    "departement": "Bas-Rhin",
    "depute": "M. Hetzel",
    "email": "contact@patrick-hetzel.fr"
  },
  {
    "circonscription": "8° circonscription",
    "departement": "Bas-Rhin",
    "depute": "M. Bernhardt",
    "email": "theo.bernhardt@assemblee-nationale.fr"
  },
  {
    "circonscription": "9° circonscription",
    "departement": "Bas-Rhin",
    "depute": "M. Thiébaut",
    "email": "vincent.thiebaut@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Bouches-du-Rhône",
    "depute": "Mme Griseti",
    "email": "monique.griseti@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Bouches-du-Rhône",
    "depute": "M. Lhardit",
    "email": "laurent.lhardit@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Bouches-du-Rhône",
    "depute": "Mme Lelouis",
    "email": "gisele.lelouis@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Bouches-du-Rhône",
    "depute": "M. Bompard",
    "email": "manuel.bompard@assemblee-nationale.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Bouches-du-Rhône",
    "depute": "M. Davi",
    "email": "hendrik.davi@assemblee-nationale.fr"
  },
  {
    "circonscription": "6° circonscription",
    "departement": "Bouches-du-Rhône",
    "depute": "M. Fayssat",
    "email": "olivier.fayssat@assemblee-nationale.fr"
  },
  {
    "circonscription": "7° circonscription",
    "departement": "Bouches-du-Rhône",
    "depute": "M. Delogu",
    "email": "sebastien.delogu@assemblee-nationale.fr"
  },
  {
    "circonscription": "8° circonscription",
    "departement": "Bouches-du-Rhône",
    "depute": "M. Tonussi",
    "email": "romain.tonussi@assemblee-nationale.fr"
  },
  {
    "circonscription": "9° circonscription",
    "departement": "Bouches-du-Rhône",
    "depute": "Mme Mélin",
    "email": "joelle.melin@assemblee-nationale.fr"
  },
  {
    "circonscription": "10° circonscription",
    "departement": "Bouches-du-Rhône",
    "depute": "M. Gonzalez",
    "email": "jose.gonzalez@assemblee-nationale.fr"
  },
  {
    "circonscription": "11° circonscription",
    "departement": "Bouches-du-Rhône",
    "depute": "M. Pena",
    "email": "marc.pena@assemblee-nationale.fr"
  },
  {
    "circonscription": "12° circonscription",
    "departement": "Bouches-du-Rhône",
    "depute": "M. Allisio",
    "email": "franck.allisio@assemblee-nationale.fr"
  },
  {
    "circonscription": "13° circonscription",
    "departement": "Bouches-du-Rhône",
    "depute": "M. Fouquart",
    "email": "emmanuel.fouquart@assemblee-nationale.fr"
  },
  {
    "circonscription": "14° circonscription",
    "departement": "Bouches-du-Rhône",
    "depute": "M. Verny",
    "email": "gerault.verny@assemblee-nationale.fr"
  },
  {
    "circonscription": "15° circonscription",
    "departement": "Bouches-du-Rhône",
    "depute": "M. Baubry",
    "email": "romain.baubry@assemblee-nationale.fr"
  },
  {
    "circonscription": "16° circonscription",
    "departement": "Bouches-du-Rhône",
    "depute": "M. Taché de la Pagerie",
    "email": "emmanuel.tachedelapagerie@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Côte-d'Or",
    "depute": "Mme Godard",
    "email": "oceane.godard@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Côte-d'Or",
    "depute": "Mme Hervieu",
    "email": "catherine.hervieu@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Côte-d'Or",
    "depute": "M. Pribetich",
    "email": "pierre.pribetich@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Côte-d'Or",
    "depute": "M. Brigand",
    "email": "hubert.brigand@assemblee-nationale.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Côte-d'Or",
    "depute": "M. Lioret",
    "email": "rene.lioret@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Côtes-d'Armor",
    "depute": "M. Cosson",
    "email": "mickael.cosson@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Côtes-d'Armor",
    "depute": "M. Berville",
    "email": "herve.berville@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Côtes-d'Armor",
    "depute": "M. Le Fur",
    "email": "corentin.lefur@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Côtes-d'Armor",
    "depute": "Mme Lepvraud",
    "email": "murielle.lepvraud@assemblee-nationale.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Côtes-d'Armor",
    "depute": "M. Bothorel",
    "email": "eric.bothorel@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Calvados",
    "depute": "M. Bruneau",
    "email": "joel.bruneau@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Calvados",
    "depute": "M. Delaporte",
    "email": "arthur.delaporte@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Calvados",
    "depute": "M. Patrier-Leitus",
    "email": "jeremie.patrier-leitus@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Calvados",
    "depute": "M. Blanchet",
    "email": "christophe.blanchet@assemblee-nationale.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Calvados",
    "depute": "M. Bouyx",
    "email": "bertrand.bouyx@assemblee-nationale.fr"
  },
  {
    "circonscription": "6° circonscription",
    "departement": "Calvados",
    "depute": "M. Sertin",
    "email": "freddy.sertin@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Cantal",
    "depute": "M. Descoeur",
    "email": "contact@descoeur.com"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Cantal",
    "depute": "M. Bony",
    "email": "jybony@orange.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Charente",
    "depute": "M. Pilato",
    "email": "rene.pilato@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Charente",
    "depute": "Mme Marsaud",
    "email": "sandra.marsaud@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Charente",
    "depute": "Mme Colombier",
    "email": "caroline.colombier@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Charente-Maritime",
    "depute": "M. Falorni",
    "email": "olivier.falorni@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Charente-Maritime",
    "depute": "M. Biteau",
    "email": "benoit.biteau@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Charente-Maritime",
    "depute": "M. Barusseau",
    "email": "fabrice.barusseau@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Charente-Maritime",
    "depute": "M. Markowsky",
    "email": "pascal.markowsky@assemblee-nationale.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Charente-Maritime",
    "depute": "M. Plassard",
    "email": "christophe.plassard@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Cher",
    "depute": "M. Cormier-Bouligeon",
    "email": "francois.cormier-bouligeon@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Cher",
    "depute": "M. Sansu",
    "email": "nicolas.sansu@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Cher",
    "depute": "M. Kervran",
    "email": "loic.kervran@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Corrèze",
    "depute": "M. Hollande",
    "email": "francois.hollande@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Corrèze",
    "depute": "Mme Meunier",
    "email": "frederique.meunier@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Corse-du-Sud",
    "depute": "M. Lacombe",
    "email": "xavier.lacombe@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Corse-du-Sud",
    "depute": "M. Colombani",
    "email": "paul-andre.colombani@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Creuse",
    "depute": "M. Lenoir",
    "email": "bartolome.lenoir@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Deux-Sèvres",
    "depute": "M. Marchive",
    "email": "bastien.marchive@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Deux-Sèvres",
    "depute": "Mme Batho",
    "email": "delphine.batho@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Deux-Sèvres",
    "depute": "M. Fiévet",
    "email": "jean-marie.fievet@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Dordogne",
    "depute": "Mme Lechon",
    "email": "nadine.lechon@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Dordogne",
    "depute": "M. Muller",
    "email": "serge.muller@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Dordogne",
    "depute": "Mme Joubert",
    "email": "florence.joubert@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Dordogne",
    "depute": "M. Peytavie",
    "email": "sebastien.peytavie@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Doubs",
    "depute": "M. Croizier",
    "email": "laurent.croizier@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Doubs",
    "depute": "Mme Voynet",
    "email": "dominique.voynet@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Doubs",
    "depute": "M. Bloch",
    "email": "matthieu.bloch@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Doubs",
    "depute": "Mme Grangier",
    "email": "geraldine.grangier@assemblee-nationale.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Doubs",
    "depute": "M. Liégeon",
    "email": "eric.liegeon@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Drôme",
    "depute": "Mme Pollet",
    "email": "lisette.pollet@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Drôme",
    "depute": "Mme Pochon",
    "email": "contact@mariepochon.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Drôme",
    "depute": "M. Monnier",
    "email": "thibaut.monnier@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Drôme",
    "depute": "M. Christophle",
    "email": "paul.christophle@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Essonne",
    "depute": "Mme Amrani",
    "email": "farida.amrani@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Essonne",
    "depute": "Mme Da Conceicao Carvalho",
    "email": "nathalie.daconceicaocarvalho@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Essonne",
    "depute": "M. Gustave",
    "email": "steevy.gustave@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Essonne",
    "depute": "Mme Rixain",
    "email": "mprixain.perm@orange.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Essonne",
    "depute": "M. Midy",
    "email": "paul.midy@assemblee-nationale.fr"
  },
  {
    "circonscription": "6° circonscription",
    "departement": "Essonne",
    "depute": "M. Guedj",
    "email": "jerome.guedj@assemblee-nationale.fr"
  },
  {
    "circonscription": "7° circonscription",
    "departement": "Essonne",
    "depute": "Mme Lejeune",
    "email": "claire.lejeune@assemblee-nationale.fr"
  },
  {
    "circonscription": "8° circonscription",
    "departement": "Essonne",
    "depute": "M. Cernon",
    "email": "berenger.cernon@assemblee-nationale.fr"
  },
  {
    "circonscription": "9° circonscription",
    "departement": "Essonne",
    "depute": "Mme Ozenne",
    "email": "julie.ozenne@assemblee-nationale.fr"
  },
  {
    "circonscription": "10° circonscription",
    "departement": "Essonne",
    "depute": "M. Léaument",
    "email": "antoine.leaument@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Eure",
    "depute": "Mme Loir",
    "email": "christine.loir@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Eure",
    "depute": "Mme Levavasseur",
    "email": "katiana.levavasseur@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Eure",
    "depute": "M. Mauvieux",
    "email": "kevin.mauvieux@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Eure",
    "depute": "M. Brun",
    "email": "philippe.brun@assemblee-nationale.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Eure",
    "depute": "M. Houssin",
    "email": "timothee.houssin@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Eure-et-Loir",
    "depute": "M. Kasbarian",
    "email": "contact@guillaumekasbarian.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Eure-et-Loir",
    "depute": "M. Marleix",
    "email": "olivier.marleix@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Eure-et-Loir",
    "depute": "M. Huwart",
    "email": "harold.huwart@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Eure-et-Loir",
    "depute": "M. Vigier",
    "email": "philippe.vigier@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Finistère",
    "depute": "Mme Le Meur",
    "email": "annaig.lemeur@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Finistère",
    "depute": "M. Cadalen",
    "email": "pierre-yves.cadalen@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Finistère",
    "depute": "M. Le Gac",
    "email": "didier.legac@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Finistère",
    "depute": "Mme Le Feur",
    "email": "sandrine.lefeur@assemblee-nationale.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Finistère",
    "depute": "Mme Melchior",
    "email": "graziella.melchior@assemblee-nationale.fr"
  },
  {
    "circonscription": "6° circonscription",
    "departement": "Finistère",
    "depute": "Mme Thomin",
    "email": "melanie.thomin@assemblee-nationale.fr"
  },
  {
    "circonscription": "7° circonscription",
    "departement": "Finistère",
    "depute": "Mme Tanguy",
    "email": "liliana.tanguy@assemblee-nationale.fr"
  },
  {
    "circonscription": "8° circonscription",
    "departement": "Finistère",
    "depute": "M. Balanant",
    "email": "erwan.balanant@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Français établis hors de France",
    "depute": "M. Lescure",
    "email": "roland.lescure@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Français établis hors de France",
    "depute": "M. Caure",
    "email": "vincent.caure@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Français établis hors de France",
    "depute": "M. Anglade",
    "email": "pieyre-alexandre.anglade@assemblee-nationale.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Français établis hors de France",
    "depute": "M. Vojetta",
    "email": "stephane.vojetta@assemblee-nationale.fr"
  },
  {
    "circonscription": "6° circonscription",
    "departement": "Français établis hors de France",
    "depute": "Mme Rousselot",
    "email": "marie-ange.rousselot@assemblee-nationale.fr"
  },
  {
    "circonscription": "7° circonscription",
    "departement": "Français établis hors de France",
    "depute": "M. Petit",
    "email": "frederic.petit@assemblee-nationale.fr"
  },
  {
    "circonscription": "8° circonscription",
    "departement": "Français établis hors de France",
    "depute": "Mme Yadan",
    "email": "caroline.yadan@assemblee-nationale.fr"
  },
  {
    "circonscription": "9° circonscription",
    "departement": "Français établis hors de France",
    "depute": "M. Ben Cheikh",
    "email": "karim.bencheikh@assemblee-nationale.fr"
  },
  {
    "circonscription": "10° circonscription",
    "departement": "Français établis hors de France",
    "depute": "Mme Lakrafi",
    "email": "amelia.lakrafi@assemblee-nationale.fr"
  },
  {
    "circonscription": "11° circonscription",
    "departement": "Français établis hors de France",
    "depute": "Mme Genetet",
    "email": "anne.genetet@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Français établis hors de france",
    "depute": "Mme Caroit",
    "email": "eleonore.caroit@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Gard",
    "depute": "M. Gillet",
    "email": "contact@yoanngillet.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Gard",
    "depute": "M. Meizonnet",
    "email": "nicolas.meizonnet@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Gard",
    "depute": "Mme Bordes",
    "email": "pascale.bordes@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Gard",
    "depute": "M. Meurin",
    "email": "pierre.meurin@assemblee-nationale.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Gard",
    "depute": "M. Allegret-Pilot",
    "email": "alexandre.allegret-pilot@assemblee-nationale.fr"
  },
  {
    "circonscription": "6° circonscription",
    "departement": "Gard",
    "depute": "Mme Josserand",
    "email": "sylvie.josserand@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Gers",
    "depute": "M. Cazeneuve",
    "email": "jean-rene.cazeneuve@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Gers",
    "depute": "M. Taupiac",
    "email": "davidtaupiac.permanence@gmail.com"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Gironde",
    "depute": "M. Cazenave",
    "email": "thomas.cazenave@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Gironde",
    "depute": "M. Thierry",
    "email": "nicolas.thierry@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Gironde",
    "depute": "M. Prud'homme",
    "email": "loic.prudhomme@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Gironde",
    "depute": "M. David",
    "email": "alain.david@assemblee-nationale.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Gironde",
    "depute": "Mme Got",
    "email": "pascale.got@assemblee-nationale.fr"
  },
  {
    "circonscription": "6° circonscription",
    "departement": "Gironde",
    "depute": "Mme Récalde",
    "email": "marie.recalde@assemblee-nationale.fr"
  },
  {
    "circonscription": "7° circonscription",
    "departement": "Gironde",
    "depute": "M. Saint-Pasteur",
    "email": "sebastien.saint-pasteur@assemblee-nationale.fr"
  },
  {
    "circonscription": "8° circonscription",
    "departement": "Gironde",
    "depute": "Mme Panonacle",
    "email": "sophie.panonacle@assemblee-nationale.fr"
  },
  {
    "circonscription": "9° circonscription",
    "departement": "Gironde",
    "depute": "Mme Mette",
    "email": "sophie.mette@assemblee-nationale.fr"
  },
  {
    "circonscription": "10° circonscription",
    "departement": "Gironde",
    "depute": "M. Boudié",
    "email": "florent.boudie@assemblee-nationale.fr"
  },
  {
    "circonscription": "11° circonscription",
    "departement": "Gironde",
    "depute": "Mme Diaz",
    "email": "edwige.diaz@assemblee-nationale.fr"
  },
  {
    "circonscription": "12° circonscription",
    "departement": "Gironde",
    "depute": "Mme Feld",
    "email": "mathilde.feld@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Guadeloupe",
    "depute": "M. Serva",
    "email": "o.serva@ose.gp|olivier.serva@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Guadeloupe",
    "depute": "M. Baptiste",
    "email": "christian.baptiste@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Guadeloupe",
    "depute": "M. Mathiasin",
    "email": "max.mathiasin@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Guadeloupe",
    "depute": "M. Califer",
    "email": "elie.califer@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Guyane",
    "depute": "M. Castor",
    "email": "jean-victor.castor@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Guyane",
    "depute": "M. Rimane",
    "email": "davy.rimane@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Hérault",
    "depute": "M. Roumégas",
    "email": "jean-louis.roumegas@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Hérault",
    "depute": "Mme Oziol",
    "email": "nathalie.oziol@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Hérault",
    "depute": "Mme Dombre Coste",
    "email": "fanny.dombrecoste@assemblee-nationale.fr|"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Hérault",
    "depute": "Mme Bouquin",
    "email": "manon.bouquin@assemblee-nationale.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Hérault",
    "depute": "Mme Galzy",
    "email": "stephanie.galzy@assemblee-nationale.fr"
  },
  {
    "circonscription": "6° circonscription",
    "departement": "Hérault",
    "depute": "M. Gabarron",
    "email": "julien.gabarron@assemblee-nationale.fr"
  },
  {
    "circonscription": "7° circonscription",
    "departement": "Hérault",
    "depute": "M. Lopez-Liguori",
    "email": "aurelien.lopezliguori@assemblee-nationale.fr"
  },
  {
    "circonscription": "8° circonscription",
    "departement": "Hérault",
    "depute": "M. Carrière",
    "email": "sylvain.carriere@assemblee-nationale.fr"
  },
  {
    "circonscription": "9° circonscription",
    "departement": "Hérault",
    "depute": "M. Alloncle",
    "email": "charles.alloncle@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Haut-Rhin",
    "depute": "Mme Klinkert",
    "email": "brigitte.klinkert@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Haut-Rhin",
    "depute": "M. Ott",
    "email": "hubert.ott@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Haut-Rhin",
    "depute": "M. Lemaire",
    "email": "didier.lemaire@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Haut-Rhin",
    "depute": "M. Schellenberger",
    "email": "raphael.schellenberger@assemblee-nationale.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Haut-Rhin",
    "depute": "M. Becht",
    "email": "cabinet.becht@gmail.com"
  },
  {
    "circonscription": "6° circonscription",
    "departement": "Haut-Rhin",
    "depute": "M. Fuchs",
    "email": "bruno.fuchs@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Haute-Corse",
    "depute": "M. Castellani",
    "email": "michel.castellani@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Haute-Corse",
    "depute": "M. Ceccoli",
    "email": "francois-xavier.ceccoli@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Haute-Garonne",
    "depute": "M. Clouet",
    "email": "hadrien.clouet@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Haute-Garonne",
    "depute": "Mme Stambach-Terrenoir",
    "email": "anne.stambach-terrenoir@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Haute-Garonne",
    "depute": "Mme Vignon",
    "email": "permanence@corinnevignon.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Haute-Garonne",
    "depute": "M. Piquemal",
    "email": "francois.piquemal@assemblee-nationale.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Haute-Garonne",
    "depute": "M. Portarrieu",
    "email": "contact@portarrieu.fr"
  },
  {
    "circonscription": "6° circonscription",
    "departement": "Haute-Garonne",
    "depute": "M. Simion",
    "email": "arnaud.simion@assemblee-nationale.fr"
  },
  {
    "circonscription": "7° circonscription",
    "departement": "Haute-Garonne",
    "depute": "M. Bex",
    "email": "christophe.bex@assemblee-nationale.fr"
  },
  {
    "circonscription": "8° circonscription",
    "departement": "Haute-Garonne",
    "depute": "M. Aviragnet",
    "email": "joelaviragnet@gmail.com"
  },
  {
    "circonscription": "9° circonscription",
    "departement": "Haute-Garonne",
    "depute": "Mme Arrighi",
    "email": "christine.arrighi@assemblee-nationale.fr"
  },
  {
    "circonscription": "10° circonscription",
    "departement": "Haute-Garonne",
    "depute": "M. Oberti",
    "email": "jacques.oberti@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Haute-Loire",
    "depute": "M. Wauquiez",
    "email": "laurent.wauquiez@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Haute-Loire",
    "depute": "M. Vigier",
    "email": "jean-pierre.vigier@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Haute-Marne",
    "depute": "M. Bentz",
    "email": "christophe.bentz@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Haute-Marne",
    "depute": "Mme Robert-Dehault",
    "email": "laurence.robert-dehault@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Haute-Saône",
    "depute": "M. Villedieu",
    "email": "antoine.villedieu@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Haute-Saône",
    "depute": "M. Salmon",
    "email": "emeric.salmon@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Haute-Savoie",
    "depute": "Mme Riotton",
    "email": "veronique.riotton@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Haute-Savoie",
    "depute": "M. Armand",
    "email": "antoine.armand@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Haute-Savoie",
    "depute": "Mme Petex",
    "email": "christelle.petex-levet@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Haute-Savoie",
    "depute": "Mme Duby-Muller",
    "email": "depute@virginiedubymuller.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Haute-Savoie",
    "depute": "Mme Violland",
    "email": "anne-cecile.violland@assemblee-nationale.fr"
  },
  {
    "circonscription": "6° circonscription",
    "departement": "Haute-Savoie",
    "depute": "M. Roseren",
    "email": "xavier.roseren@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Haute-Vienne",
    "depute": "M. Maudet",
    "email": "damien.maudet@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Haute-Vienne",
    "depute": "M. Delautrette",
    "email": "stephane.delautrette@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Haute-Vienne",
    "depute": "Mme Meunier",
    "email": "manon.meunier@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Hautes-Alpes",
    "depute": "Mme Allemand",
    "email": "marie-jose.allemand@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Hautes-Alpes",
    "depute": "Mme Rossi",
    "email": "valerie.rossi@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Hautes-Pyrénées",
    "depute": "Mme Ferrer",
    "email": "sylvie.ferrer@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Hautes-Pyrénées",
    "depute": "M. Fégné",
    "email": "denis.fegne@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Hauts-de-Seine",
    "depute": "Mme Faucillon",
    "email": "elsa.faucillon@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Hauts-de-Seine",
    "depute": "M. Lam",
    "email": "thomas.lam@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Hauts-de-Seine",
    "depute": "M. Juvin",
    "email": "philippe.juvin@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Hauts-de-Seine",
    "depute": "Mme Sebaihi",
    "email": "sabrina.sebaihi@assemblee-nationale.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Hauts-de-Seine",
    "depute": "Mme Calvez",
    "email": "celine.calvez@assemblee-nationale.fr"
  },
  {
    "circonscription": "6° circonscription",
    "departement": "Hauts-de-Seine",
    "depute": "Mme Le Grip",
    "email": "constance.legrip@assemblee-nationale.fr"
  },
  {
    "circonscription": "7° circonscription",
    "departement": "Hauts-de-Seine",
    "depute": "M. Cazeneuve",
    "email": "pierre.cazeneuve@assemblee-nationale.fr"
  },
  {
    "circonscription": "8° circonscription",
    "departement": "Hauts-de-Seine",
    "depute": "Mme Thevenot",
    "email": "prisca.thevenot@assemblee-nationale.fr"
  },
  {
    "circonscription": "9° circonscription",
    "departement": "Hauts-de-Seine",
    "depute": "Mme de Maistre",
    "email": "elisabeth.demaistre@assemblee-nationale.fr"
  },
  {
    "circonscription": "10° circonscription",
    "departement": "Hauts-de-Seine",
    "depute": "M. Attal",
    "email": "gabriel.attal@assemblee-nationale.fr"
  },
  {
    "circonscription": "11° circonscription",
    "departement": "Hauts-de-Seine",
    "depute": "M. Saintoul",
    "email": "aurelien.saintoul@assemblee-nationale.fr"
  },
  {
    "circonscription": "12° circonscription",
    "departement": "Hauts-de-Seine",
    "depute": "M. Berger",
    "email": "jean-didier.berger@assemblee-nationale.fr"
  },
  {
    "circonscription": "13° circonscription",
    "departement": "Hauts-de-Seine",
    "depute": "Mme Bregeon",
    "email": "maud.bregeon@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Ille-et-Vilaine",
    "depute": "Mme Mesmeur",
    "email": "marie.mesmeur@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Ille-et-Vilaine",
    "depute": "M. Lahais",
    "email": "tristan.lahais@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Ille-et-Vilaine",
    "depute": "Mme Rouaux",
    "email": "claudia.rouaux@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Ille-et-Vilaine",
    "depute": "Mme Hignet",
    "email": "mathilde.hignet@assemblee-nationale.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Ille-et-Vilaine",
    "depute": "Mme Le Nabour",
    "email": "christine.lenabour@assemblee-nationale.fr"
  },
  {
    "circonscription": "6° circonscription",
    "departement": "Ille-et-Vilaine",
    "depute": "M. Benoit",
    "email": "contact@thierry-benoit.fr"
  },
  {
    "circonscription": "7° circonscription",
    "departement": "Ille-et-Vilaine",
    "depute": "M. Bourgeaux",
    "email": "jean-luc.bourgeaux@assemblee-nationale.fr"
  },
  {
    "circonscription": "8° circonscription",
    "departement": "Ille-et-Vilaine",
    "depute": "M. Bouloux",
    "email": "mickael.bouloux@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Indre",
    "depute": "M. Jolivet",
    "email": "francois.jolivet@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Indre",
    "depute": "M. Forissier",
    "email": "nicolas.forissier@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Indre-et-Loire",
    "depute": "M. Fournier",
    "email": "charles.fournier@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Indre-et-Loire",
    "depute": "M. Labaronne",
    "email": "daniel.labaronne@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Indre-et-Loire",
    "depute": "M. Alfandari",
    "email": "henri.alfandari@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Indre-et-Loire",
    "depute": "M. Baumel",
    "email": "laurent.baumel@assemblee-nationale.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Indre-et-Loire",
    "depute": "Mme Thillaye",
    "email": "sabine.thillaye@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Isère",
    "depute": "Mme Galliard-Minier",
    "email": "camille.galliard-minier@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Isère",
    "depute": "Mme Chatelain",
    "email": "cyrielle.chatelain@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Isère",
    "depute": "Mme Martin",
    "email": "elisa.martin@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Isère",
    "depute": "Mme Battistel",
    "email": "mnoelle.battistel@orange.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Isère",
    "depute": "M. Iordanoff",
    "email": "jeremie.iordanoff@assemblee-nationale.fr"
  },
  {
    "circonscription": "6° circonscription",
    "departement": "Isère",
    "depute": "M. Jolly",
    "email": "alexis.jolly@assemblee-nationale.fr"
  },
  {
    "circonscription": "7° circonscription",
    "departement": "Isère",
    "depute": "Mme Dezarnaud",
    "email": "sylvie.dezarnaud@assemblee-nationale.fr"
  },
  {
    "circonscription": "8° circonscription",
    "departement": "Isère",
    "depute": "Mme Mansouri",
    "email": "hanane.mansouri@assemblee-nationale.fr"
  },
  {
    "circonscription": "9° circonscription",
    "departement": "Isère",
    "depute": "Mme Nosbé",
    "email": "sandrine.nosbe@assemblee-nationale.fr"
  },
  {
    "circonscription": "10° circonscription",
    "departement": "Isère",
    "depute": "M. Perez",
    "email": "thierry.perez@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Jura",
    "depute": "Mme Brulebois",
    "email": "danielle.brulebois@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Jura",
    "depute": "Mme Dalloz",
    "email": "marie-christine.dalloz390@orange.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Jura",
    "depute": "Mme Gruet",
    "email": "justine.gruet@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Landes",
    "depute": "Mme Darrieussecq",
    "email": "genevieve.darrieussecq@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Landes",
    "depute": "M. Causse",
    "email": "lionel.causse@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Landes",
    "depute": "M. Vallaud",
    "email": "boris.vallaud@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Loir-et-Cher",
    "depute": "M. Fesneau",
    "email": "marc.fesneau@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Loir-et-Cher",
    "depute": "M. Chudeau",
    "email": "roger.chudeau@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Loir-et-Cher",
    "depute": "M. Marion",
    "email": "christophe.marion@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Loire",
    "depute": "M. Courbon",
    "email": "pierrick.courbon@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Loire",
    "depute": "Mme Taurinya",
    "email": "andree.taurinya@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Loire",
    "depute": "M. Mandon",
    "email": "emmanuel.mandon@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Loire",
    "depute": "Mme Bonnet",
    "email": "deputee@bonnetsylvie.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Loire",
    "depute": "M. Vermorel-Marques",
    "email": "contact@antoinevermorel.fr"
  },
  {
    "circonscription": "6° circonscription",
    "departement": "Loire",
    "depute": "M. Taite",
    "email": "taite.bonnefoy.assemblee@gmail.com"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Loire-Atlantique",
    "depute": "M. Benbrahim",
    "email": "karim.benbrahim@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Loire-Atlantique",
    "depute": "M. Kerbrat",
    "email": "andy.kerbrat@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Loire-Atlantique",
    "depute": "Mme Amiot",
    "email": "segolene.amiot@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Loire-Atlantique",
    "depute": "Mme Laernoes",
    "email": "julie.laernoes@assemblee-nationale.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Loire-Atlantique",
    "depute": "M. Roussel",
    "email": "fabrice.roussel@assemblee-nationale.fr"
  },
  {
    "circonscription": "6° circonscription",
    "departement": "Loire-Atlantique",
    "depute": "M. Raux",
    "email": "jean-claude.raux@assemblee-nationale.fr"
  },
  {
    "circonscription": "7° circonscription",
    "departement": "Loire-Atlantique",
    "depute": "Mme Josso",
    "email": "sandrine.josso@assemblee-nationale.fr"
  },
  {
    "circonscription": "8° circonscription",
    "departement": "Loire-Atlantique",
    "depute": "M. Tavel",
    "email": "matthias.tavel@assemblee-nationale.fr"
  },
  {
    "circonscription": "9° circonscription",
    "departement": "Loire-Atlantique",
    "depute": "M. Brard",
    "email": "jean-michel.brard@assemblee-nationale.fr"
  },
  {
    "circonscription": "10° circonscription",
    "departement": "Loire-Atlantique",
    "depute": "Mme Errante",
    "email": "permanence@sophie-errante.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Loiret",
    "depute": "Mme Rist",
    "email": "stephanie.rist@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Loiret",
    "depute": "M. Duplessy",
    "email": "emmanuel.duplessy@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Loiret",
    "depute": "Mme de Pélichy",
    "email": "constance.depelichy@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Loiret",
    "depute": "M. Ménagé",
    "email": "thomas.menage@assemblee-nationale.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Loiret",
    "depute": "M. Brosse",
    "email": "anthony.brosse@assemblee-nationale.fr"
  },
  {
    "circonscription": "6° circonscription",
    "departement": "Loiret",
    "depute": "M. Ramos",
    "email": "richard.ramos@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Lot",
    "depute": "M. Pradié",
    "email": "aurelien.pradie@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Lot",
    "depute": "M. Proença",
    "email": "christophe.proenca@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Lot-et-Garonne",
    "depute": "M. Lauzzana",
    "email": "michel.lauzzana@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Lot-et-Garonne",
    "depute": "Mme Laporte",
    "email": "helene.laporte@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Lot-et-Garonne",
    "depute": "M. Lepers",
    "email": "guillaume.lepers@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Lozère",
    "depute": "Mme Pantel",
    "email": "sophie.pantel@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Maine-et-Loire",
    "depute": "M. Gernigon",
    "email": "francois.gernigon@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Maine-et-Loire",
    "depute": "Mme Dupont",
    "email": "stella.dupont@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Maine-et-Loire",
    "depute": "Mme Blin",
    "email": "contact@annelaureblin.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Maine-et-Loire",
    "depute": "Mme Saint-Paul",
    "email": "laetitia.saint-paul@assemblee-nationale.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Maine-et-Loire",
    "depute": "M. Masséglia",
    "email": "denis.masseglia@assemblee-nationale.fr"
  },
  {
    "circonscription": "6° circonscription",
    "departement": "Maine-et-Loire",
    "depute": "Mme Dubré-Chirat",
    "email": "nicole.dubre-chirat@assemblee-nationale.fr"
  },
  {
    "circonscription": "7° circonscription",
    "departement": "Maine-et-Loire",
    "depute": "M. Bolo",
    "email": "philippe.bolo@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Manche",
    "depute": "M. Gosselin",
    "email": "philippegosselin50@orange.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Manche",
    "depute": "M. Sorre",
    "email": "bertrand.sorre@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Manche",
    "depute": "M. Travert",
    "email": "permanence.stravert@gmail.com"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Manche",
    "depute": "Mme Pic",
    "email": "anna.pic@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Marne",
    "depute": "M. Albertini",
    "email": "xavier.albertini@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Marne",
    "depute": "Mme Miller",
    "email": "laure.miller@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Marne",
    "depute": "M. Michelet",
    "email": "maxime.michelet@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Marne",
    "depute": "Mme Magnier",
    "email": "contact@lisemagnier.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Marne",
    "depute": "M. de Courson",
    "email": "charles.de-courson@wanadoo.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Martinique",
    "depute": "M. William",
    "email": "jiovanny.william@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Martinique",
    "depute": "M. Nadeau",
    "email": "marcellin.nadeau@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Martinique",
    "depute": "Mme Bellay",
    "email": "beatrice.bellay@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Martinique",
    "depute": "M. Nilor",
    "email": "jean-philippe.nilor@wanadoo.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Mayenne",
    "depute": "M. Garot",
    "email": "permanence@garot.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Mayenne",
    "depute": "Mme Bannier",
    "email": "geraldine.bannier@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Mayenne",
    "depute": "M. Favennec-Bécot",
    "email": "favennec.yannick@wanadoo.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Mayotte",
    "depute": "Mme Youssouffa",
    "email": "estelle.youssouffa@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Mayotte",
    "depute": "Mme Bamana",
    "email": "anchya.bamana@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Meurthe-et-Moselle",
    "depute": "Mme Mercier",
    "email": "estelle.mercier@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Meurthe-et-Moselle",
    "depute": "M. Hablot",
    "email": "stephane.hablot@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Meurthe-et-Moselle",
    "depute": "M. Weber",
    "email": "frederic.weber@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Meurthe-et-Moselle",
    "depute": "M. Bazin",
    "email": "permanence.bazin@gmail.com"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Meurthe-et-Moselle",
    "depute": "M. Potier",
    "email": "dominique.potier@assemblee-nationale.fr"
  },
  {
    "circonscription": "6° circonscription",
    "departement": "Meurthe-et-Moselle",
    "depute": "M. Boulogne",
    "email": "anthony.boulogne@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Meuse",
    "depute": "M. Amblard",
    "email": "maxime.amblard@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Meuse",
    "depute": "Mme Goulet",
    "email": "florence.goulet@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Morbihan",
    "depute": "Mme Le Hénanff",
    "email": "anne.lehenanff@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Morbihan",
    "depute": "M. Pahun",
    "email": "jimmy.pahun@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Morbihan",
    "depute": "Mme Le Peih",
    "email": "le.peih.nicole@gmail.com"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Morbihan",
    "depute": "M. Molac",
    "email": "paul.molac@assemblee-nationale.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Morbihan",
    "depute": "M. Girard",
    "email": "damien.girard@assemblee-nationale.fr"
  },
  {
    "circonscription": "6° circonscription",
    "departement": "Morbihan",
    "depute": "M. Jacques",
    "email": "jean-michel.jacques@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Moselle",
    "depute": "M. Belhaddad",
    "email": "belkhir.belhaddad@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Moselle",
    "depute": "M. Mendes",
    "email": "ludovic.mendes@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Moselle",
    "depute": "Mme Colin-Oesterlé",
    "email": "nathalie.colin-oesterle@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Moselle",
    "depute": "M. Di Filippo",
    "email": "fabiendifilippo@gmail.com"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Moselle",
    "depute": "M. Jenft",
    "email": "pascal.jenft@assemblee-nationale.fr"
  },
  {
    "circonscription": "6° circonscription",
    "departement": "Moselle",
    "depute": "M. Pfeffer",
    "email": "kevin.pfeffer@assemblee-nationale.fr"
  },
  {
    "circonscription": "7° circonscription",
    "departement": "Moselle",
    "depute": "M. Loubet",
    "email": "alexandre.loubet@assemblee-nationale.fr"
  },
  {
    "circonscription": "8° circonscription",
    "departement": "Moselle",
    "depute": "M. Jacobelli",
    "email": "laurent.jacobelli@assemblee-nationale.fr"
  },
  {
    "circonscription": "9° circonscription",
    "departement": "Moselle",
    "depute": "Mme Rauch",
    "email": "isabelle.rauch@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Nièvre",
    "depute": "Mme Goulet",
    "email": "perrine.goulet@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Nièvre",
    "depute": "M. Guibert",
    "email": "julien.guibert@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Nord",
    "depute": "M. Le Coq",
    "email": "aurelien.lecoq@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Nord",
    "depute": "M. Bernalicis",
    "email": "contact@ugobernalicis.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Nord",
    "depute": "Mme Delannoy",
    "email": "sandra.delannoy@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Nord",
    "depute": "Mme Liso",
    "email": "enmarche@brigitteliso.fr|brigitte.liso@assemblee-nationale.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Nord",
    "depute": "M. Huyghe",
    "email": "sebastien.huyghe@assemblee-nationale.fr"
  },
  {
    "circonscription": "6° circonscription",
    "departement": "Nord",
    "depute": "M. Moulliere",
    "email": "jean.moulliere@assemblee-nationale.fr"
  },
  {
    "circonscription": "7° circonscription",
    "departement": "Nord",
    "depute": "Mme Gérard",
    "email": "felicie.gerard@assemblee-nationale.fr"
  },
  {
    "circonscription": "8° circonscription",
    "departement": "Nord",
    "depute": "M. Guiraud",
    "email": "david.guiraud@assemblee-nationale.fr"
  },
  {
    "circonscription": "9° circonscription",
    "departement": "Nord",
    "depute": "Mme Spillebout",
    "email": "violette.spillebout@assemblee-nationale.fr"
  },
  {
    "circonscription": "10° circonscription",
    "departement": "Nord",
    "depute": "M. Ledoux",
    "email": "permanenceledoux@gmail.com"
  },
  {
    "circonscription": "11° circonscription",
    "departement": "Nord",
    "depute": "M. Vicot",
    "email": "roger.vicot@assemblee-nationale.fr|rvicot.depute5911@gmail.com"
  },
  {
    "circonscription": "12° circonscription",
    "departement": "Nord",
    "depute": "M. Taverne",
    "email": "michael.taverne@assemblee-nationale.fr"
  },
  {
    "circonscription": "13° circonscription",
    "departement": "Nord",
    "depute": "M. Gokel",
    "email": "julien.gokel@assemblee-nationale.fr"
  },
  {
    "circonscription": "14° circonscription",
    "departement": "Nord",
    "depute": "M. Christophe",
    "email": "paul.christophe@assemblee-nationale.fr"
  },
  {
    "circonscription": "15° circonscription",
    "departement": "Nord",
    "depute": "M. Bataille",
    "email": "jean-pierre.bataille@assemblee-nationale.fr"
  },
  {
    "circonscription": "16° circonscription",
    "departement": "Nord",
    "depute": "M. Marchio",
    "email": "matthieu.marchio@assemblee-nationale.fr"
  },
  {
    "circonscription": "17° circonscription",
    "departement": "Nord",
    "depute": "M. Tesson",
    "email": "thierry.tesson.59@gmail.com"
  },
  {
    "circonscription": "18° circonscription",
    "departement": "Nord",
    "depute": "M. Dufosset",
    "email": "alexandre.dufosset@assemblee-nationale.fr"
  },
  {
    "circonscription": "19° circonscription",
    "departement": "Nord",
    "depute": "M. Chenu",
    "email": "sebastien.chenu@assemblee-nationale.fr"
  },
  {
    "circonscription": "20° circonscription",
    "departement": "Nord",
    "depute": "M. Florquin",
    "email": "guillaume.florquin@assemblee-nationale.fr"
  },
  {
    "circonscription": "21° circonscription",
    "departement": "Nord",
    "depute": "M. Castiglione",
    "email": "salvatore.castiglione@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Nouvelle-Calédonie",
    "depute": "M. Metzdorf",
    "email": "nicolas.metzdorf@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Nouvelle-Calédonie",
    "depute": "M. Tjibaou",
    "email": "emmanuel.tjibaou@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Oise",
    "depute": "Mme Marais-Beuil",
    "email": "claire.marais-beuil@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Oise",
    "depute": "M. Ballard",
    "email": "permanence.ballard@gmail.com"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Oise",
    "depute": "M. Sabatou",
    "email": "permanence.sabatou@gmail.com"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Oise",
    "depute": "M. Woerth",
    "email": "eric.woerth@assemblee-nationale.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Oise",
    "depute": "M. Vos",
    "email": "fredericpierre.vos@assemblee-nationale.fr"
  },
  {
    "circonscription": "6° circonscription",
    "departement": "Oise",
    "depute": "M. Guiniot",
    "email": "michel.guiniot@assemblee-nationale.fr"
  },
  {
    "circonscription": "7° circonscription",
    "departement": "Oise",
    "depute": "M. Magnier",
    "email": "david.magnier@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Orne",
    "depute": "Mme Jourdan",
    "email": "chantal.jourdan@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Orne",
    "depute": "M. Liger",
    "email": "thierry.liger@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Orne",
    "depute": "M. Nury",
    "email": "jerome.nury@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Paris",
    "depute": "M. Maillard",
    "email": "sylvain.maillard@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Paris",
    "depute": "M. Laussucq",
    "email": "jean.laussucq@paris.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Paris",
    "depute": "Mme Balage El Mariky",
    "email": "lea.balage@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Paris",
    "depute": "Mme Hoffman",
    "email": "emmanuelle.hoffman@assemblee-nationale.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Paris",
    "depute": "M. Amirshahi",
    "email": "pouria.amirshahi@assemblee-nationale.fr"
  },
  {
    "circonscription": "6° circonscription",
    "departement": "Paris",
    "depute": "Mme Chikirou",
    "email": "sophia.chikirou@assemblee-nationale.fr"
  },
  {
    "circonscription": "7° circonscription",
    "departement": "Paris",
    "depute": "M. Grégoire",
    "email": "emmanuel.gregoire@assemblee-nationale.fr"
  },
  {
    "circonscription": "8° circonscription",
    "departement": "Paris",
    "depute": "Mme Sas",
    "email": "eva.sas@assemblee-nationale.fr"
  },
  {
    "circonscription": "9° circonscription",
    "departement": "Paris",
    "depute": "Mme Rousseau",
    "email": "sandrine.rousseau@assemblee-nationale.fr"
  },
  {
    "circonscription": "10° circonscription",
    "departement": "Paris",
    "depute": "M. Arenas",
    "email": "rodrigo.arenas@assemblee-nationale.fr"
  },
  {
    "circonscription": "11° circonscription",
    "departement": "Paris",
    "depute": "Mme Hervieu",
    "email": "celine.hervieu@assemblee-nationale.fr"
  },
  {
    "circonscription": "12° circonscription",
    "departement": "Paris",
    "depute": "Mme Grégoire",
    "email": "olivia.gregoire@assemblee-nationale.fr"
  },
  {
    "circonscription": "13° circonscription",
    "departement": "Paris",
    "depute": "M. Amiel",
    "email": "david.amiel@assemblee-nationale.fr"
  },
  {
    "circonscription": "14° circonscription",
    "departement": "Paris",
    "depute": "Mme Missoffe",
    "email": "josephine.missoffe@assemblee-nationale.fr"
  },
  {
    "circonscription": "15° circonscription",
    "departement": "Paris",
    "depute": "Mme Simonnet",
    "email": "danielle.simonnet@assemblee-nationale.fr"
  },
  {
    "circonscription": "16° circonscription",
    "departement": "Paris",
    "depute": "Mme Legrain",
    "email": "sarah.legrain@assemblee-nationale.fr"
  },
  {
    "circonscription": "10° circonscriptionsept",
    "departement": "Paris",
    "depute": "Mme Obono",
    "email": "daniele.obono@assemblee-nationale.fr"
  },
  {
    "circonscription": "10° circonscriptionhuit",
    "departement": "Paris",
    "depute": "M. Caron",
    "email": "aymeric.caron@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Pas-de-Calais",
    "depute": "M. Blairy",
    "email": "emmanuel.blairy@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Pas-de-Calais",
    "depute": "Mme Levasseur",
    "email": "pauline.levasseur@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Pas-de-Calais",
    "depute": "M. Clavet",
    "email": "bruno.clavet@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Pas-de-Calais",
    "depute": "M. Fait",
    "email": "philippe.fait@assemblee-nationale.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Pas-de-Calais",
    "depute": "M. Golliot",
    "email": "antoine.golliot@assemblee-nationale.fr"
  },
  {
    "circonscription": "6° circonscription",
    "departement": "Pas-de-Calais",
    "depute": "Mme Engrand",
    "email": "christine.engrand@assemblee-nationale.fr"
  },
  {
    "circonscription": "7° circonscription",
    "departement": "Pas-de-Calais",
    "depute": "M. de Fleurian",
    "email": "marc.defleurian@assemblee-nationale.fr"
  },
  {
    "circonscription": "8° circonscription",
    "departement": "Pas-de-Calais",
    "depute": "M. Evrard",
    "email": "auguste.evrard@assemblee-nationale.fr"
  },
  {
    "circonscription": "9° circonscription",
    "departement": "Pas-de-Calais",
    "depute": "Mme Parmentier",
    "email": "caroline.parmentier@assemblee-nationale.fr"
  },
  {
    "circonscription": "10° circonscription",
    "departement": "Pas-de-Calais",
    "depute": "M. Frappé",
    "email": "thierry.frappe@assemblee-nationale.fr"
  },
  {
    "circonscription": "11° circonscription",
    "departement": "Pas-de-Calais",
    "depute": "Mme Le Pen",
    "email": "marine.lepen@assemblee-nationale.fr"
  },
  {
    "circonscription": "12° circonscription",
    "departement": "Pas-de-Calais",
    "depute": "M. Bilde",
    "email": "bruno.bilde@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Polynésie Française",
    "depute": "M. Frébault",
    "email": "moerani.frebault@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Polynésie Française",
    "depute": "Mme Sanquer",
    "email": "nicole.sanquer@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Polynésie Française",
    "depute": "Mme Reid Arbelot",
    "email": "mereana.reidarbelot@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Puy-de-Dôme",
    "depute": "Mme Maximi",
    "email": "marianne.maximi@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Puy-de-Dôme",
    "depute": "Mme Pirès Beaune",
    "email": "cpbdeputee@gmail.com"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Puy-de-Dôme",
    "depute": "M. Bonnet",
    "email": "nicolas.bonnet@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Puy-de-Dôme",
    "depute": "Mme Lingemann",
    "email": "delphine.lingemann@assemblee-nationale.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Puy-de-Dôme",
    "depute": "M. Brugerolles",
    "email": "julien.brugerolles@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Pyrénées-Atlantiques",
    "depute": "Mme Poueyto",
    "email": "josy.poueyto@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Pyrénées-Atlantiques",
    "depute": "M. Mattei",
    "email": "jean-paul.mattei@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Pyrénées-Atlantiques",
    "depute": "M. Habib",
    "email": "david.habib@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Pyrénées-Atlantiques",
    "depute": "M. Echaniz",
    "email": "inaki.echaniz@assemblee-nationale.fr"
  },
  {
    "circonscription": "6° circonscription",
    "departement": "Pyrénées-Atlantiques",
    "depute": "M. Dufau",
    "email": "peio.dufau@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Pyrénées-Orientales",
    "depute": "Mme Blanc",
    "email": "sophie.blanc@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Pyrénées-Orientales",
    "depute": "Mme Sabatini",
    "email": "anais.sabatini@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Pyrénées-Orientales",
    "depute": "Mme Dogor-Such",
    "email": "sandrine.dogor-such@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Pyrénées-Orientales",
    "depute": "Mme Martinez",
    "email": "michele.martinez@assemblee-nationale.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Pyrénées-Atlantique",
    "depute": "Mme Capdevielle",
    "email": "colette.capdevielle@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Réunion",
    "depute": "M. Naillet",
    "email": "philippe.naillet@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Réunion",
    "depute": "Mme Lebon",
    "email": "karine.lebon@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Réunion",
    "depute": "M. Rivière",
    "email": "joseph.riviere@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Réunion",
    "depute": "Mme K/Bidi",
    "email": "emeline.kbidi@assemblee-nationale.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Réunion",
    "depute": "M. Ratenon",
    "email": "jean-hugues.ratenon@assemblee-nationale.fr"
  },
  {
    "circonscription": "6° circonscription",
    "departement": "Réunion",
    "depute": "M. Maillot",
    "email": "frederic.maillot@assemblee-nationale.fr"
  },
  {
    "circonscription": "7° circonscription",
    "departement": "Réunion",
    "depute": "M. Gaillard",
    "email": "perceval.gaillard@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Rhône",
    "depute": "Mme Belouassa-Cherifi",
    "email": "anais.belouassa@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Rhône",
    "depute": "M. Tavernier",
    "email": "boris.tavernier@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Rhône",
    "depute": "Mme Garin",
    "email": "marie-charlotte.garin@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Rhône",
    "depute": "Mme Runel",
    "email": "sandrine.runel@assemblee-nationale.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Rhône",
    "depute": "Mme Brocard",
    "email": "contact@blandinebrocard.com"
  },
  {
    "circonscription": "6° circonscription",
    "departement": "Rhône",
    "depute": "M. Amard",
    "email": "gabriel.amard@assemblee-nationale.fr"
  },
  {
    "circonscription": "7° circonscription",
    "departement": "Rhône",
    "depute": "M. Lahmar",
    "email": "nfp.circo7rhone@gmail.com"
  },
  {
    "circonscription": "8° circonscription",
    "departement": "Rhône",
    "depute": "M. Gery",
    "email": "jonathan.gery@assemblee-nationale.fr"
  },
  {
    "circonscription": "9° circonscription",
    "departement": "Rhône",
    "depute": "M. Portier",
    "email": "contact@alexandreportier.fr"
  },
  {
    "circonscription": "10° circonscription",
    "departement": "Rhône",
    "depute": "M. Gassilloud",
    "email": "thomas.gassilloud@assemblee-nationale.fr"
  },
  {
    "circonscription": "11° circonscription",
    "departement": "Rhône",
    "depute": "M. Fugit",
    "email": "jean-luc.fugit@assemblee-nationale.fr"
  },
  {
    "circonscription": "12° circonscription",
    "departement": "Rhône",
    "depute": "M. Isaac-Sibille",
    "email": "cyrille.isaac-sibille@assemblee-nationale.fr"
  },
  {
    "circonscription": "13° circonscription",
    "departement": "Rhône",
    "depute": "Mme Joncour",
    "email": "tiffany.joncour@assemblee-nationale.fr"
  },
  {
    "circonscription": "14° circonscription",
    "departement": "Rhône",
    "depute": "M. Boumertit",
    "email": "idir.boumertit@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Saône-et-Loire",
    "depute": "M. Dirx",
    "email": "benjamin.dirx@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Saône-et-Loire",
    "depute": "Mme Corneloup",
    "email": "jcorneloup2circo71@outlook.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Saône-et-Loire",
    "depute": "M. Dutremble",
    "email": "aurelien.dutremble@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Saône-et-Loire",
    "depute": "M. Michoux",
    "email": "eric.michoux@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Saint-Barthélemy et Saint-Martin",
    "depute": "M. Gumbs",
    "email": "frantz.gumbs@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Saint-Pierre-et-Miquelon",
    "depute": "M. Lenormand",
    "email": "stephane.lenormand@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Sarthe",
    "depute": "Mme Delpech",
    "email": "cabinet.juliedelpech@gmail.com"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Sarthe",
    "depute": "Mme Karamanli",
    "email": "contact@mariettakaramanli.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Sarthe",
    "depute": "M. Martineau",
    "email": "eric.martineau@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Sarthe",
    "depute": "Mme Leboucher",
    "email": "elise.leboucher@assemblee-nationale.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Sarthe",
    "depute": "M. Grelier",
    "email": "jcgrelier.depute@gmail.com"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Savoie",
    "depute": "Mme Ferrari",
    "email": "marina.ferrari@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Savoie",
    "depute": "M. Rolland",
    "email": "vincent.rolland@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Savoie",
    "depute": "Mme Bonnivard",
    "email": "emilie.bonnivard@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Savoie",
    "depute": "M. Coulomme",
    "email": "jean-francois.coulomme@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Seine-et-Marne",
    "depute": "M. Saint-Martin",
    "email": "arnaud.saint-martin@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Seine-et-Marne",
    "depute": "M. Valletoux",
    "email": "frederic.valletoux@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Seine-et-Marne",
    "depute": "M. Thiériot",
    "email": "jean-louis.thieriot@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Seine-et-Marne",
    "depute": "M. Limongi",
    "email": "julien.limongi@assemblee-nationale.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Seine-et-Marne",
    "depute": "M. Riester",
    "email": "franck.riester@assemblee-nationale.fr"
  },
  {
    "circonscription": "6° circonscription",
    "departement": "Seine-et-Marne",
    "depute": "Mme Roullaud",
    "email": "beatrice.roullaud@assemblee-nationale.fr"
  },
  {
    "circonscription": "7° circonscription",
    "departement": "Seine-et-Marne",
    "depute": "Mme Soudais",
    "email": "ersilia.soudais@assemblee-nationale.fr"
  },
  {
    "circonscription": "8° circonscription",
    "departement": "Seine-et-Marne",
    "depute": "M. Bonnet",
    "email": "arnaud.bonnet@assemblee-nationale.fr"
  },
  {
    "circonscription": "9° circonscription",
    "departement": "Seine-et-Marne",
    "depute": "Mme Thiébault-Martinez",
    "email": "celine.thiebault-martinez@assemblee-nationale.fr"
  },
  {
    "circonscription": "10° circonscription",
    "departement": "Seine-et-Marne",
    "depute": "M. Laisney",
    "email": "maxime.laisney@assemblee-nationale.fr"
  },
  {
    "circonscription": "11° circonscription",
    "departement": "Seine-et-Marne",
    "depute": "M. Faure",
    "email": "olivierfaure.depute77.11e@gmail.com"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Seine-Maritime",
    "depute": "Mme Herouin-Léautey",
    "email": "florence.herouin-leautey@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Seine-Maritime",
    "depute": "Mme Vidal",
    "email": "annie.vidal@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Seine-Maritime",
    "depute": "M. Bénard",
    "email": "permanence.ebenard@gmail.com"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Seine-Maritime",
    "depute": "Mme Dufour",
    "email": "alma.dufour@assemblee-nationale.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Seine-Maritime",
    "depute": "M. Leseul",
    "email": "gerard.leseul@assemblee-nationale.fr"
  },
  {
    "circonscription": "6° circonscription",
    "departement": "Seine-Maritime",
    "depute": "M. Martin",
    "email": "patrice.martin@assemblee-nationale.fr"
  },
  {
    "circonscription": "7° circonscription",
    "departement": "Seine-Maritime",
    "depute": "Mme Firmin Le Bodo",
    "email": "agnes.firminlebodo@assemblee-nationale.fr"
  },
  {
    "circonscription": "8° circonscription",
    "departement": "Seine-Maritime",
    "depute": "M. Lecoq",
    "email": "jean-paul.lecoq@assemblee-nationale.fr"
  },
  {
    "circonscription": "9° circonscription",
    "departement": "Seine-Maritime",
    "depute": "Mme Poussier-Winsback",
    "email": "marieagnes.poussier-winsback@assemblee-nationale.fr"
  },
  {
    "circonscription": "10° circonscription",
    "departement": "Seine-Maritime",
    "depute": "M. Le Bourgeois",
    "email": "robert.lebourgeois@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Seine-Saint-Denis",
    "depute": "M. Coquerel",
    "email": "eric.coquerel@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Seine-Saint-Denis",
    "depute": "M. Peu",
    "email": "stephane.peu@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Seine-Saint-Denis",
    "depute": "M. Portes",
    "email": "thomas.portes@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Seine-Saint-Denis",
    "depute": "Mme Bourouaha",
    "email": "soumya.bourouaha@assemblee-nationale.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Seine-Saint-Denis",
    "depute": "M. Diouara",
    "email": "aly.diouara@assemblee-nationale.fr"
  },
  {
    "circonscription": "6° circonscription",
    "departement": "Seine-Saint-Denis",
    "depute": "M. Lachaud",
    "email": "bastien.lachaud@assemblee-nationale.fr"
  },
  {
    "circonscription": "7° circonscription",
    "departement": "Seine-Saint-Denis",
    "depute": "M. Corbière",
    "email": "alexis.corbiere@assemblee-nationale.fr"
  },
  {
    "circonscription": "8° circonscription",
    "departement": "Seine-Saint-Denis",
    "depute": "Mme Keloua Hachi",
    "email": "fatiha.kelouahachi@assemblee-nationale.fr"
  },
  {
    "circonscription": "9° circonscription",
    "departement": "Seine-Saint-Denis",
    "depute": "Mme Trouvé",
    "email": "aurelie.trouve@assemblee-nationale.fr"
  },
  {
    "circonscription": "10° circonscription",
    "departement": "Seine-Saint-Denis",
    "depute": "Mme Abomangoli",
    "email": "nadege.abomangoli@assemblee-nationale.fr"
  },
  {
    "circonscription": "11° circonscription",
    "departement": "Seine-Saint-Denis",
    "depute": "Mme Autain",
    "email": "clementineautain93@gmail.com"
  },
  {
    "circonscription": "12° circonscription",
    "departement": "Seine-Saint-Denis",
    "depute": "M. Legavre",
    "email": "jerome.legavre@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Somme",
    "depute": "M. Ruffin",
    "email": "francois.ruffin@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Somme",
    "depute": "Mme Hamdane",
    "email": "zahia.hamdane@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Somme",
    "depute": "M. Renault",
    "email": "matthias.renault@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Somme",
    "depute": "M. Tanguy",
    "email": "jean-philippe.tanguy@assemblee-nationale.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Somme",
    "depute": "Mme Ménaché",
    "email": "yael.menache@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Tarn",
    "depute": "M. Bonnecarrère",
    "email": "philippe.bonnecarrere@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Tarn",
    "depute": "Mme Erodi",
    "email": "karen.erodi@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Tarn",
    "depute": "M. Terlier",
    "email": "jean.terlier@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Tarn-et-Garonne",
    "depute": "Mme Barèges",
    "email": "brigitte.bareges@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Tarn-et-Garonne",
    "depute": "Mme Hamelet",
    "email": "marine.hamelet@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Territoire de Belfort",
    "depute": "M. Boucard",
    "email": "ian.boucard@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Territoire de Belfort",
    "depute": "M. Bigot",
    "email": "guillaume.bigot@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Val-d'Oise",
    "depute": "Mme Sicard",
    "email": "anne.sicard@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Val-d'Oise",
    "depute": "Mme Hadizadeh",
    "email": "ayda.hadizadeh@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Val-d'Oise",
    "depute": "M. Maurel",
    "email": "emmanuel.maurel@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Val-d'Oise",
    "depute": "Mme Moutchou",
    "email": "naima.moutchou@assemblee-nationale.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Val-d'Oise",
    "depute": "M. Vannier",
    "email": "paul.vannier@assemblee-nationale.fr"
  },
  {
    "circonscription": "6° circonscription",
    "departement": "Val-d'Oise",
    "depute": "Mme Cathala",
    "email": "gabrielle.cathala@assemblee-nationale.fr"
  },
  {
    "circonscription": "7° circonscription",
    "departement": "Val-d'Oise",
    "depute": "M. Eskenazi",
    "email": "romain.eskenazi@assemblee-nationale.fr"
  },
  {
    "circonscription": "8° circonscription",
    "departement": "Val-d'Oise",
    "depute": "M. Bilongo",
    "email": "carlosmartens.bilongo@assemblee-nationale.fr"
  },
  {
    "circonscription": "9° circonscription",
    "departement": "Val-d'Oise",
    "depute": "M. Le Gall",
    "email": "arnaud.legall@assemblee-nationale.fr"
  },
  {
    "circonscription": "10° circonscription",
    "departement": "Val-d'Oise",
    "depute": "M. Taché",
    "email": "aurelien.tache@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Val-de-Marne",
    "depute": "M. Berrios",
    "email": "sylvain.berrios@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Val-de-Marne",
    "depute": "Mme Guetté",
    "email": "clemence.guette@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Val-de-Marne",
    "depute": "M. Boyard",
    "email": "louis.boyard@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Val-de-Marne",
    "depute": "Mme Petit",
    "email": "maud.petit@assemblee-nationale.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Val-de-Marne",
    "depute": "M. Lefèvre",
    "email": "mathieu.lefevre@assemblee-nationale.fr"
  },
  {
    "circonscription": "6° circonscription",
    "departement": "Val-de-Marne",
    "depute": "M. Gouffier Valente",
    "email": "guillaume.gouffier-valente@assemblee-nationale.fr"
  },
  {
    "circonscription": "7° circonscription",
    "departement": "Val-de-Marne",
    "depute": "M. Jeanbrun",
    "email": "vincent.jeanbrun@assemblee-nationale.fr"
  },
  {
    "circonscription": "8° circonscription",
    "departement": "Val-de-Marne",
    "depute": "M. Herbillon",
    "email": "michel.herbillon@assemblee-nationale.fr"
  },
  {
    "circonscription": "9° circonscription",
    "departement": "Val-de-Marne",
    "depute": "Mme Santiago",
    "email": "isabelle.santiago@assemblee-nationale.fr"
  },
  {
    "circonscription": "10° circonscription",
    "departement": "Val-de-Marne",
    "depute": "Mme Panot",
    "email": "mathilde.panot@assemblee-nationale.fr"
  },
  {
    "circonscription": "11° circonscription",
    "departement": "Val-de-Marne",
    "depute": "Mme Taillé-Polian",
    "email": "sophie.taille-polian@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Var",
    "depute": "M. Chenevard",
    "email": "yannick.chenevard@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Var",
    "depute": "Mme Lavalette",
    "email": "laure.lavalette@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Var",
    "depute": "M. Rambaud",
    "email": "stephane.rambaud@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Var",
    "depute": "M. Lottiaux",
    "email": "philippe.lottiaux@assemblee-nationale.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Var",
    "depute": "Mme Lechanteux",
    "email": "julie.lechanteux@assemblee-nationale.fr"
  },
  {
    "circonscription": "6° circonscription",
    "departement": "Var",
    "depute": "M. Giletti",
    "email": "frank.giletti@assemblee-nationale.fr"
  },
  {
    "circonscription": "7° circonscription",
    "departement": "Var",
    "depute": "M. Boccaletti",
    "email": "frederic.boccaletti@assemblee-nationale.fr"
  },
  {
    "circonscription": "8° circonscription",
    "departement": "Var",
    "depute": "M. Schreck",
    "email": "contact@philippe-schreck.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Vaucluse",
    "depute": "M. Arnault",
    "email": "raphael.arnault@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Vaucluse",
    "depute": "Mme Auzanot",
    "email": "benedicte.auzanot@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Vaucluse",
    "depute": "M. de Lépinau",
    "email": "herve.delepinau@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Vaucluse",
    "depute": "Mme Lorho",
    "email": "marie-france.lorho@assemblee-nationale.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Vaucluse",
    "depute": "Mme Rimbert",
    "email": "catherine.rimbert@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Vendée",
    "depute": "M. Latombe",
    "email": "philippe.latombe@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Vendée",
    "depute": "Mme Bellamy",
    "email": "beatrice.bellamy@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Vendée",
    "depute": "M. Buchou",
    "email": "stephane.buchou@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Vendée",
    "depute": "Mme Besse",
    "email": "permanence@veroniquebesse.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Vendée",
    "depute": "M. Henriet",
    "email": "pierre.henriet@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Vienne",
    "depute": "Mme Belluco",
    "email": "lisa.belluco@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Vienne",
    "depute": "M. Houlié",
    "email": "sacha.houlie@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Vienne",
    "depute": "M. Lecamp",
    "email": "pascal.lecamp@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Vienne",
    "depute": "M. Turquois",
    "email": "nicolas.turquois@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Vosges",
    "depute": "M. Viry",
    "email": "contact@stephaneviry.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Vosges",
    "depute": "M. Dussausaye",
    "email": "gaetan.dussausaye@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Vosges",
    "depute": "M. Naegelen",
    "email": "contact@naegelen.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Vosges",
    "depute": "M. Humbert",
    "email": "sebastien.humbert@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Wallis-et-Futuna",
    "depute": "M. Seo",
    "email": "mikaele.seo@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Yonne",
    "depute": "M. Grenon",
    "email": "daniel.grenon@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Yonne",
    "depute": "Mme Roy",
    "email": "sophie-laurence.roy@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Yonne",
    "depute": "M. Odoul",
    "email": "julien.odoul@assemblee-nationale.fr"
  },
  {
    "circonscription": "1ère circonscription",
    "departement": "Yvelines",
    "depute": "M. Rodwell",
    "email": "charles.rodwell@assemblee-nationale.fr"
  },
  {
    "circonscription": "2° circonscription",
    "departement": "Yvelines",
    "depute": "Mme Bergantz",
    "email": "anne.bergantz@assemblee-nationale.fr"
  },
  {
    "circonscription": "3° circonscription",
    "departement": "Yvelines",
    "depute": "Mme Piron",
    "email": "beatrice.piron@assemblee-nationale.fr"
  },
  {
    "circonscription": "4° circonscription",
    "departement": "Yvelines",
    "depute": "Mme Lebec",
    "email": "marie.lebec@assemblee-nationale.fr"
  },
  {
    "circonscription": "5° circonscription",
    "departement": "Yvelines",
    "depute": "Mme Braun-Pivet",
    "email": "yael.braun-pivet@assemblee-nationale.fr"
  },
  {
    "circonscription": "6° circonscription",
    "departement": "Yvelines",
    "depute": "Mme Pouzyreff",
    "email": "natalia.pouzyreff@assemblee-nationale.fr"
  },
  {
    "circonscription": "7° circonscription",
    "departement": "Yvelines",
    "depute": "M. Rousseau",
    "email": "aurelien.rousseau@assemblee-nationale.fr"
  },
  {
    "circonscription": "8° circonscription",
    "departement": "Yvelines",
    "depute": "M. Lucas-Lundy",
    "email": "benjamin.lucas@assemblee-nationale.fr"
  },
  {
    "circonscription": "9° circonscription",
    "departement": "Yvelines",
    "depute": "Mme Diop",
    "email": "dieynaba.diop@assemblee-nationale.fr"
  },
  {
    "circonscription": "10° circonscription",
    "departement": "Yvelines",
    "depute": "Mme Ronceret",
    "email": "anne-sophie.ronceret@assemblee-nationale.fr"
  },
  {
    "circonscription": "11° circonscription",
    "departement": "Yvelines",
    "depute": "M. Mazaury",
    "email": "laurent.mazaury@assemblee-nationale.fr"
  },
  {
    "circonscription": "12° circonscription",
    "departement": "Yvelines",
    "depute": "M. Olive",
    "email": "karl.olive@assemblee-nationale.fr"
  }
];

const searchInput = document.getElementById("searchInput");
const suggestionsContainer = document.getElementById("suggestionsContainer");
const sendBtn = document.getElementById("sendMailBtn");

// Fonction pour mettre à jour les suggestions en fonction du filtre
function updateSuggestions(filter = "") {
  suggestionsContainer.innerHTML = "";
  if (filter.trim() === "") return;

  const results = deputes.filter(dep => {
    const text = `${dep.circonscription} ${dep.depute} ${dep.departement}`.toLowerCase();
    return text.includes(filter.toLowerCase());
  });

  if (results.length === 0) {
    const noResult = document.createElement("div");
    noResult.classList.add("suggestion-item");
    noResult.textContent = "Aucun résultat trouvé.";
    suggestionsContainer.appendChild(noResult);
    return;
  }

  results.forEach(dep => {
    const item = document.createElement("div");
    item.classList.add("suggestion-item");
    item.textContent = `${dep.circonscription} – ${dep.depute} (${dep.departement})`;
    item.addEventListener("click", () => {
      // Remplir le champ de recherche avec l'option sélectionnée
      searchInput.value = `${dep.depute} (${dep.departement})`;
      // Effacer les suggestions
      suggestionsContainer.innerHTML = "";
      // Activer le bouton et mémoriser la sélection (on stocke l'email dans une propriété data)
      searchInput.dataset.selectedEmail = dep.email;
      sendBtn.disabled = false;
    });
    suggestionsContainer.appendChild(item);
  });
}

// Événement de recherche en direct
searchInput.addEventListener("input", (e) => {
  updateSuggestions(e.target.value);
  // On désactive le bouton car aucune option n'est encore sélectionnée
  sendBtn.disabled = true;
  // On efface la donnée sélectionnée s'il y en avait une
  delete searchInput.dataset.selectedEmail;
});

// Quand on clique sur le bouton, on utilise l'email sélectionné (la première adresse en cas de plusieurs)
sendBtn.addEventListener("click", () => {
  const emailStr = searchInput.dataset.selectedEmail;
  if (!emailStr) return;
  const email = emailStr.split("|")[0];
  const subject = encodeURIComponent("Contre la limitation de l'installation des médecins");
  const body = encodeURIComponent(
    "Madame, Monsieur le Député,\n\n" +
    "Je vous écris pour exprimer mon opposition à la nouvelle loi limitant l'installation des médecins. " +
    "Cette mesure risque d'aggraver l'accès aux soins dans notre circonscription, qui est considérée comme surdotée alors que les délais pour consulter mon médecin généraliste ou un spécialiste y sont très longs, et que nombreux sont les médecins ne prenant plus de nouveaux patients.\n\n" +
    "Merci de défendre l'accès aux soins pour nous et notre territoire et de vous opposer à ce projet de loi, qui ne ferait qu'aggraver la situation.\n\n" +
    "Le prochain vote sur ce projet de loi aura lieu le 6 mai 2025. Je vous prie donc de voter contre.\n\n" +
    "Cordialement."

  );
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
});
