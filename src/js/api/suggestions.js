const stores = [
    '3.1 PHILLIP LIM',
    '7 for all mankind',
    'ABS by Allen Schwartz',
    'Acne Studios',
    'Adam Lippes',
    'Adina Reyter',
    'Agent Provocateur',
    'AG Jeans',
    'Akira',
    'Aldo Shoes',
    'Al Duca d\'Aosta',
    'Alexander McQueen',
    'Alexander Wang',
    'Alexis Bittar',
    'Alice Made This',
    'Alice & Olivia',
    'Alice & Trixie',
    'AllSaints',
    'Alternative Apparel',
    'Amanda Wakeley',
    'Ambience',
    'Amour Vert',
    'Andrew Marc',
    'Anna Sheffield',
    'Anne Sisteron',
    'Ann Taylor',
    'Anthropologie',
    'Apartment Number 9',
    'Arcade Boutique',
    'Armani',
    'Arme De L\'Amour',
    'ASOS',
    'Aspesi',
    'Assembly New York',
    'Astley Clarke',
    'Atterley Road',
    'Augusta Twenty',
    'Avenue 32',
    'Azalea Boutique',
    'Badgley Mischka',
    'Balenciaga',
    'Bally',
    'Banana Republic',
    'Barneys New York',
    'Barneys Warehouse',
    'BaubleBar',
    'BCBGMAXAZRIA',
    'Bebe',
    'Be&D',
    'Belstaff',
    'Benna',
    'Bergdorf Goodman',
    'Bernard Boutique',
    'Bettye Muller',
    'Billy Reid',
    'Bing Bang',
    'Black.co.uk',
    'Black Halo',
    'Blank NYC',
    'Blood Brother',
    'Bloomingdale\'s',
    'Blue & Cream',
    'Bluefly',
    'Boticca',
    'Bottega Veneta',
    'Boutique1',
    'Boutique To You',
    'Brochu Walker',
    'Brooks Brothers',
    'Browns Fashion',
    'Brunello Cucinelli',
    'Burberry',
    'BuyDefinition',
    'Calvin Klein',
    'Cami NYC',
    'Carbon & Hyde',
    'Casadei',
    'Catherine Malandrino',
    'Celestine Eleven',
    'Charles David',
    'Charlotte Olympia',
    'Charm & Chain',
    'Christian Louboutin',
    'Cienne NY',
    'Club Monaco',
    'Coach',
    'Coast Stores',
    'Coggles',
    'Cole Haan',
    'Colette',
    'Colette Malouf',
    'Cools',
    'Corsoalto',
    'Couture Candy',
    'Couverture & The Garbstore',
    'Cruvoir',
    'Current/Elliott',
    'Cusp',
    'C. Wonder',
    'Cynthia Rowley',
    'Daniel Vosovic',
    'DANNIJO',
    'David Yurman',
    'Dawn Levy',
    'Del Mar by Berjheny',
    'Designs by Stephene',
    'Diane von Furstenberg',
    'DIANI Boutique',
    'DIESEL',
    'Diesel Black Gold',
    'DITTO',
    'DKNY',
    'Donna Karan',
    'DOROTHEE SCHUMACHER',
    'DSquared²',
    'East Dane',
    'Edie Parker',
    'Edition01',
    'Edit New York',
    'Editorialist',
    'Edon Manor',
    'Edun',
    'Elizabeth Charles',
    'Ella Moss',
    'Endless',
    'Equipment',
    'ERDEM',
    'Erin Fetherston',
    'Escada',
    'Express',
    'Faherty Brand',
    'FarFetch',
    'Fashionesta',
    'Ferragamo',
    'Fidelity',
    'Fleur du Mal',
    'Footnotes Online',
    'Forever21',
    'FORZIERI',
    'Fossati',
    'Free People',
    'French Connection',
    'FWRD',
    'Gap',
    'Genetic Denim',
    'Genetic Los Angeles',
    'G.H. Bass & Co.',
    'Giglio',
    'Glassworks',
    'Gorjana & Griffin',
    'GRIFO210',
    'Gucci',
    'GUESS',
    'Halston',
    'Hampden',
    'Harrods',
    'Harvey Nichols',
    'HATCH',
    'Heels',
    'Helmut Lang',
    'Henri Bendel',
    'Hentsch Man',
    'Hermes UK',
    'Hervia',
    'Hobbs',
    'House of Fraser',
    'House of Harlow 1960',
    'House Of Holland',
    'Hudson Jeans',
    'HUGO BOSS',
    'HUNTER',
    'I Dont Like Mondays',
    'IKKON',
    'Incu Clothing',
    'INHABIT',
    'INTERMIX',
    'INTER-PRET.us',
    'IRO',
    'Isaora',
    'Italist',
    'Ix Style',
    'Jack Rogers',
    'Jaeger',
    'James Perse',
    'J Brand',
    'J.CREW',
    'Jenny Bird',
    'Jessica Simpson',
    'Jildor Shoes',
    'Jill Golden',
    'Joe\'s Jeans',
    'John Hardy',
    'John Lewis',
    'John Smedley',
    'John Varvatos',
    'JOIE',
    'Jonathan Simkhai',
    'Joseph',
    'Journelle',
    'Kabiri',
    'Kara Ross',
    'Karen Millen',
    'Karmaloop',
    'kate spade new york',
    'Kaufmann Mercantile',
    'Kiosk 78',
    'Kirna Zabête',
    'Kooba',
    'Koolaburra',
    'KOTUR',
    'Kurt Geiger',
    'La Garçonne',
    'Laila Azhar',
    'Lane Crawford',
    'Lanvin',
    'La Perla',
    'Larsson & Jennings',
    'Last Call',
    'Lat56',
    'Ledbury',
    'L\'Effrontée',
    'lemlem',
    'Les Nouvelles',
    'Lexdray',
    'Liberty',
    'Lilogi',
    'Linde store',
    'Linea Pelle',
    'Lisa Perry',
    'Liu Jo',
    'LN-CC',
    'Loeffler Randall',
    'Lord & Taylor',
    'Lori\'s Shoes',
    'Lounge Lover',
    'Lucky Brand',
    'LUISA VIA ROMA',
    'Lulu Frost',
    'Lulu Guinness',
    'Mackage',
    'Macy\'s',
    'Madewell',
    'Madison Los Angeles',
    'Maggy Frances',
    'Maiyet',
    'Mango',
    'Mara Hoffman',
    'Marc New York',
    'Marissa Collections',
    'Mary Katrantzou',
    'MATCHESFASHION.COM',
    'Matthew Miller',
    'Matthew Williamson',
    'meli melo',
    'Melissa Joy Manning',
    'Menlook',
    'Metropark',
    'Michael Kors',
    'Michael Stars',
    'Mignonne Gavigan',
    'MILLY',
    'Missguided',
    'Moda Operandi',
    'Modcloth',
    'Mona Moore',
    'Monica Vinader',
    'Monnier Freres',
    'MonShowRoom',
    'Montaigne Market',
    'Moschino',
    'Moss Bros',
    'MR PORTER',
    'Mulberry',
    'Muubaa US',
    'Myla',
    'My Label',
    'Mytheresa.com',
    'My-wardrobe.com',
    'MZ Wallace',
    'Napapijri',
    'Nasty Gal',
    'Natori',
    'Need Supply Co.',
    'Neiman Marcus',
    'NET-A-PORTER',
    'Nicholas K',
    'Nicole Farhi',
    'Nicole Miller',
    'NINE IN THE MIRROR',
    'Nine West',
    'Nordstrom',
    'Norma Kamali',
    'NOT JUST A LABEL',
    'Oasis',
    'Office',
    'oki-ni',
    'Old Navy',
    'Onassis Clothing',
    'Onia',
    'OPUMO',
    'Oscar de la Renta',
    'OTTE',
    'Outdoor Voices',
    'Oxygen Boutique',
    'Paige Denim',
    'Paire',
    'Pamela Love',
    'Parker',
    'Patrizia Pepe',
    'Paul Smith',
    'PERRIN Paris',
    'philanthropist boutique',
    'Pierre Hardy',
    'Pink mascara',
    'Piperlime',
    'Pixie Market',
    'Planet Blue',
    'Précouture',
    'Proenza Schouler',
    'Pull & Bear UK',
    'Q by Dorit Sharon',
    'Rachael Ruddick',
    'Rag & Bone',
    'Ralph Lauren',
    'Ray-ban',
    'Rebecca Minkoff',
    'Rebecca Taylor',
    'Red Valentino',
    'Reece Hudson',
    'Reiss',
    'REVOLVE',
    'Rhie Studio',
    'Rhythm of Grace',
    'Rich & Skinny',
    'River Island',
    'Roan',
    'Roland Mouret',
    'Rugby Ralph Lauren',
    'Sachin & Babi',
    'Saint Cloud',
    'Saks Fifth Avenue',
    'saks off fifth',
    'Sara Berman',
    'Sass & Bide',
    'Scoop NYC',
    'Selfridges',
    'Shannon Green',
    'Shoescribe',
    'Shopbop',
    'SHOPTHEFAROUT.com',
    'Shop The Love Affair',
    'Sigerson Morrison',
    'SimplySoles',
    'Singer22',
    'SIWY',
    'Smythson',
    'SOIA & KYO',
    'Soludos',
    'Splendid',
    'SSENSE',
    'Stanwells',
    'Start London',
    'Stefanel',
    'Stella McCartney',
    'Steve Madden',
    'Steven Alan',
    'Stone & Strand',
    'Stuart Weitzman',
    'STYLEBOP.com',
    'styled by NOIR',
    'Sucker for Socks',
    'Suno',
    'Sunspel',
    'Super Street',
    'Tamara Mellon',
    'Tart Collections',
    'Taryn Rose',
    'Tateossian',
    'Ted Baker',
    'Temperley London',
    'Tessabit',
    'The Cambridge Satchel Company',
    'The Clothes Parlour',
    'Thecorner.com',
    'The Couture Society',
    'The Dreslyn',
    'THE IDLE MAN',
    'The Luxer',
    'Theodora & Callum',
    'Theory',
    'The Outnet',
    'Thread',
    'Tibi',
    'Time\'s Arrow',
    'TKEES',
    'Toast',
    'Todd Snyder',
    'Tommy Hilfiger',
    'TOMS',
    'Topman',
    'TOPSHOP',
    'Torn By Ronny Kobo',
    'Tory Burch',
    'Trina Turk',
    'True Religion',
    'Underligne',
    'Uniqlo',
    'Urban Outfitters',
    'URSA',
    'Valentino',
    'Valery Demure',
    'VAUGHAN',
    'Velvet By Graham & Spencer',
    'Very',
    'Victoria\'s Secret',
    'Vince',
    'Vince Camuto',
    'Vix',
    'Vrai & Oro',
    'Vrients',
    'Warby Parker',
    'Whistles',
    'Wildfox Couture UK',
    'Wolf & Badger',
    'Wolford',
    'Wool And The Gang',
    'YOOX.COM',
    'Young British Designers',
    'Yumi Kim',
    'Zadig & Voltaire',
    'ZADY',
    'Zappos',
    'Zappos Couture',
    'Zegna'
];

function getRandomTimeout(min, max) {
    return Math.random() * (max - min) + min;
}

export function getSuggestions(query) {
    return new Promise((resolve) => {

        const lowerQuery = query.toLowerCase();
        const timeout = getRandomTimeout(50, 350);
        const results = stores.filter(s => s.toLowerCase().indexOf(lowerQuery) !== -1);

        setTimeout(() => resolve(results), timeout);

    });
}