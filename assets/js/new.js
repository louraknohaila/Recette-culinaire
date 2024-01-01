function afficherModal() {
    document.getElementById('modal').style.display = 'flex';
}

function fermerModal() {
    document.getElementById('modal').style.display = 'none';
}

    const baseDeDonneesRecettes = [
        { nom: "Spaghetti Bolognese", ingredients: ["spaghetti", "sauce bolognaise", "parmesan"] },
        { nom: "Salade Grecque", ingredients: ["laitue", "tomates", "concombres", "olives", "feta", "vinaigrette"] },
        { nom: "Risotto aux Champignons", ingredients: ["riz arborio", "champignons", "oignon", "bouillon de légumes", "parmesan"] },
        { nom: "Tacos au Poulet", ingredients: ["tortillas", "poulet grillé", "salsa", "guacamole", "fromage"] },
        { nom: "Soupe Tomate-Basilic", ingredients: ["tomates", "basilic", "oignon", "ail", "bouillon de légumes"] },
        { nom: "Poulet Teriyaki", ingredients: ["poulet", "sauce teriyaki", "brocoli", "riz"] },
        { nom: "Pâtes Carbonara", ingredients: ["spaghetti", "pancetta", "œufs", "parmesan", "poivre noir"] },
        { nom: "Sushi au Saumon", ingredients: ["riz à sushi", "saumon frais", "algues nori", "wasabi", "sauce soja"] },
        { nom: "Curry de Légumes", ingredients: ["curry en poudre", "légumes variés", "lait de coco", "riz"] },
        { nom: "Sandwich Club", ingredients: ["pain de mie", "poulet rôti", "bacon", "tomate", "laitue", "mayonnaise"] },
        { nom: "Lasagnes au Bœuf", ingredients: ["feuilles de lasagne", "bœuf haché", "sauce tomate", "béchamel", "fromage"] },
        { nom: "Salade Caprese", ingredients: ["tomates", "mozzarella", "feuilles de basilic", "huile d'olive", "sel", "poivre"] },
        { nom: "Poulet au Citron", ingredients: ["poulet", "citron", "ail", "herbes de Provence", "huile d'olive"] },
        { nom: "Ceviche de Poisson", ingredients: ["poisson blanc", "oignons rouges", "coriandre", "citron vert", "piment"] },
        { nom: "Pâtes Primavera", ingredients: ["pâtes", "légumes variés (carottes, courgettes, poivrons)", "sauce Alfredo"] },
        { nom: "Burger Végétarien", ingredients: ["galette végétarienne", "pain à burger", "tomate", "laitue", "oignon rouge", "mayonnaise"] },
        { nom: "Gâteau au Chocolat Fondant", ingredients: ["chocolat noir", "beurre", "sucre", "œufs", "farine", "vanille"] },
        { nom: "Ratatouille", ingredients: ["aubergine", "courgette", "poivron", "tomate", "oignon", "ail", "herbes de Provence"] },
        { nom: "Smoothie aux Fruits Rouges", ingredients: ["framboises", "fraises", "myrtilles", "yaourt", "miel"] },
        { nom: "Poulet Tandoori", ingredients: ["poulet", "yaourt", "curry", "ail", "gingembre", "coriandre"] },
        { nom: "Pad Thai", ingredients: ["nouilles de riz", "crevettes", "tofu", "arachides", "germes de soja", "œufs", "coriandre"] },
        { nom: "Salmon Teriyaki", ingredients: ["saumon", "sauce teriyaki", "pois mange-tout", "oignons verts", "sésame"] },
        { nom: "Quinoa Bowl", ingredients: ["quinoa", "poulet grillé", "avocat", "tomates cerises", "maïs", "vinaigrette au citron"] },
        { nom: "Moussaka", ingredients: ["aubergine", "agneau haché", "sauce béchamel", "tomates", "fromage râpé"] },
        { nom: "Curry de Poulet au Lait de Coco", ingredients: ["poulet", "lait de coco", "curry en poudre", "patates douces", "poivrons"] },
        { nom: "Tarte aux Pommes", ingredients: ["pâte feuilletée", "pommes", "sucre", "cannelle"] },
        { nom: "Salade Niçoise", ingredients: ["thon en conserve", "haricots verts", "tomates", "œufs durs", "olives", "vinaigrette"] },
        { nom: "Fajitas au Poulet", ingredients: ["poulet mariné", "poivrons", "oignons", "tortillas", "salsa", "guacamole"] },
        { nom: "Soupe de Lentilles", ingredients: ["lentilles", "carottes", "céleri", "oignons", "ail", "bouillon de légumes"] },
        { nom: "Crêpes Suzette", ingredients: ["farine", "œufs", "lait", "sucre", "beurre", "jus d'orange", "Grand Marnier"] },
        { nom: "Salade de Quinoa aux Légumes Rôtis", ingredients: ["quinoa", "courgettes", "aubergines", "poivrons", "feta", "vinaigrette balsamique"] },
        { nom: "Raviolis Maison", ingredients: ["pâte à ravioli", "ricotta", "épinards", "sauce tomate"] },
        { nom: "Saumon Grillé au Citron", ingredients: ["saumon", "citron", "huile d'olive", "aneth", "sel", "poivre"] },
        { nom: "Biryani de Poulet", ingredients: ["poulet", "riz basmati", "épices biryani", "oignons frits", "yaourt"] },
        { nom: "Tarte à la Ratatouille", ingredients: ["pâte brisée", "courgettes", "aubergines", "poivrons", "tomates", "thym"] },
        { nom: "Poulet à l'Orange", ingredients: ["poulet", "jus d'orange", "miel", "gingembre", "ail", "sauce soja"] },
        { nom: "Crème Brûlée", ingredients: ["crème", "sucre", "jaunes d'œufs", "vanille", "sucre cassonade"] },
        { nom: "Poulet Katsu", ingredients: ["poulet pané", "sauce tonkatsu", "riz", "chou blanc râpé"] },
        { nom: "Gnocchis à la Sauce Gorgonzola", ingredients: ["gnocchis", "crème", "fromage gorgonzola", "noix"] },
        { nom: "Ceviche de Fruits de Mer", ingredients: ["crevettes", "calmars", "moules", "citron vert", "oignons rouges", "coriandre"] },
        { nom: "Biscuits au Chocolat et Noix de Pécan", ingredients: ["farine", "beurre", "sucre", "œufs", "chocolat noir", "noix de pécan"] },
        { nom: "Salade de Quinoa aux Fruits", ingredients: ["quinoa", "fraises", "myrtilles", "kiwi", "menthe", "vinaigrette à l'érable"] },
        { nom: "Poulet Satay", ingredients: ["poulet mariné", "sauce satay", "cacahuètes hachées", "riz"] },
    ];
    


function rechercherPlats() {
    const ingredientsRecherche = document.getElementById('ingredients').value.split(',').map(ing => ing.trim().toLowerCase());
    const platsTrouves = baseDeDonneesRecettes.filter(recette => {
        const ingredientsDuPlat = recette.ingredients.map(ing => ing.toLowerCase());
        return ingredientsRecherche.every(ing => ingredientsDuPlat.includes(ing));
    });

    afficherResultat(platsTrouves);
}


function afficherResultat(plats) {
    const resultatDiv = document.getElementById('att');
    resultatDiv.innerHTML = '';

    if (plats.length === 0) {
        resultatDiv.textContent = 'Aucun plat trouvé. Utilisez des virgules entre les ingrédients ! ';
        resultatDiv.style.color = 'black';
    } else {
        plats.forEach(plat => {
            const platDiv = document.createElement('div');
            platDiv.textContent = plat.nom;
            platDiv.style.padding = '10px';
            platDiv.style.marginBottom = '5px';
            platDiv.style.border = '1px solid #b8b5b5';
            platDiv.style.borderRadius = '5px';
            platDiv.style.backgroundColor = '#f9f9f9';
            platDiv.style.color = '#333';
            platDiv.style.marginLeft = '5px';

            resultatDiv.appendChild(platDiv);
        });
    }
}
