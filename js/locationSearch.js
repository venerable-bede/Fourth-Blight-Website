function locationSearchCtrl() {
  this.jsonLocationData = [
   {
      "Hex_Location":1010,
      "Zone_Location":"The Western Reichs",
      "Unit_Name":"Oftburg",
      "Unit_Type":"Settlement",
      "Description":"A small town to the West of Marriwald. They farm varrious vegetables. The villagers are suspicious of outsiders, but with enough warming up, they are happy to open their homes to adventurers."
   },
   {
      "Hex_Location":1021,
      "Zone_Location":"Allenfel Barrows",
      "Unit_Name":"Great One of the Earth",
      "Unit_Type":"Great Old One",
      "Description":"The Great One of the Earth is a elemental being that resides in the Alenfel Barrows. It is believed to be brought to life through magic and continues to search for wells of magic throughout the hills of the Barrows. "
   },
   {
      "Hex_Location":2005,
      "Zone_Location":"Ernst Chase",
      "Unit_Name":"The Skin Walker",
      "Unit_Type":"Fiend",
      "Description":"The Skin Walker is a Fiend that skulks around the Faykeep Forest in the darkness of the night. It is said that the Walker consumes it's victims through a gruesome digestion process in which it removes the skin and leaves the fleshy bleeding body to writhe in tortuous pain."
   },
   {
      "Hex_Location":2009,
      "Zone_Location":"The Western Reichs",
      "Unit_Name":"Peace's Rest",
      "Unit_Type":"Landmark",
      "Description":"Peace's Rest is a popular pilgrimage site to those who live in the Reichs. The location is known for the sense of peace it instills in the worshipers there and is famous for its supposed miraculous healing abilities."
   },
   {
      "Hex_Location":2016,
      "Zone_Location":"The Western Reichs",
      "Unit_Name":"The Star Map",
      "Unit_Type":"Ruin",
      "Description":"A map that was not created by any mortal or even ascendant. Surely a diety but have crafted such an intracate and bizzare item. With the right knowlege a user can use the devive to peer into the cosmos and read about the stars."
   },
   {
      "Hex_Location":3001,
      "Zone_Location":"Ernst Chase",
      "Unit_Name":"Dungeon of a Thousand Teeth",
      "Unit_Type":"Dungeon",
      "Description":"Deep within the Faykeep Forest is a horrific landmark known as the Dungeon of a Thousand Teeth. None have known to enter, yet it is rumored that many treasures lie within."
   },
   {
      "Hex_Location":3019,
      "Zone_Location":"Allenfel Barrows",
      "Unit_Name":"Bellagin Village",
      "Unit_Type":"Settlement",
      "Description":"Bellagin Village is the first known established town in the Far Weald. It was used as a home base for the explorers who ventured into the Weald and who eventually founded Marriwald. Now, Bellagin is different. A spell was cast on the town long ago that causes it to burn eternally. There are a few districts that are still livable. The people that live their are welcoming despite that rather odd circumstances that they live in. The majority of Bellagin is inhabited by creatures that are born of flame, such as fire elementals. "
   },
   {
      "Hex_Location":4012,
      "Zone_Location":"The Western Reichs",
      "Unit_Name":"The Hive",
      "Unit_Type":"Archfey",
      "Description":"The Hive is a mass of tentacles the resides in the storm clouds that float across the plains of the Western Reichs. The Hive is rarely ever mentioned by most folk tales, but recently there have been several sightings of the Fey creature. The Hive is said to have been the being that opened the door that allowed the many Archfey into Estaria. Having no visible mouth, The Hive speaks directly into the minds of those he wishes to speak. Many claim he feeds on small villages by consuming them whole, while others think he doesn't even eat at all."
   },
   {
      "Hex_Location":5017,
      "Zone_Location":"The Western Reichs",
      "Unit_Name":"Guild of the Fablelanders",
      "Unit_Type":"NPC",
      "Description":"The Fablelanders are a guild of adventurers and fortune seakers. They are infamous throughout the Reichs for being reckless in their endevors. They are a group of 5 namesless warriors. 3 wear helmeted suits of armor and can't be differinciated between. The other two are identical twins and don't identify themselves with any name, other than "
   },
   {
      "Hex_Location":5023,
      "Zone_Location":"Allenfel Barrows",
      "Unit_Name":"Nootau's Demise",
      "Unit_Type":"Landmark",
      "Description":"A large dragon skeleton that lays outside an abandoned city. The skeleton is known to give off magical essence, and is widely researched by magic users. The nearby city is picked clean of all of its treasures and the majority of the buildings have collapsed. Most of what remains is the wall and the castle."
   },
   {
      "Hex_Location":6004,
      "Zone_Location":"Ernst Chase",
      "Unit_Name":"Witch of the Wastes",
      "Unit_Type":"NPC",
      "Description":"The Witch of the Wastes, known as Nukpana by the wildlings is known to help adventurers through their journeys in the Faykeep Forest. Little is known about her, but she can preform powerful warding magic and is known to be an excellent healer by the wildlings."
   },
   {
      "Hex_Location":6007,
      "Zone_Location":"The Western Reichs",
      "Unit_Name":"The Light's Crevace",
      "Unit_Type":"Landmark",
      "Description":"A rupture in the ground where light peers miles into the earth. Many see this as an "
   },
   {
      "Hex_Location":6014,
      "Zone_Location":"The Western Reichs",
      "Unit_Name":"Petrus Ketzen",
      "Unit_Type":"NPC",
      "Description":"A retired paladin who begain making mead in his free time. Soon he became famous for it and built Fullglow Estate to make his mead full time. He tells stories of outlandish adventures he went on as a young man. The surely can't be true. Can they?"
   },
   {
      "Hex_Location":7014,
      "Zone_Location":"The Western Reichs",
      "Unit_Name":"The Fullglow Estate",
      "Unit_Type":"Settlement",
      "Description":"The Fullglow Estate is run by Petrus Ketzen. It is the leading provider of sweetmead to Marriwald and is very famous for it's superior mead. The estate is built right next to a pond, which refects the setting sun's light, giving the estate its name."
   },
   {
      "Hex_Location":9004,
      "Zone_Location":"Ernst Chase",
      "Unit_Name":"The Vine Beist",
      "Unit_Type":"Archfey",
      "Description":"The Vine Beast is an Archfey that burrows throughout the earth around the Emerald Caverns. The Beist is known for its ability to shred enormous trees into mulch in mere seconds."
   },
   {
      "Hex_Location":9009,
      "Zone_Location":"The Western Reichs",
      "Unit_Name":"Sunken Shrine",
      "Unit_Type":"Temple",
      "Description":"The only known shrine to the Angels in existance. The temple must have sunk into the ground hundreds of years ago. Many still make pilgrimages here to pay homage to their deity."
   },
   {
      "Hex_Location":9019,
      "Zone_Location":"Allenfel Barrows",
      "Unit_Name":"Port Thurderry",
      "Unit_Type":"Settlement",
      "Description":"Port Thurderry is a small town in the northern Alenfel Barrows. The town is known for it's elaborate zeplin port which holds over 3 functional zeplins. The people of the town are friendly and welcome in adventureres. The zeplins are owned by the 3 elders of the town and are off limits for public use. Most people claim that they aren't even pilotable."
   },
   {
      "Hex_Location":10003,
      "Zone_Location":"Ernst Chase",
      "Unit_Name":"Emerald Glow Cave",
      "Unit_Type":"Dungeon",
      "Description":"Surrounded by the thicket of the Faykeep Forest on all sides, the Emerald Glow Cavern is part of a massive twisting and winding mineral deposite that is beneath the forest. The caverns are said to produce a magical aura that can morph the surrounding wildlife."
   },
   {
      "Hex_Location":10018,
      "Zone_Location":"Allenfel Barrows",
      "Unit_Name":"Mines of the First Expedition",
      "Unit_Type":"Dungeon",
      "Description":"These mines were the first attempt to harvesting minerals from the grounds of the Far Weald. They have been long abandoned and are host to all sorts of creatures and beings from around the Alenfel Barrows."
   },
   {
      "Hex_Location":10019,
      "Zone_Location":"Allenfel Barrows",
      "Unit_Name":"Arno Gerson",
      "Unit_Type":"NPC",
      "Description":"Arno is the head elder in Thurderry. He is known as a proficient warrior and a great leader. Through the years he has been able to lead malitias of just a few men to successfully deffend Thurderry from all that would seek to harm the town. Arno is open to adventurers and loves exchanging stories with them. He hasn't adventurerd himself and is currious what lies beyond Thurderry."
   },
   {
      "Hex_Location":10022,
      "Zone_Location":"Allenfel Barrows",
      "Unit_Name":"Arachnid Queen",
      "Unit_Type":"Archfey",
      "Description":"The Arachnid Queen is an ancient being that roams the plains of the Alenfel Barrows. She is said to be the mother of Donama and the origen of the arachnids in Estaria. She is typically is peacfull and can be seen skittering across the plains doing who-knows-what. Many claim she is very welcoming and enjoys visitors, while others say that she draws people in with her charm and then consumes them whole."
   },
   {
      "Hex_Location":11023,
      "Zone_Location":"Allenfel Barrows",
      "Unit_Name":"Donama's Nest",
      "Unit_Type":"Dungeon",
      "Description":"Donama's Nest is a large silky mound that covers an enormous crevace in the Alenfel Barrows. Inside can be found various mining shafts, and mining supplies. In the center of the dome there is a large arachnid named Donama. She lays eggs that hatch into the spiders that roam all of the Far Weald. Many parties have been sent to exterminate her, but none have been successful."
   },
   {
      "Hex_Location":12001,
      "Zone_Location":"Ernst Chase",
      "Unit_Name":"Wise Old Tree",
      "Unit_Type":"Landmark",
      "Description":"Along the edge of the Faykeep Forest in a beautiful clearing, there lies a wide tree with a face intricately carved into it's bark. It is known as The Wise Old Tree. It is said that the tree is covered in ancient magical runes. When someone is to put their palm against the tree's ancient bark, they may ask one question. The question is answered with complete truth (Questions of the future cannot be answered by The Wise Old Tree and each person only gets one question in their lifetime)."
   },
   {
      "Hex_Location":13009,
      "Zone_Location":"Oakburn Hills",
      "Unit_Name":"The Roost",
      "Unit_Type":"Dungeon",
      "Description":"A filthy tower that peaks over the western hills of Oakburn. The tower swarms with birdfolk of all kind and can be smelled from over 15 miles away. Inside is covered in bird excriment. If approached, clouds of black birds burst out of the sides of the tower into the sky and sqwak angrily."
   },
   {
      "Hex_Location":13011,
      "Zone_Location":"The Western Reichs",
      "Unit_Name":"Tears of the Night Sky",
      "Unit_Type":"Archfey",
      "Description":"The Tears of the Night Sky is a Fey being of the Western Reichs. It appears in the sky of the Wolfcastle woods and weeps silently. The Fey is kind and offers help to those who seek it's guidance."
   },
   {
      "Hex_Location":13013,
      "Zone_Location":"The Western Reichs",
      "Unit_Name":"Tothar's Ancient Tower",
      "Unit_Type":"Ruin",
      "Description":"An ancient tower built by an old wizard names Tothar. Now it is the home of Heidi von Strier, a skilled wizard who claims that Tothar was her great great great grandfather. The tower holds a special stone in the top that wards off magical creatures."
   },
   {
      "Hex_Location":13018,
      "Zone_Location":"Allenfel Barrows",
      "Unit_Name":"Barrowtern",
      "Unit_Type":"Ruin",
      "Description":"Barrowtern is a mysterious cluster of buildings in the Alenfel Barrows. The architechture is nothing like anything else seen in the Far Weald. Inside there are dozens of stone panels and plaques covered in mysterious runes and scribbles."
   },
   {
      "Hex_Location":14004,
      "Zone_Location":"Ernst Chase",
      "Unit_Name":"Serpent of Terror",
      "Unit_Type":"Great Old One",
      "Description":"Despite the safe and calming aura that Peckwin's Sancuary exudes, it is the home of a large ancient creater that has been in fables that your great grandparents told you. The Serpent of Terror is an enormous snake that has absorbed magical energy over thousands of years. Many say that he started life as a harmless garden snake and grew after an incident with a wizard. Others think that he was birthed from a Deity and was sent to guard Gloomwood."
   },
   {
      "Hex_Location":14009,
      "Zone_Location":"Oakburn Hills",
      "Unit_Name":"The Great Bloodling",
      "Unit_Type":"Fiend",
      "Description":"The Great Bloodling resides in on of the many twisting halls of the Shards of Ascendance. Every blood moon, she makes her way out of the shard to feed on the blood of the living. She has been blinded and has acute hearing and smell.  She constantly bleeds from her wound and smells of fresh warm blood. The Great Bloodling was an ancient explorer of Estaria, one of that same that built the Star Map. She was left on the planet by her best friend. She was literally stabbed in the back and left to bleed while inside the Shards of Ascendance. As she lay in her own pool of blood, she was blasted with the shards engergy keeping her alive, but in the same state as when she was dying. She no longer remembers her ancient past, but only thinks about when she will next feed."
   },
   {
      "Hex_Location":14014,
      "Zone_Location":"The Western Reichs",
      "Unit_Name":"Heidi von Strier",
      "Unit_Type":"NPC",
      "Description":"Heidi is a wizard who lives in Tothar's Ancient Tower. She claims to be his great great great granddaughter, but does have the magic ability to make it plausable. She is contracted bt Marriwald to provide a magic barrier parimeter around the city, but most of the time the device she uses doesn't seem to work. She is happy to help adventurers and is glad to seem them and if need be can communicate with them long distance with her owl familiar named Charles."
   },
   {
      "Hex_Location":15003,
      "Zone_Location":"Ernst Chase",
      "Unit_Name":"Peckswin's Sanctuary",
      "Unit_Type":"Ruin",
      "Description":"A tomb dug into the ground on the outskirts of Gloomwood. The tomb seems to have a magical aura of protection around it, and when entered it seems to put you at ease. The decor is made out of mundane stone and other common minerals, but the craftsmanship is stunning. Peckswin seems the only one to be burried here."
   },
   {
      "Hex_Location":15004,
      "Zone_Location":"Ernst Chase",
      "Unit_Name":"Skura the Invenomed",
      "Unit_Type":"NPC",
      "Description":"Some speak of talking with a mysterious woman in Gloomwood. They say she speaks like a snake and wreaks of acrid poison. She is said to warn the adventurers to steer clear of northern Gloomwood. She is sometimes described as having scaly skin. Others say that she has a 3 headed serpent that follows her and devours all who do not heed her advise. Skura has pledged her life to the service of her patron, The Serpent of Terror. She enstils fear in those she sees and knows many forms of illusion magic. She weilds two poisonous daggers that have the appearence of snake fangs. She is not initally agressive, but will quickly attack if she is ignored, or irritated."
   },
   {
      "Hex_Location":15006,
      "Zone_Location":"Ernst Chase",
      "Unit_Name":"Blackhill Manor",
      "Unit_Type":"Ruin",
      "Description":"Blackhill Manor is a mansion that is falling apart in the depths of the Gloomwood. Some adventureres say that they have traveled to the manor and have retrieved the ancient treasures that lie within, while others say that the manor is still ripe for the plunder. Either way, the enormous black skull that is carved into the enrance of the manor scares most away."
   },
   {
      "Hex_Location":15024,
      "Zone_Location":"Allenfel Barrows",
      "Unit_Name":"Tree of Blood",
      "Unit_Type":"Archfey",
      "Description":"The Tree of Blood is said to be the origin of fleshly life. The tree is a hybrid. Instead of bark, the tree has a thick fleshy hide. The tree has a gaping mouth that pours out blood. Instead of fruit, the tree grows and produces skulls and bones of various creatures. If watched closely, one can see the tree breathing slowly. Many groups of cultists worship the tree as their mother and sacrifice to it."
   },
   {
      "Hex_Location":16006,
      "Zone_Location":"Ernst Chase",
      "Unit_Name":"Dragon Graveyard",
      "Unit_Type":"Landmark",
      "Description":"For whatever reason there are dragon bones here. Tons of them. The bones are in enormous piles and there are dozens of piles. Many call this the Dragon Graveyard. It is a mystery how and why these dragons died here. Who or what could have been powerful enough to do this?"
   },
   {
      "Hex_Location":16009,
      "Zone_Location":"Oakburn Hills",
      "Unit_Name":"Wolf and Luca Korsch the Giant Slayers",
      "Unit_Type":"NPC",
      "Description":"Wolf and Luca grew up in Kesward. As they grew older they began to realize the fear that people had for the wilds. Being from a family with just a single mother to take care of them, it was up to them to find food when they became old enough. Hunting became their favorite method which gave them exposure to the wilds. They began to question the fear of society of the wilds and actually ended up prefering it. After their mother died they left Kesward with the intent of living in the wilderness and continuing to hunt. Now they are known for more than being mere hunters, the brothers track and hunt down the largest beings in the plains. Giants."
   },
   {
      "Hex_Location":16011,
      "Zone_Location":"Oakburn Hills",
      "Unit_Name":"Temple of Books",
      "Unit_Type":"Temple",
      "Description":"The Temple of Books is a great stone cylendar that peirces the sky in the Oakburn Hills. All that have approached the temple have not been able to enter. Many have tried to break in, but the large and thick stone door has prevened many for entering for hundred of years. Inside, the Temple is filled to the top with crammed bookshelves, and is watched and taken care of by the Librarian of Chaos. An ancient being whos soul has been bound to the Temple."
   },
   {
      "Hex_Location":16021,
      "Zone_Location":"Allenfel Barrows",
      "Unit_Name":"Monk of the Eight Fists",
      "Unit_Type":"NPC",
      "Description":"The Monk of the 8 Fists, also known as Nicholas of Iron is the appointed watcher over the Wickbar Cells. Under his 65 year watch, there has never once been a prison break or riot. Nicholas is an advanced fighter in hand to hand combat and is sought by monks from all over for training. Nicholas wears a mask because of his maimed face that was caused by an owlbear attack when he was only 10 years old. Since the attack he swore to never be weak enough to not be able to defend himself. "
   },
   {
      "Hex_Location":17010,
      "Zone_Location":"Oakburn Hills",
      "Unit_Name":"Chaos Librarian",
      "Unit_Type":"Great Old One",
      "Description":"The Chaos Librarian is a being thats soul has been bound to the Temple of Books. He takes care of the temple with unimaginable focus. He defends it with an even more impressive focus. Occasionally he can be seen around the Oakburn Hills searching for more books to add to his collection. The Librarian was once a man that worked for a wizard. He didn't care much for the spell learning, but found reading the books much more interesting. He tried to make sure to be reading every waking hour of his life. On his deathbed, he asked his patron, Knowlege to grant him with an eternity with books. His wish was granted. After hundreds of years reading the powerful texts in the Temple of Books, he has grown to 12 feet tall and become  pure magical energy. "
   },
   {
      "Hex_Location":17014,
      "Zone_Location":"The Western Reichs",
      "Unit_Name":"The Fourth Blight",
      "Unit_Type":"Fiend",
      "Description":"The Fourth Blight is a Fiendish creature of the Western Reichs and Bruin Marshes. The Blight Floats above the ground in the wilds and exudes a putrid cloud of acid and poions. The blight was once a man that heavily dabbled into necromancy. He was widely known and very powerful, quickly reaching lichdom. When he made the transformation, he tried to bind a part of his soul to a sacred stone of  The Angel of Silence. As punishment, Silence granted The Blight the power he wanted but cursed him with everlasting pain and no way to comunicate, silent for all eternity."
   },
   {
      "Hex_Location":17017,
      "Zone_Location":"Swincrest",
      "Unit_Name":"Winrend",
      "Unit_Type":"Settlement",
      "Description":"Winrend is the larger of the two civilized holdings in Swincrest. Winred is a dark and inhospitable town that is known for its overbearing and dangerous government. The people of Winrend are untrusting of outsiders and typically lock their doors and close their windows to those they do not know. Although Winrend lacks hospitality, it is well known for it's delicious fish that it produces from Westerheim Lake."
   },
   {
      "Hex_Location":17020,
      "Zone_Location":"Allenfel Barrows",
      "Unit_Name":"Wickbar Cells",
      "Unit_Type":"Dungeon",
      "Description":"Wickbar Cells is the last place many want to go. The Cells are the destination for beings who can not be merely killed. Beings that have perhaps bound their soul to an object, or maybe have a regenerative ability. Wickbar is highly watched over by one watchment who has never once failed in containing those inside."
   },
   {
      "Hex_Location":18008,
      "Zone_Location":"Oakburn Hills",
      "Unit_Name":"Kesward",
      "Unit_Type":"Settlement",
      "Description":"Another city said to have been built by the Giants of Old. Kesward has been inhabited by settlers from Marriwald. The city is split in to two sections. It is suspected that the two parts were once connected by a land bridge, but some sort of natural disaster broke the bridge. Now the inhabitants use a large baloon to get from one half of the city to the other, so they can avoid leaving the safety of the walls. Kesward was separated in to two sections by an earthquake that had a similar drastic effect to it's sister city to the north, Drachward."
   },
   {
      "Hex_Location":19002,
      "Zone_Location":"Ernst Chase",
      "Unit_Name":"Mikuna",
      "Unit_Type":"NPC",
      "Description":"Mikuna is a Shaman that lives in the Waterfall Wildling Village. She specializes in healing and exorcism of "
   },
   {
      "Hex_Location":19003,
      "Zone_Location":"Ernst Chase",
      "Unit_Name":"Wildling Waterfall Village",
      "Unit_Type":"Settlement",
      "Description":"This Wildling village is strategically hidden behind a waterfall that pours over one of the northern cliffs. The wildlings here aren't aggressive, but are very suspicious and don't hesitate to defend themselves."
   },
   {
      "Hex_Location":19010,
      "Zone_Location":"Oakburn Hills",
      "Unit_Name":"The Stormstrider Plains",
      "Unit_Type":"Landmark",
      "Description":"The Stormstrider Plains is a 12 mile section in the Oakburn Hills that has an eternal storm that swirls above it. Storm giants congregate here and pound around the landscape tearing up the earth and destroying all those who enter. Its said that there is an orb in the middle of the storm that is causing all of the chaos, buit it seem to be near impossible to retrieve it. "
   },
   {
      "Hex_Location":19013,
      "Zone_Location":"Villmar",
      "Unit_Name":"Plague Maiden",
      "Unit_Type":"Archfey",
      "Description":"The Plauge Maiden stalks through the marshes in Villmar. She uses the marshes to mask her hideousness. Those that show fear when in her presence, are splashed with a corrosive ooze that explodes from one of her puss globules. The maiden eats the sickly mudfish that leap throughout the marsh. She is blamed heavily by the inhabitants of Villmar for the rampant disesase that permiates the marshes. "
   },
   {
      "Hex_Location":19015,
      "Zone_Location":"Swincrest",
      "Unit_Name":"Hachi Moonshadow",
      "Unit_Type":"NPC",
      "Description":"Hachi is a druid that lives alone on the western side of Westerheim Lake. She is a wildling, but highly respected by the people of Swincrest. Hachi travels around the plains and shores near westerheim helping creatures in need. Her pet dire wolf, Hento. Hachi may seem nice and helpful, but her ultimate goal is to bring down the established cities in Swincrest. She may send adventurers out on quests that seem helpful, but are actually quite harmful to the civilized people of Swincrest."
   },
   {
      "Hex_Location":19017,
      "Zone_Location":"Swincrest",
      "Unit_Name":"Jaw of the Depths",
      "Unit_Type":"Great Old One",
      "Description":"The Jaw of the Depths is a terror of the Westerheim Lake. He has ben reported swallowing entire passenger ships whole leaving no survivors. It is assumed that The Jaw must be one of the oldest creatures in all of Estaria because of his enormous size. That all being said, The Jaw hasn't been seen in nearly 100 years and many belive that he may have finally died of old age. Even with the lack of sightings, The Cult of the Depths still continues worshipping and sacrificing to The Jaw."
   },
   {
      "Hex_Location":19022,
      "Zone_Location":"Swincrest",
      "Unit_Name":"Winterselt",
      "Unit_Type":"Settlement",
      "Description":"Winterselt is a small village in southwestern Swincrest. Most of the other civilized people of Swincrest steer away from Winterselt because they claim it is where the witches and cultists come from. The people of Winterselt of very superstitious and ritualistic. They wear specific clothes and build their houses in specific ways. Weekly the people of Winterselt will have what they call "
   },
   {
      "Hex_Location":19024,
      "Zone_Location":"Swincrest",
      "Unit_Name":"The Bone Weilder",
      "Unit_Type":"Fiend",
      "Description":"The Bone Weilder is a flaoting being that resides in southern Swincrest. He sits there silently and unmoving. Most that pass nearby are uneasy when around the Bone Weilder, but no reports have been given about the Weilder ever moving. The Weilder is petrified and is waiting to find a vassal to to his bidding in order to unpetrify him."
   },
   {
      "Hex_Location":20002,
      "Zone_Location":"Karmswald",
      "Unit_Name":"House of the Northern Reaches",
      "Unit_Type":"Ruin",
      "Description":"A wooden cabin built in a perilous mountain range of Karmswald. The cabin is not known to have inhabitants, but the people of Hooftheim complain of loud explosions echoing from the mountains in the direction of the house. Inside there are dozens of extremely rare alchemical ingredients, and the house is lived in by a green hag that steals wondering children from the nearby village and eats them. Underneath the house is a basement with several children."
   },
   {
      "Hex_Location":20006,
      "Zone_Location":"Oakburn Hills",
      "Unit_Name":"Drachward",
      "Unit_Type":"Ruin",
      "Description":"Drachward is an ancient underground city believed to have been built by the Giants of Old. It's halls are said to be filled with ancient and forbidden knowlege. The residents of the Oakburn Hills steer clear of Drachward and say it gives off "
   },
   {
      "Hex_Location":20007,
      "Zone_Location":"Oakburn Hills",
      "Unit_Name":"The Great Drifter",
      "Unit_Type":"Great Old One",
      "Description":"This ancient creature has no living relatives. He is the last one of his kind. Once hundreds of drifters floated peacfully across the sky. Now he remains, drifting throughout the Oakburn Hills. He hides in clouds to prevent being seen by the wildlings. The Great Drifter is known for his peacful and helpful nature, granting people with trips on his back and taking people in dire need to saftety. "
   },
   {
      "Hex_Location":20012,
      "Zone_Location":"Villmar",
      "Unit_Name":"Temple of Woad",
      "Unit_Type":"Temple",
      "Description":"The Temple of Woad resides in the Bruin Marshes of Villmar. The Temple was once visited by pilgrims as a sacred location. Over the years, the corruption of the marshes has twisted the once holy relics into artifacts of evil. Evil spirits, creatures, and beings have flocked to the temple making it a place of fear and terror."
   },
   {
      "Hex_Location":20019,
      "Zone_Location":"Swincrest",
      "Unit_Name":"Halls of the Tormented",
      "Unit_Type":"Dungeon",
      "Description":"The Halls of Torment can be found in a drained lake flat. The Halls were once a place where a known serial killer would take his victims. After the kill was brought to justice, the halls have been abandoned, open to who or whatever may wonder in to find the gruesome interior."
   },
   {
      "Hex_Location":21006,
      "Zone_Location":"Oakburn Hills",
      "Unit_Name":"Ahyoka the Hedge Witch",
      "Unit_Type":"NPC",
      "Description":"Ahyoka is a wildling witch that lives in Drachward. She runs around the Hills collecting herbs and finding magical artifacts. Many Kesward villagers come to her for medical help and she is able to help them as long as they do somthing for her in return. She is known to summon up storms. Many claim that she is the one who created the orb in the center of the Stromstrider Plains."
   },
   {
      "Hex_Location":21008,
      "Zone_Location":"Karmswald",
      "Unit_Name":"Burkhardt Olenschlauger",
      "Unit_Type":"NPC",
      "Description":"Burkhardt's father figure and mentor, Meek Frosch left for a long journey when Burkhardt was 16. When he came back, on Burkhardt's 20th birthday, he had changed profoundly. Not only had his mentor become a cleric, also seemed to have found a deep inner peace. Before, Meek tought Burkhardt how to channel his rage to fight. After he returned, he only spoke of pacifism and peacfulness. Burkhardt tried to change, but couldn't find it within himself to realse his rage. Because of this, Meek told Burkhardt that he must leave him and they can never see each other again. In a fit of rage, Burkhardt slew his mentor and took what little food and money and ran, knowing that Meek's screams easily alerted the guard. Ever since that night, Burkhardt has been roaming the wilds living as a nomad."
   },
   {
      "Hex_Location":21013,
      "Zone_Location":"Villmar",
      "Unit_Name":"Kono Plague-Bringer",
      "Unit_Type":"NPC",
      "Description":"Kono is said to be the offspring of the Plauge Maiden and an unfortunate mare. Kono sloshes through the marshes attacking any he see claiming it is in the name of the Plauge Maiden. Kono wreaks of pestulence and it is easy to tell when he is approaching just by his stench. It appears as if he is able to breathe freely while submerged in the marshes, making him especially hard to kill. "
   },
   {
      "Hex_Location":21015,
      "Zone_Location":"Villmar",
      "Unit_Name":"Burgstein",
      "Unit_Type":"Settlement",
      "Description":"The people of Burgstein are reclusive and reclusive and hesitant to trust visitors. The town consists of towers build along and in the lake. The towers contain several families. The villagers use cannoes to get from one tower to the other. Many of the villagers are stricken with the horrible disease known as Bog Blight.  "
   },
   {
      "Hex_Location":22001,
      "Zone_Location":"Karmswald",
      "Unit_Name":"Hooftheim",
      "Unit_Type":"Settlement",
      "Description":"Hooftheim is a civilized village of fisherman in northern Karmswald. The people their are open and friendly because of the lack of visitors. The only option for food is fish and mullosks. Generally nothing happends in Hooftheim except for the occasional run ins with The River's Hunger. "
   },
   {
      "Hex_Location":22012,
      "Zone_Location":"Oakburn Hills",
      "Unit_Name":"Marta Gottfried's Old House",
      "Unit_Type":"Ruin",
      "Description":"This old farmstead lies on the outskirts of the Bruin Marshes in the Oakburn Hills. The Gottfrieds were once an active family in the Kesward community that provided crops to the populace. When an expected shipment of crops never came in, people were sent to investigate. They found the family strung up in trees by their feet. The only one who was still alive was Marta, the 7 year old daughter. She came running out and wasn't able to speak. That was 53 years ago, and she still hasnt said a word. Now if you pass the house, you can see old and new corpses swaying from ropes in the trees. Ever since that day, no one from Kesward has returned."
   },
   {
      "Hex_Location":22017,
      "Zone_Location":"Swincrest",
      "Unit_Name":"The Wyrm's Path",
      "Unit_Type":"Landmark",
      "Description":"The mouth of the Southaven River into Lake Westerheim is not easily traversed. The most notable pitfall to a sailor on the river is the Path of the Wyrm. This overgrowth along the banks is well known for its association with lesser wyrms. Many travelers are either eaten, or taken by the wyrms in these woods."
   },
   {
      "Hex_Location":22024,
      "Zone_Location":"Swincrest",
      "Unit_Name":"Teetonka",
      "Unit_Type":"NPC",
      "Description":"Teetonka is a barbarian of southern Swincrest. She is known for ambushing adventurers and leaving them all on the ground in a pool of thier own blood. She is fuled completely off rage and instinct and is not known to speak any discernable language. Many people suspect that she is a memeber of the Mohe tribe, but was too violent for even them, so she was exiled"
   },
   {
      "Hex_Location":23007,
      "Zone_Location":"Karmswald",
      "Unit_Name":"Shambler's Grove",
      "Unit_Type":"Landmark",
      "Description":"A small grove of trees that always remain as if it is fall. The leaves are a bright orange and yellow and the forest floor is covered in reds and maroons. This is a place that many travel to for it's beauty, but beware. It is said that the plantlife isn't so friendly here."
   },
   {
      "Hex_Location":23013,
      "Zone_Location":"Villmar",
      "Unit_Name":"Leopold Lotz",
      "Unit_Type":"NPC",
      "Description":"Leopold is a villager in Darmholder. He is one of the few brave enough to venture out inot the wild. He collects special herbs and reagents to make his Darmholder famous Swamp Wine. He may appear to just be an herbalist, but Leopold has mastered the arts of nature magic. Some say he can even shift form into a wolf that resembles the wolf skin he wears on his head."
   },
   {
      "Hex_Location":23017,
      "Zone_Location":"Villmar",
      "Unit_Name":"Skulk Springs",
      "Unit_Type":"Landmark",
      "Description":"The Skulk Springs are a flatland of hot steam geysers that stretch across a 12 mile section of Villmar to the south of the marshes. The mud in the springs ia known for having healing properties and causing rapid skin regeneration. The springs are trecherous to cross because of the occasional explosion of 350 degree steam from the ground. Because of the steam geysers, bodies can be found occasionally with all of the skin and part of the flesh melted off. "
   },
   {
      "Hex_Location":24005,
      "Zone_Location":"Karmswald",
      "Unit_Name":"Castle of the Titans",
      "Unit_Type":"Ruin",
      "Description":"An enormous castle that sits in the plains by the Southaven River. Rumors say that it was built by Giants thousands of years ago, and that the halls still hold their wonderous treasures. "
   },
   {
      "Hex_Location":24010,
      "Zone_Location":"Oakburn Hills",
      "Unit_Name":"The Shards of Ascendance",
      "Unit_Type":"Landmark",
      "Description":"The Shards of Ascendance float in the eastern Oakburn Hills.These ruin covered pillars have been around as long as anyone in the hills can remember. Some say that when it storms that lightening archs from one pillar to another and whispers can be heard when they are approach. Others talk of an ancient race creating the pillars as a message to the furture. If only it was still readble... When approached, the shards can be entered if a lightening spell is cast on the pillar."
   },
   {
      "Hex_Location":24016,
      "Zone_Location":"Villmar",
      "Unit_Name":"Mother in the Water",
      "Unit_Type":"Archfey",
      "Description":"The Mother in the water, lurks underneath the waters of the Southaven River that runs through the Bruin Mashes. She harvests the unfortunate fishermen who drift too far from their village. The Mother is known to be very benevolent towards pregnant women, and is said to grant them with a blessing for their children. On the other hand, The Mother is known to be especially ruthless to men. She is said to remove their skeleton with her claws leaving behind a limp fleshy pod that floats further down the river."
   },
   {
      "Hex_Location":24022,
      "Zone_Location":"Swincrest",
      "Unit_Name":"The S.S. Lenten",
      "Unit_Type":"Ruin",
      "Description":"Supposed to be a wrecked pirate ship, the S. S. Lenten is a petrified lake vessel that has been grounded for many years. The vessel is enormous and many suspect that it may still be full of the treasures that the lake pirates stole. "
   },
   {
      "Hex_Location":24024,
      "Zone_Location":"Swincrest",
      "Unit_Name":"Chapel of the Fourth Blight",
      "Unit_Type":"Temple",
      "Description":"The Chapel of the Fourth Blight is a cultic temple in the Fellbach Thicket. The cultists worship The Fourth Blight. They preform sick rituals where they offer parts of their own bodies, such as tongues, ears, and limbs. In return for these pledges of devotion, The Fourth Blight grants the cultists with a weaponizable plauge known as Verden Vomit in which the cultists spew a green corrosive paste from their mouths. The paste can cause boils, burning, organ digeneration and eventually death if not properly treated. The cultists are generally neutral and stay to themselves, but will attack without question if their chapel is approached without warning."
   },
   {
      "Hex_Location":25007,
      "Zone_Location":"Karmswald",
      "Unit_Name":"The Earth Father",
      "Unit_Type":"Great Old One",
      "Description":"The Earth Father sits in the jagged shores in the valley of the Southaven River. He consumes enormous boulders and is said to cause earthquakes that can be felt from miles away."
   },
   {
      "Hex_Location":25014,
      "Zone_Location":"Villmar",
      "Unit_Name":"Darmholder",
      "Unit_Type":"Settlement",
      "Description":"Darmholder is a town in the eastern Bruin Marshes. The people are especially filthy and are passive aggressive to visitors. Darmholder has an especially strict government where most of the penalties for crimes lead to death. With these intrusive laws, many citizens try not to leave their homes and are rarely seen on the street. Bog blight is an constant problem for the people in Darmholder. Many of the inhabitants wear bandages that cover their face and hands to prevent the spreading of the disease."
   },
   {
      "Hex_Location":25016,
      "Zone_Location":"Villmar",
      "Unit_Name":"The Husk",
      "Unit_Type":"Landmark",
      "Description":"The Husk in the calcified body of an enormous insectoid creature in the plains of Villmar. According to the locals, the husk has been around as long as anyone can remember. The Husk is filled with hundreds of tunnels burrowed by various swamp creatues, and holds within it pletny of hiding spots for those wishing to plot or partake in malicious deeds."
   },
   {
      "Hex_Location":25020,
      "Zone_Location":"Swincrest",
      "Unit_Name":"Wisp of the Lake",
      "Unit_Type":"Great Old One",
      "Description":"The Wisp of the Lake is the second known ancient being that resides in Westerheim Lake. Also known as Savior of the Crest, The Wisp is reported to having saved drawning sailors and even transporting people from one end of the lake to the other. The Wisp has only ever been spotted at dawn or twilight."
   },
   {
      "Hex_Location":26001,
      "Zone_Location":"Karmswald",
      "Unit_Name":"Dragon Skull Cave",
      "Unit_Type":"Dungeon",
      "Description":"The entrance to this mysterious cave is an enormous dragon skull. An eerie yellow light pulses from the dragon's throat and a putrid smell fills the air."
   },
   {
      "Hex_Location":26010,
      "Zone_Location":"Karmswald",
      "Unit_Name":"The River's Hunger",
      "Unit_Type":"Great Old One",
      "Description":"The River's Hunger, known as Nashoba by the wildlings, is an enormous ancient fish that lurks in the deepest parts of the Southaven River. Wildlings claim he can swallow river vessels whole. He is able to send psychic waves to lure mass amounts of animals and humans and wildlings into the water to feast upon."
   },
   {
      "Hex_Location":26011,
      "Zone_Location":"Karmswald",
      "Unit_Name":"Anika Bodmer",
      "Unit_Type":"NPC",
      "Description":"Anika patrols up and down the Southaven River in search of those unfortunate enough to become her next target. She has pledged herself to her patron, The Flesh Feaster, and serves him by providing him with living victims for him to feed upon. In return for her help she was granted with the gift of necromancy, vampirism and with vampirism, immortality. She listens to no one and is completely ruthless in her combat tactics."
   },
   {
      "Hex_Location":26012,
      "Zone_Location":"Karmswald",
      "Unit_Name":"Waterwash Cave",
      "Unit_Type":"Dungeon",
      "Description":"This cave was and is still being formed by the Southaven River rising up the nearby cliffs in the spring and filling the cave with it's rapid waters. The cave is known to have deep pools, and large waterfalls within."
   },
   {
      "Hex_Location":27003,
      "Zone_Location":"Karmswald",
      "Unit_Name":"Wildling Grotto Village",
      "Unit_Type":"Settlement",
      "Description":"This village is built next to a bubbling spring and a shimmering grotto. The wildlings here wear painted masks to hide their faces, but otherwise are friendly and helpful. They provide shelter to any who need their help. The wildlings here are plagued with Jaw Rot. If a player is in contact with a wildling's saliva in anyway, they must make a DC 18 CON saving throw or contract Jaw Rot."
   },
   {
      "Hex_Location":27011,
      "Zone_Location":"Karmswald",
      "Unit_Name":"The Flesh Feaster",
      "Unit_Type":"Fiend",
      "Description":"The Flesh Feaster is a fiend that resides in Waterwash Cave. The Feaster was once an adventurer drivin mad with power. He looked for a way to use corpses to enhance his own abilities and did somthing horribly wrong, mutilating himself in the process. As a result of his mistake, he created a magic well and was able to feed on it to remain alive. Feeding on the magic allowed him to grow stronger, but transformed him even further in the process. Now, the magic no longer sustains him, and living flesh is all that can keep him alive."
   },
   {
      "Hex_Location":27018,
      "Zone_Location":"Villmar",
      "Unit_Name":"Hunger of the Marshes",
      "Unit_Type":"Fiend",
      "Description":"The Hunger of the Marshes is a monstrocity that slithers arcross the path from the Bruin Marshes to Athbet. Many don't ever make their trek to Athbet becaus of his hunger. The Hunger eats every form of life he can find, leaving a wake of emptiness and lifelessness. The Hunger is slow, but is able to sneak up on unsuspecting travelers with ease."
   },
   {
      "Hex_Location":27024,
      "Zone_Location":"Swincrest",
      "Unit_Name":"Gregor's Graveyard",
      "Unit_Type":"Ruin",
      "Description":"Gregor's Graveyard is a site of bad omen. the people of Swincrest call the place The Traveler's Death. The location got it's name as Gregor's Graveyard because of the dark activity that goes on around there. Many people think it is a demon named Gregor. If approached, the graveyard is littered with bones and has a large mausoleum that is supposed to house Gregor. The graveyard has no demon, but rather a rather pwoerful death cult run by a necormancer."
   },
   {
      "Hex_Location":29009,
      "Zone_Location":"Karmswald",
      "Unit_Name":"Nuzem Brickfury",
      "Unit_Type":"NPC",
      "Description":"Nuzem was born as a wildling. He was raised in the wildling culter and worshiped their so called "
   },
   {
      "Hex_Location":29014,
      "Zone_Location":"Villmar",
      "Unit_Name":"Mohe Village",
      "Unit_Type":"Settlement",
      "Description":"Mohe is a wildling village in the northern Villmar forests. Mohe is a village that many of the wildlings get their bad reputation for. The wildlings of Mohe are known to be ruthless cannibals that consume the civilized as part of their rituals to their old gods. The Mohe people put human parts and organs on display around their village in order to cause fear for their enemies. No one who has tried to make contact with the Mohe people have ever returned."
   },
   {
      "Hex_Location":29017,
      "Zone_Location":"Villmar",
      "Unit_Name":"Sybelle Schulhoff",
      "Unit_Type":"NPC",
      "Description":"Sybelle is a ranger that roams the northern forests of Villmar. She is known for her keen sense of smell and ability to track animals with unbelievable accuracy. Sybelle typically steers clear of adventuring parties and tends to stay to herself, although if confronted, she would offer help. She is intentionally quiet about her past and speaks with a bizzare and interesting accent. Sybelle was born as a Mohe tribe member, but when she was a teenager, her parents took her and her brother Hessow to Darmholder. They gave them new names and told them not to speak. Slowly, her family learned the language and became adapted to the civilized life. Ever since then, Sybelle has seen herself as one of the civilized. To this day she does not know why her parents left Mohe. She keeps her past to her self for fear of being shunned or even put to death for being a Mohe tribes memeber. "
   },
   {
      "Hex_Location":29019,
      "Zone_Location":"Villmar",
      "Unit_Name":"Athbet",
      "Unit_Type":"Settlement",
      "Description":"Athbet is the southern most town in Villmar. It is suspected to be ground zero for Bog Blight, the disease that plauges Villmar and many of its inhabitants. The town is completely blocked off and to enter you must have permission from either the Prime Minister of Athbet, the Govenor of Darmholder, or the Elder of Burgstein. Typically to aquire this permission, you must be afflicted with the blight. Athbet is a safe haven for those with the blight and although it offers no cure, it does give the afflicted the ability to live their lives without being shunned for their disease."
   }
];
}
angular.module('myApp', []);
angular
    .module('myApp')
    .controller('locationSearchCtrl', locationSearchCtrl);
