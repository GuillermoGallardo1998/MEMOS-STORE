import re4rImg from "/img/Resident-evil-4-Remake.jpg";
import re8Img from "/img/Resident-evil-8-village.jpg";
import re7Img from "/img/Resident-evil-7.jpg";
import reRvImg from "/img/Resident-Evil-ReVerse.jpg";
import re3rImg from "/img/Resident-Evil-3-Remake.jpg";
import re2rImg from "/img/Resident-Evil-2-Remake.jpg";
import reOCImg from "/img/Resident-Evil-Origins-Collection.jpg";
import reR2Img from "/img/Resident-Evil-Revelations-2.jpg";
import re6Img from "/img/Resident-Evil-6.jpg";
import reRImg from "/img/Resident-Evil-Revelations.jpg";
import re5Img from "/img/Resident-Evil-5.jpg";
import re4Img from "/img/Resident-Evil-4.jpg";
import reZImg from "/img/Resident-Evil-Zero.jpg";
import re3NImg from "/img/Resident-Evil-3-Nemesis.jpg";
import re2Img from "/img/Resident-Evil-2.jpg";
import re1997Img from "/img/Resident-Evil-1997.jpg";
import reCvImg from "/img/Resident-evil-code-veronicaX.jpg";
import reOuImg from "/img/Re-outbreak.jpg";
import reOu2Img from "/img/Resident_Evil_Outbreak_File_2.jpg";
import reSImg from "/img/Resident-Evil-Survivor.jpg";
import re197Img from "/img/Resident-evil-survivor-2.jpg";
import reDaImg from "/img/Resident-evil-dead-aim.jpg";
import reUcImg from "/img/Resident-evil-the-umbrella-chronicles.jpg";
import reDcImg from "/img/Resident-evil-darkside.jpg";
import reGaImg from "/img/Resident-evil-gaiden.jpg";
import MRe2002Img from "/img/Movie-resident-evil-2002.jpg";
import MReAImg from "/img/Movie-resident-evil-apocalypse.jpg";
import MReEImg from "/img/Movie-resident-evil-extinction.jpg";
import MReAfImg from "/img/Movie-resident-evil-afterlife.jpg";
import MReRImg from "/img/Movie-resident-evil-retribution.jpg";
import MReFcImg from "/img/Movie-resident-evil-the-final-chapter.jpg";
import MReWrcImg from "/img/Movie-resident-evil-welcome-to-raccoon-city.jpg";
import MReImg from "/img/Movie-resident-evil-degeneration.jpg";
import MReDImg from "/img/Movie-resident-evil-damnation.jpg";
import MReVImg from "/img/Movie-resident-evil-Vendetta.jpg";
import MReDiImg from "/img/Movie-resident-evil-death-island.jpg";




export const cardsInformation = [

  // RE GAMES
  {
    id: 1, 
    type: "game",
    name: "Resident Evil 4 Remake",
    description:
      "Its an updated version of the 2005 Resident Evil survival horror series, an ambitious gameplay and graphic update that brings us back to Leon S. Kennedy on his journey to a remote Spanish village to rescue the daughter of the President of the United States.",
    price: 167200,
    image: re4rImg,
  },
  {
    id: 2,
    type: "game",
    name: "Resident Evil 8: Village",
    description:
      "In this game, Ethan Winters searches for his wife Mia after receiving a mysterious message. His search leads him to an abandoned house in Louisiana, where he finds a changed Mia and faces the horrors of the disturbing Baker family while trying to survive and uncover the truth.",
    price: 167200,
    image: re8Img,
  },
  {
    id: 3,
    type: "game",
    name: "Resident Evil 7",
    description:
      "A return to survival horror in first‑person. You play as Ethan Winters, searching for his missing wife in a derelict Louisiana plantation. The unsettling Baker family and claustrophobic atmosphere create one of the series’ scariest and most immersive entries.",
    price: 33400,
    image: re7Img,
  },
  {
    id: 4,
    type: "game",
    name: "Resident Evil Re:Verse",
    description:
      "A competitive 6‑player deathmatch included with RE Village. Choose from classic characters and monsters, battling in chaotic arenas. Originally free with RE Village but being removed soon.",
    price: 0,
    image: reRvImg,
  },
  {
    id: 5,
    type: "game",
    name: "Resident Evil 3 Remake",
    description:
      "A modern remake of RE3: Nemesis, following Jill Valentine’s escape from pandemic‑ravaged Raccoon City. It reboots story and mechanics with polished visuals, shorter runtime, and re‑imagined Nemesis encounters.",
    price: 41800,
    image: re3rImg,
  },
  {
    id: 6,
    type: "game",
    name: "Resident Evil 2 Remake",
    description:
      "A contemporary remaster of the classic RE2, rebuilding the game with stunning visuals, updated gameplay, and modern systems. Commemorates the franchise’s 20th anniversary and remains a benchmark in horror remakes.",
    price: 41800,
    image: re2rImg,
  },
  {
    id: 7,
    type: "game",
    name: "Resident Evil Origins Collection",
    description:
      "Includes HD remasters of RE and RE0 (GameCube 2002) for PS4, Xbox One, and PC. Features sharp visuals, improved textures, and accessibility options, delivering both classic experiences in one package.",
    price: 94100,
    image: reOCImg,
  },
  {
    id: 8,
    type: "game",
    name: "Resident Evil Revelations 2",
    description:
      "A four‑episodic survival horror with Claire and Barry in a biohazard outbreak on an island prison. Combines tense stealth, puzzle solving, and co‑op play as you unravel a sinister conspiracy.",
    price: 6200,
    image: reR2Img,
  },
  {
    id: 9,
    type: "game",
    name: "Resident Evil 6",
    description:
      "A globe‑trotting action horror experience with multiple intersecting storylines (Leon, Chris, Jake, Ada) battling bio‑terror across varied locations. Blends fast‑paced combat with horror elements.",
    price: 25100,
    image: re6Img,
  },
  {
    id: 10,
    type: "game",
    name: "Resident Evil Revelations",
    description:
      "A tense, episodic horror on the Queen Zenobia cruise ship, following Jill Valentine and Parker Luca. It balances exploration, resource management, and mutant threats with a gripping narrative.",
    price: 20900,
    image: reRImg,
  },
  {
    id: 11,
    type: "game",
    name: "Resident Evil 5",
    description:
      "Co‑op action legacy with Chris Redfield in Africa, facing bio‑organic weapons. Blends campaign mode with intense PvE combat and serves as a turning point toward action in the series.",
    price: 20900,
    image: re5Img,
  },
  {
    id: 12,
    type: "game",
    name: "Resident Evil 4",
    description:
      "Leon S. Kennedy is sent to rescue the president’s daughter from a cult in rural Europe. A revolutionary third‑person shooter with over-the-shoulder aiming, pacing, and boss design that redefined horror.",
    price: 20900,
    image: re4Img,
  },
  {
    id: 13,
    type: "game",
    name: "Resident Evil Zero",
    description:
      "A prequel in the original style on GameCube, you control Rebecca and Billy on the train to Raccoon City. Introduces a partner system and blending horror, puzzles, and resource tension.",
    price: 18800,
    image: reZImg,
  },
  {
    id: 14,
    type: "game",
    name: "Resident Evil 3: Nemesis",
    description:
      "Jill Valentine races through Raccoon City while hunted by Nemesis, an unstoppable bio‑weapon. Introduces adaptive horror with weapon roulette, multiple endings, and relentless pursuit.",
    price: 41800,
    image: re3NImg,
  },
  {
    id: 15,
    type: "game",
    name: "Resident Evil 2",
    description:
      "A classic survival horror where Leon and Claire survive a zombie outbreak in Raccoon City’s police station. Innovative dual campaigns, atmospheric puzzles, and tone‑setting scares define the genre.",
    price: 20900,
    image: re2Img,
  },
  {
    id: 16,
    type: "game",
    name: "Resident Evil - 1997",
    description:
      "The iconic survival horror that started it all. Players explore the Spencer Mansion as Jill or Chris, solving puzzles and surviving undead horrors, establishing genre conventions still copied today.",
    price: 20900,
    image: re1997Img,
  },
  {
    id: 17,
    type: "game",
    name: "Resident Evil Code: Veronica X",
    description: "Claire Redfield continues her search for her brother Chris, uncovering the secrets of the Ashford family on a mysterious island. The game transitions to full 3D environments with cinematic storytelling.",
    price: 20900,
    image: reCvImg,
  },
  {
    id: 18,
    type: "game",
    name: "Resident Evil Outbreak",
    description: "A unique online multiplayer survival horror game where players control ordinary Raccoon City citizens trying to survive the outbreak across multiple scenarios.",
    price: 18800,
    image: reOuImg,
  },
  {
    id: 19,
    type: "game",
    name: "Resident Evil Outbreak File #2",
    description: "A standalone expansion to Outbreak featuring new characters, stages, and enemies. Enhances cooperative survival gameplay in the Raccoon City outbreak.",
    price: 18800,
    image: reOu2Img,
  },
  {
    id: 20,
    type: "game",
    name: "Resident Evil Survivor",
    description: "A first-person shooter spin-off that takes the player through Sheena Island in a memory-loss thriller with light gun support. A different take on the RE formula.",
    price: 14600,
    image: reSImg,
  },
  {
    id: 21,
    type: "game",
    name: "Resident Evil Survivor 2 – Code: Veronica",
    description: "An arcade-style light gun game loosely based on Code Veronica events. Features time-limited survival segments and arcade challenges.",
    price: 12500,
    image: re197Img,
  },
  {
    id: 22,
    type: "game",
    name: "Resident Evil Dead Aim",
    description: "A hybrid of third-person movement and first-person aiming set aboard a zombie-infested cruise ship. You play as Bruce McGivern in a fight against bio-terrorism.",
    price: 16800,
    image: reDaImg,
  },
  {
    id: 23,
    type: "game",
    name: "Resident Evil: The Umbrella Chronicles",
    description: "A rail-shooter that retells key events of RE0, RE1, and RE3 with new insights. Great for fans wanting a recap with action-focused gameplay.",
    price: 23000,
    image: reUcImg,
  },
  {
    id: 24,
    type: "game",
    name: "Resident Evil: The Darkside Chronicles",
    description: "A continuation of Umbrella Chronicles focusing on RE2, Code Veronica, and a new South America story. Offers intense light-gun gameplay.",
    price: 23000,
    image: reDcImg,
  },
  {
    id: 25,
    type: "game",
    name: "Resident Evil Gaiden",
    description: "A Game Boy Color title that follows Leon and Barry on a ship taken over by B.O.W.s. Known for its top-down view and turn-based combat system.",
    price: 9400,
    image: reGaImg,
  },

  // RE MOVIES
  {
    id: 101,
    type: "movie",
    name: "Resident Evil (2002)",
    description: "Alice wakes up in a secret underground facility and must survive deadly traps, zombies, and the AI known as the Red Queen in this action-horror origin story.",
    price: 8900,
    image: MRe2002Img,
  },
  {
    id: 102,
    type: "movie",
    name: "Resident Evil: Apocalypse (2004)",
    description: "As the T-virus spreads across Raccoon City, Alice joins survivors to fight the undead and face off against the powerful Nemesis in this explosive sequel.",
    price: 9400,
    image: MReAImg,
  },
  {
    id: 103,
    type: "movie",
    name: "Resident Evil: Extinction (2007)",
    description: "In a post-apocalyptic desert world, Alice leads a convoy of survivors while Umbrella hunts her down for her growing powers.",
    price: 9700,
    image: MReEImg,
  },
  {
    id: 104,
    type: "movie",
    name: "Resident Evil: Afterlife (2010)",
    description: "Alice continues her search for survivors while uncovering Umbrella's deep secrets inside a mysterious prison fortress in Los Angeles.",
    price: 9800,
    image: MReAfImg,
  },
  {
    id: 105,
    type: "movie",
    name: "Resident Evil: Retribution (2012)",
    description: "Captured by Umbrella, Alice must escape a simulated world filled with monsters and clones in one of the most visually intense entries.",
    price: 9900,
    image: MReRImg,
  },
  {
    id: 106,
    type: "movie",
    name: "Resident Evil: The Final Chapter (2016)",
    description: "Alice returns to Raccoon City for a final showdown with Umbrella to stop the T-virus once and for all in this explosive conclusion.",
    price: 10200,
    image: MReFcImg,
  },
  {
    id: 107,
    type: "movie",
    name: "Resident Evil: Welcome to Raccoon City (2021)",
    description: "A reboot faithful to the games, this film follows Chris Redfield, Claire, Leon, and Jill as they confront the horrors in the Spencer Mansion and RPD.",
    price: 11200,
    image: MReWrcImg,
  },
  
  {
    id: 108,
    type: "movie",
    name: "Resident Evil: Degeneration (2008, CGI)",
    description: "Set in the game universe, Leon and Claire reunite to stop a bio-terrorist attack at an airport in this CGI film.",
    price: 8700,
    image: MReImg,
  },
  {
    id: 109,
    type: "movie",
    name: "Resident Evil: Damnation (2012, CGI)",
    description: "Leon infiltrates a war-torn Eastern European country to investigate bio-organic weapon use in this politically charged CGI entry.",
    price: 8900,
    image: MReDImg,
  },
  {
    id: 110,
    type: "movie",
    name: "Resident Evil: Vendetta (2017, CGI)",
    description: "Leon, Chris, and Rebecca team up to stop a global virus outbreak in a slick, action-packed CGI adventure set between the games.",
    price: 9100,
    image: MReVImg,
  },
  {
    id: 111,
    type: "movie",
    name: "Resident Evil: Death Island (2023, CGI)",
    description: "Leon, Chris, Jill, Rebecca, and Claire join forces to investigate a deadly virus spreading through Alcatraz Island in this fan-service-filled CGI movie.",
    price: 11500,
    image: MReDiImg,
  }
];

export default cardsInformation;