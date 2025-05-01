// Tableau "deputes" généré à partir du CSV VoxPublic_liste-an.csv
const deputes = [
[
  {
    "Député": "M. Breton",
    "Département": "Ain",
    "Circonscription 2": "1ère circonscription",
    "Email": "contact@xavierbreton.fr|xavier.breton@assemblee-nationale.fr"
  },
  {
    "Député": "M. Daubié",
    "Département": "Ain",
    "Circonscription 2": "2° circonscription",
    "Email": "romain.daubie@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Givernet",
    "Département": "Ain",
    "Circonscription 2": "3° circonscription",
    "Email": "olga.givernet@assemblee-nationale.fr"
  },
  {
    "Député": "M. Buisson",
    "Département": "Ain",
    "Circonscription 2": "4° circonscription",
    "Email": "jerome.buisson@assemblee-nationale.fr"
  },
  {
    "Député": "M. Chavent",
    "Département": "Ain",
    "Circonscription 2": "5° circonscription",
    "Email": "marc.chavent@assemblee-nationale.fr"
  },
  {
    "Député": "M. Dragon",
    "Département": "Aisne",
    "Circonscription 2": "1ère circonscription",
    "Email": "nicolas.dragon@assemblee-nationale.fr"
  },
  {
    "Député": "M. Dive",
    "Département": "Aisne",
    "Circonscription 2": "2° circonscription",
    "Email": "julien.dive-permanence@orange.fr|julien.dive@assemblee-nationale.fr"
  },
  {
    "Député": "M. Casterman",
    "Département": "Aisne",
    "Circonscription 2": "3° circonscription",
    "Email": "eddy.casterman@assemblee-nationale.fr"
  },
  {
    "Député": "M. Beaurain",
    "Département": "Aisne",
    "Circonscription 2": "4° circonscription",
    "Email": "jose.beaurain@assemblee-nationale.fr"
  },
  {
    "Député": "M. Dessigny",
    "Département": "Aisne",
    "Circonscription 2": "5° circonscription",
    "Email": "jocelyn.dessigny@assemblee-nationale.fr"
  },
  {
    "Député": "M. Monnet",
    "Département": "Allier",
    "Circonscription 2": "1ère circonscription",
    "Email": "yannick.monnet@assemblee-nationale.fr"
  },
  {
    "Député": "M. Bovet",
    "Département": "Allier",
    "Circonscription 2": "2° circonscription",
    "Email": "jorys.bovet@assemblee-nationale.fr|jorysb.rn03@gmail.com"
  },
  {
    "Député": "M. Ray",
    "Département": "Allier",
    "Circonscription 2": "3° circonscription",
    "Email": "nicolas.ray@assemblee-nationale.fr"
  },
  {
    "Député": "M. Girard",
    "Département": "Alpes-de-Haute-Provence",
    "Circonscription 2": "1ère circonscription",
    "Email": "christian.girard@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Ricourt Vaginay",
    "Département": "Alpes-de-Haute-Provence",
    "Circonscription 2": "2° circonscription",
    "Email": "sophie.vaginay@assemblee-nationale.fr"
  },
  {
    "Député": "M. Ciotti",
    "Département": "Alpes-Maritimes",
    "Circonscription 2": "1ère circonscription",
    "Email": "eric.ciotti@assemblee-nationale.fr"
  },
  {
    "Député": "M. Tivoli",
    "Département": "Alpes-Maritimes",
    "Circonscription 2": "2° circonscription",
    "Email": "lionel.tivoli@assemblee-nationale.fr"
  },
  {
    "Député": "M. Chaix",
    "Département": "Alpes-Maritimes",
    "Circonscription 2": "3° circonscription",
    "Email": "bernard.chaix@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Masson",
    "Département": "Alpes-Maritimes",
    "Circonscription 2": "4° circonscription",
    "Email": "alexandra.masson@assemblee-nationale.fr"
  },
  {
    "Député": "Mme D'Intorni",
    "Département": "Alpes-Maritimes",
    "Circonscription 2": "5° circonscription",
    "Email": "christelle.dintorni@assemblee-nationale.fr"
  },
  {
    "Député": "M. Masson",
    "Département": "Alpes-Maritimes",
    "Circonscription 2": "6° circonscription",
    "Email": "bryan.masson@assemblee-nationale.fr"
  },
  {
    "Député": "M. Pauget",
    "Département": "Alpes-Maritimes",
    "Circonscription 2": "7° circonscription",
    "Email": "e.pauget@orange.fr|eric.pauget@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Martin",
    "Département": "Alpes-Maritimes",
    "Circonscription 2": "8° circonscription",
    "Email": "alexandra.martin@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Tabarot",
    "Département": "Alpes-Maritimes",
    "Circonscription 2": "9° circonscription",
    "Email": "michele.tabarot@assemblee-nationale.fr"
  },
  {
    "Député": "M. Saulignac",
    "Département": "ArdÃ¨che",
    "Circonscription 2": "1ère circonscription",
    "Email": "herve.saulignac2017@gmail.com|herve.saulignac@assemblee-nationale.fr"
  },
  {
    "Député": "M. Trébuchet",
    "Département": "ArdÃ¨che",
    "Circonscription 2": "2° circonscription",
    "Email": "vincent.trebuchet@assemblee-nationale.fr|vincenttrebuchet.ardeche@gmail.com"
  },
  {
    "Député": "M. Brun",
    "Département": "ArdÃ¨che",
    "Circonscription 2": "3° circonscription",
    "Email": "fabrice.brun@assemblee-nationale.fr"
  },
  {
    "Député": "M. Vuibert",
    "Département": "Ardennes",
    "Circonscription 2": "1ère circonscription",
    "Email": "lionel.vuibert@assemblee-nationale.fr"
  },
  {
    "Député": "M. Cordier",
    "Département": "Ardennes",
    "Circonscription 2": "2° circonscription",
    "Email": "depute-cordier@orange.fr|pierre.cordier@assemblee-nationale.fr"
  },
  {
    "Député": "M. Warsmann",
    "Département": "Ardennes",
    "Circonscription 2": "3° circonscription",
    "Email": "jean-luc.warsmann@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Froger",
    "Département": "AriÃ¨ge",
    "Circonscription 2": "1ère circonscription",
    "Email": "martine.froger@assemblee-nationale.fr"
  },
  {
    "Député": "M. Panifous",
    "Département": "AriÃ¨ge",
    "Circonscription 2": "2° circonscription",
    "Email": "laurent.panifous@assemblee-nationale.fr"
  },
  {
    "Député": "M. Guitton",
    "Département": "Aube",
    "Circonscription 2": "1ère circonscription",
    "Email": "jordan.guitton@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Bazin-Malgras",
    "Département": "Aube",
    "Circonscription 2": "2° circonscription",
    "Email": "valerie.bazin-malgras@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Ranc",
    "Département": "Aube",
    "Circonscription 2": "3° circonscription",
    "Email": "angelique.ranc@assemblee-nationale.fr"
  },
  {
    "Député": "M. BarthÃ¨s",
    "Département": "Aude",
    "Circonscription 2": "1ère circonscription",
    "Email": "christophe.barthes@assemblee-nationale.fr"
  },
  {
    "Député": "M. Falcon",
    "Département": "Aude",
    "Circonscription 2": "2° circonscription",
    "Email": "frederic.falcon@assemblee-nationale.fr"
  },
  {
    "Député": "M. Rancoule",
    "Département": "Aude",
    "Circonscription 2": "3° circonscription",
    "Email": "julien.rancoule@assemblee-nationale.fr"
  },
  {
    "Député": "M. Mazars",
    "Département": "Aveyron",
    "Circonscription 2": "1ère circonscription",
    "Email": "stephane.mazars@assemblee-nationale.fr"
  },
  {
    "Député": "M. Alexandre",
    "Département": "Aveyron",
    "Circonscription 2": "2° circonscription",
    "Email": "laurent.alexandre@assemblee-nationale.fr"
  },
  {
    "Député": "M. Rousset",
    "Département": "Aveyron",
    "Circonscription 2": "3° circonscription",
    "Email": "jean-francois.rousset@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Regol",
    "Département": "Bas-Rhin",
    "Circonscription 2": "1ère circonscription",
    "Email": "sandra.regol@assemblee-nationale.fr"
  },
  {
    "Député": "M. Fernandes",
    "Département": "Bas-Rhin",
    "Circonscription 2": "2° circonscription",
    "Email": "emmanuel.fernandes@assemblee-nationale.fr"
  },
  {
    "Député": "M. Sother",
    "Département": "Bas-Rhin",
    "Circonscription 2": "3° circonscription",
    "Email": "thierry.sother@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Buffet",
    "Département": "Bas-Rhin",
    "Circonscription 2": "4° circonscription",
    "Email": "francoise.buffet@assemblee-nationale.fr"
  },
  {
    "Député": "M. Sitzenstuhl",
    "Département": "Bas-Rhin",
    "Circonscription 2": "5° circonscription",
    "Email": "charles.sitzenstuhl@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Morel",
    "Département": "Bas-Rhin",
    "Circonscription 2": "6° circonscription",
    "Email": "louise.morel@assemblee-nationale.fr"
  },
  {
    "Député": "M. Hetzel",
    "Département": "Bas-Rhin",
    "Circonscription 2": "7° circonscription",
    "Email": "contact@patrick-hetzel.fr|patrick.hetzel@assemblee-nationale.fr"
  },
  {
    "Député": "M. Bernhardt",
    "Département": "Bas-Rhin",
    "Circonscription 2": "8° circonscription",
    "Email": "theo.bernhardt@assemblee-nationale.fr"
  },
  {
    "Député": "M. Thiébaut",
    "Département": "Bas-Rhin",
    "Circonscription 2": "9° circonscription",
    "Email": "vincent.thiebaut@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Griseti",
    "Département": "Bouches-du-RhÃ´ne",
    "Circonscription 2": "1ère circonscription",
    "Email": "monique.griseti@assemblee-nationale.fr"
  },
  {
    "Député": "M. Lhardit",
    "Département": "Bouches-du-RhÃ´ne",
    "Circonscription 2": "2° circonscription",
    "Email": "laurent.lhardit@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Lelouis",
    "Département": "Bouches-du-RhÃ´ne",
    "Circonscription 2": "3° circonscription",
    "Email": "gisele.lelouis@assemblee-nationale.fr"
  },
  {
    "Député": "M. Bompard",
    "Département": "Bouches-du-RhÃ´ne",
    "Circonscription 2": "4° circonscription",
    "Email": "manuel.bompard@assemblee-nationale.fr|contact@manuelbompard.fr"
  },
  {
    "Député": "M. Davi",
    "Département": "Bouches-du-RhÃ´ne",
    "Circonscription 2": "5° circonscription",
    "Email": "hendrik.davi@assemblee-nationale.fr"
  },
  {
    "Député": "M. Fayssat",
    "Département": "Bouches-du-RhÃ´ne",
    "Circonscription 2": "6° circonscription",
    "Email": "olivier.fayssat@assemblee-nationale.fr"
  },
  {
    "Député": "M. Delogu",
    "Département": "Bouches-du-RhÃ´ne",
    "Circonscription 2": "7° circonscription",
    "Email": "sebastien.delogu@assemblee-nationale.fr"
  },
  {
    "Député": "M. Tonussi",
    "Département": "Bouches-du-RhÃ´ne",
    "Circonscription 2": "8° circonscription",
    "Email": "romain.tonussi@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Mélin",
    "Département": "Bouches-du-RhÃ´ne",
    "Circonscription 2": "9° circonscription",
    "Email": "joelle.melin@assemblee-nationale.fr"
  },
  {
    "Député": "M. Gonzalez",
    "Département": "Bouches-du-RhÃ´ne",
    "Circonscription 2": "10° circonscription",
    "Email": "jose.gonzalez@assemblee-nationale.fr|jo.allauch@gmail.com"
  },
  {
    "Député": "M. Pena",
    "Département": "Bouches-du-RhÃ´ne",
    "Circonscription 2": "11° circonscription",
    "Email": "marc.pena@assemblee-nationale.fr"
  },
  {
    "Député": "M. Allisio",
    "Département": "Bouches-du-RhÃ´ne",
    "Circonscription 2": "12° circonscription",
    "Email": "franck.allisio@assemblee-nationale.fr"
  },
  {
    "Député": "M. Fouquart",
    "Département": "Bouches-du-RhÃ´ne",
    "Circonscription 2": "13° circonscription",
    "Email": "emmanuel.fouquart@assemblee-nationale.fr"
  },
  {
    "Député": "M. Verny",
    "Département": "Bouches-du-RhÃ´ne",
    "Circonscription 2": "14° circonscription",
    "Email": "gerault.verny@assemblee-nationale.fr"
  },
  {
    "Député": "M. Baubry",
    "Département": "Bouches-du-RhÃ´ne",
    "Circonscription 2": "15° circonscription",
    "Email": "romain.baubry@assemblee-nationale.fr"
  },
  {
    "Député": "M. Taché de la Pagerie",
    "Département": "Bouches-du-RhÃ´ne",
    "Circonscription 2": "16° circonscription",
    "Email": "emmanuel.tachedelapagerie@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Godard",
    "Département": "CÃ´te-d'Or",
    "Circonscription 2": "1ère circonscription",
    "Email": "oceane.godard@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Hervieu",
    "Département": "CÃ´te-d'Or",
    "Circonscription 2": "2° circonscription",
    "Email": "catherine.hervieu@assemblee-nationale.fr"
  },
  {
    "Député": "M. Pribetich",
    "Département": "CÃ´te-d'Or",
    "Circonscription 2": "3° circonscription",
    "Email": "pierre.pribetich@assemblee-nationale.fr"
  },
  {
    "Député": "M. Brigand",
    "Département": "CÃ´te-d'Or",
    "Circonscription 2": "4° circonscription",
    "Email": "hubert.brigand@assemblee-nationale.fr"
  },
  {
    "Député": "M. Lioret",
    "Département": "CÃ´te-d'Or",
    "Circonscription 2": "5° circonscription",
    "Email": "rene.lioret@assemblee-nationale.fr|lioret.r@gmail.com"
  },
  {
    "Député": "M. Cosson",
    "Département": "CÃ´tes-d'Armor",
    "Circonscription 2": "1ère circonscription",
    "Email": "mickael.cosson@assemblee-nationale.fr"
  },
  {
    "Député": "M. Berville",
    "Département": "CÃ´tes-d'Armor",
    "Circonscription 2": "2° circonscription",
    "Email": "herve.berville@en-marche.fr|herve.berville@assemblee-nationale.fr"
  },
  {
    "Député": "M. Le Fur",
    "Département": "CÃ´tes-d'Armor",
    "Circonscription 2": "3° circonscription",
    "Email": "corentin.lefur@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Lepvraud",
    "Département": "CÃ´tes-d'Armor",
    "Circonscription 2": "4° circonscription",
    "Email": "murielle.lepvraud@assemblee-nationale.fr"
  },
  {
    "Député": "M. Bothorel",
    "Département": "CÃ´tes-d'Armor",
    "Circonscription 2": "5° circonscription",
    "Email": "contact@ericbothorel.bzh|eric.bothorel@assemblee-nationale.fr"
  },
  {
    "Député": "M. Bruneau",
    "Département": "Calvados",
    "Circonscription 2": "1ère circonscription",
    "Email": "joel.bruneau@assemblee-nationale.fr|jbruneau14@gmail.com"
  },
  {
    "Député": "M. Delaporte",
    "Département": "Calvados",
    "Circonscription 2": "2° circonscription",
    "Email": "arthur.delaporte@assemblee-nationale.fr"
  },
  {
    "Député": "M. Patrier-Leitus",
    "Département": "Calvados",
    "Circonscription 2": "3° circonscription",
    "Email": "jeremie.patrier-leitus@assemblee-nationale.fr"
  },
  {
    "Député": "M. Blanchet",
    "Département": "Calvados",
    "Circonscription 2": "4° circonscription",
    "Email": "christophe.blanchet@assemblee-nationale.fr"
  },
  {
    "Député": "M. Bouyx",
    "Département": "Calvados",
    "Circonscription 2": "5° circonscription",
    "Email": "bertrand.bouyx@assemblee-nationale.fr"
  },
  {
    "Député": "M. Sertin",
    "Département": "Calvados",
    "Circonscription 2": "6° circonscription",
    "Email": "freddy.sertin@assemblee-nationale.fr"
  },
  {
    "Député": "M. Descoeur",
    "Département": "Cantal",
    "Circonscription 2": "1ère circonscription",
    "Email": "contact@descoeur.com|vincent.descoeur@assemblee-nationale.fr"
  },
  {
    "Député": "M. Bony",
    "Département": "Cantal",
    "Circonscription 2": "2° circonscription",
    "Email": "jybony@orange.fr|jean-yves.bony@assemblee-nationale.fr"
  },
  {
    "Député": "M. Pilato",
    "Département": "Charente",
    "Circonscription 2": "1ère circonscription",
    "Email": "rene.pilato@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Marsaud",
    "Département": "Charente",
    "Circonscription 2": "2° circonscription",
    "Email": "sandra.marsaud@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Colombier",
    "Département": "Charente",
    "Circonscription 2": "3° circonscription",
    "Email": "caroline.colombier@assemblee-nationale.fr"
  },
  {
    "Député": "M. Falorni",
    "Département": "Charente-Maritime",
    "Circonscription 2": "1ère circonscription",
    "Email": "olivier.falorni@assemblee-nationale.fr"
  },
  {
    "Député": "M. Biteau",
    "Département": "Charente-Maritime",
    "Circonscription 2": "2° circonscription",
    "Email": "benoit.biteau@assemblee-nationale.fr"
  },
  {
    "Député": "M. Barusseau",
    "Département": "Charente-Maritime",
    "Circonscription 2": "3° circonscription",
    "Email": "fabrice.barusseau@assemblee-nationale.fr"
  },
  {
    "Député": "M. Markowsky",
    "Département": "Charente-Maritime",
    "Circonscription 2": "4° circonscription",
    "Email": "pascal.markowsky@assemblee-nationale.fr|markowsky.pascal@gmail.com"
  },
  {
    "Député": "M. Plassard",
    "Département": "Charente-Maritime",
    "Circonscription 2": "5° circonscription",
    "Email": "christophe.plassard@assemblee-nationale.fr"
  },
  {
    "Député": "M. Cormier-Bouligeon",
    "Département": "Cher",
    "Circonscription 2": "1ère circonscription",
    "Email": "francois.cormier-bouligeon@assemblee-nationale.fr"
  },
  {
    "Député": "M. Sansu",
    "Département": "Cher",
    "Circonscription 2": "2° circonscription",
    "Email": "nicolas.sansu@assemblee-nationale.fr"
  },
  {
    "Député": "M. Kervran",
    "Département": "Cher",
    "Circonscription 2": "3° circonscription",
    "Email": "loic.kervran@assemblee-nationale.fr"
  },
  {
    "Député": "M. Hollande",
    "Département": "CorrÃ¨ze",
    "Circonscription 2": "1ère circonscription",
    "Email": "francois.hollande@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Meunier",
    "Département": "CorrÃ¨ze",
    "Circonscription 2": "2° circonscription",
    "Email": "frederique.meunier@assemblee-nationale.fr"
  },
  {
    "Député": "M. Lacombe",
    "Département": "Corse-du-Sud",
    "Circonscription 2": "1ère circonscription",
    "Email": "xavier.lacombe@assemblee-nationale.fr"
  },
  {
    "Député": "M. Colombani",
    "Département": "Corse-du-Sud",
    "Circonscription 2": "2° circonscription",
    "Email": "paul-andre.colombani@assemblee-nationale.fr"
  },
  {
    "Député": "M. Lenoir",
    "Département": "Creuse",
    "Circonscription 2": "1ère circonscription",
    "Email": "bartolome.lenoir@assemblee-nationale.fr"
  },
  {
    "Député": "M. Marchive",
    "Département": "Deux-SÃ¨vres",
    "Circonscription 2": "1ère circonscription",
    "Email": "bastien.marchive@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Batho",
    "Département": "Deux-SÃ¨vres",
    "Circonscription 2": "2° circonscription",
    "Email": "delphine.batho@assemblee-nationale.fr"
  },
  {
    "Député": "M. Fiévet",
    "Département": "Deux-SÃ¨vres",
    "Circonscription 2": "3° circonscription",
    "Email": "jean-marie.fievet@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Lechon",
    "Département": "Dordogne",
    "Circonscription 2": "1ère circonscription",
    "Email": "nadine.lechon@assemblee-nationale.fr"
  },
  {
    "Député": "M. Muller",
    "Département": "Dordogne",
    "Circonscription 2": "2° circonscription",
    "Email": "serge.muller@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Joubert",
    "Département": "Dordogne",
    "Circonscription 2": "3° circonscription",
    "Email": "florence.joubert@assemblee-nationale.fr"
  },
  {
    "Député": "M. Peytavie",
    "Département": "Dordogne",
    "Circonscription 2": "4° circonscription",
    "Email": "sebastien.peytavie@assemblee-nationale.fr"
  },
  {
    "Député": "M. Croizier",
    "Département": "Doubs",
    "Circonscription 2": "1ère circonscription",
    "Email": "laurent.croizier@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Voynet",
    "Département": "Doubs",
    "Circonscription 2": "2° circonscription",
    "Email": "dominique.voynet@assemblee-nationale.fr"
  },
  {
    "Député": "M. Bloch",
    "Département": "Doubs",
    "Circonscription 2": "3° circonscription",
    "Email": "matthieu.bloch@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Grangier",
    "Département": "Doubs",
    "Circonscription 2": "4° circonscription",
    "Email": "geraldine.grangier@assemblee-nationale.fr"
  },
  {
    "Député": "M. LiÃ©geon",
    "Département": "Doubs",
    "Circonscription 2": "5° circonscription",
    "Email": "eric.liegeon@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Pollet",
    "Département": "DrÃ´me",
    "Circonscription 2": "2° circonscription",
    "Email": "lisette.pollet@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Pochon",
    "Département": "DrÃ´me",
    "Circonscription 2": "3° circonscription",
    "Email": "marie.pochon@assemblee-nationale.fr|contact@mariepochon.fr"
  },
  {
    "Député": "M. Monnier",
    "Département": "DrÃ´me",
    "Circonscription 2": "4° circonscription",
    "Email": "thibaut.monnier@assemblee-nationale.fr"
  },
  {
    "Député": "M. Christophle",
    "Département": "Drôme",
    "Circonscription 2": "1ère circonscription",
    "Email": "paul.christophle@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Amrani",
    "Département": "Essonne",
    "Circonscription 2": "1ère circonscription",
    "Email": "farida.amrani@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Da Conceicao Carvalho",
    "Département": "Essonne",
    "Circonscription 2": "2° circonscription",
    "Email": "nathalie.daconceicaocarvalho@assemblee-nationale.fr"
  },
  {
    "Député": "M. Gustave",
    "Département": "Essonne",
    "Circonscription 2": "3° circonscription",
    "Email": "steevy.gustave@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Rixain",
    "Département": "Essonne",
    "Circonscription 2": "4° circonscription",
    "Email": "marie-pierre.rixain@assemblee-nationale.fr|mprixain.perm@orange.fr"
  },
  {
    "Député": "M. Midy",
    "Département": "Essonne",
    "Circonscription 2": "5° circonscription",
    "Email": "paul.midy@assemblee-nationale.fr"
  },
  {
    "Député": "M. Guedj",
    "Département": "Essonne",
    "Circonscription 2": "6° circonscription",
    "Email": "jerome.guedj@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Lejeune",
    "Département": "Essonne",
    "Circonscription 2": "7° circonscription",
    "Email": "claire.lejeune@assemblee-nationale.fr"
  },
  {
    "Député": "M. Cernon",
    "Département": "Essonne",
    "Circonscription 2": "8° circonscription",
    "Email": "berenger.cernon@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Ozenne",
    "Département": "Essonne",
    "Circonscription 2": "9° circonscription",
    "Email": "julie.ozenne@assemblee-nationale.fr"
  },
  {
    "Député": "M. Léaument",
    "Département": "Essonne",
    "Circonscription 2": "10° circonscription",
    "Email": "antoine.leaument@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Loir",
    "Département": "Eure",
    "Circonscription 2": "1ère circonscription",
    "Email": "christine.loir@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Levavasseur",
    "Département": "Eure",
    "Circonscription 2": "2° circonscription",
    "Email": "katiana.levavasseur@assemblee-nationale.fr"
  },
  {
    "Député": "M. Mauvieux",
    "Département": "Eure",
    "Circonscription 2": "3° circonscription",
    "Email": "kevin.mauvieux@assemblee-nationale.fr"
  },
  {
    "Député": "M. Brun",
    "Département": "Eure",
    "Circonscription 2": "4° circonscription",
    "Email": "philippe.brun@assemblee-nationale.fr"
  },
  {
    "Député": "M. Houssin",
    "Département": "Eure",
    "Circonscription 2": "5° circonscription",
    "Email": "timothee.houssin@assemblee-nationale.fr"
  },
  {
    "Député": "M. Kasbarian",
    "Département": "Eure-et-Loir",
    "Circonscription 2": "1ère circonscription",
    "Email": "guillaume.kasbarian@assemblee-nationale.fr|contact@guillaumekasbarian.fr"
  },
  {
    "Député": "M. Marleix",
    "Département": "Eure-et-Loir",
    "Circonscription 2": "2° circonscription",
    "Email": "olivier.marleix@assemblee-nationale.fr"
  },
  {
    "Député": "M. Huwart",
    "Département": "Eure-et-Loir",
    "Circonscription 2": "3° circonscription",
    "Email": "harold.huwart@assemblee-nationale.fr"
  },
  {
    "Député": "M. Vigier",
    "Département": "Eure-et-Loir",
    "Circonscription 2": "4° circonscription",
    "Email": "philippe.vigier@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Le Meur",
    "Département": "FinistÃ¨re",
    "Circonscription 2": "1ère circonscription",
    "Email": "annaig.lemeur@assemblee-nationale.fr"
  },
  {
    "Député": "M. Cadalen",
    "Département": "FinistÃ¨re",
    "Circonscription 2": "2° circonscription",
    "Email": "pierre-yves.cadalen@assemblee-nationale.fr"
  },
  {
    "Député": "M. Le Gac",
    "Département": "FinistÃ¨re",
    "Circonscription 2": "3° circonscription",
    "Email": "didier.legac@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Le Feur",
    "Département": "FinistÃ¨re",
    "Circonscription 2": "4° circonscription",
    "Email": "sandrine.lefeur@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Melchior",
    "Département": "FinistÃ¨re",
    "Circonscription 2": "5° circonscription",
    "Email": "graziella.melchior@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Thomin",
    "Département": "FinistÃ¨re",
    "Circonscription 2": "6° circonscription",
    "Email": "melanie.thomin@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Tanguy",
    "Département": "FinistÃ¨re",
    "Circonscription 2": "7° circonscription",
    "Email": "liliana.tanguy@assemblee-nationale.fr"
  },
  {
    "Député": "M. Balanant",
    "Département": "FinistÃ¨re",
    "Circonscription 2": "8° circonscription",
    "Email": "erwan.balanant@assemblee-nationale.fr"
  },
  {
    "Député": "M. Lescure",
    "Département": "FranÃ§ais Ã©tablis hors de France",
    "Circonscription 2": "1ère circonscription",
    "Email": "roland.lescure@assemblee-nationale.fr"
  },
  {
    "Député": "M. Caure",
    "Département": "FranÃ§ais Ã©tablis hors de France",
    "Circonscription 2": "3° circonscription",
    "Email": "vincent.caure@assemblee-nationale.fr"
  },
  {
    "Député": "M. Anglade",
    "Département": "FranÃ§ais Ã©tablis hors de France",
    "Circonscription 2": "4° circonscription",
    "Email": "pieyre-alexandre.anglade@assemblee-nationale.fr"
  },
  {
    "Député": "M. Vojetta",
    "Département": "FranÃ§ais Ã©tablis hors de France",
    "Circonscription 2": "5° circonscription",
    "Email": "stephane.vojetta@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Rousselot",
    "Département": "FranÃ§ais Ã©tablis hors de France",
    "Circonscription 2": "6° circonscription",
    "Email": "marie-ange.rousselot@assemblee-nationale.fr"
  },
  {
    "Député": "M. Petit",
    "Département": "FranÃ§ais Ã©tablis hors de France",
    "Circonscription 2": "7° circonscription",
    "Email": "frederic.petit@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Yadan",
    "Département": "FranÃ§ais Ã©tablis hors de France",
    "Circonscription 2": "8° circonscription",
    "Email": "caroline.yadan@assemblee-nationale.fr"
  },
  {
    "Député": "M. Ben Cheikh",
    "Département": "FranÃ§ais Ã©tablis hors de France",
    "Circonscription 2": "9° circonscription",
    "Email": "karim.bencheikh@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Lakrafi",
    "Département": "FranÃ§ais Ã©tablis hors de France",
    "Circonscription 2": "10° circonscription",
    "Email": "amelia.lakrafi@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Genetet",
    "Département": "FranÃ§ais Ã©tablis hors de France",
    "Circonscription 2": "11° circonscription",
    "Email": "anne.genetet@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Caroit",
    "Département": "Français établis hors de france",
    "Circonscription 2": "2° circonscription",
    "Email": "eleonore.caroit@assemblee-nationale.fr"
  },
  {
    "Député": "M. Gillet",
    "Département": "Gard",
    "Circonscription 2": "1ère circonscription",
    "Email": "yoann.gillet@assemblee-nationale.fr|contact@yoanngillet.fr"
  },
  {
    "Député": "M. Meizonnet",
    "Département": "Gard",
    "Circonscription 2": "2° circonscription",
    "Email": "nicolas.meizonnet@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Bordes",
    "Département": "Gard",
    "Circonscription 2": "3° circonscription",
    "Email": "pascale.bordes@assemblee-nationale.fr"
  },
  {
    "Député": "M. Meurin",
    "Département": "Gard",
    "Circonscription 2": "4° circonscription",
    "Email": "pierre.meurin@assemblee-nationale.fr"
  },
  {
    "Député": "M. Allegret-Pilot",
    "Département": "Gard",
    "Circonscription 2": "5° circonscription",
    "Email": "alexandre.allegret-pilot@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Josserand",
    "Département": "Gard",
    "Circonscription 2": "6° circonscription",
    "Email": "sylvie.josserand@assemblee-nationale.fr"
  },
  {
    "Député": "M. Cazeneuve",
    "Département": "Gers",
    "Circonscription 2": "1ère circonscription",
    "Email": "jean-rene.cazeneuve@assemblee-nationale.fr"
  },
  {
    "Député": "M. Taupiac",
    "Département": "Gers",
    "Circonscription 2": "2° circonscription",
    "Email": "david.taupiac@assemblee-nationale.fr|davidtaupiac.permanence@gmail.com"
  },
  {
    "Député": "M. Cazenave",
    "Département": "Gironde",
    "Circonscription 2": "1ère circonscription",
    "Email": "thomas.cazenave@assemblee-nationale.fr"
  },
  {
    "Député": "M. Thierry",
    "Département": "Gironde",
    "Circonscription 2": "2° circonscription",
    "Email": "nicolas.thierry@assemblee-nationale.fr"
  },
  {
    "Député": "M. Prud'homme",
    "Département": "Gironde",
    "Circonscription 2": "3° circonscription",
    "Email": "loic.prudhomme@assemblee-nationale.fr"
  },
  {
    "Député": "M. David",
    "Département": "Gironde",
    "Circonscription 2": "4° circonscription",
    "Email": "alain.david@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Got",
    "Département": "Gironde",
    "Circonscription 2": "5° circonscription",
    "Email": "pascale.got@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Récalde",
    "Département": "Gironde",
    "Circonscription 2": "6° circonscription",
    "Email": "marie.recalde@assemblee-nationale.fr"
  },
  {
    "Député": "M. Saint-Pasteur",
    "Département": "Gironde",
    "Circonscription 2": "7° circonscription",
    "Email": "sebastien.saint-pasteur@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Panonacle",
    "Département": "Gironde",
    "Circonscription 2": "8° circonscription",
    "Email": "sophie.panonacle@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Mette",
    "Département": "Gironde",
    "Circonscription 2": "9° circonscription",
    "Email": "sophie.mette@assemblee-nationale.fr"
  },
  {
    "Député": "M. Boudié",
    "Département": "Gironde",
    "Circonscription 2": "10° circonscription",
    "Email": "florent.boudie@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Diaz",
    "Département": "Gironde",
    "Circonscription 2": "11° circonscription",
    "Email": "edwige.diaz@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Feld",
    "Département": "Gironde",
    "Circonscription 2": "12° circonscription",
    "Email": "mathilde.feld@assemblee-nationale.fr"
  },
  {
    "Député": "M. Serva",
    "Département": "Guadeloupe",
    "Circonscription 2": "1ère circonscription",
    "Email": "o.serva@ose.gp|olivier.serva@assemblee-nationale.fr"
  },
  {
    "Député": "M. Baptiste",
    "Département": "Guadeloupe",
    "Circonscription 2": "2° circonscription",
    "Email": "christian.baptiste@assemblee-nationale.fr"
  },
  {
    "Député": "M. Mathiasin",
    "Département": "Guadeloupe",
    "Circonscription 2": "3° circonscription",
    "Email": "max.mathiasin@assemblee-nationale.fr"
  },
  {
    "Député": "M. Califer",
    "Département": "Guadeloupe",
    "Circonscription 2": "4° circonscription",
    "Email": "elie.califer@assemblee-nationale.fr"
  },
  {
    "Député": "M. Castor",
    "Département": "Guyane",
    "Circonscription 2": "1ère circonscription",
    "Email": "jean-victor.castor@assemblee-nationale.fr"
  },
  {
    "Député": "M. Rimane",
    "Département": "Guyane",
    "Circonscription 2": "2° circonscription",
    "Email": "davy.rimane@assemblee-nationale.fr"
  },
  {
    "Député": "M. Roumégas",
    "Département": "HÃ©rault",
    "Circonscription 2": "1ère circonscription",
    "Email": "jean-louis.roumegas@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Oziol",
    "Département": "HÃ©rault",
    "Circonscription 2": "2° circonscription",
    "Email": "nathalie.oziol@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Dombre Coste",
    "Département": "HÃ©rault",
    "Circonscription 2": "3° circonscription",
    "Email": "fanny.dombrecoste@assemblee-nationale.fr|fannydombrecoste2024@gmail.com"
  },
  {
    "Député": "Mme Bouquin",
    "Département": "HÃ©rault",
    "Circonscription 2": "4° circonscription",
    "Email": "manon.bouquin@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Galzy",
    "Département": "HÃ©rault",
    "Circonscription 2": "5° circonscription",
    "Email": "stephanie.galzy@assemblee-nationale.fr"
  },
  {
    "Député": "M. Gabarron",
    "Département": "HÃ©rault",
    "Circonscription 2": "6° circonscription",
    "Email": "julien.gabarron@assemblee-nationale.fr"
  },
  {
    "Député": "M. Lopez-Liguori",
    "Département": "HÃ©rault",
    "Circonscription 2": "7° circonscription",
    "Email": "aurelien.lopezliguori@assemblee-nationale.fr"
  },
  {
    "Député": "M. Carrière",
    "Département": "HÃ©rault",
    "Circonscription 2": "8° circonscription",
    "Email": "sylvain.carriere@assemblee-nationale.fr"
  },
  {
    "Député": "M. Alloncle",
    "Département": "HÃ©rault",
    "Circonscription 2": "9° circonscription",
    "Email": "charles.alloncle@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Klinkert",
    "Département": "Haut-Rhin",
    "Circonscription 2": "1ère circonscription",
    "Email": "brigitte.klinkert@assemblee-nationale.fr"
  },
  {
    "Député": "M. Ott",
    "Département": "Haut-Rhin",
    "Circonscription 2": "2° circonscription",
    "Email": "hubert.ott@assemblee-nationale.fr"
  },
  {
    "Député": "M. Lemaire",
    "Département": "Haut-Rhin",
    "Circonscription 2": "3° circonscription",
    "Email": "didier.lemaire@assemblee-nationale.fr"
  },
  {
    "Député": "M. Schellenberger",
    "Département": "Haut-Rhin",
    "Circonscription 2": "4° circonscription",
    "Email": "raphael.schellenberger@assemblee-nationale.fr"
  },
  {
    "Député": "M. Becht",
    "Département": "Haut-Rhin",
    "Circonscription 2": "5° circonscription",
    "Email": "cabinet.becht@gmail.com|olivier.becht@assemblee-nationale.fr"
  },
  {
    "Député": "M. Fuchs",
    "Département": "Haut-Rhin",
    "Circonscription 2": "6° circonscription",
    "Email": "bruno.fuchs@assemblee-nationale.fr"
  },
  {
    "Député": "M. Castellani",
    "Département": "Haute-Corse",
    "Circonscription 2": "1ère circonscription",
    "Email": "michel.castellani@assemblee-nationale.fr"
  },
  {
    "Député": "M. Ceccoli",
    "Département": "Haute-Corse",
    "Circonscription 2": "2° circonscription",
    "Email": "francois-xavier.ceccoli@assemblee-nationale.fr"
  },
  {
    "Député": "M. Clouet",
    "Département": "Haute-Garonne",
    "Circonscription 2": "1ère circonscription",
    "Email": "hadrien.clouet@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Stambach-Terrenoir",
    "Département": "Haute-Garonne",
    "Circonscription 2": "2° circonscription",
    "Email": "anne.stambach-terrenoir@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Vignon",
    "Département": "Haute-Garonne",
    "Circonscription 2": "3° circonscription",
    "Email": "permanence@corinnevignon.fr|corinne.vignon@assemblee-nationale.fr"
  },
  {
    "Député": "M. Piquemal",
    "Département": "Haute-Garonne",
    "Circonscription 2": "4° circonscription",
    "Email": "francois.piquemal@assemblee-nationale.fr"
  },
  {
    "Député": "M. Portarrieu",
    "Département": "Haute-Garonne",
    "Circonscription 2": "5° circonscription",
    "Email": "contact@portarrieu.fr|jean-francois.portarrieu@assemblee-nationale.fr"
  },
  {
    "Député": "M. Simion",
    "Département": "Haute-Garonne",
    "Circonscription 2": "6° circonscription",
    "Email": "arnaud.simion@assemblee-nationale.fr"
  },
  {
    "Député": "M. Bex",
    "Département": "Haute-Garonne",
    "Circonscription 2": "7° circonscription",
    "Email": "christophe.bex@assemblee-nationale.fr"
  },
  {
    "Député": "M. Aviragnet",
    "Département": "Haute-Garonne",
    "Circonscription 2": "8° circonscription",
    "Email": "joelaviragnet@gmail.com|joel.aviragnet@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Arrighi",
    "Département": "Haute-Garonne",
    "Circonscription 2": "9° circonscription",
    "Email": "christine.arrighi@assemblee-nationale.fr"
  },
  {
    "Député": "M. Oberti",
    "Département": "Haute-Garonne",
    "Circonscription 2": "10° circonscription",
    "Email": "jacques.oberti@assemblee-nationale.fr"
  },
  {
    "Député": "M. Wauquiez",
    "Département": "Haute-Loire",
    "Circonscription 2": "1ère circonscription",
    "Email": "laurent.wauquiez@assemblee-nationale.fr"
  },
  {
    "Député": "M. Vigier",
    "Département": "Haute-Loire",
    "Circonscription 2": "2° circonscription",
    "Email": "jean-pierre.vigier@assemblee-nationale.fr"
  },
  {
    "Député": "M. Bentz",
    "Département": "Haute-Marne",
    "Circonscription 2": "1ère circonscription",
    "Email": "christophe.bentz@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Robert-Dehault",
    "Département": "Haute-Marne",
    "Circonscription 2": "2° circonscription",
    "Email": "laurence.robert-dehault@assemblee-nationale.fr"
  },
  {
    "Député": "M. Villedieu",
    "Département": "Haute-SaÃ´ne",
    "Circonscription 2": "1ère circonscription",
    "Email": "antoine.villedieu@assemblee-nationale.fr"
  },
  {
    "Député": "M. Salmon",
    "Département": "Haute-SaÃ´ne",
    "Circonscription 2": "2° circonscription",
    "Email": "emeric.salmon@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Riotton",
    "Département": "Haute-Savoie",
    "Circonscription 2": "1ère circonscription",
    "Email": "veronique.riotton@assemblee-nationale.fr"
  },
  {
    "Député": "M. Armand",
    "Département": "Haute-Savoie",
    "Circonscription 2": "2° circonscription",
    "Email": "antoine.armand@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Petex",
    "Département": "Haute-Savoie",
    "Circonscription 2": "3° circonscription",
    "Email": "christelle.petex-levet@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Duby-Muller",
    "Département": "Haute-Savoie",
    "Circonscription 2": "4° circonscription",
    "Email": "depute@virginiedubymuller.fr|virginie.duby-muller@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Violland",
    "Département": "Haute-Savoie",
    "Circonscription 2": "5° circonscription",
    "Email": "anne-cecile.violland@assemblee-nationale.fr"
  },
  {
    "Député": "M. Roseren",
    "Département": "Haute-Savoie",
    "Circonscription 2": "6° circonscription",
    "Email": "xavier.roseren@assemblee-nationale.fr"
  },
  {
    "Député": "M. Maudet",
    "Département": "Haute-Vienne",
    "Circonscription 2": "1ère circonscription",
    "Email": "damien.maudet@assemblee-nationale.fr"
  },
  {
    "Député": "M. Delautrette",
    "Département": "Haute-Vienne",
    "Circonscription 2": "2° circonscription",
    "Email": "stephane.delautrette@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Meunier",
    "Département": "Haute-Vienne",
    "Circonscription 2": "3° circonscription",
    "Email": "manon.meunier@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Allemand",
    "Département": "Hautes-Alpes",
    "Circonscription 2": "1ère circonscription",
    "Email": "marie-jose.allemand@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Rossi",
    "Département": "Hautes-Alpes",
    "Circonscription 2": "2° circonscription",
    "Email": "valerie.rossi@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Ferrer",
    "Département": "Hautes-PyrÃ©nÃ©es",
    "Circonscription 2": "1ère circonscription",
    "Email": "sylvie.ferrer@assemblee-nationale.fr"
  },
  {
    "Député": "M. Fégné",
    "Département": "Hautes-PyrÃ©nÃ©es",
    "Circonscription 2": "2° circonscription",
    "Email": "denis.fegne@assemblee-nationale.fr|permanencedenisfegne@gmail.com"
  },
  {
    "Député": "Mme Faucillon",
    "Département": "Hauts-de-Seine",
    "Circonscription 2": "1ère circonscription",
    "Email": "elsa.faucillon@assemblee-nationale.fr"
  },
  {
    "Député": "M. Lam",
    "Département": "Hauts-de-Seine",
    "Circonscription 2": "2° circonscription",
    "Email": "thomas.lam@assemblee-nationale.fr"
  },
  {
    "Député": "M. Juvin",
    "Département": "Hauts-de-Seine",
    "Circonscription 2": "3° circonscription",
    "Email": "philippe.juvin@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Sebaihi",
    "Département": "Hauts-de-Seine",
    "Circonscription 2": "4° circonscription",
    "Email": "sabrina.sebaihi@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Calvez",
    "Département": "Hauts-de-Seine",
    "Circonscription 2": "5° circonscription",
    "Email": "celine.calvez@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Le Grip",
    "Département": "Hauts-de-Seine",
    "Circonscription 2": "6° circonscription",
    "Email": "constance.legrip@assemblee-nationale.fr"
  },
  {
    "Député": "M. Cazeneuve",
    "Département": "Hauts-de-Seine",
    "Circonscription 2": "7° circonscription",
    "Email": "pierre.cazeneuve@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Thevenot",
    "Département": "Hauts-de-Seine",
    "Circonscription 2": "8° circonscription",
    "Email": "prisca.thevenot@assemblee-nationale.fr"
  },
  {
    "Député": "Mme de Maistre",
    "Département": "Hauts-de-Seine",
    "Circonscription 2": "9° circonscription",
    "Email": "elisabeth.demaistre@assemblee-nationale.fr"
  },
  {
    "Député": "M. Attal",
    "Département": "Hauts-de-Seine",
    "Circonscription 2": "10° circonscription",
    "Email": "gabriel.attal@assemblee-nationale.fr"
  },
  {
    "Député": "M. Saintoul",
    "Département": "Hauts-de-Seine",
    "Circonscription 2": "11° circonscription",
    "Email": "aurelien.saintoul@assemblee-nationale.fr"
  },
  {
    "Député": "M. Berger",
    "Département": "Hauts-de-Seine",
    "Circonscription 2": "12° circonscription",
    "Email": "jean-didier.berger@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Bregeon",
    "Département": "Hauts-de-Seine",
    "Circonscription 2": "13° circonscription",
    "Email": "maud.bregeon@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Mesmeur",
    "Département": "Ille-et-Vilaine",
    "Circonscription 2": "1ère circonscription",
    "Email": "marie.mesmeur@assemblee-nationale.fr"
  },
  {
    "Député": "M. Lahais",
    "Département": "Ille-et-Vilaine",
    "Circonscription 2": "2° circonscription",
    "Email": "tristan.lahais@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Rouaux",
    "Département": "Ille-et-Vilaine",
    "Circonscription 2": "3° circonscription",
    "Email": "claudia.rouaux@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Hignet",
    "Département": "Ille-et-Vilaine",
    "Circonscription 2": "4° circonscription",
    "Email": "mathilde.hignet@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Le Nabour",
    "Département": "Ille-et-Vilaine",
    "Circonscription 2": "5° circonscription",
    "Email": "christine.lenabour@assemblee-nationale.fr"
  },
  {
    "Député": "M. Benoit",
    "Département": "Ille-et-Vilaine",
    "Circonscription 2": "6° circonscription",
    "Email": "contact@thierry-benoit.fr|thierry.benoit@assemblee-nationale.fr"
  },
  {
    "Député": "M. Bourgeaux",
    "Département": "Ille-et-Vilaine",
    "Circonscription 2": "7° circonscription",
    "Email": "jean-luc.bourgeaux@assemblee-nationale.fr"
  },
  {
    "Député": "M. Bouloux",
    "Département": "Ille-et-Vilaine",
    "Circonscription 2": "8° circonscription",
    "Email": "mickael.bouloux@assemblee-nationale.fr"
  },
  {
    "Député": "M. Jolivet",
    "Département": "Indre",
    "Circonscription 2": "1ère circonscription",
    "Email": "francois.jolivet@assemblee-nationale.fr"
  },
  {
    "Député": "M. Forissier",
    "Département": "Indre",
    "Circonscription 2": "2° circonscription",
    "Email": "nicolas.forissier@assemblee-nationale.fr"
  },
  {
    "Député": "M. Fournier",
    "Département": "Indre-et-Loire",
    "Circonscription 2": "1ère circonscription",
    "Email": "charles.fournier@assemblee-nationale.fr"
  },
  {
    "Député": "M. Labaronne",
    "Département": "Indre-et-Loire",
    "Circonscription 2": "2° circonscription",
    "Email": "daniel.labaronne@assemblee-nationale.fr"
  },
  {
    "Député": "M. Alfandari",
    "Département": "Indre-et-Loire",
    "Circonscription 2": "3° circonscription",
    "Email": "henri.alfandari@assemblee-nationale.fr"
  },
  {
    "Député": "M. Baumel",
    "Département": "Indre-et-Loire",
    "Circonscription 2": "4° circonscription",
    "Email": "laurent.baumel@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Thillaye",
    "Département": "Indre-et-Loire",
    "Circonscription 2": "5° circonscription",
    "Email": "sabine.thillaye@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Galliard-Minier",
    "Département": "IsÃ¨re",
    "Circonscription 2": "1ère circonscription",
    "Email": "contact@galliard-minier.fr|camille.galliard-minier@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Chatelain",
    "Département": "IsÃ¨re",
    "Circonscription 2": "2° circonscription",
    "Email": "cyrielle.chatelain@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Martin",
    "Département": "IsÃ¨re",
    "Circonscription 2": "3° circonscription",
    "Email": "elisa.martin@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Battistel",
    "Département": "IsÃ¨re",
    "Circonscription 2": "4° circonscription",
    "Email": "mnoelle.battistel@orange.fr|marie-noelle.battistel@assemblee-nationale.fr"
  },
  {
    "Député": "M. Iordanoff",
    "Département": "IsÃ¨re",
    "Circonscription 2": "5° circonscription",
    "Email": "jeremie.iordanoff@assemblee-nationale.fr"
  },
  {
    "Député": "M. Jolly",
    "Département": "IsÃ¨re",
    "Circonscription 2": "6° circonscription",
    "Email": "alexis.jolly@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Dezarnaud",
    "Département": "IsÃ¨re",
    "Circonscription 2": "7° circonscription",
    "Email": "sylvie.dezarnaud@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Mansouri",
    "Département": "IsÃ¨re",
    "Circonscription 2": "8° circonscription",
    "Email": "hanane.mansouri@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Nosbé",
    "Département": "IsÃ¨re",
    "Circonscription 2": "9° circonscription",
    "Email": "sandrine.nosbe@assemblee-nationale.fr"
  },
  {
    "Député": "M. Perez",
    "Département": "IsÃ¨re",
    "Circonscription 2": "10° circonscription",
    "Email": "thierry.perez@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Brulebois",
    "Département": "Jura",
    "Circonscription 2": "1ère circonscription",
    "Email": "danielle.brulebois@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Dalloz",
    "Département": "Jura",
    "Circonscription 2": "2° circonscription",
    "Email": "marie-christine.dalloz@assemblee-nationale.fr|marie-christine.dalloz390@orange.fr"
  },
  {
    "Député": "Mme Gruet",
    "Département": "Jura",
    "Circonscription 2": "3° circonscription",
    "Email": "justine.gruet@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Darrieussecq",
    "Département": "Landes",
    "Circonscription 2": "1ère circonscription",
    "Email": "genevieve.darrieussecq@assemblee-nationale.fr"
  },
  {
    "Député": "M. Causse",
    "Département": "Landes",
    "Circonscription 2": "2° circonscription",
    "Email": "lionel.causse@assemblee-nationale.fr"
  },
  {
    "Député": "M. Vallaud",
    "Département": "Landes",
    "Circonscription 2": "3° circonscription",
    "Email": "boris.vallaud@assemblee-nationale.fr"
  },
  {
    "Député": "M. Fesneau",
    "Département": "Loir-et-Cher",
    "Circonscription 2": "1ère circonscription",
    "Email": "marc.fesneau@assemblee-nationale.fr"
  },
  {
    "Député": "M. Chudeau",
    "Département": "Loir-et-Cher",
    "Circonscription 2": "2° circonscription",
    "Email": "roger.chudeau@assemblee-nationale.fr"
  },
  {
    "Député": "M. Marion",
    "Département": "Loir-et-Cher",
    "Circonscription 2": "3° circonscription",
    "Email": "christophe.marion@assemblee-nationale.fr"
  },
  {
    "Député": "M. Courbon",
    "Département": "Loire",
    "Circonscription 2": "1ère circonscription",
    "Email": "pierrick.courbon@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Taurinya",
    "Département": "Loire",
    "Circonscription 2": "2° circonscription",
    "Email": "andree.taurinya@assemblee-nationale.fr"
  },
  {
    "Député": "M. Mandon",
    "Département": "Loire",
    "Circonscription 2": "3° circonscription",
    "Email": "emmanuel.mandon@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Bonnet",
    "Département": "Loire",
    "Circonscription 2": "4° circonscription",
    "Email": "sylvie.bonnet@assemblee-nationale.fr|deputee@bonnetsylvie.fr"
  },
  {
    "Député": "M. Vermorel-Marques",
    "Département": "Loire",
    "Circonscription 2": "5° circonscription",
    "Email": "antoine.vermorel@assemblee-nationale.fr|contact@antoinevermorel.fr"
  },
  {
    "Député": "M. Taite",
    "Département": "Loire",
    "Circonscription 2": "6° circonscription",
    "Email": "jean-pierre.taite@assemblee-nationale.fr|taite.bonnefoy.assemblee@gmail.com"
  },
  {
    "Député": "M. Benbrahim",
    "Département": "Loire-Atlantique",
    "Circonscription 2": "1ère circonscription",
    "Email": "karim.benbrahim@assemblee-nationale.fr"
  },
  {
    "Député": "M. Kerbrat",
    "Département": "Loire-Atlantique",
    "Circonscription 2": "2° circonscription",
    "Email": "andy.kerbrat@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Amiot",
    "Département": "Loire-Atlantique",
    "Circonscription 2": "3° circonscription",
    "Email": "segolene.amiot@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Laernoes",
    "Département": "Loire-Atlantique",
    "Circonscription 2": "4° circonscription",
    "Email": "julie.laernoes@assemblee-nationale.fr"
  },
  {
    "Député": "M. Roussel",
    "Département": "Loire-Atlantique",
    "Circonscription 2": "5° circonscription",
    "Email": "fabrice.roussel@assemblee-nationale.fr"
  },
  {
    "Député": "M. Raux",
    "Département": "Loire-Atlantique",
    "Circonscription 2": "6° circonscription",
    "Email": "jean-claude.raux@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Josso",
    "Département": "Loire-Atlantique",
    "Circonscription 2": "7° circonscription",
    "Email": "sandrine.josso@assemblee-nationale.fr"
  },
  {
    "Député": "M. Tavel",
    "Département": "Loire-Atlantique",
    "Circonscription 2": "8° circonscription",
    "Email": "matthias.tavel@assemblee-nationale.fr"
  },
  {
    "Député": "M. Brard",
    "Département": "Loire-Atlantique",
    "Circonscription 2": "9° circonscription",
    "Email": "jean-michel.brard@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Errante",
    "Département": "Loire-Atlantique",
    "Circonscription 2": "10° circonscription",
    "Email": "permanence@sophie-errante.fr|sophie.errante@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Rist",
    "Département": "Loiret",
    "Circonscription 2": "1ère circonscription",
    "Email": "stephanie.rist@assemblee-nationale.fr"
  },
  {
    "Député": "M. Duplessy",
    "Département": "Loiret",
    "Circonscription 2": "2° circonscription",
    "Email": "emmanuel.duplessy@assemblee-nationale.fr"
  },
  {
    "Député": "Mme de Pélichy",
    "Département": "Loiret",
    "Circonscription 2": "3° circonscription",
    "Email": "constance.depelichy@assemblee-nationale.fr"
  },
  {
    "Député": "M. Ménagé",
    "Département": "Loiret",
    "Circonscription 2": "4° circonscription",
    "Email": "thomas.menage@assemblee-nationale.fr"
  },
  {
    "Député": "M. Brosse",
    "Département": "Loiret",
    "Circonscription 2": "5° circonscription",
    "Email": "anthony.brosse@assemblee-nationale.fr"
  },
  {
    "Député": "M. Ramos",
    "Département": "Loiret",
    "Circonscription 2": "6° circonscription",
    "Email": "richard.ramos@assemblee-nationale.fr"
  },
  {
    "Député": "M. Pradié",
    "Département": "Lot",
    "Circonscription 2": "1ère circonscription",
    "Email": "aurelien.pradie@assemblee-nationale.fr"
  },
  {
    "Député": "M. Proença",
    "Département": "Lot",
    "Circonscription 2": "2° circonscription",
    "Email": "christophe.proenca@assemblee-nationale.fr"
  },
  {
    "Député": "M. Lauzzana",
    "Département": "Lot-et-Garonne",
    "Circonscription 2": "1ère circonscription",
    "Email": "michel.lauzzana@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Laporte",
    "Département": "Lot-et-Garonne",
    "Circonscription 2": "2° circonscription",
    "Email": "helene.laporte@assemblee-nationale.fr"
  },
  {
    "Député": "M. Lepers",
    "Département": "Lot-et-Garonne",
    "Circonscription 2": "3° circonscription",
    "Email": "guillaume.lepers@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Pantel",
    "Département": "LozÃ¨re",
    "Circonscription 2": "1ère circonscription",
    "Email": "sophie.pantel@assemblee-nationale.fr"
  },
  {
    "Député": "M. Gernigon",
    "Département": "Maine-et-Loire",
    "Circonscription 2": "1ère circonscription",
    "Email": "francois.gernigon@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Dupont",
    "Département": "Maine-et-Loire",
    "Circonscription 2": "2° circonscription",
    "Email": "stella.dupont@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Blin",
    "Département": "Maine-et-Loire",
    "Circonscription 2": "3° circonscription",
    "Email": "anne-laure.blin@assemblee-nationale.fr|contact@annelaureblin.fr"
  },
  {
    "Député": "Mme Saint-Paul",
    "Département": "Maine-et-Loire",
    "Circonscription 2": "4° circonscription",
    "Email": "laetitia.saint-paul@assemblee-nationale.fr"
  },
  {
    "Député": "M. MassÃ©glia",
    "Département": "Maine-et-Loire",
    "Circonscription 2": "5° circonscription",
    "Email": "denis.masseglia@assemblee-nationale.fr"
  },
  {
    "Député": "Mme DubrÃ©-Chirat",
    "Département": "Maine-et-Loire",
    "Circonscription 2": "6° circonscription",
    "Email": "nicole.dubre-chirat@assemblee-nationale.fr"
  },
  {
    "Député": "M. Bolo",
    "Département": "Maine-et-Loire",
    "Circonscription 2": "7° circonscription",
    "Email": "philippe.bolo@assemblee-nationale.fr"
  },
  {
    "Député": "M. Gosselin",
    "Département": "Manche",
    "Circonscription 2": "1ère circonscription",
    "Email": "philippe.gosselin@assemblee-nationale.fr|philippegosselin50@orange.fr"
  },
  {
    "Député": "M. Sorre",
    "Département": "Manche",
    "Circonscription 2": "2° circonscription",
    "Email": "bertrand.sorre@assemblee-nationale.fr"
  },
  {
    "Député": "M. Travert",
    "Département": "Manche",
    "Circonscription 2": "3° circonscription",
    "Email": "permanence.stravert@gmail.com|stephane.travert@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Pic",
    "Département": "Manche",
    "Circonscription 2": "4° circonscription",
    "Email": "anna.pic@assemblee-nationale.fr"
  },
  {
    "Député": "M. Albertini",
    "Département": "Marne",
    "Circonscription 2": "1ère circonscription",
    "Email": "xavier.albertini@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Miller",
    "Département": "Marne",
    "Circonscription 2": "2° circonscription",
    "Email": "laure.miller@assemblee-nationale.fr"
  },
  {
    "Député": "M. Michelet",
    "Département": "Marne",
    "Circonscription 2": "3° circonscription",
    "Email": "maxime.michelet@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Magnier",
    "Département": "Marne",
    "Circonscription 2": "4° circonscription",
    "Email": "contact@lisemagnier.fr|lise.magnier@assemblee-nationale.fr"
  },
  {
    "Député": "M. de Courson",
    "Département": "Marne",
    "Circonscription 2": "5° circonscription",
    "Email": "charles.de-courson@wanadoo.fr|charles.decourson@assemblee-nationale.fr"
  },
  {
    "Député": "M. William",
    "Département": "Martinique",
    "Circonscription 2": "1ère circonscription",
    "Email": "jiovanny.william@assemblee-nationale.fr"
  },
  {
    "Député": "M. Nadeau",
    "Département": "Martinique",
    "Circonscription 2": "2° circonscription",
    "Email": "marcellin.nadeau@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Bellay",
    "Département": "Martinique",
    "Circonscription 2": "3° circonscription",
    "Email": "beatrice.bellay@assemblee-nationale.fr"
  },
  {
    "Député": "M. Nilor",
    "Département": "Martinique",
    "Circonscription 2": "4° circonscription",
    "Email": "jean-philippe.nilor@wanadoo.fr|jean-philippe.nilor@assemblee-nationale.fr"
  },
  {
    "Député": "M. Garot",
    "Département": "Mayenne",
    "Circonscription 2": "1ère circonscription",
    "Email": "permanence@garot.fr|guillaume.garot@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Bannier",
    "Département": "Mayenne",
    "Circonscription 2": "2° circonscription",
    "Email": "geraldine.bannier@assemblee-nationale.fr"
  },
  {
    "Député": "M. Favennec-Bécot",
    "Département": "Mayenne",
    "Circonscription 2": "3° circonscription",
    "Email": "favennec.yannick@wanadoo.fr|yannick.favennec@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Youssouffa",
    "Département": "Mayotte",
    "Circonscription 2": "1ère circonscription",
    "Email": "estelle.youssouffa@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Bamana",
    "Département": "Mayotte",
    "Circonscription 2": "2° circonscription",
    "Email": "anchya.bamana@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Mercier",
    "Département": "Meurthe-et-Moselle",
    "Circonscription 2": "1ère circonscription",
    "Email": "estelle.mercier@assemblee-nationale.fr"
  },
  {
    "Député": "M. Hablot",
    "Département": "Meurthe-et-Moselle",
    "Circonscription 2": "2° circonscription",
    "Email": "stephane.hablot@assemblee-nationale.fr"
  },
  {
    "Député": "M. Weber",
    "Département": "Meurthe-et-Moselle",
    "Circonscription 2": "3° circonscription",
    "Email": "frederic.weber@assemblee-nationale.fr"
  },
  {
    "Député": "M. Bazin",
    "Département": "Meurthe-et-Moselle",
    "Circonscription 2": "4° circonscription",
    "Email": "thibault.bazin@assemblee-nationale.fr|permanence.bazin@gmail.com"
  },
  {
    "Député": "M. Potier",
    "Département": "Meurthe-et-Moselle",
    "Circonscription 2": "5° circonscription",
    "Email": "dominique.potier@assemblee-nationale.fr"
  },
  {
    "Député": "M. Boulogne",
    "Département": "Meurthe-et-Moselle",
    "Circonscription 2": "6° circonscription",
    "Email": "anthony.boulogne@assemblee-nationale.fr"
  },
  {
    "Député": "M. Amblard",
    "Département": "Meuse",
    "Circonscription 2": "1ère circonscription",
    "Email": "maxime.amblard@assemblee-nationale.fr|mamblard.servicepresse@gmail.com"
  },
  {
    "Député": "Mme Goulet",
    "Département": "Meuse",
    "Circonscription 2": "2° circonscription",
    "Email": "florence.goulet@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Le HÃ©nanff",
    "Département": "Morbihan",
    "Circonscription 2": "1ère circonscription",
    "Email": "anne.lehenanff@assemblee-nationale.fr"
  },
  {
    "Député": "M. Pahun",
    "Département": "Morbihan",
    "Circonscription 2": "2° circonscription",
    "Email": "jimmy.pahun@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Le Peih",
    "Département": "Morbihan",
    "Circonscription 2": "3° circonscription",
    "Email": "le.peih.nicole@gmail.com|nicole.lepeih@assemblee-nationale.fr"
  },
  {
    "Député": "M. Molac",
    "Département": "Morbihan",
    "Circonscription 2": "4° circonscription",
    "Email": "paul.molac@assemblee-nationale.fr"
  },
  {
    "Député": "M. Girard",
    "Département": "Morbihan",
    "Circonscription 2": "5° circonscription",
    "Email": "damien.girard@assemblee-nationale.fr"
  },
  {
    "Député": "M. Jacques",
    "Département": "Morbihan",
    "Circonscription 2": "6° circonscription",
    "Email": "jean-michel.jacques@assemblee-nationale.fr"
  },
  {
    "Député": "M. Belhaddad",
    "Département": "Moselle",
    "Circonscription 2": "1ère circonscription",
    "Email": "belkhir.belhaddad@en-marche.fr|belkhir.belhaddad@assemblee-nationale.fr"
  },
  {
    "Député": "M. Mendes",
    "Département": "Moselle",
    "Circonscription 2": "2° circonscription",
    "Email": "ludovic.mendes@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Colin-Oesterlé",
    "Département": "Moselle",
    "Circonscription 2": "3° circonscription",
    "Email": "nathalie.colin-oesterle@assemblee-nationale.fr"
  },
  {
    "Député": "M. Di Filippo",
    "Département": "Moselle",
    "Circonscription 2": "4° circonscription",
    "Email": "fabiendifilippo@gmail.com|fabien.difilippo@assemblee-nationale.fr"
  },
  {
    "Député": "M. Jenft",
    "Département": "Moselle",
    "Circonscription 2": "5° circonscription",
    "Email": "pascal.jenft@assemblee-nationale.fr"
  },
  {
    "Député": "M. Pfeffer",
    "Département": "Moselle",
    "Circonscription 2": "6° circonscription",
    "Email": "kevin.pfeffer@assemblee-nationale.fr"
  },
  {
    "Député": "M. Loubet",
    "Département": "Moselle",
    "Circonscription 2": "7° circonscription",
    "Email": "alexandre.loubet@assemblee-nationale.fr"
  },
  {
    "Député": "M. Jacobelli",
    "Département": "Moselle",
    "Circonscription 2": "8° circonscription",
    "Email": "laurent.jacobelli@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Rauch",
    "Département": "Moselle",
    "Circonscription 2": "9° circonscription",
    "Email": "isabelle.rauch@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Goulet",
    "Département": "NiÃ¨vre",
    "Circonscription 2": "1ère circonscription",
    "Email": "perrine.goulet@assemblee-nationale.fr"
  },
  {
    "Député": "M. Guibert",
    "Département": "NiÃ¨vre",
    "Circonscription 2": "2° circonscription",
    "Email": "julien.guibert@assemblee-nationale.fr"
  },
  {
    "Député": "M. Le Coq",
    "Département": "Nord",
    "Circonscription 2": "1ère circonscription",
    "Email": "aurelien.lecoq@assemblee-nationale.fr"
  },
  {
    "Député": "M. Bernalicis",
    "Département": "Nord",
    "Circonscription 2": "2° circonscription",
    "Email": "ugo.bernalicis@assemblee-nationale.fr|contact@ugobernalicis.fr"
  },
  {
    "Député": "Mme Delannoy",
    "Département": "Nord",
    "Circonscription 2": "3° circonscription",
    "Email": "sandra.delannoy@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Liso",
    "Département": "Nord",
    "Circonscription 2": "4° circonscription",
    "Email": "enmarche@brigitteliso.fr|brigitte.liso@assemblee-nationale.fr"
  },
  {
    "Député": "M. Huyghe",
    "Département": "Nord",
    "Circonscription 2": "5° circonscription",
    "Email": "sebastien.huyghe@assemblee-nationale.fr"
  },
  {
    "Député": "M. Moulliere",
    "Département": "Nord",
    "Circonscription 2": "6° circonscription",
    "Email": "jean.moulliere@assemblee-nationale.fr"
  },
  {
    "Député": "Mme GÃ©rard",
    "Département": "Nord",
    "Circonscription 2": "7° circonscription",
    "Email": "felicie.gerard@assemblee-nationale.fr"
  },
  {
    "Député": "M. Guiraud",
    "Département": "Nord",
    "Circonscription 2": "8° circonscription",
    "Email": "david.guiraud@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Spillebout",
    "Département": "Nord",
    "Circonscription 2": "9° circonscription",
    "Email": "violette.spillebout@assemblee-nationale.fr"
  },
  {
    "Député": "M. Ledoux",
    "Département": "Nord",
    "Circonscription 2": "10° circonscription",
    "Email": "permanenceledoux@gmail.com|vincent.ledoux@assemblee-nationale.fr"
  },
  {
    "Député": "M. Vicot",
    "Département": "Nord",
    "Circonscription 2": "11° circonscription",
    "Email": "roger.vicot@assemblee-nationale.fr|rvicot.depute5911@gmail.com"
  },
  {
    "Député": "M. Taverne",
    "Département": "Nord",
    "Circonscription 2": "12° circonscription",
    "Email": "michael.taverne@assemblee-nationale.fr"
  },
  {
    "Député": "M. Gokel",
    "Département": "Nord",
    "Circonscription 2": "13° circonscription",
    "Email": "julien.gokel@assemblee-nationale.fr"
  },
  {
    "Député": "M. Christophe",
    "Département": "Nord",
    "Circonscription 2": "14° circonscription",
    "Email": "paul.christophe@assemblee-nationale.fr"
  },
  {
    "Député": "M. Bataille",
    "Département": "Nord",
    "Circonscription 2": "15° circonscription",
    "Email": "jean-pierre.bataille@assemblee-nationale.fr"
  },
  {
    "Député": "M. Marchio",
    "Département": "Nord",
    "Circonscription 2": "16° circonscription",
    "Email": "matthieu.marchio@assemblee-nationale.fr"
  },
  {
    "Député": "M. Tesson",
    "Département": "Nord",
    "Circonscription 2": "17° circonscription",
    "Email": "thierry.tesson@assemblee-nationale.fr|thierry.tesson.59@gmail.com"
  },
  {
    "Député": "M. Dufosset",
    "Département": "Nord",
    "Circonscription 2": "18° circonscription",
    "Email": "alexandre.dufosset@assemblee-nationale.fr"
  },
  {
    "Député": "M. Chenu",
    "Département": "Nord",
    "Circonscription 2": "19° circonscription",
    "Email": "sebastien.chenu@assemblee-nationale.fr"
  },
  {
    "Député": "M. Florquin",
    "Département": "Nord",
    "Circonscription 2": "20° circonscription",
    "Email": "guillaume.florquin@assemblee-nationale.fr"
  },
  {
    "Député": "M. Castiglione",
    "Département": "Nord",
    "Circonscription 2": "21° circonscription",
    "Email": "salvatore.castiglione@assemblee-nationale.fr"
  },
  {
    "Député": "M. Metzdorf",
    "Département": "Nouvelle-CalÃ©donie",
    "Circonscription 2": "1ère circonscription",
    "Email": "nicolas.metzdorf@assemblee-nationale.fr"
  },
  {
    "Député": "M. Tjibaou",
    "Département": "Nouvelle-CalÃ©donie",
    "Circonscription 2": "2° circonscription",
    "Email": "emmanuel.tjibaou@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Marais-Beuil",
    "Département": "Oise",
    "Circonscription 2": "1ère circonscription",
    "Email": "claire.marais-beuil@assemblee-nationale.fr"
  },
  {
    "Député": "M. Ballard",
    "Département": "Oise",
    "Circonscription 2": "2° circonscription",
    "Email": "philippe.ballard@assemblee-nationale.fr|permanence.ballard@gmail.com"
  },
  {
    "Député": "M. Sabatou",
    "Département": "Oise",
    "Circonscription 2": "3° circonscription",
    "Email": "alexandre.sabatou@assemblee-nationale.fr|permanence.sabatou@gmail.com"
  },
  {
    "Député": "M. Woerth",
    "Département": "Oise",
    "Circonscription 2": "4° circonscription",
    "Email": "eric.woerth@orange.fr|eric.woerth@assemblee-nationale.fr"
  },
  {
    "Député": "M. Vos",
    "Département": "Oise",
    "Circonscription 2": "5° circonscription",
    "Email": "fredericpierre.vos@assemblee-nationale.fr"
  },
  {
    "Député": "M. Guiniot",
    "Département": "Oise",
    "Circonscription 2": "6° circonscription",
    "Email": "michel.guiniot@assemblee-nationale.fr"
  },
  {
    "Député": "M. Magnier",
    "Département": "Oise",
    "Circonscription 2": "7° circonscription",
    "Email": "david.magnier@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Jourdan",
    "Département": "Orne",
    "Circonscription 2": "1ère circonscription",
    "Email": "chantal.jourdan@assemblee-nationale.fr"
  },
  {
    "Député": "M. Liger",
    "Département": "Orne",
    "Circonscription 2": "2° circonscription",
    "Email": "thierry.liger@assemblee-nationale.fr"
  },
  {
    "Député": "M. Nury",
    "Département": "Orne",
    "Circonscription 2": "3° circonscription",
    "Email": "jerome.nury@assemblee-nationale.fr"
  },
  {
    "Député": "M. Maillard",
    "Département": "Paris",
    "Circonscription 2": "1ère circonscription",
    "Email": "sylvain.maillard@assemblee-nationale.fr"
  },
  {
    "Député": "M. Laussucq",
    "Département": "Paris",
    "Circonscription 2": "2° circonscription",
    "Email": "jean.laussucq@assemblee-nationale.fr|jean.laussucq@paris.fr"
  },
  {
    "Député": "Mme Balage El Mariky",
    "Département": "Paris",
    "Circonscription 2": "3° circonscription",
    "Email": "lea.balage@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Hoffman",
    "Département": "Paris",
    "Circonscription 2": "4° circonscription",
    "Email": "emmanuelle.hoffman@assemblee-nationale.fr"
  },
  {
    "Député": "M. Amirshahi",
    "Département": "Paris",
    "Circonscription 2": "5° circonscription",
    "Email": "pouria.amirshahi@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Chikirou",
    "Département": "Paris",
    "Circonscription 2": "6° circonscription",
    "Email": "sophia.chikirou@assemblee-nationale.fr"
  },
  {
    "Député": "M. Grégoire",
    "Département": "Paris",
    "Circonscription 2": "7° circonscription",
    "Email": "emmanuel.gregoire@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Sas",
    "Département": "Paris",
    "Circonscription 2": "8° circonscription",
    "Email": "eva.sas@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Rousseau",
    "Département": "Paris",
    "Circonscription 2": "9° circonscription",
    "Email": "sandrine.rousseau@assemblee-nationale.fr"
  },
  {
    "Député": "M. Arenas",
    "Département": "Paris",
    "Circonscription 2": "10° circonscription",
    "Email": "rodrigo.arenas@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Hervieu",
    "Département": "Paris",
    "Circonscription 2": "11° circonscription",
    "Email": "celine.hervieu@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Grégoire",
    "Département": "Paris",
    "Circonscription 2": "12° circonscription",
    "Email": "olivia.gregoire@assemblee-nationale.fr|oliviagregoire2017@gmail.com"
  },
  {
    "Député": "M. Amiel",
    "Département": "Paris",
    "Circonscription 2": "13° circonscription",
    "Email": "david.amiel@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Missoffe",
    "Département": "Paris",
    "Circonscription 2": "14° circonscription",
    "Email": "josephine.missoffe@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Simonnet",
    "Département": "Paris",
    "Circonscription 2": "15° circonscription",
    "Email": "danielle.simonnet@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Legrain",
    "Département": "Paris",
    "Circonscription 2": "16° circonscription",
    "Email": "sarah.legrain@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Obono",
    "Département": "Paris",
    "Circonscription 2": "10° circonscriptionsept",
    "Email": "daniele.obono@assemblee-nationale.fr"
  },
  {
    "Député": "M. Caron",
    "Département": "Paris",
    "Circonscription 2": "10° circonscriptionhuit",
    "Email": "aymeric.caron@assemblee-nationale.fr"
  },
  {
    "Député": "M. Blairy",
    "Département": "Pas-de-Calais",
    "Circonscription 2": "1ère circonscription",
    "Email": "emmanuel.blairy@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Levasseur",
    "Département": "Pas-de-Calais",
    "Circonscription 2": "2° circonscription",
    "Email": "pauline.levasseur@assemblee-nationale.fr"
  },
  {
    "Député": "M. Clavet",
    "Département": "Pas-de-Calais",
    "Circonscription 2": "3° circonscription",
    "Email": "bruno.clavet@assemblee-nationale.fr"
  },
  {
    "Député": "M. Fait",
    "Département": "Pas-de-Calais",
    "Circonscription 2": "4° circonscription",
    "Email": "philippe.fait@assemblee-nationale.fr"
  },
  {
    "Député": "M. Golliot",
    "Département": "Pas-de-Calais",
    "Circonscription 2": "5° circonscription",
    "Email": "antoine.golliot@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Engrand",
    "Département": "Pas-de-Calais",
    "Circonscription 2": "6° circonscription",
    "Email": "christine.engrand@assemblee-nationale.fr"
  },
  {
    "Député": "M. de Fleurian",
    "Département": "Pas-de-Calais",
    "Circonscription 2": "7° circonscription",
    "Email": "marc.defleurian@assemblee-nationale.fr"
  },
  {
    "Député": "M. Evrard",
    "Département": "Pas-de-Calais",
    "Circonscription 2": "8° circonscription",
    "Email": "auguste.evrard@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Parmentier",
    "Département": "Pas-de-Calais",
    "Circonscription 2": "9° circonscription",
    "Email": "caroline.parmentier@assemblee-nationale.fr"
  },
  {
    "Député": "M. Frappé",
    "Département": "Pas-de-Calais",
    "Circonscription 2": "10° circonscription",
    "Email": "thierry.frappe@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Le Pen",
    "Département": "Pas-de-Calais",
    "Circonscription 2": "11° circonscription",
    "Email": "marine.lepen@assemblee-nationale.fr"
  },
  {
    "Député": "M. Bilde",
    "Département": "Pas-de-Calais",
    "Circonscription 2": "12° circonscription",
    "Email": "bruno.bilde@assemblee-nationale.fr"
  },
  {
    "Député": "M. Frébault",
    "Département": "PolynÃ©sie FranÃ§aise",
    "Circonscription 2": "1ère circonscription",
    "Email": "moerani.frebault@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Sanquer",
    "Département": "PolynÃ©sie FranÃ§aise",
    "Circonscription 2": "2° circonscription",
    "Email": "nicole.sanquer@assemblee-nationale.fr|sanquern@yahoo.fr"
  },
  {
    "Député": "Mme Reid Arbelot",
    "Département": "PolynÃ©sie FranÃ§aise",
    "Circonscription 2": "3° circonscription",
    "Email": "mereana.reidarbelot@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Maximi",
    "Département": "Puy-de-DÃ´me",
    "Circonscription 2": "1ère circonscription",
    "Email": "marianne.maximi@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Pirès Beaune",
    "Département": "Puy-de-DÃ´me",
    "Circonscription 2": "2° circonscription",
    "Email": "christine.piresbeaune@assemblee-nationale.fr|cpbdeputee@gmail.com"
  },
  {
    "Député": "M. Bonnet",
    "Département": "Puy-de-DÃ´me",
    "Circonscription 2": "3° circonscription",
    "Email": "nicolas.bonnet@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Lingemann",
    "Département": "Puy-de-DÃ´me",
    "Circonscription 2": "4° circonscription",
    "Email": "delphine.lingemann@assemblee-nationale.fr"
  },
  {
    "Député": "M. Brugerolles",
    "Département": "Puy-de-DÃ´me",
    "Circonscription 2": "5° circonscription",
    "Email": "julien.brugerolles@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Poueyto",
    "Département": "PyrÃ©nÃ©es-Atlantiques",
    "Circonscription 2": "1ère circonscription",
    "Email": "josy.poueyto@assemblee-nationale.fr"
  },
  {
    "Député": "M. Mattei",
    "Département": "PyrÃ©nÃ©es-Atlantiques",
    "Circonscription 2": "2° circonscription",
    "Email": "jean-paul.mattei@assemblee-nationale.fr"
  },
  {
    "Député": "M. Habib",
    "Département": "PyrÃ©nÃ©es-Atlantiques",
    "Circonscription 2": "3° circonscription",
    "Email": "dhabib.jurancon@orange.fr|david.habib@assemblee-nationale.fr"
  },
  {
    "Député": "M. Echaniz",
    "Département": "PyrÃ©nÃ©es-Atlantiques",
    "Circonscription 2": "4° circonscription",
    "Email": "inaki.echaniz@assemblee-nationale.fr"
  },
  {
    "Député": "M. Dufau",
    "Département": "PyrÃ©nÃ©es-Atlantiques",
    "Circonscription 2": "6° circonscription",
    "Email": "peio.dufau@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Blanc",
    "Département": "PyrÃ©nÃ©es-Orientales",
    "Circonscription 2": "1ère circonscription",
    "Email": "sophie.blanc@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Sabatini",
    "Département": "PyrÃ©nÃ©es-Orientales",
    "Circonscription 2": "2° circonscription",
    "Email": "anais.sabatini@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Dogor-Such",
    "Département": "PyrÃ©nÃ©es-Orientales",
    "Circonscription 2": "3° circonscription",
    "Email": "sandrine.dogor-such@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Martinez",
    "Département": "PyrÃ©nÃ©es-Orientales",
    "Circonscription 2": "4° circonscription",
    "Email": "michele.martinez@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Capdevielle",
    "Département": "Pyrénées-Atlantique",
    "Circonscription 2": "5° circonscription",
    "Email": "colette.capdevielle@assemblee-nationale.fr"
  },
  {
    "Député": "M. Naillet",
    "Département": "RÃ©union",
    "Circonscription 2": "1ère circonscription",
    "Email": "philippe.naillet@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Lebon",
    "Département": "RÃ©union",
    "Circonscription 2": "2° circonscription",
    "Email": "karine.lebon@assemblee-nationale.fr"
  },
  {
    "Député": "M. Rivière",
    "Département": "RÃ©union",
    "Circonscription 2": "3° circonscription",
    "Email": "joseph.riviere@assemblee-nationale.fr"
  },
  {
    "Député": "Mme K/Bidi",
    "Département": "RÃ©union",
    "Circonscription 2": "4° circonscription",
    "Email": "emeline.kbidi@assemblee-nationale.fr"
  },
  {
    "Député": "M. Ratenon",
    "Département": "RÃ©union",
    "Circonscription 2": "5° circonscription",
    "Email": "jean-hugues.ratenon@assemblee-nationale.fr"
  },
  {
    "Député": "M. Maillot",
    "Département": "RÃ©union",
    "Circonscription 2": "6° circonscription",
    "Email": "frederic.maillot@assemblee-nationale.fr"
  },
  {
    "Député": "M. Gaillard",
    "Département": "RÃ©union",
    "Circonscription 2": "7° circonscription",
    "Email": "perceval.gaillard@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Belouassa-Cherifi",
    "Département": "RhÃ´ne",
    "Circonscription 2": "1ère circonscription",
    "Email": "anais.belouassa@assemblee-nationale.fr"
  },
  {
    "Député": "M. Tavernier",
    "Département": "RhÃ´ne",
    "Circonscription 2": "2° circonscription",
    "Email": "boris.tavernier@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Garin",
    "Département": "RhÃ´ne",
    "Circonscription 2": "3° circonscription",
    "Email": "marie-charlotte.garin@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Runel",
    "Département": "RhÃ´ne",
    "Circonscription 2": "4° circonscription",
    "Email": "sandrine.runel@assemblee-nationale.fr|sandrine.runel@mairie-lyon.fr"
  },
  {
    "Député": "Mme Brocard",
    "Département": "RhÃ´ne",
    "Circonscription 2": "5° circonscription",
    "Email": "contact@blandinebrocard.com|blandine.brocard@assemblee-nationale.fr"
  },
  {
    "Député": "M. Amard",
    "Département": "RhÃ´ne",
    "Circonscription 2": "6° circonscription",
    "Email": "gabriel.amard@assemblee-nationale.fr"
  },
  {
    "Député": "M. Lahmar",
    "Département": "RhÃ´ne",
    "Circonscription 2": "7° circonscription",
    "Email": "abdelkader.lahmar@assemblee-nationale.fr|nfp.circo7rhone@gmail.com"
  },
  {
    "Député": "M. Gery",
    "Département": "RhÃ´ne",
    "Circonscription 2": "8° circonscription",
    "Email": "jonathan.gery@assemblee-nationale.fr"
  },
  {
    "Député": "M. Portier",
    "Département": "RhÃ´ne",
    "Circonscription 2": "9° circonscription",
    "Email": "alexandre.portier@assemblee-nationale.fr|contact@alexandreportier.fr"
  },
  {
    "Député": "M. Gassilloud",
    "Département": "RhÃ´ne",
    "Circonscription 2": "10° circonscription",
    "Email": "thomas.gassilloud@assemblee-nationale.fr"
  },
  {
    "Député": "M. Fugit",
    "Département": "RhÃ´ne",
    "Circonscription 2": "11° circonscription",
    "Email": "jean-luc.fugit@assemblee-nationale.fr"
  },
  {
    "Député": "M. Isaac-Sibille",
    "Département": "RhÃ´ne",
    "Circonscription 2": "12° circonscription",
    "Email": "cyrille.isaac-sibille@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Joncour",
    "Département": "RhÃ´ne",
    "Circonscription 2": "13° circonscription",
    "Email": "tiffany.joncour@assemblee-nationale.fr"
  },
  {
    "Député": "M. Boumertit",
    "Département": "RhÃ´ne",
    "Circonscription 2": "14° circonscription",
    "Email": "idir.boumertit@assemblee-nationale.fr"
  },
  {
    "Député": "M. Dirx",
    "Département": "SaÃ´ne-et-Loire",
    "Circonscription 2": "1ère circonscription",
    "Email": "benjamin.dirx@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Corneloup",
    "Département": "SaÃ´ne-et-Loire",
    "Circonscription 2": "2° circonscription",
    "Email": "josiane.corneloup@assemblee-nationale.fr|jcorneloup2circo71@outlook.fr"
  },
  {
    "Député": "M. Dutremble",
    "Département": "SaÃ´ne-et-Loire",
    "Circonscription 2": "3° circonscription",
    "Email": "aurelien.dutremble@assemblee-nationale.fr"
  },
  {
    "Député": "M. Michoux",
    "Département": "SaÃ´ne-et-Loire",
    "Circonscription 2": "4° circonscription",
    "Email": "eric.michoux@assemblee-nationale.fr"
  },
  {
    "Député": "M. Gumbs",
    "Département": "Saint-BarthÃ©lemy et Saint-Martin",
    "Circonscription 2": "1ère circonscription",
    "Email": "frantz.gumbs@assemblee-nationale.fr"
  },
  {
    "Député": "M. Lenormand",
    "Département": "Saint-Pierre-et-Miquelon",
    "Circonscription 2": "1ère circonscription",
    "Email": "stephane.lenormand@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Delpech",
    "Département": "Sarthe",
    "Circonscription 2": "1ère circonscription",
    "Email": "julie.delpech@assemblee-nationale.fr|cabinet.juliedelpech@gmail.com"
  },
  {
    "Député": "Mme Karamanli",
    "Département": "Sarthe",
    "Circonscription 2": "2° circonscription",
    "Email": "contact@mariettakaramanli.fr|marietta.karamanli@assemblee-nationale.fr"
  },
  {
    "Député": "M. Martineau",
    "Département": "Sarthe",
    "Circonscription 2": "3° circonscription",
    "Email": "eric.martineau@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Leboucher",
    "Département": "Sarthe",
    "Circonscription 2": "4° circonscription",
    "Email": "elise.leboucher@assemblee-nationale.fr"
  },
  {
    "Député": "M. Grelier",
    "Département": "Sarthe",
    "Circonscription 2": "5° circonscription",
    "Email": "jean-carles.grelier@assemblee-nationale.fr|jcgrelier.depute@gmail.com"
  },
  {
    "Député": "Mme Ferrari",
    "Département": "Savoie",
    "Circonscription 2": "1ère circonscription",
    "Email": "marina.ferrari@assemblee-nationale.fr"
  },
  {
    "Député": "M. Rolland",
    "Département": "Savoie",
    "Circonscription 2": "2° circonscription",
    "Email": "vincent-rolland@wanadoo.fr|vincent.rolland@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Bonnivard",
    "Département": "Savoie",
    "Circonscription 2": "3° circonscription",
    "Email": "emilie.bonnivard@assemblee-nationale.fr"
  },
  {
    "Député": "M. Coulomme",
    "Département": "Savoie",
    "Circonscription 2": "4° circonscription",
    "Email": "jean-francois.coulomme@assemblee-nationale.fr"
  },
  {
    "Député": "M. Saint-Martin",
    "Département": "Seine-et-Marne",
    "Circonscription 2": "1ère circonscription",
    "Email": "arnaud.saint-martin@assemblee-nationale.fr"
  },
  {
    "Député": "M. Valletoux",
    "Département": "Seine-et-Marne",
    "Circonscription 2": "2° circonscription",
    "Email": "frederic.valletoux@assemblee-nationale.fr"
  },
  {
    "Député": "M. Thiériot",
    "Département": "Seine-et-Marne",
    "Circonscription 2": "3° circonscription",
    "Email": "jean-louis.thieriot@assemblee-nationale.fr"
  },
  {
    "Député": "M. Limongi",
    "Département": "Seine-et-Marne",
    "Circonscription 2": "4° circonscription",
    "Email": "julien.limongi@assemblee-nationale.fr"
  },
  {
    "Député": "M. Riester",
    "Département": "Seine-et-Marne",
    "Circonscription 2": "5° circonscription",
    "Email": "franck.riester@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Roullaud",
    "Département": "Seine-et-Marne",
    "Circonscription 2": "6° circonscription",
    "Email": "beatrice.roullaud@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Soudais",
    "Département": "Seine-et-Marne",
    "Circonscription 2": "7° circonscription",
    "Email": "ersilia.soudais@assemblee-nationale.fr"
  },
  {
    "Député": "M. Bonnet",
    "Département": "Seine-et-Marne",
    "Circonscription 2": "8° circonscription",
    "Email": "arnaud.bonnet@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Thiébault-Martinez",
    "Département": "Seine-et-Marne",
    "Circonscription 2": "9° circonscription",
    "Email": "celine.thiebault-martinez@assemblee-nationale.fr"
  },
  {
    "Député": "M. Laisney",
    "Département": "Seine-et-Marne",
    "Circonscription 2": "10° circonscription",
    "Email": "maxime.laisney@assemblee-nationale.fr"
  },
  {
    "Député": "M. Faure",
    "Département": "Seine-et-Marne",
    "Circonscription 2": "11° circonscription",
    "Email": "olivierfaure.depute77.11e@gmail.com|olivier.faure@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Herouin-Léautey",
    "Département": "Seine-Maritime",
    "Circonscription 2": "1ère circonscription",
    "Email": "florence.herouin-leautey@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Vidal",
    "Département": "Seine-Maritime",
    "Circonscription 2": "2° circonscription",
    "Email": "annie.vidal@assemblee-nationale.fr"
  },
  {
    "Député": "M. Bénard",
    "Département": "Seine-Maritime",
    "Circonscription 2": "3° circonscription",
    "Email": "permanence.ebenard@gmail.com|edouard.benard@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Dufour",
    "Département": "Seine-Maritime",
    "Circonscription 2": "4° circonscription",
    "Email": "alma.dufour@assemblee-nationale.fr"
  },
  {
    "Député": "M. Leseul",
    "Département": "Seine-Maritime",
    "Circonscription 2": "5° circonscription",
    "Email": "gerard.leseul@assemblee-nationale.fr"
  },
  {
    "Député": "M. Martin",
    "Département": "Seine-Maritime",
    "Circonscription 2": "6° circonscription",
    "Email": "patrice.martin@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Firmin Le Bodo",
    "Département": "Seine-Maritime",
    "Circonscription 2": "7° circonscription",
    "Email": "agnes.firminlebodo@assemblee-nationale.fr"
  },
  {
    "Député": "M. Lecoq",
    "Département": "Seine-Maritime",
    "Circonscription 2": "8° circonscription",
    "Email": "jean-paul.lecoq@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Poussier-Winsback",
    "Département": "Seine-Maritime",
    "Circonscription 2": "9° circonscription",
    "Email": "marieagnes.poussier-winsback@assemblee-nationale.fr"
  },
  {
    "Député": "M. Le Bourgeois",
    "Département": "Seine-Maritime",
    "Circonscription 2": "10° circonscription",
    "Email": "robert.lebourgeois@assemblee-nationale.fr"
  },
  {
    "Député": "M. Coquerel",
    "Département": "Seine-Saint-Denis",
    "Circonscription 2": "1ère circonscription",
    "Email": "eric.coquerel@assemblee-nationale.fr"
  },
  {
    "Député": "M. Peu",
    "Département": "Seine-Saint-Denis",
    "Circonscription 2": "2° circonscription",
    "Email": "stephane.peu@assemblee-nationale.fr"
  },
  {
    "Député": "M. Portes",
    "Département": "Seine-Saint-Denis",
    "Circonscription 2": "3° circonscription",
    "Email": "thomas.portes@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Bourouaha",
    "Département": "Seine-Saint-Denis",
    "Circonscription 2": "4° circonscription",
    "Email": "soumya.bourouaha@assemblee-nationale.fr|soumya.bourouaha@gmail.com"
  },
  {
    "Député": "M. Diouara",
    "Département": "Seine-Saint-Denis",
    "Circonscription 2": "5° circonscription",
    "Email": "aly.diouara@assemblee-nationale.fr"
  },
  {
    "Député": "M. Lachaud",
    "Département": "Seine-Saint-Denis",
    "Circonscription 2": "6° circonscription",
    "Email": "bastien.lachaud@assemblee-nationale.fr"
  },
  {
    "Député": "M. Corbière",
    "Département": "Seine-Saint-Denis",
    "Circonscription 2": "7° circonscription",
    "Email": "alexis.corbiere@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Keloua Hachi",
    "Département": "Seine-Saint-Denis",
    "Circonscription 2": "8° circonscription",
    "Email": "fatiha.kelouahachi@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Trouvé",
    "Département": "Seine-Saint-Denis",
    "Circonscription 2": "9° circonscription",
    "Email": "aurelie.trouve@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Abomangoli",
    "Département": "Seine-Saint-Denis",
    "Circonscription 2": "10° circonscription",
    "Email": "nadege.abomangoli@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Autain",
    "Département": "Seine-Saint-Denis",
    "Circonscription 2": "11° circonscription",
    "Email": "clementineautain93@gmail.com|clementine.autain@assemblee-nationale.fr"
  },
  {
    "Député": "M. Legavre",
    "Département": "Seine-Saint-Denis",
    "Circonscription 2": "12° circonscription",
    "Email": "jerome.legavre@assemblee-nationale.fr"
  },
  {
    "Député": "M. Ruffin",
    "Département": "Somme",
    "Circonscription 2": "1ère circonscription",
    "Email": "contact@picardiedebout.fr|francois.ruffin@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Hamdane",
    "Département": "Somme",
    "Circonscription 2": "2° circonscription",
    "Email": "zahia.hamdane@assemblee-nationale.fr"
  },
  {
    "Député": "M. Renault",
    "Département": "Somme",
    "Circonscription 2": "3° circonscription",
    "Email": "matthias.renault@assemblee-nationale.fr"
  },
  {
    "Député": "M. Tanguy",
    "Département": "Somme",
    "Circonscription 2": "4° circonscription",
    "Email": "jean-philippe.tanguy@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Ménaché",
    "Département": "Somme",
    "Circonscription 2": "5° circonscription",
    "Email": "yael.menache@assemblee-nationale.fr"
  },
  {
    "Député": "M. BonnecarrÃ¨re",
    "Département": "Tarn",
    "Circonscription 2": "1ère circonscription",
    "Email": "philippe.bonnecarrere@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Erodi",
    "Département": "Tarn",
    "Circonscription 2": "2° circonscription",
    "Email": "karen.erodi@assemblee-nationale.fr"
  },
  {
    "Député": "M. Terlier",
    "Département": "Tarn",
    "Circonscription 2": "3° circonscription",
    "Email": "jean.terlier@assemblee-nationale.fr"
  },
  {
    "Député": "Mme BarÃ¨ges",
    "Département": "Tarn-et-Garonne",
    "Circonscription 2": "1ère circonscription",
    "Email": "brigitte.bareges@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Hamelet",
    "Département": "Tarn-et-Garonne",
    "Circonscription 2": "2° circonscription",
    "Email": "marine.hamelet@assemblee-nationale.fr"
  },
  {
    "Député": "M. Boucard",
    "Département": "Territoire de Belfort",
    "Circonscription 2": "1ère circonscription",
    "Email": "ian.boucard@gmail.com|ian.boucard@assemblee-nationale.fr"
  },
  {
    "Député": "M. Bigot",
    "Département": "Territoire de Belfort",
    "Circonscription 2": "2° circonscription",
    "Email": "guillaume.bigot@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Sicard",
    "Département": "Val-d'Oise",
    "Circonscription 2": "1ère circonscription",
    "Email": "anne.sicard@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Hadizadeh",
    "Département": "Val-d'Oise",
    "Circonscription 2": "2° circonscription",
    "Email": "ayda.hadizadeh@assemblee-nationale.fr"
  },
  {
    "Député": "M. Maurel",
    "Département": "Val-d'Oise",
    "Circonscription 2": "3° circonscription",
    "Email": "emmanuel.maurel@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Moutchou",
    "Département": "Val-d'Oise",
    "Circonscription 2": "4° circonscription",
    "Email": "naima.moutchou@assemblee-nationale.fr"
  },
  {
    "Député": "M. Vannier",
    "Département": "Val-d'Oise",
    "Circonscription 2": "5° circonscription",
    "Email": "paul.vannier@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Cathala",
    "Département": "Val-d'Oise",
    "Circonscription 2": "6° circonscription",
    "Email": "gabrielle.cathala@assemblee-nationale.fr"
  },
  {
    "Député": "M. Eskenazi",
    "Département": "Val-d'Oise",
    "Circonscription 2": "7° circonscription",
    "Email": "romain.eskenazi@assemblee-nationale.fr"
  },
  {
    "Député": "M. Bilongo",
    "Département": "Val-d'Oise",
    "Circonscription 2": "8° circonscription",
    "Email": "carlosmartens.bilongo@assemblee-nationale.fr"
  },
  {
    "Député": "M. Le Gall",
    "Département": "Val-d'Oise",
    "Circonscription 2": "9° circonscription",
    "Email": "arnaud.legall@assemblee-nationale.fr"
  },
  {
    "Député": "M. Taché",
    "Département": "Val-d'Oise",
    "Circonscription 2": "10° circonscription",
    "Email": "aurelien.tache@assemblee-nationale.fr"
  },
  {
    "Député": "M. Berrios",
    "Département": "Val-de-Marne",
    "Circonscription 2": "1ère circonscription",
    "Email": "sylvain.berrios@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Guetté",
    "Département": "Val-de-Marne",
    "Circonscription 2": "2° circonscription",
    "Email": "clemence.guette@assemblee-nationale.fr"
  },
  {
    "Député": "M. Boyard",
    "Département": "Val-de-Marne",
    "Circonscription 2": "3° circonscription",
    "Email": "louis.boyard@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Petit",
    "Département": "Val-de-Marne",
    "Circonscription 2": "4° circonscription",
    "Email": "maud.petit@assemblee-nationale.fr"
  },
  {
    "Député": "M. Lefèvre",
    "Département": "Val-de-Marne",
    "Circonscription 2": "5° circonscription",
    "Email": "mathieu.lefevre@assemblee-nationale.fr"
  },
  {
    "Député": "M. Gouffier Valente",
    "Département": "Val-de-Marne",
    "Circonscription 2": "6° circonscription",
    "Email": "guillaume.gouffier-valente@assemblee-nationale.fr"
  },
  {
    "Député": "M. Jeanbrun",
    "Département": "Val-de-Marne",
    "Circonscription 2": "7° circonscription",
    "Email": "vincent.jeanbrun@assemblee-nationale.fr"
  },
  {
    "Député": "M. Herbillon",
    "Département": "Val-de-Marne",
    "Circonscription 2": "8° circonscription",
    "Email": "michel.herbillon@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Santiago",
    "Département": "Val-de-Marne",
    "Circonscription 2": "9° circonscription",
    "Email": "isabelle.santiago@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Panot",
    "Département": "Val-de-Marne",
    "Circonscription 2": "10° circonscription",
    "Email": "mathilde.panot@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Taillé-Polian",
    "Département": "Val-de-Marne",
    "Circonscription 2": "11° circonscription",
    "Email": "sophie.taille-polian@assemblee-nationale.fr"
  },
  {
    "Député": "M. Chenevard",
    "Département": "Var",
    "Circonscription 2": "1ère circonscription",
    "Email": "yannick.chenevard@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Lavalette",
    "Département": "Var",
    "Circonscription 2": "2° circonscription",
    "Email": "laure.lavalette@assemblee-nationale.fr"
  },
  {
    "Député": "M. Rambaud",
    "Département": "Var",
    "Circonscription 2": "3° circonscription",
    "Email": "stephane.rambaud@assemblee-nationale.fr"
  },
  {
    "Député": "M. Lottiaux",
    "Département": "Var",
    "Circonscription 2": "4° circonscription",
    "Email": "philippe.lottiaux@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Lechanteux",
    "Département": "Var",
    "Circonscription 2": "5° circonscription",
    "Email": "julie.lechanteux@assemblee-nationale.fr"
  },
  {
    "Député": "M. Giletti",
    "Département": "Var",
    "Circonscription 2": "6° circonscription",
    "Email": "frank.giletti@assemblee-nationale.fr"
  },
  {
    "Député": "M. Boccaletti",
    "Département": "Var",
    "Circonscription 2": "7° circonscription",
    "Email": "frederic.boccaletti@assemblee-nationale.fr"
  },
  {
    "Député": "M. Schreck",
    "Département": "Var",
    "Circonscription 2": "8° circonscription",
    "Email": "philippe.schreck@assemblee-nationale.fr|contact@philippe-schreck.fr"
  },
  {
    "Député": "M. Arnault",
    "Département": "Vaucluse",
    "Circonscription 2": "1ère circonscription",
    "Email": "raphael.arnault@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Auzanot",
    "Département": "Vaucluse",
    "Circonscription 2": "2° circonscription",
    "Email": "benedicte.auzanot@assemblee-nationale.fr"
  },
  {
    "Député": "M. de Lépinau",
    "Département": "Vaucluse",
    "Circonscription 2": "3° circonscription",
    "Email": "herve.delepinau@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Lorho",
    "Département": "Vaucluse",
    "Circonscription 2": "4° circonscription",
    "Email": "marie-france.lorho@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Rimbert",
    "Département": "Vaucluse",
    "Circonscription 2": "5° circonscription",
    "Email": "catherine.rimbert@assemblee-nationale.fr"
  },
  {
    "Député": "M. Latombe",
    "Département": "VendÃ©e",
    "Circonscription 2": "1ère circonscription",
    "Email": "philippe.latombe@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Bellamy",
    "Département": "VendÃ©e",
    "Circonscription 2": "2° circonscription",
    "Email": "beatrice.bellamy@assemblee-nationale.fr"
  },
  {
    "Député": "M. Buchou",
    "Département": "VendÃ©e",
    "Circonscription 2": "3° circonscription",
    "Email": "stephane.buchou@en-marche.fr|stephane.buchou@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Besse",
    "Département": "VendÃ©e",
    "Circonscription 2": "4° circonscription",
    "Email": "permanence@veroniquebesse.fr|veronique.besse@assemblee-nationale.fr"
  },
  {
    "Député": "M. Henriet",
    "Département": "VendÃ©e",
    "Circonscription 2": "5° circonscription",
    "Email": "pierre.henriet@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Belluco",
    "Département": "Vienne",
    "Circonscription 2": "1ère circonscription",
    "Email": "lisa.belluco@assemblee-nationale.fr"
  },
  {
    "Député": "M. Houlié",
    "Département": "Vienne",
    "Circonscription 2": "2° circonscription",
    "Email": "sacha.houlie@assemblee-nationale.fr|contact@sachahoulie.fr"
  },
  {
    "Député": "M. Lecamp",
    "Département": "Vienne",
    "Circonscription 2": "3° circonscription",
    "Email": "pascal.lecamp@assemblee-nationale.fr|pascal.lecamp@civray.fr"
  },
  {
    "Député": "M. Turquois",
    "Département": "Vienne",
    "Circonscription 2": "4° circonscription",
    "Email": "nicolas.turquois@gmail.com|nicolas.turquois@assemblee-nationale.fr"
  },
  {
    "Député": "M. Viry",
    "Département": "Vosges",
    "Circonscription 2": "1ère circonscription",
    "Email": "contact@stephaneviry.fr|stephane.viry@assemblee-nationale.fr"
  },
  {
    "Député": "M. Dussausaye",
    "Département": "Vosges",
    "Circonscription 2": "2° circonscription",
    "Email": "gaetan.dussausaye@assemblee-nationale.fr"
  },
  {
    "Député": "M. Naegelen",
    "Département": "Vosges",
    "Circonscription 2": "3° circonscription",
    "Email": "contact@naegelen.fr|christophe.naegelen@assemblee-nationale.fr"
  },
  {
    "Député": "M. Humbert",
    "Département": "Vosges",
    "Circonscription 2": "4° circonscription",
    "Email": "sebastien.humbert@assemblee-nationale.fr"
  },
  {
    "Député": "M. Seo",
    "Département": "Wallis-et-Futuna",
    "Circonscription 2": "1ère circonscription",
    "Email": "mikaele.seo@assemblee-nationale.fr"
  },
  {
    "Député": "M. Grenon",
    "Département": "Yonne",
    "Circonscription 2": "1ère circonscription",
    "Email": "daniel.grenon@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Roy",
    "Département": "Yonne",
    "Circonscription 2": "2° circonscription",
    "Email": "sophie-laurence.roy@assemblee-nationale.fr"
  },
  {
    "Député": "M. Odoul",
    "Département": "Yonne",
    "Circonscription 2": "3° circonscription",
    "Email": "julien.odoul@assemblee-nationale.fr"
  },
  {
    "Député": "M. Rodwell",
    "Département": "Yvelines",
    "Circonscription 2": "1ère circonscription",
    "Email": "charles.rodwell@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Bergantz",
    "Département": "Yvelines",
    "Circonscription 2": "2° circonscription",
    "Email": "anne.bergantz@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Piron",
    "Département": "Yvelines",
    "Circonscription 2": "3° circonscription",
    "Email": "beatrice.piron@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Lebec",
    "Département": "Yvelines",
    "Circonscription 2": "4° circonscription",
    "Email": "marie.lebec@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Braun-Pivet",
    "Département": "Yvelines",
    "Circonscription 2": "5° circonscription",
    "Email": "yael.braun-pivet@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Pouzyreff",
    "Département": "Yvelines",
    "Circonscription 2": "6° circonscription",
    "Email": "natalia.pouzyreff@assemblee-nationale.fr"
  },
  {
    "Député": "M. Rousseau",
    "Département": "Yvelines",
    "Circonscription 2": "7° circonscription",
    "Email": "aurelien.rousseau@assemblee-nationale.fr"
  },
  {
    "Député": "M. Lucas-Lundy",
    "Département": "Yvelines",
    "Circonscription 2": "8° circonscription",
    "Email": "benjamin.lucas@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Diop",
    "Département": "Yvelines",
    "Circonscription 2": "9° circonscription",
    "Email": "dieynaba.diop@assemblee-nationale.fr"
  },
  {
    "Député": "Mme Ronceret",
    "Département": "Yvelines",
    "Circonscription 2": "10° circonscription",
    "Email": "anne-sophie.ronceret@assemblee-nationale.fr"
  },
  {
    "Député": "M. Mazaury",
    "Département": "Yvelines",
    "Circonscription 2": "11° circonscription",
    "Email": "laurent.mazaury@assemblee-nationale.fr"
  },
  {
    "Député": "M. Olive",
    "Département": "Yvelines",
    "Circonscription 2": "12° circonscription",
    "Email": "karl.olive@assemblee-nationale.fr"
  }
]
  // ... Insérez ici toutes les autres entrées converties depuis le CSV.
];

// Remplissage du menu déroulant
const selectEl = document.getElementById("circoSelect");
const sendBtn = document.getElementById("sendMailBtn");

// Ajoute une option pour chaque entrée
deputes.forEach(dep => {
  if (dep.circonscription && dep.depute && dep.departement && dep.email) {
    const option = document.createElement("option");
    // L'option affiche: "Circonscription - Député (Département)"
    option.value = dep.email; // Adresse email utilisée pour l'envoi du mail
    option.textContent = `${dep.circonscription} - ${dep.depute} (${dep.departement})`;
    selectEl.appendChild(option);
  }
});

// Active le bouton quand une option est sélectionnée
selectEl.addEventListener("change", () => {
  sendBtn.disabled = (selectEl.value === "");
});

// Lorsqu'on clique sur le bouton, ouvre le client mail avec le mail pré-rempli
sendBtn.addEventListener("click", () => {
  const email = selectEl.value;
  if (!email) return;
  const subject = encodeURIComponent("Contre la limitation de l'installation des médecins");
  const body = encodeURIComponent(
    "Madame, Monsieur le Député,\n\n" +
    "Je vous écris pour exprimer mon opposition à la nouvelle loi Garot limitant l'installation des médecins. " +
    "Cette mesure risque d'aggraver l'accès aux soins dans notre circonscription, qui est considérée en grande partie comme surdotée.\n\n" +
    "Merci de défendre l'accès aux soins pour nous.\n\n" +
    "Cordialement."
  );
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
});
