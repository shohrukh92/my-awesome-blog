let instance = null;

export class ArticleService {
    constructor() {
        if (!instance) {
            instance = this;
        }
        this.articles = articles;
        return instance;
    }

    getArticleCuttings() {
        return this.articles.map((article) => {
            const { id, title, author, date, thumbnail } = article;
            return { id, title, author, date, thumbnail };
        });
    }

    getArticleById(id) {
        // 'filter' method has better browser support than 'find'
        const filtered = this.articles.filter(article => article.id === id);
        if (filtered.length === 1) {
            return filtered[0];
        } else {
            return null;
        }
    }
}

// TODO these articles should be fetched from API
const articles = [
    {
        id: 1,
        title: 'The domestic cat is a small, typically furry, carnivorous mammal',
        author: 'Author 1',
        date: '01/01/2017',
        bannerImg: 'article_1.jpg',
        thumbnail: 'article_1.jpg',
        htmlContent: `
            <p>This article is about the cat species that is commonly kept as a pet. For the cat family, see Felidae. For other uses, see Cat (disambiguation) and Cats (disambiguation). For technical reasons, "Cat #1" redirects here. For that album, see Cat 1 (album). The domestic cat (Felis silvestris catus or Felis catus) is a small, typically furry, carnivorous mammal. They are often called house cats when kept as indoor pets or simply cats when there is no need to distinguish them from other felids and felines. <br />Cats are often valued by humans for companionship and for their ability to hunt vermin. There are more than 70 cat breeds, though different associations proclaim different numbers according to their standards.<br />Cats are similar in anatomy to the other felids, with a strong flexible body, quick reflexes, sharp retractable claws, and teeth adapted to killing small prey. Cat senses fit a crepuscular and predatory ecological niche. Cats can hear sounds too faint or too high in frequency for human ears, such as those made by mice and other small animals. They can see in near darkness. Like most other mammals, cats have poorer color vision and a better sense of smell than humans. Cats, despite being solitary hunters, are a social species and cat communication includes the use of a variety of vocalizations (mewing, purring, trilling, hissing, growling, and grunting), as well as cat pheromones and types of cat-specific body language. <br />Cats have a high breeding rate. Under controlled breeding, they can be bred and shown as registered pedigree pets, a hobby known as cat fancy. Failure to control the breeding of pet cats by neutering, as well as the abandonment of former household pets, has resulted in large numbers of feral cats worldwide, requiring population control. In certain areas outside cats' native range, this has contributed, along with habitat destruction and other factors, to the extinction of many bird species. Cats have been known to extirpate a bird species within specific regions and may have contributed to the extinction of isolated island populations. Cats are thought to be primarily responsible for the extinction of 33 species of birds, and the presence of feral and free-ranging cats makes some otherwise suitable locations unsuitable for attempted species reintroduction. <br />Since cats were venerated in ancient Egypt, they were commonly believed to have been domesticated there, but there may have been instances of domestication as early as the Neolithic from around 9,500 years ago (7,500 BC). A genetic study in 2007concluded that domestic cats are descended from Near Eastern wildcats, having diverged around 8,000 BC in the Middle East. A 2016 study found that leopard cats were undergoing domestication independently in China around 5,500 BC, though this line of partially domesticated cats leaves no trace in the domesticated populations of today. A 2017 study confirmed that domestic cats are descendants of those first domesticated by farmers in the Near East around 9,000 years ago. </p>
        `
    },
    {
        id: 2,
        title: 'Taxonomy and evolution (domestic cats)',
        author: 'Author 2',
        date: '02/01/2017',
        bannerImg: 'article_2.jpg',
        thumbnail: 'article_2.jpg',
        htmlContent: `
            <p>The domestic cat is believed to have evolved from the Near Eastern wildcat, whose range covers vast portions of the Middle East westward to the Atlantic coast of Africa. Between 70,000 and 100,000 years ago the animal gave rise to the genetic lineage that eventually produced all domesticated cats, having diverged from the Near Eastern wildcat around 8,000 BC in the Middle East. <br />The felids are a rapidly evolving family of mammals that share a common ancestor only 10&ndash;15 million years ago and include lions, tigers, cougars and many others. Within this family, domestic cats (Felis catus) are part of the genus Felis, which is a group of small cats containing about seven species (depending upon classification scheme). Members of the genus are found worldwide and include the jungle cat(Felis chaus) of southeast Asia, European wildcat (F. silvestris silvestris), African wildcat (F. s. lybica), the Chinese mountain cat (F. bieti), and the Arabian sand cat (F. margarita), among others. <br />The domestic cat was first classified as Felis catus by Carl Linnaeus in the 10th edition of his Systema Naturaepublished in 1758. Because of modern phylogenetics, domestic cats are usually regarded as another subspecies of the wildcat, F. silvestris. This has resulted in mixed usage of the terms, as the domestic cat can be called by its subspecies name, Felis silvestris catus. Wildcats have also been referred to as various subspecies of F. catus, but in 2003, the International Commission on Zoological Nomenclature fixed the name for wildcats as F. silvestris. The most common name in use for the domestic cat remains F. catus, following a convention for domesticated animals of using the earliest (the senior) synonym proposed. Sometimes, the domestic cat has been called Felis domesticus or Felis domestica, as proposed by German naturalist J. C. P. Erxleben in 1777, but these are not valid taxonomic names and have been used only rarely in scientific literature, because Linnaeus's binomial takes precedence. A population of Transcaucasian black feral cats was once classified as Felis daemon (Satunin 1904) but now this population is considered to be a part of domestic cat. <br />All the cats in this genus share a common ancestor that is believed to have lived around 6&ndash;7 million years ago in the Near East (the Middle East). The exact relationships within the Felidae are close but still uncertain, e.g. the Chinese mountain cat is sometimes classified (under the name Felis silvestris bieti) as a subspecies of the wildcat, like the North African variety F. s. lybica. <br />In comparison to dogs, cats have not undergone major changes during the domestication process, as the form and behavior of the domestic cat is not radically different from those of wildcats and domestic cats are perfectly capable of surviving in the wild. Fully domesticated house cats often interbreed with feral F. catus populations, producing hybrids such as the Kellas cat. This limited evolution during domestication means that hybridisation can occur with many other felids, notably the Asian leopard cat. Several natural behaviors and characteristics of wildcats may have predisposed them for domestication as pets. These traits include their small size, social nature, obvious body language, love of play and relatively high intelligence. Several small felid species may have an inborn tendency towards tameness. <br />Cats have either a mutualistic or commensal relationship with humans. Two main theories are given about how cats were domesticated. In one, people deliberately tamed cats in a process of artificial selection as they were useful predators of vermin. This has been criticized as implausible, because the reward for such an effort may have been too little; cats generally do not carry out commands and although they do eat rodents, other species such as ferrets or terriers may be better at controlling these pests. The alternative idea is that cats were simply tolerated by people and gradually diverged from their wild relatives through natural selection, as they adapted to hunting the vermin found around humans in towns and villages. </p>
        `
    },
    {
        id: 3,
        title: 'Learn more about the history which have developed about cats',
        author: 'Author 3',
        date: '03/01/2017',
        bannerImg: 'article_3.jpg',
        thumbnail: 'article_3.jpg',
        htmlContent: `
            <p>Traditionally, historians tended to think ancient Egypt was the site of cat domestication, owing to the clear depictions of house cats in Egyptian paintings about 3,600 years old. However, in 2004, a Neolithic grave excavated in Shillourokambos, Cyprus, contained the skeletons, laid close to one another, of both a human and a cat. The grave is estimated to be 9,500 years old, pushing back the earliest known feline&ndash;human association significantly. The cat specimen is large and closely resembles the African wildcat, rather than present-day domestic cats. This discovery, combined with genetic studies, suggests cats were probably domesticated in the Middle East, in the Fertile Crescent around the time of the development of agriculture, and then were brought to Cyprus and Egypt. <br />Direct evidence for the domestication of cats 5,300 years ago in Quanhucun, China has been published by archaeologists and paleontologists from the University of Washington and Chinese Academy of Sciences. The cats are believed to have been attracted to the village by rodents, which in turn were attracted by grain cultivated and stored by humans. <br />In ancient Egypt, cats were sacred animals, with the goddess Bastet often depicted in cat form, sometimes taking on the war-like aspect of a lioness. The Romans are often credited with introducing the domestic cat from Egypt to Europe; in Roman Aquitaine, a first- or second-century engraving of a young girl holding a cat is one of two earliest depictions of the Roman domesticated cat. However, cats possibly were already kept in Europe prior to the Roman Empire, as they may have been present in Britain in the late Iron Age. Domestic cats were spread throughout much of the rest of the world during the Age of Discovery, as ship's cats were carried on sailing ships to control shipboard rodents and as good-luck charms. <br />Several ancient religions believed cats are exalted souls, companions or guides for humans, that are all-knowing but mute so they cannot influence decisions made by humans. In Japan, the maneki neko cat is a symbol of good fortune. <br />Although no species are sacred in Islam, cats are revered by Muslims. Some Western writers have stated Muhammad had a favorite cat, Muezza. He is reported to have loved cats so much, "he would do without his cloak rather than disturb one that was sleeping on it". The story has no origin in early Muslim writers, and seems to confuse a story of a later Sufi saint, Ahmed ar-Rifa'i, centuries after Muhammad. <br />Freyja, the goddess of love, beauty, and fertility in Norse mythology, is depicted as riding a chariot drawn by cats. <br />Superstitions and cat burning<br />Many cultures have negative superstitions about cats. An example would be the belief that a black cat "crossing one's path" leads to bad luck, or that cats are witches' familiars used to augment a witch's powers and skills. The killing of cats in Medieval Ypres, Belgium, is commemorated in the innocuous present-day Kattenstoet (cat parade). <br />In medieval France, cats would be burnt alive as a form of entertainment. According to Norman Davies, the assembled people "shrieked with laughter as the animals, howling with pain, were singed, roasted, and finally carbonized".<br />"It was the custom to burn a basket, barrel, or sack full of live cats, which was hung from a tall mast in the midst of the bonfire; sometimes a fox was burned. The people collected the embers and ashes of the fire and took them home, believing that they brought good luck. The French kings often witnessed these spectacles and even lit the bonfire with their own hands. In 1648 Louis XIV, crowned with a wreath of roses and carrying a bunch of roses in his hand, kindled the fire, danced at it and partook of the banquet afterwards in the town hall. But this was the last occasion when a monarch presided at the midsummer bonfire in Paris. At Metz midsummer fires were lighted with great pomp on the esplanade, and a dozen cats, enclosed in wicker cages, were burned alive in them, to the amusement of the people. Similarly at Gap, in the department of the Hautes-Alpes, cats used to be roasted over the midsummer bonfire." <br />According to a myth in many cultures, cats have multiple lives. In many countries, they are believed to have nine lives, but in Italy, Germany, Greece, Brazil and some Spanish-speaking regions, they are said to have seven lives, while in Turkish and Arabic traditions, the number of lives is six. The myth is attributed to the natural suppleness and swiftness cats exhibit to escape life-threatening situations. Also lending credence to this myth is the fact that falling cats often land on their feet, using an instinctive righting reflex to twist their bodies around. Nonetheless, cats can still be injured or killed by a high fall. </p>
        `
    },
    {
        id: 4,
        title: 'Cat senses are adaptations that allow cats to be highly efficient predators',
        author: 'Author 4',
        date: '04/01/2017',
        bannerImg: 'article_4.jpg',
        thumbnail: 'article_4.jpg',
        htmlContent: `
            <p>This is partly the result of cat eyes having a tapetum lucidum, which reflects any light that passes through the retina back into the eye, thereby increasing the eye's sensitivity to dim light. Another adaptation to dim light is the large pupils of cats' eyes. Unlike some big cats, such as tigers, domestic cats have slit pupils. These slit pupils can focus bright light without chromatic aberration, and are needed since the domestic cat's pupils are much larger, relative to their eyes, than the pupils of the big cats. At low light levels a cat's pupils will expand to cover most of the exposed surface of its eyes. However, domestic cats have rather poor color vision and (like most nonprimate mammals) have only two types of cones, optimized for sensitivity to blue and yellowish green; they have limited ability to distinguish between red and green. A 1993 paper reported a response to middle wavelengths from a system other than the rods which might be due to a third type of cone. However, this appears to be an adaptation to low light levels rather than representing true trichromatic vision. <br />Cats have excellent hearing and can detect an extremely broad range of frequencies. They can hear higher-pitched sounds than either dogs or humans, detecting frequencies from 55 Hz to 79,000 Hz, a range of 10.5 octaves, while humans and dogs both have ranges of about 9 octaves. Cats can hear ultrasound, which is important in hunting because many species of rodents make ultrasonic calls. However, they do not communicate using ultrasound like rodents do. Cats' hearing is also sensitive and among the best of any mammal, being most acute in the range of 500 Hz to 32 kHz. This sensitivity is further enhanced by the cat's large movable outer ears (their pinnae), which both amplify sounds and help detect the direction of a noise. <br />Cats have an acute sense of smell, due in part to their well-developed olfactory bulb and a large surface of olfactory mucosa, about 5.8 cm2 (0.90 in2) in area, which is about twice that of humans. Cats are sensitive to pheromones such as 3-mercapto-3-methylbutan-1-ol, which they use to communicate through urine sprayingand marking with scent glands. Many cats also respond strongly to plants that contain nepetalactone, especially catnip, as they can detect that substance at less than one part per billion. About 70&ndash;80% of cats are affected by nepetalactone. This response is also produced by other plants, such as silver vine (Actinidia polygama) and the herb valerian; it may be caused by the smell of these plants mimicking a pheromone and stimulating cats' social or sexual behaviors. <br />Cats have relatively few taste buds compared to humans (470 or so versus more than 9,000 on the human tongue). Domestic and wild cats share a gene mutation that keeps their sweet taste buds from binding to sugary molecules, leaving them with no ability to taste sweetness. Their taste buds instead respond to amino acids, bitter tastes, and acids. Cats and many other animals have a Jacobson's organ located in their mouths that allows them to taste-smell certain aromas in a way of which humans have no experience. Cats also have a distinct temperature preference for their food, preferring food with a temperature around 38 &deg;C (100 &deg;F) which is similar to that of a fresh kill and routinely rejecting food presented cold or refrigerated (which would signal to the cat that the "prey" item is long dead and therefore possibly toxic or decomposing). <br />To aid with navigation and sensation, cats have dozens of movable whiskers (vibrissae) over their body, especially their faces. These provide information on the width of gaps and on the location of objects in the dark, both by touching objects directly and by sensing air currents; they also trigger protective blink reflexes to protect the eyes from damage. <br />Most breeds of cat have a noted fondness for settling in high places, or perching. In the wild, a higher place may serve as a concealed site from which to hunt; domestic cats may strike prey by pouncing from a perch such as a tree branch, as does a leopard. Another possible explanation is that height gives the cat a better observation point, allowing it to survey its territory. During a fall from a high place, a cat can reflexively twist its body and right itself using its acute sense of balance and flexibility. This is known as the cat righting reflex. An individual cat always rights itself in the same way, provided it has the time to do so, during a fall. The height required for this to occur is around 90 cm (3.0 ft). Cats without a tail (e.g. Manx cats) also have this ability, since a cat mostly moves its hind legs and relies on conservation of angular momentum to set up for landing, and the tail is little used for this feat. </p>
        `
    },
    {
        id: 5,
        title: 'Cats hunt small prey, primarily birds and rodents etc.',
        author: 'Author 5',
        date: '05/01/2017',
        bannerImg: 'article_5.jpg',
        thumbnail: 'article_5.jpg',
        htmlContent: `
            <p>Cats hunt small prey, primarily birds and rodents, and are often used as a form of pest control. Domestic cats are a major predator of wildlife in the United States, killing an estimated 1.4&ndash;3.7 billion birds and 6.9&ndash;20.7 billion mammals annually.The bulk of predation in the United States is done by 80 million feral and stray cats. Effective measures to reduce this population are elusive, meeting opposition from cat enthusiasts. In the case of free-ranging pets, equipping cats with bells and not letting them out at night will reduce wildlife predation.<br />Free-fed feral cats and house cats tend to consume many small meals in a single day, although the frequency and size of meals varies between individuals.Cats use two hunting strategies, either stalking prey actively, or waiting in ambush until an animal comes close enough to be captured. Although it is not certain, the strategy used may depend on the prey species in the area, with cats waiting in ambush outside burrows, but tending to actively stalk birds.<br />Perhaps the best known element of cats' hunting behavior, which is commonly misunderstood and often appalls cat owners because it looks like torture, is that cats often appear to "play" with prey by releasing it after capture. This behavior is due to an instinctive imperative to ensure that the prey is weak enough to be killed without endangering the cat.This behavior is referred to in the idiom "cat-and-mouse game" or simply "cat and mouse".<br />Another poorly understood element of cat hunting behavior is the presentation of prey to human guardians. Ethologist Paul Leyhausen proposed that cats adopt humans into their social group and share excess kill with others in the group according to the dominance hierarchy, in which humans are reacted to as if they are at, or near, the top. Anthropologist and zoologist Desmond Morris, in his 1986 book Catwatching, suggests, when cats bring home mice or birds, they are attempting to teach their human to hunt, or trying to help their human as if feeding "an elderly cat, or an inept kitten". Morris's hypothesis is inconsistent with the fact that male cats also bring home prey, despite males having negligible involvement with raising kittens.<br />Domestic cats select food based on its temperature, smell and texture; they dislike chilled foods and respond most strongly to moist foods rich in amino acids, which are similar to meat.Cats may reject novel flavors (a response termed neophobia) and learn quickly to avoid foods that have tasted unpleasant in the past. They may also avoid sugary foods and milk. Most adult cats are lactose intolerant; the sugars in milk are not easily digested and may cause soft stools or diarrhea. They can also develop odd eating habits. Some cats like to eat or chew on other things, most commonly wool, but also plastic, cables, paper, string, aluminum foil, or even coal. This condition, pica, can threaten their health, depending on the amount and toxicity of the items eaten.<br />Though cats usually prey on animals less than half their size, a feral cat in Australia has been photographed killing an adult pademelon of around the cat's weight at 4 kg (8.8 lb).<br />Since cats lack lips to create suction, they use a lapping method with the tongue to draw liquid upwards into their mouths. Lapping at a rate of four times a second, the cat touches the smooth tip of its tongue to the surface of the water, and quickly retracts it, drawing water upwards.<br />Domestic cats, especially young kittens, are known for their love of play. This behavior mimics hunting and is important in helping kittens learn to stalk, capture, and kill prey.Cats also engage in play fighting, with each other and with humans. This behavior may be a way for cats to practice the skills needed for real combat, and might also reduce any fear they associate with launching attacks on other animals.<br />Owing to the close similarity between play and hunting, cats prefer to play with objects that resemble prey, such as small furry toys that move rapidly, but rapidly lose interest (they become habituated) in a toy they have played with before.Cats also tend to play with toys more when they are hungry.String is often used as a toy, but if it is eaten, it can become caught at the base of the cat's tongue and then move into the intestines, a medical emergency which can cause serious illness, even death.Owing to the risks posed by cats eating string, it is sometimes replaced with a laser pointer's dot, which cats may chase.</p>
        `
    },
    {
        id: 6,
        title: 'Cat behaviour includes body language, elimination habits, aggression etc.',
        author: 'Author 6',
        date: '06/01/2017',
        bannerImg: 'article_6.jpg',
        thumbnail: 'article_6.jpg',
        htmlContent: `
            <p>Outdoor cats are active both day and night, although they tend to be slightly more active at night.The timing of cats' activity is quite flexible and varied, which means house cats may be more active in the morning and evening, as a response to greater human activity at these times. Although they spend the majority of their time in the vicinity of their home, housecats can range many hundreds of meters from this central point, and are known to establish territories that vary considerably in size, in one study ranging from 7 to 28 hectares (17&ndash;69 acres).<br />Cats conserve energy by sleeping more than most animals, especially as they grow older. The daily duration of sleep varies, usually between 12 and 16 hours, with 13 and 14 being the average. Some cats can sleep as much as 20 hours. The term "cat nap" for a short rest refers to the cat's tendency to fall asleep (lightly) for a brief period. While asleep, cats experience short periods of rapid eye movement sleep often accompanied by muscle twitches, which suggests they are dreaming.<br />Although wildcats are solitary, the social behavior of domestic cats is much more variable and ranges from widely dispersed individuals to feral cat colonies that form around a food source, based on groups of co-operating females. Within such groups, one cat is usually dominant over the others. Each cat in a colony holds a distinct territory, with sexually active males having the largest territories, which are about 10 times larger than those of female cats and may overlap with several females' territories. These territories are marked by urine spraying, by rubbing objects at head height with secretions from facial glands, and by defecation. Between these territories are neutral areas where cats watch and greet one another without territorial conflicts. Outside these neutral areas, territory holders usually chase away stranger cats, at first by staring, hissing, and growling, and if that does not work, by short but noisy and violent attacks. Despite some cats cohabiting in colonies, they do not have a social survival strategy, or a pack mentality, and always hunt alone.<br />However, some pet cats are poorly socialized. In particular, older cats may show aggressiveness towards newly arrived kittens, which may include biting and scratching; this type of behavior is known as feline asocial aggression.<br />Though cats and dogs are often characterized as natural enemies, they can live together if correctly socialized.<br />Life in proximity to humans and other domestic animals has led to a symbiotic social adaptation in cats, and cats may express great affection toward humans or other animals. Ethologically, the human keeper of a cat may function as a sort of surrogate for the cat's mother, and adult housecats live their lives in a kind of extended kittenhood, a form of behavioral neoteny. The high-pitched sounds housecats make to solicit food may mimic the cries of a hungry human infant, making them particularly hard for humans to ignore.</p>
        `
    }
];