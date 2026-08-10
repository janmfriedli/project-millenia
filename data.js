const YEAR_EVENTS = [
  {
    year: 1000,
    title: "Leif goes Vinland",
    description: "Norse explorer, Leif Eriksson the Lucky, was blown of course and landed on the North American continent as the first European at L’Anse aux Meadows. He called the land Vinland (Land of Wine)."
  },
  {
    year: 1001,
    title: "Brick Liaodi Started",
    description: "Song China begins building Dingzhou’s 84-metre brick pagoda, later used to watch enemy movements."
  },
  {
    year: 1002,
    title: "St Brice Massace",
    description: "English king Æthelred the Unready orders all Danes in England to be killed after the intensity of their Vikings raids increased; provoking Sweyn I of Denmark's invasion in 1003."
  },
  {
    year: 1003,
    title: "Sweyn I’s Invasion",
    description: "Sweyn I of Denmark begins his first invasion of England, leading punitive expeditions in 1003 and 1004 in retaliation for the St. Brice’s Day massacre."
  },
  {
    year: 1004,
    title: "Death of Erik the Red",
    description: "He was exiled from Iceland in about 986 and subsequentlz decided to explore the land to the west (Greenland). He named the country Greenland, in the belief that a good name would attract settlers."
  },
  {
    year: 1005,
    title: "House of Knowledge",
    description: "Fatimid Caliph al-Hakim founded the House of Knowledge in Cairo, equipped with a vast library from Islamic philosophy and law to physics and astronomy. It became a centre for philosophers and theologians."
  },
  {
    year: 1006,
    title: "SN 1006",
    description: "A supernova that has likely been the brightest observed stellar event in recorded history is observed and described in China, Japan, the Middle East, Europe; supposed to have provided enough light to read a book at night."
  },
  {
    year: 1007,
    title: "Peace Danegeld",
    description: "Æthelred, King of England, pays Danish raiders 36,000 pounds of silver, buying two years’ peace while exposing England’s weakness."
  },
  {
    year: 1008,
    title: "Royal Fleet",
    description: "Æthelred, King of England, orders England to build a large war fleet, hoping to resist renewed Danish Viking attacks."
  },
  {
    year: 1009,
    title: "Sepulchre Destroyed",
    description: "Fatimid caliph al-Hakim orders Jerusalem’s Church of the Holy Sepulchre (traditional site of Christ’s crucifixion) demolished, shocking medieval Christian communities. This action later provoked the crusades."
  },
  {
    year: 1010,
    title: "Book of Kings Completed",
    description: "The Persian Book of Kings is completed in 50’000 verses, preserving Iran’s legendary rulers, heroes and identity."
  },
  {
    year: 1011,
    title: "Enchiridion Completed",
    description: "English monk Byrhtferth completes his Enchiridion, explaining computus, astronomy and learning to young monks. It includes the eight capital sins (gluttony, lust, greed, anger, sloth, sadness, vainglory and pride)"
  },
  {
    year: 1012,
    title: "Huge Danegeld",
    description: "Æthelred, King of England, pays Viking forces 48,000 pounds of silver, one of England’s largest recorded Danegeld payments."
  },
  {
    year: 1013,
    title: "First Viking King",
    description: "Sweyn Forkbeard is accepted as king of England after Æthelred flees, creating brief Danish rule."
  },
  {
    year: 1014,
    title: "Battle of Clontarf",
    description: "Brian Boru defeats a Norse-Irish alliance near Dublin, but dies in battle, weakening hopes for a united Irish kingdom."
  },
  {
    year: 1015,
    title: "Cnut Invades",
    description: "Danish prince Cnut returns to England with a fleet, beginning the campaign that makes him king the following year."
  },
  {
    year: 1016,
    title: "Cnut Takes England",
    description: "Cnut becomes king after defeating Edmund Ironside, linking England to Denmark and later Norway."
  },
  {
    year: 1017,
    title: "Cnut Marries",
    description: "Cnut marries Emma of Normandy, Æthelred’s widow, legitimizing Danish rule and linking England to Normandy."
  },
  {
    year: 1018,
    title: "Cnut Inherits Denmark",
    description: "Cnut inherits Denmark after Harald’s death, joining England and Denmark under one ruler."
  },
  {
    year: 1019,
    title: "Basel Münster",
    description: "Emperor Henry II attends Basel Minster’s consecration, making it holy and beginning a cathedral story still standing today."
  },
  {
    year: 1020,
    title: "Hawk’s Castle",
    description: "The Habichtsburg is built in Aargau, ancestral seat from which the Habsburg dynasty later took its name."
  },
  {
    year: 1021,
    title: "Tale of Genji Complete",
    description: "The Tale of Genji is complete, becoming Japan’s great court novel and the first psychological novel."
  },
  {
    year: 1022,
    title: "Orléans Heresy",
    description: "French authorities burn condemned heretics at Orléans, one of medieval Western Europe’s first recorded heresy executions."
  },
  {
    year: 1023,
    title: "Darkened Britain",
    description: "A solar eclipse crosses Britain and Ireland, turning daylight strange and likely inspiring ominous medieval interpretations."
  },
  {
    year: 1024,
    title: "Song Paper Money",
    description: "Song China issues standardized government jiaozi notes, helping create the world’s first major paper currency system."
  },
  {
    year: 1025,
    title: "Medical Canon",
    description: "Ibn Sina (Avicenna) completes the Canon of Medicine, later becoming Europe’s standard medical textbook for centuries, systematizing medical knowledge that later shaped European universities for centuries."
  },
  {
    year: 1026,
    title: "Helgeå Battle",
    description: "Cnut’s Anglo-Danish fleet fights Norwegian and Swedish rivals, helping secure his dominance around the North Sea."
  },
  {
    year: 1027,
    title: "Book of Healing",
    description: "Ibn Sina (Avicenna) publishes his vast philosophical and scientific encyclopedia, aiming to “heal” ignorance through reason and knowledge."
  },
  {
    year: 1028,
    title: "Cnut Takes Norway",
    description: "Cnut conquers Norway with local support, forcing King Olaf Haraldsson to flee into exile in Novgorod."
  },
  {
    year: 1029,
    title: "Olaf Plans Return",
    description: "Exiled at Yaroslav the Wise’s court, Olaf prepares to reclaim Norway after Cnut’s regent Håkon drowns."
  },
  {
    year: 1030,
    title: "Stiklestad Battle",
    description: "Olaf II is killed trying to retake Norway, later becoming Saint Olaf and Norway’s royal martyr."
  },
  {
    year: 1031,
    title: "Córdoba Collapses",
    description: "The Caliphate of Córdoba is abolished after civil war, fragmenting into rival kingdoms, prompting northern christian kingdoms to expand."
  },
  {
    year: 1032,
    title: "Burgundy Inherited",
    description: "Burgundy’s last independent king dies childless, pulling the Alpine kingdom into the Holy Roman Empire."
  },
  {
    year: 1033,
    title: "End-Time Eclipse",
    description: "A solar eclipse and harsh weather intensify European fears, one thousand years after Christ’s crucifixion. As predicted in the Book of Revelation: “And when the thousand years are expired, Satan shall be loosed out of his prison.”"
  },
  {
    year: 1034,
    title: "Bona Raid",
    description: "Pisan and Genoese fleets attack Bona, today’s Annaba in Algeria, showing rising Italian naval power in the Mediterranean."
  },
  {
    year: 1035,
    title: "Cnut Dies",
    description: "Cnut the Great dies, breaking the North Sea empire he built across England, Denmark and Norway."
  },
  {
    year: 1036,
    title: "Flower Sermon",
    description: "The Buddha’s wordless flower sermon first appears in Buddhist literature, where his smiling student symbolizes direct insight beyond scripture. The historical Buddha, Siddhartha Gautama, probably lived in northern India and Nepal around the 5th century BCE."
  },
  {
    year: 1037,
    title: "Avicenna Dies",
    description: "Persian polymath Ibn Sina, known as Avicenna, dies, famous for his Canon of Medicine and Book of Healing."
  },
  {
    year: 1038,
    title: "Hardrada in Sicily",
    description: "Future Norwegian king Harald Hardrada joins the Byzantine emperor Byzantine and starts the campaign to reconquer Sicily from Muslim rule."
  },
  {
    year: 1039,
    title: "Duncan Raids",
    description: "Scotland’s king raided Durham unsuccessfully, weakening his reputation before his fatal conflict with Macbeth."
  },
  {
    year: 1040,
    title: "Macbeth Crowned",
    description: "Macbeth Crowned: Macbeth killed Duncan in battle near Moray and became king of Scotland, later inspiring Shakespeare’s tragedy."
  },
  {
    year: 1041,
    title: "Hardrada Bulgar-Burner",
    description: "Future Norwegian king Harald Hardrada helps Byzantium crush Peter Delyan’s Bulgarian revolt, earning the saga nickname “Bulgar-burner.”"
  },
  {
    year: 1042,
    title: "Hardrada Escapes",
    description: "Future Norwegian king Harald Hardrada leaves Byzantine service, escaping through Kievan Rus with wealth, battlefield fame and royal ambitions."
  },
  {
    year: 1043,
    title: "Edward Crowned",
    description: "Edward the Confessor becomes king of England after Harthacnut’s sudden death, restoring the old Wessex royal line."
  },
  {
    year: 1044,
    title: "Song Gunpowder Formula",
    description: "Song China’s Wujing Zongyao records the earliest known gunpowder formulas, transforming warfare through chemistry."
  },
  {
    year: 1045,
    title: "Papacy Sold",
    description: "Benedict IX resigns after selling the papacy to his godfather, creating one of medieval Rome’s strangest scandals."
  },
  {
    year: 1046,
    title: "Hardrada Crowned",
    description: "Harald Hardrada becomes co-king of Norway, turning his Byzantine wealth and battlefield fame into royal power."
  },
  {
    year: 1047,
    title: "William Survives",
    description: "Young William of Normandy defeats rebellious barons at Val-ès-Dunes, securing power before his later conquest of England."
  },
  {
    year: 1048,
    title: "Shortest Pope",
    description: "Pope Damasus II dies after only twenty-three days, one of the shortest papal reigns in history."
  },
  {
    year: 1049,
    title: "Reims Council",
    description: "Pope Leo IX holds the Council of Reims, attacking simony, clerical marriage and corruption in the medieval Church."
  },
  {
    year: 1050,
    title: "Westminster Rebuilt",
    description: "Edward the Confessor begins enlarging Westminster Abbey, laying foundations for England’s future coronation church and royal shrine."
  },
  {
    year: 1051,
    title: "Danegeld Abolished",
    description: "Edward the Confessor abolishes the heregeld, ending England’s hated military tax rooted in Viking-age warfare."
  },
  {
    year: 1052,
    title: "Phoenix Hall Founded",
    description: "A temple is founded near Kyoto as Japan enters mappō, the feared age when Buddhist teachings were believed to decline."
  },
  {
    year: 1053,
    title: "Phoenix Hall Completed",
    description: "The temple’s Phoenix Hall is completed, visualizing Pure Land hopes for salvation during Japan’s feared Buddhist age of decline."
  },
  {
    year: 1054,
    title: "Great Schism",
    description: "Rome and Constantinople exchanged excommunications, symbolising the split between Catholic and Orthodox Christianity."
  },
  {
    year: 1055,
    title: "Brick Pagoda Completed",
    description: "Song China completes Dingzhou’s 84-metre Liaodi Pagoda, a Buddhist tower later used to watch enemy movements. It still stands today."
  },
  {
    year: 1056,
    title: "Wooden Pagoda Completed",
    description: "Liao China builds Fogong Temple’s wooden pagoda, now the world’s oldest and tallest surviving wooden pagoda."
  },
  {
    year: 1057,
    title: "Macbeth Killed",
    description: "Scotland’s real King Macbeth is killed at Lumphanan, far from Shakespeare’s later murder-haunted legend."
  },
  {
    year: 1058,
    title: "Ten-Thousand Word Memorial",
    description: "Wang Anshi submits his Ten Thousand Word Memorial, arguing Song China needs stronger state reforms, trained officials, and economic stimulation."
  },
  {
    year: 1059,
    title: "Cardinal Elections",
    description: "Pope Nicholas II decrees that cardinals should elect future popes, reducing aristocratic and imperial control over Rome."
  },
  {
    year: 1060,
    title: "Wang Promoted",
    description: "Wang Anshi is promoted to the Song capital, bringing his reform ideas closer to power after the Ten Thousand Word Memorial."
  },
  {
    year: 1061,
    title: "Papal Split",
    description: "Two competing popes divide Rome, one backed by nobles and emperor, the other by cardinals after election reforms."
  },
  {
    year: 1062,
    title: "Marrakesh Founded",
    description: "The Almoravids found Marrakesh, soon making it their capital and a lasting centre of Moroccan power."
  },
  {
    year: 1063,
    title: "St Mark’s Basilica",
    description: "Venice begins rebuilding St Mark’s Basilica, turning its merchant wealth into a glittering sacred landmark."
  },
  {
    year: 1064,
    title: "Barbastro Crusade",
    description: "A papally backed European army captures Barbastro in Muslim Spain, sometimes called a crusade before the Crusades."
  },
  {
    year: 1065,
    title: "Westminster Consecrated",
    description: "Edward the Confessor’s new Westminster Abbey is consecrated, days before his death. He was buried there."
  },
  {
    year: 1066,
    title: "Norman Conquest",
    description: "William of Normandy wins at the Battle of Hastings, ending Anglo-Saxon rule and transforming England’s language, law and aristocracy."
  },
  {
    year: 1066,
    title: "Halley’s Comet",
    description: "Halley’s Comet appears in spring 1066, later embroidered into the Bayeux Tapestry as an omen of conquest."
  },
  {
    year: 1066,
    title: "Hardrada Invades",
    description: "Norwegian king Harald Hardrada attacks Yorkshire and marches toward York, beginning the final great Viking invasion of England."
  },
  {
    year: 1067,
    title: "London Tower",
    description: "William the Conqueror begins fortifying London after 1066, laying the foundations for the later Tower of London."
  },
  {
    year: 1068,
    title: "Exeter Besieged",
    description: "William the Conqueror besieges Exeter for eighteen days, showing Norman rule remained violently contested."
  },
  {
    year: 1069,
    title: "Northern Harrying",
    description: "William the Conqueror devastates northern England after rebellion, using scorched-earth tactics to crush resistance."
  },
  {
    year: 1070,
    title: "York Devastated",
    description: "After northern rebellions, Norman violence and famine devastate Yorkshire, deepening the trauma of conquest."
  },
  {
    year: 1071,
    title: "Battle of Manzikert",
    description: "Seljuk Turks defeat Byzantium at Manzikert, opening Anatolia to muslim settlement and weakening imperial power."
  },
  {
    year: 1072,
    title: "Scotland Submits",
    description: "Malcolm III of Scotland submits to William the Conqueror, showing Norman power reaching beyond England."
  },
  {
    year: 1073,
    title: "Gregory Elected",
    description: "Hildebrand becomes Pope Gregory VII, launching reforms that challenge royal control over bishops and reshape medieval Europe."
  },
  {
    year: 1074,
    title: "Clerical Celibacy",
    description: "Pope Gregory VII orders married priests to separate from their wives, intensifying Church reform and provoking resistance."
  },
  {
    year: 1075,
    title: "Papal Supremacy",
    description: "Gregory VII’s Dictatus Papae claims the pope can depose emperors, sharpening the conflict between Church and monarchy."
  },
  {
    year: 1076,
    title: "Emperor Excommunicated",
    description: "Gregory VII excommunicates Holy Roman Emperor Henry IV after he rejects papal authority, turning Church reform into an imperial crisis."
  },
  {
    year: 1077,
    title: "Walk to Canossa",
    description: "Excommunicated emperor Henry IV crosses the Alps and waits barefoot in the snow at Canossa, seeking Gregory VII’s forgiveness and political survival."
  },
  {
    year: 1078,
    title: "White Tower",
    description: "William the Conqueror begins building London’s White Tower, projecting Norman royal power over the conquered city."
  },
  {
    year: 1079,
    title: "El Cid Cabra Victory",
    description: "El Cid defeats Granada’s forces near Cabra while collecting tribute, boosting fame but creating court enemies."
  },
  {
    year: 1080,
    title: "Henry creates Antipope",
    description: "Holy Roman Emperor Henry IV backs Clement III as rival pope, turning the conflict with Gregory VII into an open Church schism"
  },
  {
    year: 1081,
    title: "El Cid Exiled",
    description: "Castilian knight Rodrigo Díaz is exiled from court, beginning his legendary career as a mercenary leader in divided Iberia."
  },
  {
    year: 1082,
    title: "Henry Besieges Rome",
    description: "Emperor Henry IV besieges Rome to force out Pope Gregory VII, whose reforms challenged imperial control."
  },
  {
    year: 1083,
    title: "Henry Takes Rome",
    description: "Holy Roman Emperor Henry IV captures much of Rome, forcing Pope Gregory VII into Castel Sant’Angelo."
  },
  {
    year: 1084,
    title: "Henry Crowned Emperor",
    description: "Antipope Clement III crowns Henry IV emperor in Rome, while Gregory VII is trapped and later rescued by Normans."
  },
  {
    year: 1085,
    title: "Toledo Captured",
    description: "Alfonso VI captures Toledo from Muslim rule, giving Christian Iberia a major cultural, political and symbolic centre."
  },
  {
    year: 1086,
    title: "Almoravids Invade",
    description: "North African Almoravids enter Iberia after Toledo’s fall, defeating Alfonso VI and slowing Christian expansion."
  },
  {
    year: 1087,
    title: "El Cid Back to Court",
    description: "After Alfonso VI’s defeat by the Almoravids, El Cid returns from exile to negotiate with taifa kingdoms."
  },
  {
    year: 1088,
    title: "Bologna University",
    description: "Europe’s oldest university is traditionally founded at Bologna, becoming a major centre for Roman and canon law."
  },
  {
    year: 1089,
    title: "El Cid pressures Valencia",
    description: "Castilian knight Rodrigo Díaz, known as El Cid, forces Valencia to pay tribute, beginning his rise as an independent Iberian warlord."
  },
  {
    year: 1090,
    title: "Assassin Fortress",
    description: "The Alamut Castle in Persia is captured, creating the fortress network later feared for its assassins (“Hashashins”)."
  },
  {
    year: 1091,
    title: "Almoravids take Seville",
    description: "Almoravids take Seville from its taifa ruler, replacing local Muslim dynasties with North African control in al-Andalus."
  },
  {
    year: 1092,
    title: "Almoravids absorb Southern Iberia",
    description: "Almoravids absorb major taifa kingdoms, replacing local Muslim rulers with North African rule across much of al-Andalus."
  },
  {
    year: 1093,
    title: "El Cid besieges Valencia",
    description: "El Cid exploits Valencia’s political chaos and Almoravid pressure, beginning the siege that leads to his conquest in 1094."
  },
  {
    year: 1094,
    title: "El Cid captures Valencia",
    description: "El Cid captures Valencia and rules it independently, soon defending the city against Almoravid attacks."
  },
  {
    year: 1095,
    title: "First Crusade",
    description: "Pope Urban II calls Christians to armed pilgrimage at the Council of Clermont, launching the First Crusade toward Jerusalem (“God wills it”)."
  },
  {
    year: 1096,
    title: "Depart First Crusade",
    description: "The first organized crusader armies leave western Europe, beginning the armed journey toward Constantinople and Jerusalem."
  },
  {
    year: 1097,
    title: "Nicaea Captured",
    description: "Crusaders and Byzantines capture the Seljuk capital Nicaea, today’s İznik in Turkey, giving the First Crusade its first major victory."
  },
  {
    year: 1098,
    title: "Antioch Captured",
    description: "Crusaders take Antioch, today’s Antakya in Turkey, through betrayal inside the walls, securing a key city on the road toward Jerusalem."
  },
  {
    year: 1099,
    title: "Jerusalem Captured",
    description: "Crusaders capture Jerusalem after a siege, massacre many inhabitants and establish a Latin Christian kingdom."
  },
  {
    year: 1100,
    title: "Jerusalem Kingdom",
    description: "Baldwin I becomes ruler of Jerusalem, turning the crusader conquest into a more stable Latin kingdom."
  },
  {
    year: 1101,
    title: "First Crusade Falters",
    description: "Follow-up crusader armies are destroyed in Anatolia, showing that initial success was difficult to repeat."
  },
  {
    year: 1102,
    title: "Battle of Ramla",
    description: "Baldwin I survives a crushing attack near Ramla, showing how fragile the new Kingdom of Jerusalem remained."
  },
  {
    year: 1103,
    title: "Tripoli Siege",
    description: "Crusaders continue pressure on Tripoli, showing the Latin states expanding beyond Jerusalem, Antioch and Edessa."
  },
  {
    year: 1104,
    title: "Crusader Port",
    description: "Acre falls to Baldwin I and Genoese allies, giving the crusader kingdom a major harbour for trade, pilgrims and reinforcements."
  },
  {
    year: 1105,
    title: "Emperor/Father Imprisoned",
    description: "Henry V captures his father Henry IV, forcing the old emperor to abdicate during the Investiture Controversy."
  },
  {
    year: 1106,
    title: "Song Chinese Atlas",
    description: "Song cartographers create detailed maps and geographic records, reflecting China’s sophisticated state administration and spatial knowledge."
  },
  {
    year: 1107,
    title: "Norwegian Crusade",
    description: "King Sigurd of Norway begins a crusading voyage to Jerusalem, the first crusade led personally by a European king."
  },
  {
    year: 1108,
    title: "Norwegian Crusade Arrival",
    description: "The crusade of King Sigurd of Norway reaches the Mediterranean, showing how far northern Europe joined crusading culture."
  },
  {
    year: 1109,
    title: "Tripoli Captured",
    description: "Crusaders capture Tripoli, today in Lebanon, strengthening Latin control over the eastern Mediterranean coastline."
  },
  {
    year: 1110,
    title: "Beirut Captured",
    description: "Crusaders capture Beirut with naval support, securing sea routes for pilgrims, merchants and reinforcements."
  },
  {
    year: 1111,
    title: "Tyre Besieged",
    description: "Baldwin I begins besieging Fatimid-held Tyre, one of the last major coastal cities outside Crusader control."
  },
  {
    year: 1112,
    title: "Tyre Resists",
    description: "Damascus relieves Fatimid-held Tyre, forcing Baldwin I to abandon his costly Crusader siege and withdraw."
  },
  {
    year: 1113,
    title: "Knights Hospitaller Recognized",
    description: "A Jerusalem hospital community receives papal recognition, becoming the Hospital Order and caring for pilgrims in the Holy Land."
  },
  {
    year: 1114,
    title: "Balearic Campaign",
    description: "Pisan and Catalan fleets attack Muslim-held Mallorca and Ibiza, targeting piracy and expanding Christian naval warfare."
  },
  {
    year: 1115,
    title: "Mallorca Sacked",
    description: "Pisan and Catalan forces capture Madina Mayurqa, today’s Palma, but the Balearic Islands later return to Muslim rule."
  },
  {
    year: 1116,
    title: "Mallorca Restored",
    description: "Muslim rule returns to Mallorca after the Pisan-Catalan raid, showing the campaign was destructive but not permanent conquest."
  },
  {
    year: 1117,
    title: "Crusader Jordan Raids",
    description: "Baldwin I leads raids beyond the Jordan, strengthening Jerusalem’s frontier before his death in 1118."
  },
  {
    year: 1118,
    title: "First Jerusalem Succession",
    description: "The Crusader kingdom passed from Baldwin I to Baldwin II, keeping the fragile Holy Land state stable."
  },
  {
    year: 1119,
    title: "Knights Templars Founded",
    description: "Knights in Jerusalem form the early Templar order, protecting pilgrims and creating one of the most famous military orders."
  },
  {
    year: 1120,
    title: "White Ship Sinks with Henry I",
    description: "Henry I’s only legitimate son dies in a shipwreck, destroying England’s succession plan and setting up the Anarchy."
  },
  {
    year: 1121,
    title: "Baldwin II Secures Frontier",
    description: "King Baldwin II destroyed a Damascene border fortress, defending Jerusalem’s frontier against renewed Muslim pressure."
  },
  {
    year: 1122,
    title: "Venetian Crusade",
    description: "Venice launched a naval crusade to the Levant, bringing ships, soldiers and commercial ambitions into Crusader politics."
  },
  {
    year: 1123,
    title: "Venetian Pact",
    description: "Venice and Jerusalem agreed the Pactum Warmundi, granting major trade privileges in exchange for naval support."
  },
  {
    year: 1124,
    title: "Tyre Captured",
    description: "Crusaders and Venetians seized the wealthy port of Tyre, strengthening Jerusalem and expanding Mediterranean trade."
  },
  {
    year: 1125,
    title: "Jin–Song War",
    description: "The Jin dynasty declared war on Song China, beginning a conflict that would transform East Asia."
  },
  {
    year: 1126,
    title: "Kaifeng Besieged",
    description: "Jin armies besieged the Song capital Kaifeng, beginning the crisis that destroyed the Northern Song dynasty."
  },
  {
    year: 1127,
    title: "Northern Song Falls",
    description: "Jin armies captured Kaifeng and the Song emperors, ending the Northern Song and re-establishing the Song court in the south."
  },
  {
    year: 1128,
    title: "Zengi Unites Power",
    description: "Turkish Muslim ruler Zengi brought Mosul and Aleppo together, creating a stronger threat to the Crusader states."
  },
  {
    year: 1129,
    title: "Rules of Templar Knights",
    description: "The Council of Troyes approved a Latin Rule of 72 clauses, outlining the disciplined ideal of the Templar knight."
  },
  {
    year: 1130,
    title: "Song Yangtze Resistance",
    description: "Southern Song forces trapped a Jin army near the Yangtze River, proving northern conquest could still be resisted."
  },
  {
    year: 1131,
    title: "Antioch Crisis",
    description: "The young prince of Antioch was killed in battle, leaving the northern Crusader frontier more vulnerable to Zengi and regional Muslim powers."
  },
  {
    year: 1132,
    title: "Fire Lance Used",
    description: "Song forces used early gunpowder fire lances at De’an, marking a milestone toward firearms in warfare."
  },
  {
    year: 1133,
    title: "Song Capital Settles",
    description: "The Southern Song court returned to Hangzhou, which became the practical capital of southern China."
  },
  {
    year: 1134,
    title: "Song Counterattack",
    description: "Southern Song armies recovered territory from the Jin, showing China’s southern dynasty could still fight back."
  },
  {
    year: 1135,
    title: "English Anarchy Begins",
    description: "Henry I of England died without a secure male heir, triggering a succession crisis between his nephew and daughter."
  },
  {
    year: 1136,
    title: "Stephen Secures Rule",
    description: "Pope Innocent II recognises Stephen as king, strengthening his disputed claim against Henry I’s daughter, Empress Matilda."
  },
  {
    year: 1137,
    title: "Crusaders Defeat at Tripoli",
    description: "Damascene forces defeated Tripoli’s Crusader army, killing its count and weakening the northern Crusader frontier."
  },
  {
    year: 1138,
    title: "Aleppo Earthquake",
    description: "A devastating earthquake struck northern Syria around Aleppo, becoming one of history’s deadliest disasters with 230,000 deaths."
  },
  {
    year: 1139,
    title: "Crossbows Condemned",
    description: "The Second Lateran Council condemned crossbows and bows against Christians, showing Church anxiety over deadly warfare."
  },
  {
    year: 1140,
    title: "Abelard Condemned",
    description: "French thinker Peter Abelard was condemned for controversial theology, showing tensions between reason and Church authority."
  },
  {
    year: 1141,
    title: "King Stephen Captured",
    description: "King Stephen of England was captured at Lincoln, briefly giving Empress Matilda control during the Anarchy (“Lady of the English”)."
  },
  {
    year: 1142,
    title: "Matilda Escapes",
    description: "Stephen of England is released in prisoner-swap and Matilda retreats to Oxford Castle during the Anarchy, reportedly fleeing across snow and ice at night."
  },
  {
    year: 1143,
    title: "King Stephen Defeat",
    description: "King Stephen was defeated near Wilton Abbey, escaping capture while his steward held off Matilda’s forces."
  },
  {
    year: 1144,
    title: "Edessa Falls",
    description: "Zengi captured Edessa, causing the first major collapse of a Crusader state and triggering calls for the Second Crusade."
  },
  {
    year: 1145,
    title: "Second Crusade Called",
    description: "Pope Eugenius III issued a formal crusade call after Edessa’s fall, launching the Second Crusade movement."
  },
  {
    year: 1146,
    title: "Royals in Second Crusade",
    description: "France’s and Germany’s kings committed to the Second Crusade, planning to aid the Holy Land after Edessa’s fall."
  },
  {
    year: 1147,
    title: "Second Crusade Departs",
    description: "French and German royal armies set out for the Holy Land, beginning the main expedition of the Second Crusade."
  },
  {
    year: 1148,
    title: "Second Crusade Collapses in Damascus",
    description: "The Second Crusade failed at Damascus, leaving Edessa unrecovered and weakening Crusader confidence in the Holy Land."
  },
  {
    year: 1149,
    title: "Second Crusaders Crushed",
    description: "The Crusader army of Antioch was destroyed near Inab, strengthening Nur al-Din after the Second Crusade’s failure."
  },
  {
    year: 1150,
    title: "Angkor Wat Completed",
    description: "Around 1150, the Khmer Empire completed Angkor Wat, a vast temple complex and one of humanity’s greatest monuments."
  },
  {
    year: 1151,
    title: "Young Henry Rises",
    description: "Henry, Matilda’s son and Duke of Normandy, inherited Anjou, becoming King Stephen’s strongest rival in England’s civil war."
  },
  {
    year: 1152,
    title: "Young Henry Marries",
    description: "Henry married Eleanor of Aquitaine, adding vast French lands to his rising power."
  },
  {
    year: 1153,
    title: "Anarchy Settled",
    description: "Stephen recognised Henry as heir through the Treaty of Wallingford, ending England’s succession war."
  },
  {
    year: 1154,
    title: "Henry II Crowned",
    description: "Henry II became king of England, founding the Plantagenet dynasty after nearly two decades of civil war (“the Anarchy”)."
  },
  {
    year: 1155,
    title: "Song Printed Map",
    description: "In Song China, Yang Jia’s encyclopedia included the oldest known printed terrain map, showing western China."
  },
  {
    year: 1156,
    title: "Hōgen Rebellion",
    description: "A succession dispute over Japan’s imperial throne erupted in Kyoto, helping shift power toward samurai military dominance."
  },
  {
    year: 1157,
    title: "Calatrava Defence",
    description: "After the Templars abandon Calatrava, Abbot Raymond of Fitero volunteers to defend the frontier fortress."
  },
  {
    year: 1158,
    title: "Calatrava Order Founded",
    description: "Spanish monks pledged to defend Calatrava, beginning a major military order of the Reconquista."
  },
  {
    year: 1159,
    title: "Heiji Crisis",
    description: "In late 1159, Japanese court rivalries erupt into the Heiji conflict, helping the Taira defeat the Minamoto."
  },
  {
    year: 1160,
    title: "Heiji Rebellion",
    description: "Rival samurai clans fought in Kyoto, strengthening Taira power and deepening the Minamoto-Taira struggle (started in 1159)."
  },
  {
    year: 1161,
    title: "Song Gunpowder Navy",
    description: "Song warships used explosive weapons against a Jin fleet at Caishi, helping stop a major invasion of southern China."
  },
  {
    year: 1162,
    title: "Temüjin Born",
    description: "Temüjin, later Genghis Khan, was born on the Mongolian steppe, destined to found history’s largest land empire."
  },
  {
    year: 1163,
    title: "Notre-Dame Begins",
    description: "Construction of Notre-Dame de Paris began on the Île de la Cité, creating a future masterpiece of Gothic architecture."
  },
  {
    year: 1164,
    title: "Crusaders Invade Egypt",
    description: "A Crusader army advanced into Egypt, beginning a brutal contest for control of the Nile."
  },
  {
    year: 1165,
    title: "Egypt Prize",
    description: "Crusader Jerusalem and Syria struggled for influence over Fatimid Egypt, the richest prize between Africa and the Holy Land."
  },
  {
    year: 1166,
    title: "Battles for Nile",
    description: "Syrian forces returned to Egypt, drawing Crusader Jerusalem into a renewed struggle for Cairo and the Nile."
  },
  {
    year: 1167,
    title: "Giza Battle with Saladin",
    description: "Crusader and Syrian armies fought near Giza, including a young Saladin, beginning his rise in the struggle for Cairo and the Nile."
  },
  {
    year: 1168,
    title: "Bilbeis Massacre",
    description: "A Crusader army massacred Bilbeis, pushing Fatimid Cairo away from Jerusalem and toward Syrian protection."
  },
  {
    year: 1169,
    title: "Saladin Vizier from Egypt",
    description: "After Syrian forces entered Cairo, Saladin became vizier of Fatimid Egypt, beginning his rise to power."
  },
  {
    year: 1170,
    title: "Saladin Takes Ayla",
    description: "Saladin captured Ayla near today’s Aqaba, threatening Crusader control of routes between Egypt, Arabia and the Red Sea."
  },
  {
    year: 1171,
    title: "Egypt Fatimids Fall",
    description: "Saladin ended the Fatimid Caliphate in Egypt, making Cairo the base of his rising Sunni power."
  },
  {
    year: 1171,
    title: "Venetians Arrested",
    description: "Byzantine authorities arrested Venetians across the empire and confiscated property, shattering Venice–Constantinople relations."
  },
  {
    year: 1172,
    title: "Venetian Disaster",
    description: "Venice’s revenge fleet collapsed from disease and failure, sparking unrest and the murder of its doge."
  },
  {
    year: 1173,
    title: "Pisa Tower Begins",
    description: "Construction began on Pisa’s famous leaning bell tower, later becoming one of medieval Italy’s most iconic monuments."
  },
  {
    year: 1174,
    title: "Saladin Takes Damascus",
    description: "Saladin entered Damascus after his Syrian overlord’s death, beginning his expansion from Egypt into Syria."
  },
  {
    year: 1174,
    title: "Baldwin “The Leper” Crowned",
    description: "The young leper king became ruler of Jerusalem, facing Saladin’s growing power from Egypt and Syria."
  },
  {
    year: 1175,
    title: "Saladin Becomes Sultan",
    description: "The Abbasid caliph recognised Saladin as Sultan of Egypt and Syria, uniting Muslim power against the Crusader states."
  },
  {
    year: 1176,
    title: "Saladin Survives Assassination",
    description: "Disguised Assassins attacked Saladin with daggers near Aleppo, but armour saved him as he consolidated Syria."
  },
  {
    year: 1177,
    title: "Battle of Montgisard",
    description: "The 16-year-old leper king of Jerusalem defeated Saladin near Montgisard, briefly saving the Crusader kingdom."
  },
  {
    year: 1178,
    title: "Templar Frontier Fortress Started",
    description: "Jerusalem began building a powerful castle at Jacob’s Ford, threatening Saladin’s route between Damascus and Egypt."
  },
  {
    year: 1179,
    title: "Templar Frontier Fortress Destroyed",
    description: "Saladin captured and destroyed the Crusader castle at Jacob’s Ford, breaking Jerusalem’s dangerous frontier project."
  },
  {
    year: 1180,
    title: "Saladin Truce",
    description: "Jerusalem and Saladin arranged a two-year truce, briefly pausing the struggle before renewed war."
  },
  {
    year: 1180,
    title: "Genpei War Begins",
    description: "Japan’s Minamoto and Taira clans began a civil war that led to samurai government and the first shogunate."
  },
  {
    year: 1181,
    title: "SN 1181",
    description: "Chinese and Japanese observers recorded a bright new “guest star,” now linked to one of history’s few known supernovae."
  },
  {
    year: 1182,
    title: "Latin Massacre",
    description: "Anti-Latin violence erupted in Constantinople, poisoning relations with Venice, Genoa and the wider Catholic West."
  },
  {
    year: 1183,
    title: "Siege of Kerak",
    description: "Saladin besieged Reynald’s desert fortress after Crusader Red Sea raids threatened Muslim trade and pilgrimage routes."
  },
  {
    year: 1183,
    title: "Kurikara Victory",
    description: "Minamoto forces routed the Taira at Kurikara Pass, turning Japan’s Genpei War against the ruling clan."
  },
  {
    year: 1184,
    title: "Kerak Relieved",
    description: "Saladin besieged Kerak again, but withdrew as Jerusalem’s relief army approached, avoiding a dangerous open battle."
  },
  {
    year: 1185,
    title: "Samurai Rule",
    description: "The Minamoto Clan defeated the Taira Clan, clearing the way for Japan’s first shogunate (Japanese military government)."
  },
  {
    year: 1186,
    title: "Caravan Provocation",
    description: "Reynald of Châtillon plundered a caravan under Saladin’s truce, provoking renewed war between Jerusalem and Saladin."
  },
  {
    year: 1187,
    title: "Battle of Hattin",
    description: "Saladin trapped Jerusalem’s thirsty Crusader army near Hattin, destroying it after Reynald’s truce-breaking provoked war."
  },
  {
    year: 1187,
    title: "Jerusalem Falls",
    description: "Saladin captured Jerusalem after Hattin, ending nearly ninety years of Crusader rule over the holy city."
  },
  {
    year: 1188,
    title: "Jerusalem Crusader Tax",
    description: "England and France imposed a huge crusade tax (“Saladin Tithe” to fund the campaign to recover Jerusalem from Saladin."
  },
  {
    year: 1189,
    title: "Acre Besieged in Third Crusade",
    description: "Richard the Lionheart, Philip II and Frederick Barbarossa launch a campaign to recapture Jerusalem from Saladin."
  },
  {
    year: 1190,
    title: "Teutonic Hospital in Acre",
    description: "German crusaders founded a field hospital at Acre, later linked to the rise of the Teutonic Order."
  },
  {
    year: 1191,
    title: "Lionheart Captures Acre",
    description: "Richard the Lionheart captured Acre and defeated Saladin at Arsuf, giving the Third Crusade its greatest victories."
  },
  {
    year: 1192,
    title: "Third Crusade Ends",
    description: "Richard the Lionheart and Saladin agreed the Treaty of Jaffa, leaving Jerusalem Muslim but open to Christian pilgrims."
  },
  {
    year: 1192,
    title: "Shogunate Begins",
    description: "Japan’s first shogunate began at Kamakura, where military rulers governed while the emperor remained symbolically important."
  },
  {
    year: 1193,
    title: "Saladin Dies",
    description: "Saladin died in Damascus months after the Third Crusade, leaving his Ayyubid empire divided among relatives."
  },
  {
    year: 1194,
    title: "Richard Released",
    description: "Richard the Lionheart was freed after paying a huge ransom to the Holy Roman Emperor, ending his captivity after the Third Crusade."
  },
  {
    year: 1195,
    title: "Temüjin Launches First Campaign",
    description: "Temüjin attacked rival Tatars on the eastern steppe, entering the dangerous frontier politics between Mongols and Jin China."
  },
  {
    year: 1196,
    title: "Temüjin First Success",
    description: "Temüjin helped defeat the Tatars with Jin support, restoring prestige before his rise as Genghis Khan."
  },
  {
    year: 1197,
    title: "Acre Window Fall",
    description: "The Holy Land’s Crusader ruler died in Acre after falling from a palace window, deepening succession instability."
  },
  {
    year: 1198,
    title: "Fourth Crusade Called",
    description: "The new pope called a crusade to recover Jerusalem, launching the campaign that later attacked Constantinople."
  },
  {
    year: 1199,
    title: "Fourth Crusade Gathers",
    description: "At a tournament in Écry, leading French nobles take the cross and form the Fourth Crusade’s first army."
  },
  {
    year: 1200,
    title: "Egypt Route Chosen for Fourth Crusade",
    description: "Crusader leaders planned a sea expedition against Egypt, unknowingly setting the path toward Venice and Constantinople."
  },
  {
    year: 1201,
    title: "Venice Contract for Fourth Crusade",
    description: "Crusader leaders hired Doge Enrico Dandolo’s Venice to carry 33,500 men, 4,500 horses and 50 war galleys."
  },
  {
    year: 1202,
    title: "Zara Sacked in Fourth Crusade",
    description: "Unable to pay Venice for transport, crusaders attacked Christian Zara for Doge Enrico Dandolo, corrupting the Fourth Crusade."
  },
  {
    year: 1203,
    title: "Golden Horn Opened",
    description: "Fourth Crusade and Venetian forces capture Galata’s tower, break the harbor chain, and sail into the Golden Horn at Constantinople."
  },
  {
    year: 1204,
    title: "Constantinople Sacked",
    description: "Fourth Crusade and Venetian forces storm Constantinople, replacing Byzantine rule with a fragile Catholic crusader state."
  },
  {
    year: 1205,
    title: "Adrianople Disaster",
    description: "Bulgarian forces defeats the Latin Empire near Adrianople, capturing Emperor Baldwin I only one year after Constantinople’s conquest."
  },
  {
    year: 1206,
    title: "Temüjin Unites Mongols",
    description: "After defeating rival steppe powers, Temüjin receives the title Genghis Khan at a great kurultai and reorganizes Mongolia for conquest."
  },
  {
    year: 1207,
    title: "Mongols Enter China",
    description: "Mongol forces push into Western Xia’s Ordos region, marking an early step toward conquest beyond the steppe."
  },
  {
    year: 1208,
    title: "Francis Renounces",
    description: "Francis of Assisi publicly renounces his father’s wealth, choosing poverty and beginning his radical religious path."
  },
  {
    year: 1209,
    title: "Franciscan Travels to Rome",
    description: "Francis of Assisi and his companions travel to Rome, seeking approval for the poverty movement to grow into an order."
  },
  {
    year: 1210,
    title: "Western Xia Submits",
    description: "After Genghis Khan’s invasion, Western Xia accepts Mongol overlordship, giving tribute and support to the Mongols."
  },
  {
    year: 1211,
    title: "Great Wall Breached",
    description: "Mongol armies break through Jin frontier defences, pushing past Great Wall lines into northern China."
  },
  {
    year: 1212,
    title: "Reconquista Turns",
    description: "Christian armies defeat the Almohads at Las Navas de Tolosa, a major turning point in the Reconquista."
  },
  {
    year: 1213,
    title: "Mongols Move towards Zhongdu",
    description: "Mongol armies attack Jin territory again, moving toward the imperial capital Zhongdu, modern Beijing."
  },
  {
    year: 1214,
    title: "The Battle of Bouvines",
    description: "Philip II defeats an English-imperial coalition at Bouvines, strengthening France and weakening King John before Magna Carta."
  },
  {
    year: 1215,
    title: "Magna Carta",
    description: "English barons force King John to accept Magna Carta, limiting royal power and shaping later constitutional ideas."
  },
  {
    year: 1216,
    title: "Louis Invades",
    description: "Prince Louis of France lands in England, backed by rebel barons who want to replace King John."
  },
  {
    year: 1217,
    title: "Sandwich Battle",
    description: "English ships defeat French reinforcements near Sandwich, cutting off Prince Louis’s invasion and ending his hopes."
  },
  {
    year: 1217,
    title: "Fifth Crusade Begins",
    description: "European crusaders assemble at Acre and campaign in the Holy Land, beginning a Fifth Crusade against the Ayyubids."
  },
  {
    year: 1218,
    title: "Otrar Incident",
    description: "A Mongol trade caravan is seized at Otrar by the Khwarazmian governor, provoking Genghis Khan’s conquest of Central Asia."
  },
  {
    year: 1219,
    title: "Damietta Captured Fifth Crusade",
    description: "Fifth Crusade forces capture Egypt’s strategic port of Damietta after an eighteen-month siege, hoping to exchange it for Jerusalem."
  },
  {
    year: 1220,
    title: "Samarkand Falls",
    description: "Mongol armies take Samarkand, one of Central Asia’s greatest cities, breaking the Khwarazmian Empire’s main power base."
  },
  {
    year: 1221,
    title: "Fifth Crusade Collapses",
    description: "Trapped during their advance toward Cairo, the crusaders surrender Damietta and abandon the Fifth Crusade."
  },
  {
    year: 1222,
    title: "Golden Bull",
    description: "Andrew II issues Hungary’s Golden Bull, limiting royal power and confirming noble rights to resist unlawful kings."
  },
  {
    year: 1223,
    title: "Expeditionary Mongols in Ukraine",
    description: "The Mongols win a decisive battle at Kalka river near today’s eastern Ukraine, foreshadowing their later conquest of Rus’."
  },
  {
    year: 1224,
    title: "Francis Stigmata",
    description: "Francis of Assisi receives the stigmata (wounds of christ) while praying on Mount La Verna, a defining miracle in Franciscan memory."
  },
  {
    year: 1225,
    title: "Expeditionary Mongols Return",
    description: "After their Ukrainian steppe raid, Subutai’s army returns east to Genghis Khan before the final Western Xia campaign."
  },
  {
    year: 1226,
    title: "Mongols Punish Western Xia",
    description: "Genghis Khan begins his final campaign against Western Xia, punishing the Tangut kingdom’s disobedience."
  },
  {
    year: 1227,
    title: "Genghis Khan Dies",
    description: "Genghis Khan dies during the final campaign against Western Xia, leaving his empire to expand under his four sons."
  },
  {
    year: 1228,
    title: "Diplomatic Sixth Crusade",
    description: "Frederick II leaves Brindisi for the Holy Land, despite papal excommunication, beginning the unusual Sixth Crusade and preparing to win Jerusalem through negotiation rather than conquest."
  },
  {
    year: 1229,
    title: "Jerusalem Returned Diplomatically",
    description: "Frederick II signs the Treaty of Jaffa with al-Kamil, restoring Jerusalem to Christian control without major fighting."
  },
  {
    year: 1230,
    title: "Frederick Reconciled",
    description: "Pope Gregory IX readmits Frederick II to the Church after his excommunicated crusade regained Jerusalem."
  },
  {
    year: 1231,
    title: "Mongols Invade Korea",
    description: "Already conquering northern China, Ögedei Khan’s Mongols invade Korea, beginning decades of warfare and eventual submission."
  },
  {
    year: 1232,
    title: "Mongols Besiege Kaifeng",
    description: "Jin defenders use fire lances and thunder-crash bombs against Mongols besieging their capital, Kaifeng."
  },
  {
    year: 1233,
    title: "Song Joins Mongols",
    description: "The Southern Song allies with the Mongols as Emperor Aizong flees Kaifeng toward the Jin dynasty’s final stronghold."
  },
  {
    year: 1234,
    title: "Jin Dynasty Ends",
    description: "Mongol and Southern Song forces capture Caizhou, destroying the Jin dynasty after twenty-three years of Mongol warfare."
  },
  {
    year: 1235,
    title: "Karakorum Capital",
    description: "Ögedei develops Karakorum as the Mongol Empire’s permanent capital and administrative centre."
  },
  {
    year: 1235,
    title: "Mongols Target Europe",
    description: "Ögedei’s great council authorizes a vast western campaign under Batu and Subutai against the Volga region and Europe."
  },
  {
    year: 1236,
    title: "Mongols Invade Bulgaria",
    description: "Batu Khan and Subutai conquer Volga Bulgaria, opening the Mongols’ great western invasion toward Russia and Europe."
  },
  {
    year: 1237,
    title: "Mongols Invade Rus’",
    description: "Batu Khan’s armies destroy Ryazan, beginning the full-scale Mongol conquest of the Rus’ principalities."
  },
  {
    year: 1238,
    title: "Mongols destroy Moscow",
    description: "Batu Khan’s Mongols capture and burn Moscow during their devastating conquest of northeastern Rus’."
  },
  {
    year: 1239,
    title: "Mongols destroy Chernigov",
    description: "Batu Khan’s Mongols capture and sack Chernigov, extending their conquest into the southern Rus’ principalities."
  },
  {
    year: 1240,
    title: "Mongols destroy Kyiv",
    description: "Batu Khan’s Mongols capture and devastate Kyiv, completing their conquest of the Rus’ heartlands and opening the route west."
  },
  {
    year: 1241,
    title: "Khan Ögedei Dies",
    description: "Great Khan Ögedei dies while Mongol armies occupy Hungary, creating a succession crisis before their 1242 withdrawal."
  },
  {
    year: 1242,
    title: "Mongols Withdraw",
    description: "After reaching Austria and approaching Vienna, Mongol armies withdraw east following Ögedei Khan’s death and the succession tradition."
  },
  {
    year: 1243,
    title: "Mongols Subjugate Seljuks",
    description: "Mongols crush the Seljuk Sultanate of Rum at Köse Dağ, making much of Anatolia tributary to the empire."
  },
  {
    year: 1244,
    title: "Jerusalem Lost",
    description: "Khwarazmian refugees and mercenaries, displaced by the Mongols, sack Jerusalem while fighting for Egypt’s Ayyubid sultan."
  },
  {
    year: 1245,
    title: "Pope contacts Mongol",
    description: "Pope Innocent IV sends Franciscan envoys carrying letters to the Mongols, opening direct diplomatic communication with their empire."
  },
  {
    year: 1246,
    title: "Mongols Receives Papal Envoy",
    description: "Güyük, newly elected Great Khan of the Mongol Empire, answers papal envoys by demanding the pope and Europe submit to Mongol rule."
  },
  {
    year: 1247,
    title: "Mongols Report Returns",
    description: "Giovanni da Pian del Carpine returns from Güyük Khan’s court, bringing Europe its first detailed eyewitness account of the Mongols."
  },
  {
    year: 1248,
    title: "Seventh Crusade",
    description: "Louis IX sails from France with a vast crusading army, planning to recover Jerusalem by first conquering Egypt."
  },
  {
    year: 1249,
    title: "Seventh Crusade Captures Damietta",
    description: "Louis IX’s Seventh Crusade lands in Egypt and rapidly captures Damietta, intending to advance along the Nile toward Cairo."
  },
  {
    year: 1250,
    title: "Seventh Crusade Fails",
    description: "Egyptian forces destroy Louis IX’s crusading army at Fariskur and capture the French king, ending the Seventh Crusade’s Egyptian campaign."
  },
  {
    year: 1251,
    title: "Buddhist Canon Completed",
    description: "Goryeo completes the Tripitaka Koreana after sixteen years of carving of 81,000 wooden printing blocks, seeking divine protection against repeated Mongol invasions."
  },
  {
    year: 1252,
    title: "Kublai Goes South",
    description: "Möngke orders his brother Kublai to campaign against the Dali Kingdom, opening the Mongol advance into southwestern China."
  },
  {
    year: 1253,
    title: "Kublai Conquers Dali",
    description: "Kublai Khan’s Mongol army conquers the Dali Kingdom, extending Mongol control into Yunnan and opening routes toward Southeast Asia."
  },
  {
    year: 1254,
    title: "Möngke Meets Rubruck",
    description: "Franciscan traveller William of Rubruck meets Great Khan Möngke at Karakorum and describes the diverse Mongol capital in remarkable detail."
  },
  {
    year: 1255,
    title: "Hulagu Goes West",
    description: "Möngke sends his brother Hulagu into Iran, beginning the Mongol campaign that will destroy Baghdad and establish the Ilkhanate."
  },
  {
    year: 1256,
    title: "Mongols Takes Assassin’s Castle",
    description: "Alamut Falls: Hulagu’s Mongols capture Alamut, modern-day northern Iran, destroying the political power of the group known as the Assassins."
  },
  {
    year: 1257,
    title: "Samalas Erupts",
    description: "Mount Samalas on Lombok erupts catastrophically, producing the largest stratospheric sulfur release of the Common Era and disrupting global climate."
  },
  {
    year: 1258,
    title: "Baghdad Falls",
    description: "Hulagu’s Mongols capture and devastate Baghdad, kill Caliph al-Mustaʿsim, and end the Abbasid Caliphate’s rule from the city."
  },
  {
    year: 1259,
    title: "Möngke Khan Dies",
    description: "Great Khan Möngke dies during the siege of Diaoyu Fortress in China, triggering a Mongol succession crisis and civil war."
  },
  {
    year: 1260,
    title: "Mongol Civil War",
    description: "Kublai Khan and Ariq Böke both claim the title of Great Khan, beginning a four-year succession war."
  },
  {
    year: 1261,
    title: "Byzantium Restored",
    description: "Nicaean forces recapture Constantinople, ending the Latin Empire founded by crusaders and restoring Byzantine rule after fifty-seven years of exile."
  },
  {
    year: 1262,
    title: "Mongols Fight Mongols",
    description: "Berke of the Golden Horde attacks Hulagu’s Ilkhanate in the Caucasus, opening the first major war between Mongol successor states"
  },
  {
    year: 1263,
    title: "Mongol Rivalry Deepens",
    description: "Fighting between Berke’s Golden Horde and Hulagu’s Ilkhanate disrupts trade and accelerates the Mongol Empire’s political fragmentation."
  },
  {
    year: 1264,
    title: "Mongol Civil War Ends",
    description: "Ariq Böke surrenders to his brother Kublai, ending their four-year struggle for control of the Mongol Empire."
  },
  {
    year: 1265,
    title: "Crusader Cities Fall",
    description: "Mamluk Sultan Baybars captures Caesarea, Haifa, and Arsuf, steadily dismantling the remaining Crusader territories along the Levantine coast."
  },
  {
    year: 1266,
    title: "Safed Crusader Fortress Falls",
    description: "Mamluk sultan Baybars captures the Templars’ powerful fortress at Safed, further weakening the remaining Crusader Kingdom of Jerusalem."
  },
  {
    year: 1267,
    title: "Learning Reimagined",
    description: "Roger Bacon sends Pope Clement IV his Opus Majus, advocating mathematics, languages, optics, and experimentation as foundations for reforming knowledge."
  },
  {
    year: 1268,
    title: "Mongs Besiege Xiangyang",
    description: "Mongol forces begin the prolonged siege of Xiangyang, a crucial campaign in Kublai Khan’s conquest of the Southern Song."
  },
  {
    year: 1269,
    title: "Mongol Imperial Script",
    description: "Kublai Khan officially introduces Phagpa’s script, designed to write the many languages governed across his expanding empire."
  },
  {
    year: 1270,
    title: "Eighth Crusade Starts/Ends",
    description: "Louis IX leads a crusade against Tunis, but disease devastates the army and kills the French king before any major conquest."
  },
  {
    year: 1271,
    title: "Ninth Crusade",
    description: "England’s Prince Edward reached Acre and forced Baybars to suspend the campaign against the remaining Crusader states."
  },
  {
    year: 1272,
    title: "Ninth Crusade Ends",
    description: "Prince Edward secured a ten-year truce with Mamluk sultan Baibars, leaving Acre as last stronghold and ending the final major medieval crusade to the Holy Land."
  },
  {
    year: 1273,
    title: "Habsburg Rise",
    description: "Rudolf of Habsburg was elected German king, ending the Great Interregnum and launching his dynasty’s remarkable ascent."
  },
  {
    year: 1274,
    title: "Mongols Invade Japan",
    description: "Kublai Khan’s Yuan and Korean forces attacked Kyūshū, but Japanese resistance and a disputed storm forced their withdrawal."
  },
  {
    year: 1275,
    title: "Marco Polo Reaches China",
    description: "Marco Polo reportedly reached Kublai Khan’s court, completing his journey along trade routes secured by the Pax Mongolica. (Arrival year approximate.)"
  },
  {
    year: 1276,
    title: "Mongols takes Song Capital",
    description: "Mongol forces captured Lin’an and accepted the young Song emperor’s surrender, although loyalists resisted until 1279."
  },
  {
    year: 1277,
    title: "Mongols Face Elephants",
    description: "Mongol archers defeated Burma’s elephant army at Ngasaunggyan, beginning Kublai Khan’s prolonged invasions of the Kingdom."
  },
  {
    year: 1278,
    title: "Final Song Emperor",
    description: "After Emperor Duanzong died, his six-year-old brother Zhao Bing became the last Song emperor while fleeing Mongol forces."
  },
  {
    year: 1279,
    title: "Song Defeated, Mongol China",
    description: "With the Song defeated at the Battle of Yamen, Kublai Khan reunited China under Mongol rule after more than three centuries of division."
  },
  {
    year: 1280,
    title: "Second Japan Invasion Planned",
    description: "Kublai Khan ordered preparations for a second, far larger Mongol invasion of Japan, launched the following year."
  },
  {
    year: 1281,
    title: "Divine Wind Saves Japan",
    description: "Kublai Khan’s enormous second invasion of Japan failed after Japanese resistance and a devastating typhoon (“Kamikaze”) destroyed much of his fleet."
  },
  {
    year: 1282,
    title: "Habsburg Austria",
    description: "Rudolf of Habsburg granted Austria and Styria to his sons, shifting the Habsburg dynasty’s power eastward from its Aargau homeland."
  },
  {
    year: 1283,
    title: "Aarau Town Rights",
    description: "Rudolf of Habsburg granted Aarau town rights, strengthening Habsburg rule in present-day Switzerland."
  },
  {
    year: 1284,
    title: "Brugg Town Rights",
    description: "Rudolf of Habsburg granted Brugg town rights modelled on Aarau, strengthening his dynasty’s Aargau homeland"
  },
  {
    year: 1285,
    title: "Bern Receives Imperial Tax",
    description: "Rudolf imposed an imperial tax on Bern, driving the city into opposition against the Swiss-born Habsburg king."
  },
  {
    year: 1286,
    title: "Bernese War Begins",
    description: "Bern attacked Wimmis and destroyed its fortified town, beginning conflict against the Habsburg-aligned barons of Weissenburg."
  },
  {
    year: 1287,
    title: "Medieval Swiss House",
    description: "The House of Bethlehem was built in Schwyz, becoming Europe’s oldest wooden house still standing today."
  },
  {
    year: 1288,
    title: "Bern Resists",
    description: "Bern survived two sieges by Rudolf of Habsburg, continuing its resistance before suffering defeat at Schosshalde in 1289."
  },
  {
    year: 1289,
    title: "Bern Defeated",
    description: "Habsburg forces ambushed Bern’s army at Schosshalde, forcing the city to pay imperial taxes and reparations."
  },
  {
    year: 1290,
    title: "Habsburg Geneva",
    description: "Geneva’s bishop granted Rudolf of Habsburg the city’s vidomnat, expanding Habsburg authority within present-day Switzerland."
  },
  {
    year: 1291,
    title: "Swiss Confederacy Begins",
    description: "Uri, Schwyz and Unterwalden formed a defensive alliance, traditionally marking the foundation of the Swiss Confederacy."
  },
  {
    year: 1291,
    title: "Acre Falls",
    description: "Mamluk forces captured Acre, eliminating the last major Crusader stronghold on the Levantine mainland."
  },
  {
    year: 1292,
    title: "Zürich Defeated",
    description: "Habsburg forces defeated Zürich near Winterthur, forcing peace and weakening the anti-Habsburg alliance formed with Uri and Schwyz."
  },
  {
    year: 1293,
    title: "Kamakura Earthquake",
    description: "A devastating earthquake struck Japan’s political capital Kamakura, reportedly killing more than 23,000 people."
  },
  {
    year: 1294,
    title: "Genoa Defeats Venice",
    description: "An outnumbered Genoese fleet destroyed the Venetians off Laiazzo by fastening its ships into a defensive platform"
  },
  {
    year: 1295,
    title: "Marco Polo Returns",
    description: "Marco Polo returned to Venice after twenty-four years travelling through Asia and serving at Kublai Khan’s court."
  },
  {
    year: 1296,
    title: "Stone of Scone",
    description: "Edward I defeated Scotland at Dunbar, deposed John Balliol and carried the sacred Stone of Scone to London."
  },
  {
    year: 1297,
    title: "Stirling Bridge Victory",
    description: "William Wallace revolted and defeated a larger English army, igniting Scotland’s struggle for independence. He was defeated the following year, resigning as Guardian of Scotland."
  },
  {
    year: 1298,
    title: "Battle of Curzola",
    description: "Genoa devastated Venice’s fleet near modern Korčula; Marco Polo was reportedly captured and later dictated his travels."
  },
  {
    year: 1299,
    title: "Ottoman State Begins",
    description: "Osman I established an independent frontier principality in Anatolia, traditionally marking the beginning of the Ottoman Empire."
  },
  {
    year: 1300,
    title: "First Holy Year",
    description: "Pope Boniface VIII proclaimed the first official Jubilee, a special year of pilgrimage, repentance and indulgences, drawing enormous crowds to Rome."
  },
  {
    year: 1301,
    title: "Dante’s Downfall Begins",
    description: "Dante, Florence’s former prior, went to Rome to oppose papal intervention, the Black Guelphs seized power, leading to his exile the following year."
  },
  {
    year: 1302,
    title: "Dante Exiled",
    description: "Florence formally exiled Dante for corruption and political opposition, beginning the banishment during which he wrote much of the Divine Comedy."
  },
  {
    year: 1303,
    title: "Crete Earthquake",
    description: "A massive earthquake and tsunami devastated Crete and Alexandria, severely damaging its ancient lighthouse, one of the Seven Wonders."
  },
  {
    year: 1304,
    title: "Wallace’s Last Resistance",
    description: "While most Scottish leaders submitted to Edward I, William Wallace continued resisting and escaping English capture."
  },
  {
    year: 1305,
    title: "William Wallace Executed",
    description: "English forces captured Scottish resistance leader William Wallace near Glasgow. He was tried and brutally executed in London."
  },
  {
    year: 1306,
    title: "Hospitallers Invade Rhodes",
    description: "The Knights Hospitaller landed on Rhodes and began conquering the Byzantine island, which became their fortified headquarters for two centuries."
  },
  {
    year: 1307,
    title: "Templars Arrested",
    description: "On Friday, 13 October, Philip IV ordered mass arrests of Knights Templar across France, beginning the persecution that destroyed the crusading order."
  },
  {
    year: 1308,
    title: "Teutonic Knights Seize Gdańsk",
    description: "The Teutonic Knights captured Gdańsk, killed many inhabitants and seized Pomerelia, beginning a bitter conflict with Poland."
  },
  {
    year: 1309,
    title: "Teutonic Headquarters Moves",
    description: "The Teutonic Knights moved their headquarters from Venice to Malbork Castle, making Prussia the centre of their expanding state."
  },
  {
    year: 1309,
    title: "Papacy Moves to Avignon",
    description: "Pope Clement V transfers the papal court from Italy to Avignon, beginning the Avignon Papacy. Seven successive popes reside there under strong French influence, leading critics to call the period the papacy’s “Babylonian Captivity.”"
  },
  {
    year: 1310,
    title: "Templars Burned",
    description: "Philip IV had 54 Templars burned near Paris after they retracted forced confessions and tried to defend their order."
  },
  {
    year: 1311,
    title: "Council of Vienne Opens",
    description: "Pope Clement V opened the council to judge the Templars. Under French pressure, it dissolved them in 1312."
  },
  {
    year: 1312,
    title: "Council of Vienne Dissolves Templar",
    description: "Pope Clement V dissolved the Knights Templar under pressure from Philip IV, ending the crusading order after nearly two centuries."
  },
  {
    year: 1313,
    title: "Templars Final Judgment",
    description: "Pope Clement V appointed three cardinals to judge imprisoned Templar leaders, including Grandmaster Jacques de Molay, setting the stage for their execution the following year."
  },
  {
    year: 1314,
    title: "Einsiedeln Raided",
    description: "Schwyz raided the Habsburg-protected abbey during a territorial dispute, escalating tensions that helped provoke the Morgarten campaign."
  },
  {
    year: 1315,
    title: "Battle of Morgarten",
    description: "Forest cantons ambushed and defeated Duke Leopold’s Habsburg army, strengthening the alliance that became the Old Swiss Confederacy."
  },
  {
    year: 1316,
    title: "Swiss Privileges Confirmed",
    description: "Louis IV confirmed Uri, Schwyz and Unterwalden’s imperial privileges, strengthening their autonomy after Morgarten and defying the Habsburgs."
  },
  {
    year: 1317,
    title: "Portuguese Navy Established",
    description: "King Denis appointed Genoese Manuel Pessanha admiral, giving Portugal a permanent royal navy that later enabled its maritime expansion."
  },
  {
    year: 1318,
    title: "Order of Christ Planned",
    description: "King Denis sent envoys to negotiate a Portuguese order inheriting Templar property, laying foundations for the Order of Christ."
  },
  {
    year: 1319,
    title: "Order of Christ Recognized",
    description: "Pope John XXII recognized Portugal’s Order of Christ, which inherited Templar property and later supported Portuguese maritime expansion."
  },
  {
    year: 1320,
    title: "Dante’s Scientific Lecture",
    description: "Dante presented “Quaestio de Aqua et Terra”, his only scientific work, examining why land rises above the Earth’s waters."
  },
  {
    year: 1321,
    title: "Dante’s Final Masterpiece",
    description: "Dante completed the Divine Comedy around 1321 before dying in Ravenna, leaving a masterpiece of Italian and Western literature."
  },
  {
    year: 1322,
    title: "English Rebellion Crushed",
    description: "Edward II defeated rebellious nobles at Boroughbridge and executed their leader, Thomas of Lancaster, who later inspired a popular saintly cult."
  },
  {
    year: 1323,
    title: "Ockham’s Logic",
    description: "William of Ockham wrote the Summa Logicae, developing logic and nominalism behind the simplicity principle later called Ockham’s razor."
  },
  {
    year: 1324,
    title: "Mansa Musa’s Golden Pilgrimage",
    description: "Mansa Musa crossed the Sahara toward Mecca; lavish spending in Cairo advertised Mali’s wealth and devalued gold."
  },
  {
    year: 1325,
    title: "Tenochtitlán Founded",
    description: "According to traditional chronology, the Mexica founded Tenochtitlán at the place where, according to legend, an eagle devoured a snake, now depicted on Mexico’s flag."
  },
  {
    year: 1326,
    title: "Ottomans Capture Bursa",
    description: "Orhan captured Byzantine Bursa after a long siege, giving the growing Ottoman state its first major city and future capital."
  },
  {
    year: 1327,
    title: "English King Abdicates",
    description: "Edward II was forced to abdicate, and fourteen-year-old Edward III was crowned while Queen Isabella and Roger Mortimer, who led the revolt, governed."
  },
  {
    year: 1328,
    title: "Scotland’s Independence Recognized",
    description: "England recognized Scotland as independent and Robert the Bruce as king, ending the First War of Scottish Independence."
  },
  {
    year: 1329,
    title: "Robert the Bruce Dies",
    description: "Scotland’s liberator died after achieving independence, leaving his crown to five-year-old David II and his heart for crusade."
  },
  {
    year: 1330,
    title: "Bruce’s Heart Goes to Battle",
    description: "Sir James Douglas died fighting Granada at Teba while carrying Robert the Bruce’s heart toward the Holy Land."
  },
  {
    year: 1331,
    title: "Genkō War against Shogunate",
    description: "Emperor Go-Daigo rebels against Japan’s Kamakura shogunate, beginning the Genkō War. His resistance eventually topples the shogunate and briefly restores imperial rule in 1333."
  },
  {
    year: 1332,
    title: "Lucerne Joins the Swiss Confederacy",
    description: "Lucerne forms an alliance with Uri, Schwyz and Unterwalden, becoming the Confederacy’s fourth member and its first city. The pact begins its expansion beyond the three original rural communities."
  },
  {
    year: 1333,
    title: "Kamakura Shogunate Falls",
    description: "Imperial loyalists capture Kamakura and destroy the Hōjō regime. Japan’s first shogunate collapses, allowing Emperor Go-Daigo to begin the short-lived Kenmu Restoration of direct imperial rule."
  },
  {
    year: 1334,
    title: "Christian Fleet Defeats Turkish Beylik",
    description: "Near Adramyttion, a naval league led by Venice and the Knights Hospitaller defeats the fleet of the Turkish Beylik of Karasi. The victory temporarily restricts Turkish naval raids across the Aegean Sea."
  },
  {
    year: 1335,
    title: "Start of Kenmu Restoration Collapse",
    description: "Ashikaga Takauji defeats Hōjō loyalists without imperial authorization. He remains in Kamakura and rebels against Emperor Go-Daigo, beginning the collapse of the Kenmu Restoration"
  },
  {
    year: 1336,
    title: "Japan Splits Between Two Imperial Courts",
    description: "Ashikaga Takauji defeats Emperor Go-Daigo’s forces at Minatogawa and captures Kyoto. He installs Emperor Kōmyō, while Go-Daigo establishes a rival court at Yoshino, beginning nearly sixty years of divided imperial rule."
  },
  {
    year: 1337,
    title: "Hundred Years’ War Begins",
    description: "Philip VI declares Edward III’s French territories confiscated, while Edward challenges Philip’s right to France’s throne. Their dispute begins the intermittent Hundred Years’ War, fought between England and France until 1453."
  },
  {
    year: 1338,
    title: "Ashikaga Shogunate Begins",
    description: "Ashikaga Takauji receives the title of shogun and formally establishes Japan’s second warrior government. Based in Kyoto, the Ashikaga shogunate rules Japan for over two centuries."
  },
  {
    year: 1339,
    title: "Battle of Laupen",
    description: "Bern and troops from Uri, Schwyz and Unterwalden defeat a coalition led by Fribourg and regional nobles. Their cooperation strengthens Bern’s relationship with the Confederates and prepares its admission to the Swiss Confederacy in 1353."
  },
  {
    year: 1340,
    title: "England Destroys the French Fleet at Sluys",
    description: "Edward III wins a crushing naval victory at Sluys, capturing or destroying most of the French fleet. The triumph removes the immediate threat of invasion and allows English armies to cross the Channel during the Hundred Years’ War."
  },
  {
    year: 1340,
    title: "Christian Kingdoms Triumph at Río Salado",
    description: "Castile and Portugal defeat the combined armies of Morocco’s Marinid dynasty and Muslim Granada near Tarifa. The battle prevents another major North African invasion and becomes a decisive turning point in the Reconquista."
  },
  {
    year: 1341,
    title: "Petrarch Is Crowned Poet Laureate",
    description: "Petrarch receives the laurel crown on Rome’s Capitoline Hill in a deliberate revival of an ancient tradition. The ceremony symbolizes the rediscovery of classical culture that defines Renaissance humanism. Famous Quote: \"Whatever the world finds pleasing is but a brief dream\""
  },
  {
    year: 1342,
    title: "Siege of Algeciras Begins",
    description: "Alfonso XI of Castile besieges Algeciras, the Marinid Empire’s principal Iberian port. Supported by Aragonese and Genoese fleets, he seeks to close this strategic gateway for armies crossing from North Africa."
  },
  {
    year: 1343,
    title: "Battle of the Strait",
    description: "Algeciras’s Marinid defenders fire primitive cannon at the Castilian besiegers, among Europe’s earliest recorded uses of gunpowder artillery."
  },
  {
    year: 1344,
    title: "Algeciras Falls to Castile",
    description: "Starved by a tightening land and naval blockade, Algeciras surrenders to Alfonso XI after a twenty-one-month siege. Castile gains the Marinids’ principal European port, leaving them only Gibraltar."
  },
  {
    year: 1345,
    title: "Ponte Vecchio Is Rebuilt",
    description: "Florence completes the present Ponte Vecchio after the previous bridge was destroyed by floods. Its innovative three segmental arches support rows of shops, making it one of the world’s most recognizable medieval bridges."
  },
  {
    year: 1346,
    title: "England Triumphs at Crécy",
    description: "Edward III’s smaller English army decisively defeats Philip VI of France at Crécy. English longbowmen repel repeated attacks, making it the first great English victory of the Hundred Years’ War."
  },
  {
    year: 1347,
    title: "The Black Death Reaches Europe",
    description: "Trading ships carry plague from the Black Sea into Mediterranean ports, reaching Constantinople and Sicily. The pandemic rapidly spreads across Europe."
  },
  {
    year: 1348,
    title: "Black Death Spreads Across Europe",
    description: "Plague spreads from Mediterranean ports through Italy, France, Iberia and England, killing millions."
  },
  {
    year: 1349,
    title: "The Black Death Reaches Scandinavia",
    description: "Plague ships carry the Black Death to Norway, where it spreads rapidly from ports including Bergen and Oslo."
  },
  {
    year: 1350,
    title: "Plague Ends the Siege of Gibraltar",
    description: "The Black Death strikes Alfonso XI’s Castilian army while it besieges Muslim-held Gibraltar. Alfonso refuses to withdraw and dies of plague, forcing his forces to abandon their attempted Reconquista conquest."
  },
  {
    year: 1351,
    title: "Zürich Joins the Swiss Confederacy",
    description: "Threatened by Austria after Zürich’s mayor Rudolf Brun executed political opponents, the city forms an alliance with Uri, Schwyz, Unterwalden and Lucerne. Zürich becomes the Confederacy’s fifth member and its first major imperial city."
  },
  {
    year: 1352,
    title: "Glarus and Zug Join the Swiss Confederacy",
    description: "Confederate forces occupy Habsburg-controlled Glarus and besiege Zug, compelling both to conclude alliances with the Confederates. Traditionally regarded as the sixth and seventh members, they remain contested by the Habsburgs for decades."
  },
  {
    year: 1353,
    title: "Bern Joins the Swiss Confederacy",
    description: "Bern concludes an “eternal alliance” with Uri, Schwyz and Unterwalden on 6 March. Its accession completes the Confederacy of the Eight Cantons, whose membership remains unchanged until 1481."
  },
  {
    year: 1354,
    title: "Ibn Battuta Completes His Great Journey",
    description: "Ibn Battuta returns to Morocco after nearly thirty years of travel through Africa, Asia and Europe. He has covered approximately 117,000 kilometres, probably travelling farther than any other known premodern explorer. His experiences are soon recorded in the Rihla."
  },
  {
    year: 1355,
    title: "Venice Executes Its Own Doge",
    description: "Doge Marino Faliero attempts to overthrow Venice’s aristocratic republic and make himself ruler. After the conspiracy is exposed, the eighty-year-old doge is beheaded and his portrait symbolically erased from the Doge’s Palace."
  },
  {
    year: 1356,
    title: "Basel Earthquake Devastates the Region",
    description: "A magnitude 6.6 earthquake and subsequent fires destroy much of Basel and numerous surrounding castles. It remains the strongest historically documented earthquake in Switzerland."
  },
  {
    year: 1357,
    title: "Construction of Charles Bridge Begins",
    description: "Emperor Charles IV begins building Prague’s monumental stone bridge across the Vltava, replacing one damaged by the flood of 1342. Legend dates its foundation to 9 July at 5:31, creating the palindrome 135797531, though the precise time is not historically certain."
  },
  {
    year: 1358,
    title: "Red Turbans Threaten Mongol Rule",
    description: "Liu Futong’s Red Turbans, a widespread peasant and religious movement rebelling against China’s Mongol-led Yuan dynasty, capture the former Song capital Kaifeng, and establish their restored Song regime there."
  },
  {
    year: 1359,
    title: "Mongol-led Yuan Recapture Kaifeng",
    description: "Yuan general Chaghan Temur retakes Kaifeng and drives out the Red Turban regime. Although this reverses the rebels’ greatest northern conquest, the wider uprising continues."
  },
  {
    year: 1359,
    title: "Golden Horde’s Great Troubles",
    description: "Khan Berdi Beg dies, probably murdered, ending the Golden Horde’s stable succession. Rival claimants begin the twenty-year Great Troubles, during which more than twenty khans compete for power, weakening Mongol control over the Russian principalities."
  },
  {
    year: 1360,
    title: "France Mints the First Franc",
    description: "France introduces the gold franc à cheval to help finance King John II’s ransom following his capture by England. This is the first appearance of the franc, a currency name later adopted by Switzerland and several other countries."
  },
  {
    year: 1361,
    title: "Pestis Secunda Returns to Europe",
    description: "A major second wave of plague, known as the pestis secunda, strikes Europe only a decade after the Black Death."
  },
  {
    year: 1362,
    title: "Grote Mandrenke Strikes Europe",
    description: "A catastrophic North Sea storm tide overwhelms dikes and destroys settlements along the coasts of the Netherlands, northern Germany and Denmark. Known as the Grote Mandrenke, or “Great Drowning of Men,” it kills tens of thousands and permanently reshapes parts of the coastline."
  },
  {
    year: 1363,
    title: "Red Turbans Win at Lake Poyang",
    description: "Zhu Yuanzhang’s smaller fleet defeats rival rebel emperor Chen Youliang using fire ships. The victory makes Zhu the strongest contender to replace China’s Mongol-led Yuan dynasty, enabling him to found the Ming dynasty in 1368."
  },
  {
    year: 1364,
    title: "University of Kraków Is Founded",
    description: "Casimir III the Great establishes Poland’s first university on 12 May. Initially teaching liberal arts, medicine and law, it later becomes the Jagiellonian University, where Nicolaus Copernicus studies during the 1490s."
  },
  {
    year: 1365,
    title: "University of Vienna Is Founded",
    description: "Duke Rudolf IV establishes the University of Vienna on 12 March. Named the Alma Mater Rudolphina after its founder, it becomes Austria’s oldest university and the oldest continuously operating university in the present-day German-speaking world."
  },
  {
    year: 1366,
    title: "Castilian Civil War",
    description: "Supported by French mercenaries, Henry of Trastámara invades Castile and drives his half-brother Pedro I into exile. Henry is crowned King of Castile and León, beginning an international struggle involving France and England within the wider Hundred Years’ War."
  },
  {
    year: 1367,
    title: "Zhu Yuanzhang Eliminates His Greatest Rival",
    description: "Zhu captures Suzhou and defeats rival rebel ruler Zhang Shicheng, securing control over the prosperous lower Yangtze region. With his Chinese rivals eliminated, Zhu can attack the Mongol-led Yuan dynasty and found the Ming in 1368."
  },
  {
    year: 1368,
    title: "Ming Dynasty Replaces Mongol Rule",
    description: "Former peasant and Red Turban commander Zhu Yuanzhang proclaims himself the Hongwu Emperor and establishes the Ming dynasty at Nanjing. His armies capture the Yuan capital, ending nearly a century of Mongol rule over China and forcing the Yuan court north into Mongolia."
  },
  {
    year: 1369,
    title: "Ming Establish Confucian Schools",
    description: "One year after overthrowing Mongol rule, the Hongwu Emperor orders every county in China to establish a Confucian school. The policy helps the new Ming dynasty restore Chinese institutions and train officials after decades of rebellion."
  },
  {
    year: 1370,
    title: "Timur Establishes the Timurid Empire",
    description: "Timur becomes supreme ruler of Transoxiana. Establishing his capital at Samarkand, he begins the Timurid Empire and the conquests that will extend from Central Asia into Persia, India, Russia and the Middle East."
  },
  {
    year: 1371,
    title: "Ming Restrict Maritime Trade",
    description: "The Hongwu Emperor introduces the haijin, or “sea ban,” restricting private overseas commerce to combat piracy and enforce the imperial tribute system."
  },
  {
    year: 1372,
    title: "Anglo-Portuguese Treaty of Tagilde",
    description: "King Ferdinand I of Portugal concludes the Treaty of Tagilde with representatives of England’s John of Gaunt. Formalized by another treaty in 1373, it begins the world’s oldest continuously operating diplomatic alliance."
  },
  {
    year: 1373,
    title: "England and Portugal Forge Their Enduring Alliance",
    description: "King Edward III of England and King Ferdinand I and Queen Leonor of Portugal sign the Treaty of London, promising perpetual friendship and mutual assistance. Building on the 1372 Treaty of Tagilde, it establishes the alliance generally regarded as the world’s oldest still in force."
  },
  {
    year: 1374,
    title: "Europe’s Great Dancing Mania Begins",
    description: "Hundreds of people begin dancing uncontrollably in Aachen, continuing until they collapse from exhaustion. The mysterious “dancing plague” spreads along the Rhine into present-day Belgium, France, Luxembourg and the Netherlands; its cause remains unknown."
  },
  {
    year: 1375,
    title: "Florence Rebels Against the Pope",
    description: "Florence organizes numerous cities against Pope Gregory XI, beginning the War of the Eight Saints. Its name refers to eight Florentine officials who directed the struggle, which helps persuade Gregory to return the papacy from Avignon to Rome in 1377."
  },
  {
    year: 1376,
    title: "Pope Urged to come Back to Rome",
    description: "Italian mystic Catherine of Siena travels to Avignon, where she personally urges Pope Gregory XI to reform the Church, make peace with Florence and restore the papacy to Rome."
  },
  {
    year: 1377,
    title: "Papacy Returns Permanently to Rome",
    description: "Pope Gregory XI enters Rome on 17 January, ending nearly seven decades of papal residence in Avignon and permanently restoring Rome as the pope’s principal seat."
  },
  {
    year: 1378,
    title: "Two Rival Popes Divide Western Christianity",
    description: "After Gregory XI dies, the cardinals elect Urban VI in Rome but soon reject him and elect Clement VII, who establishes a rival court at Avignon. The Western Schism divides Catholic Europe between competing popes until 1417."
  },
  {
    year: 1379,
    title: "Genoa Nearly Conquers Venice",
    description: "Genoese forces defeat Venice’s fleet and capture Chioggia at the southern edge of the Venetian Lagoon, bringing Venice close to collapse."
  },
  {
    year: 1380,
    title: "Genoese Fleet Starved",
    description: "The Genoese find themselves blockaded inside the lagoon. Starving and unable to escape, their forces surrender."
  },
  {
    year: 1381,
    title: "Venice and Genoa Make Peace",
    description: "The Treaty of Turin ends the War of Chioggia, preserving Venice after its near-defeat by Genoa."
  },
  {
    year: 1382,
    title: "Ming Conquer Yunnan",
    description: "Ming armies conquer Yuan-held Yunnan, extending the dynasty’s rule into southwestern China."
  },
  {
    year: 1383,
    title: "Portugal’s Succession Crisis Begins",
    description: "King Ferdinand dies without a son, triggering Portugal’s succession crisis and John of Aviz’s revolt."
  },
  {
    year: 1384,
    title: "Plague Saves Lisbon from Castile",
    description: "Plague forces Castile to abandon Lisbon’s siege, preserving Portuguese resistance during the succession crisis."
  },
  {
    year: 1385,
    title: "Swiss-Habsburg War Begins",
    description: "Swiss towns attack Habsburg strongholds, beginning the Sempach War that culminates in their decisive 1386 victory."
  },
  {
    year: 1386,
    title: "Swiss Confederates Triumph at Sempach",
    description: "Swiss Confederates defeat Habsburg forces at Sempach, killing Duke Leopold III and weakening Austrian power."
  },
  {
    year: 1387,
    title: "Glarus Declares Independence",
    description: "Glarus held its first documented Landsgemeinde and adopted its first Landessatzung. Its independence was then militarily secured at Näfels in 1388."
  },
  {
    year: 1388,
    title: "Glarus Triumphs at Näfels",
    description: "Outnumbered Glarus and Confederate allies defeat Habsburgs at Näfels, securing independence still commemorated by an annual pilgrimage"
  },
  {
    year: 1389,
    title: "Swiss-Habsburg War Ends",
    description: "A Swiss–Habsburg truce confirms Confederate wartime conquests, concluding the Sempach War after Näfels."
  },
  {
    year: 1390,
    title: "Byzantium Loses Its Last Anatolian City",
    description: "Ottomans capture Philadelphia, Byzantium’s last Anatolian city, forcing rival princes Manuel and John to assist them militarily."
  },
  {
    year: 1391,
    title: "Timur Defeats the Golden Horde",
    description: "Timur defeats Tokhtamysh’s Golden Horde at the Kondurcha River, temporarily weakening his former ally’s regional political power."
  },
  {
    year: 1392,
    title: "League of Bologna Resists Milan",
    description: "Florence forms the League of Bologna with six Italian states to resist Gian Galeazzo Visconti’s Milanese expansion. The alliance included Florence, Bologna, Padua, Ferrara, Imola, Faenza and Ravenna"
  },
  {
    year: 1393,
    title: "Sempacherbrief Unites the Eight Cantons",
    description: "The Sempacherbrief unites all eight Confederate members, regulates warfare and recognizes Glarus as an equal Confederate partner."
  },
  {
    year: 1394,
    title: "Twenty Years’ Peace Secures Swiss Gains",
    description: "The Confederates and Habsburg Austria extend their truce for twenty years, confirming Swiss territorial gains after Sempach."
  },
  {
    year: 1395,
    title: "Grey League Is Founded",
    description: "Regional nobles and valley communities establish the Grey League, which later helps form Switzerland’s canton of Graubünden."
  },
  {
    year: 1396,
    title: "Crusade of Nicopolis Is Crushed",
    description: "Ottomans defeat a multinational crusading army at Nicopolis, decisively strengthening Sultan Bayezid I’s dominance across the Balkans."
  },
  {
    year: 1397,
    title: "Medici Bank Is Founded",
    description: "Giovanni di Bicci de’ Medici establishes the Medici Bank in Florence, financing his family’s later political ascent."
  },
  {
    year: 1398,
    title: "Timur Sacks Delhi",
    description: "Timur defeats the Delhi Sultanate, sacks its capital and massacres inhabitants, devastating northern India for generations afterward."
  },
  {
    year: 1399,
    title: "Timur Begins His Seven-Year Campaign",
    description: "Returning from India, Timur launches his seven-year campaign westward, devastating Georgia before attacking Syria and the Ottomans."
  },
  {
    year: 1400,
    title: "Timur Sacks Aleppo",
    description: "Timur defeats the Mamluk army at Aleppo, sacks the city and advances toward Damascus before year’s end."
  }
];
