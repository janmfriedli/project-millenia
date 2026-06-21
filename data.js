const YEAR_EVENTS = [
  {
    "year": 1000,
    "title": "Leif goes Vinland",
    "description": "Norse explorer, Leif Eriksson the Lucky, was blown of course and landed on the North American continent as the first European at L’Anse aux Meadows. He called the land Vinland (Land of Wine)."
  },
  {
    "year": 1001,
    "title": "Liaodi Started",
    "description": "Song China begins building Dingzhou’s 84-metre brick pagoda, later used to watch enemy movements."
  },
  {
    "year": 1002,
    "title": "St Brice Massace",
    "description": "English king Æthelred the Unready orders all Danes in England to be killed after the intensity of their Vikings raids increased; provoking Sweyn I of Denmark's invasion in 1003."
  },
  {
    "year": 1003,
    "title": "Sweyn I’s Invasion",
    "description": "Sweyn I of Denmark begins his first invasion of England, leading punitive expeditions in 1003 and 1004 in retaliation for the St. Brice’s Day massacre."
  },
  {
    "year": 1004,
    "title": "Death of Erik the Red",
    "description": "He was exiled from Iceland in about 986 and subsequentlz decided to explore the land to the west (Greenland). He named the country Greenland, in the belief that a good name would attract settlers."
  },
  {
    "year": 1005,
    "title": "House of Knowledge",
    "description": "Fatimid Caliph al-Hakim founded the House of Knowledge in Cairo, equipped with a vast library from Islamic philosophy and law to physics and astronomy. It became a centre for philosophers and theologians."
  },
  {
    "year": 1006,
    "title": "SN 1006",
    "description": "A supernova that has likely been the brightest observed stellar event in recorded history is observed and described in China, Japan, the Middle East, Europe; supposed to have provided enough light to read a book at night."
  },
  {
    "year": 1007,
    "title": "Peace Danegeld",
    "description": "Æthelred, King of England, pays Danish raiders 36,000 pounds of silver, buying two years’ peace while exposing England’s weakness."
  },
  {
    "year": 1008,
    "title": "Royal Fleet",
    "description": "Æthelred, King of England, orders England to build a large war fleet, hoping to resist renewed Danish Viking attacks."
  },
  {
    "year": 1009,
    "title": "Sepulchre Destroyed",
    "description": "Fatimid caliph al-Hakim orders Jerusalem’s Church of the Holy Sepulchre (traditional site of Christ’s crucifixion) demolished, shocking medieval Christian communities. This action later provoked the crusades."
  },
  {
    "year": 1010,
    "title": "Book of Kings Completed",
    "description": "The Persian Book of Kings is completed in 50’000 verses, preserving Iran’s legendary rulers, heroes and identity."
  },
  {
    "year": 1011,
    "title": "Enchiridion Completed",
    "description": "English monk Byrhtferth completes his Enchiridion, explaining computus, astronomy and learning to young monks. It includes the eight capital sins (gluttony, lust, greed, anger, sloth, sadness, vainglory and pride)"
  },
  {
    "year": 1012,
    "title": "Huge Danegeld",
    "description": "Æthelred, King of England, pays Viking forces 48,000 pounds of silver, one of England’s largest recorded Danegeld payments."
  },
  {
    "year": 1013,
    "title": "Viking King",
    "description": "Sweyn Forkbeard is accepted as king of England after Æthelred flees, creating brief Danish rule."
  },
  {
    "year": 1014,
    "title": "Battle of Clontarf",
    "description": "Brian Boru defeats a Norse-Irish alliance near Dublin, but dies in battle, weakening hopes for a united Irish kingdom."
  },
  {
    "year": 1015,
    "title": "Cnut Invades",
    "description": "Danish prince Cnut returns to England with a fleet, beginning the campaign that makes him king the following year."
  },
  {
    "year": 1016,
    "title": "Cnut Takes England",
    "description": "Cnut becomes king after defeating Edmund Ironside, linking England to Denmark and later Norway."
  },
  {
    "year": 1017,
    "title": "Cnut Marries",
    "description": "Cnut marries Emma of Normandy, Æthelred’s widow, legitimizing Danish rule and linking England to Normandy."
  },
  {
    "year": 1018,
    "title": "Cnut Empire",
    "description": "Cnut inherits Denmark after Harald’s death, joining England and Denmark under one ruler."
  },
  {
    "year": 1019,
    "title": "Basel Minster",
    "description": "Emperor Henry II attends Basel Minster’s consecration, making it holy and beginning a cathedral story still standing today."
  },
  {
    "year": 1020,
    "title": "Hawk’s Castle",
    "description": "The Habichtsburg is built in Aargau, ancestral seat from which the Habsburg dynasty later took its name."
  },
  {
    "year": 1021,
    "title": "Genji Complete",
    "description": "The Tale of Genji is complete, becoming Japan’s great court novel and the first psychological novel."
  },
  {
    "year": 1022,
    "title": "Orléans Heresy",
    "description": "French authorities burn condemned heretics at Orléans, one of medieval Western Europe’s first recorded heresy executions."
  },
  {
    "year": 1023,
    "title": "Darkened Britain",
    "description": "A solar eclipse crosses Britain and Ireland, turning daylight strange and likely inspiring ominous medieval interpretations."
  },
  {
    "year": 1024,
    "title": "Paper Money",
    "description": "Song China issues standardized government jiaozi notes, helping create the world’s first major paper currency system."
  },
  {
    "year": 1025,
    "title": "Medical Canon",
    "description": "Ibn Sina (Avicenna) completes the Canon of Medicine, later becoming Europe’s standard medical textbook for centuries, systematizing medical knowledge that later shaped European universities for centuries."
  },
  {
    "year": 1026,
    "title": "Helgeå Battle",
    "description": "Cnut’s Anglo-Danish fleet fights Norwegian and Swedish rivals, helping secure his dominance around the North Sea."
  },
  {
    "year": 1027,
    "title": "Book of Healing",
    "description": "Ibn Sina (Avicenna) publishes his vast philosophical and scientific encyclopedia, aiming to “heal” ignorance through reason and knowledge."
  },
  {
    "year": 1028,
    "title": "North Sea Empire",
    "description": "Cnut drives Olaf II into exile, adding Norway to his England-Denmark realm and completing his North Sea empire."
  },
  {
    "year": 1029,
    "title": "Acupuncture Manual",
    "description": "Song physician Wang Weiyi writes an illustrated acupuncture manual, standardizing treatment points for medical teaching and examinations."
  },
  {
    "year": 1030,
    "title": "Stiklestad Battle",
    "description": "Olaf II is killed trying to retake Norway, later becoming Saint Olaf and Norway’s royal martyr."
  },
  {
    "year": 1031,
    "title": "Córdoba Collapses",
    "description": "The Caliphate of Córdoba is abolished after civil war, fragmenting into rival kingdoms, prompting northern christian kingdoms to expand."
  },
  {
    "year": 1032,
    "title": "Burgundy Inherited",
    "description": "Burgundy’s last independent king dies childless, pulling the Alpine kingdom into the Holy Roman Empire."
  },
  {
    "year": 1033,
    "title": "End-Time Eclipse",
    "description": "A solar eclipse and harsh weather intensify European fears, one thousand years after Christ’s crucifixion. As predicted in the Book of Revelation: “And when the thousand years are expired, Satan shall be loosed out of his prison.”"
  },
  {
    "year": 1034,
    "title": "Bona Raid",
    "description": "Pisan and Genoese fleets attack Bona, today’s Annaba in Algeria, showing rising Italian naval power in the Mediterranean."
  },
  {
    "year": 1035,
    "title": "Cnut Dies",
    "description": "Cnut the Great dies, breaking the North Sea empire he built across England, Denmark and Norway."
  },
  {
    "year": 1036,
    "title": "Flower Sermon",
    "description": "The Buddha’s wordless flower sermon first appears in Buddhist literature, where his smiling student symbolizes direct insight beyond scripture. The historical Buddha, Siddhartha Gautama, probably lived in northern India and Nepal around the 5th century BCE."
  },
  {
    "year": 1037,
    "title": "Avicenna Dies",
    "description": "Persian polymath Ibn Sina, known as Avicenna, dies, famous for his Canon of Medicine and Book of Healing."
  },
  {
    "year": 1038,
    "title": "Harald in Sicily",
    "description": "Future Norwegian king Harald Hardrada joins the Byzantine emperor Byzantine and starts the campaign to reconquer Sicily from Muslim rule."
  },
  {
    "year": 1039,
    "title": "Harthacnut Prepares",
    "description": "Cnut’s Danish son Harthacnut gathers support abroad as England’s rulers weaken, preparing to claim the throne a year later."
  },
  {
    "year": 1040,
    "title": "Macbeth Crowned",
    "description": "Macbeth kills Duncan I in battle and becomes Scotland’s king, centuries before Shakespeare turns him into legend."
  },
  {
    "year": 1041,
    "title": "Harald Bulgar-Burner",
    "description": "Future Norwegian king Harald Hardrada helps Byzantium crush Peter Delyan’s Bulgarian revolt, earning the saga nickname “Bulgar-burner.”"
  },
  {
    "year": 1042,
    "title": "Harald Escapes",
    "description": "Future Norwegian king Harald Hardrada leaves Byzantine service, escaping through Kievan Rus with wealth, battlefield fame and royal ambitions."
  },
  {
    "year": 1043,
    "title": "Edward Crowned",
    "description": "Edward the Confessor becomes king of England after Harthacnut’s sudden death, restoring the old Wessex royal line."
  },
  {
    "year": 1044,
    "title": "Gunpowder Formula",
    "description": "Song China’s Wujing Zongyao records the earliest known gunpowder formulas, transforming warfare through chemistry."
  },
  {
    "year": 1045,
    "title": "Papacy Sold",
    "description": "Benedict IX resigns after selling the papacy to his godfather, creating one of medieval Rome’s strangest scandals."
  },
  {
    "year": 1046,
    "title": "Hardrada Crowned",
    "description": "Harald Hardrada becomes co-king of Norway, turning his Byzantine wealth and battlefield fame into royal power."
  },
  {
    "year": 1047,
    "title": "William Survives",
    "description": "Young William of Normandy defeats rebellious barons at Val-ès-Dunes, securing power before his later conquest of England."
  },
  {
    "year": 1048,
    "title": "Shortest Pope",
    "description": "Pope Damasus II dies after only twenty-three days, one of the shortest papal reigns in history."
  },
  {
    "year": 1049,
    "title": "Reims Council",
    "description": "Pope Leo IX holds the Council of Reims, attacking simony, clerical marriage and corruption in the medieval Church"
  },
  {
    "year": 1050,
    "title": "Westminster Rebuilt",
    "description": "Edward the Confessor begins enlarging Westminster Abbey, laying foundations for England’s future coronation church and royal shrine."
  },
  {
    "year": 1051,
    "title": "Danegeld Abolished",
    "description": "Edward the Confessor abolishes the heregeld, ending England’s hated military tax rooted in Viking-age warfare."
  },
  {
    "year": 1052,
    "title": "Phoenix Hall Founded",
    "description": "A temple is founded near Kyoto as Japan enters mappō, the feared age when Buddhist teachings were believed to decline."
  },
  {
    "year": 1053,
    "title": "Phoenix Hall Completed",
    "description": "The temple’s Phoenix Hall is completed, visualizing Pure Land hopes for salvation during Japan’s feared Buddhist age of decline."
  },
  {
    "year": 1054,
    "title": "Crab Supernova",
    "description": "Chinese astronomers record a brilliant “guest star,” later identified as the supernova that created the Crab Nebula."
  },
  {
    "year": 1054,
    "title": "Great Schism",
    "description": "Rome and Constantinople exchanged excommunications, symbolising the split between Catholic and Orthodox Christianity."
  },
  {
    "year": 1055,
    "title": "Brick Pagoda",
    "description": "Song China completes Dingzhou’s 84-metre Liaodi Pagoda, a Buddhist tower later used to watch enemy movements. It still stands today."
  },
  {
    "year": 1056,
    "title": "Wooden Pagoda",
    "description": "Liao China builds Fogong Temple’s wooden pagoda, now the world’s oldest and tallest surviving wooden pagoda."
  },
  {
    "year": 1057,
    "title": "Macbeth Killed",
    "description": "Scotland’s real King Macbeth is killed at Lumphanan, far from Shakespeare’s later murder-haunted legend."
  },
  {
    "year": 1058,
    "title": "Ten-Thousand Word Memorial",
    "description": "Wang Anshi submits his Ten Thousand Word Memorial, arguing Song China needs stronger state reforms, trained officials, and economic stimulation."
  },
  {
    "year": 1059,
    "title": "Cardinal Elections",
    "description": "Pope Nicholas II decrees that cardinals should elect future popes, reducing aristocratic and imperial control over Rome."
  },
  {
    "year": 1060,
    "title": "Wang Promoted",
    "description": "Wang Anshi is promoted to the Song capital, bringing his reform ideas closer to power after the Ten Thousand Word Memorial."
  },
  {
    "year": 1061,
    "title": "Papal Split",
    "description": "Two competing popes divide Rome, one backed by nobles and emperor, the other by cardinals after election reforms."
  },
  {
    "year": 1062,
    "title": "Marrakesh Founded",
    "description": "The Almoravids found Marrakesh, soon making it their capital and a lasting centre of Moroccan power."
  },
  {
    "year": 1063,
    "title": "St Mark’s Basilica",
    "description": "Venice begins rebuilding St Mark’s Basilica, turning its merchant wealth into a glittering sacred landmark."
  },
  {
    "year": 1064,
    "title": "Barbastro Crusade",
    "description": "A papally backed European army captures Barbastro in Muslim Spain, sometimes called a crusade before the Crusades."
  },
  {
    "year": 1065,
    "title": "Westminster Consecrated",
    "description": "Edward the Confessor’s new Westminster Abbey is consecrated, days before his death. He was buried there."
  },
  {
    "year": 1066,
    "title": "Norman Conquest",
    "description": "William of Normandy wins at the Battle of Hastings, ending Anglo-Saxon rule and transforming England’s language, law and aristocracy."
  },
  {
    "year": 1066,
    "title": "Halley’s Comet",
    "description": "Halley’s Comet appears in spring 1066, later embroidered into the Bayeux Tapestry as an omen of conquest."
  },
  {
    "year": 1066,
    "title": "Hardrada Invades",
    "description": "Norwegian king Harald Hardrada attacks Yorkshire and marches toward York, beginning the final great Viking invasion of England."
  },
  {
    "year": 1067,
    "title": "London Tower",
    "description": "William the Conqueror begins fortifying London after 1066, laying the foundations for the later Tower of London."
  },
  {
    "year": 1068,
    "title": "Exeter Besieged",
    "description": "William the Conqueror besieges Exeter for eighteen days, showing Norman rule remained violently contested."
  },
  {
    "year": 1069,
    "title": "Northern Harrying",
    "description": "William the Conqueror devastates northern England after rebellion, using scorched-earth tactics to crush resistance."
  },
  {
    "year": 1070,
    "title": "York Devastated",
    "description": "After northern rebellions, Norman violence and famine devastate Yorkshire, deepening the trauma of conquest."
  },
  {
    "year": 1071,
    "title": "Manzikert Battle",
    "description": "Seljuk Turks defeat Byzantium at Manzikert, opening Anatolia to muslim settlement and weakening imperial power."
  },
  {
    "year": 1072,
    "title": "Scotland Submits",
    "description": "Malcolm III of Scotland submits to William the Conqueror, showing Norman power reaching beyond England."
  },
  {
    "year": 1073,
    "title": "Gregory Elected",
    "description": "Hildebrand becomes Pope Gregory VII, launching reforms that challenge royal control over bishops and reshape medieval Europe."
  },
  {
    "year": 1074,
    "title": "Clerical Celibacy",
    "description": "Pope Gregory VII orders married priests to separate from their wives, intensifying Church reform and provoking resistance."
  },
  {
    "year": 1075,
    "title": "Papal Supremacy",
    "description": "Gregory VII’s Dictatus Papae claims the pope can depose emperors, sharpening the conflict between Church and monarchy."
  },
  {
    "year": 1076,
    "title": "Emperor Excommunicated",
    "description": "Gregory VII excommunicates Holy Roman Emperor Henry IV after he rejects papal authority, turning Church reform into an imperial crisis."
  },
  {
    "year": 1077,
    "title": "Walk to Canossa",
    "description": "Excommunicated emperor Henry IV crosses the Alps and waits barefoot in the snow at Canossa, seeking Gregory VII’s forgiveness and political survival."
  },
  {
    "year": 1078,
    "title": "White Tower",
    "description": "William the Conqueror begins building London’s White Tower, projecting Norman royal power over the conquered city."
  },
  {
    "year": 1079,
    "title": "Jalali Calendar",
    "description": "Persian scholar Omar Khayyam helps create the Seljuk Jalali calendar, calculating the solar year with remarkable precision."
  },
  {
    "year": 1080,
    "title": "Antipope Chosen",
    "description": "Holy Roman Emperor Henry IV backs Clement III as rival pope, turning the conflict with Gregory VII into an open Church schism"
  },
  {
    "year": 1081,
    "title": "El Cid Exiled",
    "description": "Castilian knight Rodrigo Díaz is exiled from court, beginning his legendary career as a mercenary leader in divided Iberia."
  },
  {
    "year": 1082,
    "title": "Venice Privileges",
    "description": "Byzantine empire grants Venice major trade privileges, rewarding naval support and boosting Venetian Mediterranean power."
  },
  {
    "year": 1083,
    "title": "Henry Takes Rome",
    "description": "Holy Roman Emperor Henry IV captures much of Rome, forcing Pope Gregory VII into Castel Sant’Angelo."
  },
  {
    "year": 1084,
    "title": "Emperor Crowned",
    "description": "Antipope Clement III crowns Henry IV emperor in Rome, while Gregory VII is trapped and later rescued by Normans."
  },
  {
    "year": 1085,
    "title": "Toledo Captured",
    "description": "Alfonso VI captures Toledo from Muslim rule, giving Christian Iberia a major cultural, political and symbolic centre."
  },
  {
    "year": 1086,
    "title": "Almoravids Invade",
    "description": "North African Almoravids enter Iberia after Toledo’s fall, defeating Alfonso VI and slowing Christian expansion."
  },
  {
    "year": 1087,
    "title": "William Dies",
    "description": "William the Conqueror dies in Normandy, leaving England and Normandy divided between his sons."
  },
  {
    "year": 1088,
    "title": "Bologna University",
    "description": "Europe’s oldest university is traditionally founded at Bologna, becoming a major centre for Roman and canon law."
  },
  {
    "year": 1089,
    "title": "El Cid Rises",
    "description": "Castilian knight Rodrigo Díaz, known as El Cid, forces Valencia to pay tribute, beginning his rise as an independent Iberian warlord."
  },
  {
    "year": 1090,
    "title": "Assassin Fortress",
    "description": "The Alamut Castle in Persia is captured, creating the fortress network later feared for its assassins (“Hashashins”)."
  },
  {
    "year": 1091,
    "title": "Seville Falls",
    "description": "Almoravids take Seville from its taifa ruler, replacing local Muslim dynasties with North African control in al-Andalus."
  },
  {
    "year": 1092,
    "title": "Almoravid Iberia",
    "description": "Almoravids absorb major taifa kingdoms, replacing local Muslim rulers with North African rule across much of al-Andalus."
  },
  {
    "year": 1093,
    "title": "Valencia Besieged",
    "description": "El Cid exploits Valencia’s political chaos and Almoravid pressure, beginning the siege that leads to his conquest in 1094."
  },
  {
    "year": 1094,
    "title": "Valencia Captured",
    "description": "El Cid captures Valencia and rules it independently, soon defending the city against Almoravid attacks."
  },
  {
    "year": 1095,
    "title": "First Crusade",
    "description": "Pope Urban II calls Christians to armed pilgrimage at the Council of Clermont, launching the First Crusade toward Jerusalem (“God wills it”)."
  },
  {
    "year": 1096,
    "title": "Crusaders Depart",
    "description": "The first organized crusader armies leave western Europe, beginning the armed journey toward Constantinople and Jerusalem."
  },
  {
    "year": 1097,
    "title": "Nicaea Captured",
    "description": "Crusaders and Byzantines capture the Seljuk capital Nicaea, today’s İznik in Turkey, giving the First Crusade its first major victory."
  },
  {
    "year": 1098,
    "title": "Antioch Captured",
    "description": "Crusaders take Antioch, today’s Antakya in Turkey, through betrayal inside the walls, securing a key city on the road toward Jerusalem."
  },
  {
    "year": 1099,
    "title": "Jerusalem Captured",
    "description": "Crusaders capture Jerusalem after a siege, massacre many inhabitants and establish a Latin Christian kingdom."
  },
  {
    "year": 1100,
    "title": "Jerusalem Kingdom",
    "description": "Baldwin I becomes ruler of Jerusalem, turning the crusader conquest into a more stable Latin kingdom."
  }
];

// Each card has one year, one title, and one description. Multiple cards may share the same year.
