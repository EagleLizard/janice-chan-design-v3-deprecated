
import * as imageUris from './image-uris';
import { Gallery } from './gallery';

export enum GALLERY_ENUM {
  THE_DRAG = 'THE_DRAG',
  NEXT_FALL = 'NEXT_FALL',
  AGAMEMNON = 'AGAMEMNON',
  TRIBES = 'TRIBES',
  FAT_PIG = 'FAT_PIG',
  UVU = 'UVU',
  SUNDANCE = 'SUNDANCE',
  RENAISSANCE_NOW = 'RENAISSANCE_NOW',
  BYU = 'BYU',
  RENAISSANCE_FAIRE = 'RENAISSANCE_FAIRE',
  CABARET = 'CABARET',
  ART = 'ART',
  LARAMIE = 'LARAMIE',
  MRBURNS = 'MRBURNS',
  URINETOWN = 'URINETOWN',
  TAMINGOFTHESHREW = 'TAMINGOFTHESHREW',
}

const URINETOWN_GALLERY = new Gallery(
  GALLERY_ENUM.URINETOWN,
  imageUris.URINETOWN_GALLERY,
  'Urinetown: The Musical',
  'urinetown-the-musical',
  'Utah Valley University',
  'scenic & props designer',
  [
    'scenic & props designer',
    'Director: Matthew Herrick',
    'Assistant: Gavin Henry',
    'Lights: Colin Skip Wilson',
    'Sound: Nathan Lowry',
    'Costumes: Mallory Goodman',
  ],
  '2019',
  'Location: Orem, Utah, U.S.A.',
);
const TAMINGOFTHESHREW_GALLERY = new Gallery(
  GALLERY_ENUM.TAMINGOFTHESHREW,
  imageUris.TAMINGOFTHESHREW_GALLERY,
  'Taming Of The Shrew',
  'taming-of-the-shrew',
  'Utah Valley University',
  'scenic & props designer',
  [
    'Director: Shelby Gist',
    'Lights: Emma Belnap',
    'Sound: Hayley Christensen',
    'Costumes: Danae Devey',
    'Makeup & Hair: Alanna Cottam',
    'Photos: Shelby Gist, Janice Chan',
  ],
  '2019',
  'Location: Orem, Utah, U.S.A.',
);
const MRBURNS_GALLERY = new Gallery(
  GALLERY_ENUM.MRBURNS,
  imageUris.MRBURNS_GALLERY,
  'Mr. Burns, a Post-Electric Play',
  'mr-burns',
  'An Other Theater Company',
  'scenic designer, props designer, muralist',
  [
    'Directors: Kacey Spadafora, Taylor Jack Nelson',
    'Lights: Emma Belnap',
    'Sound: Kaecy Spadafora',
    'Costumes: Janae Lefleur',
    'Photos: Laura Chapman, Janice Chan',

  ],
  '2019',
  'Location: Provo, Utah, U.S.A.',
);
const LARAMIE_GALLERY = new Gallery(
  GALLERY_ENUM.LARAMIE,
  imageUris.LARAMIE_GALLERY,
  'The Laramie Project',
  'the-laramie-project',
  'Utah Valley University',
  'scenic & props designer',
  [
    'Director: Laurie Harrop-Purser',
    'Lights: Colin Skip Wilson',
    'Projections: Emma Belnap',
    'Sound: Nathan Lowry',
    'Costumes: Rae Sip & Kate Backman',
    'Makeup: Alanna Cottam',
    'Photos: Suzy Oliveira',
  ],
  '2019',
  'Location: Orem, Utah, U.S.A.',
);
const THE_DRAG_GALLERY = new Gallery(
  GALLERY_ENUM.THE_DRAG,
  imageUris.THE_DRAG_GALLERY,
  'The Drag',
  'the-drag',
  'An Other Theater Company',
  'scenic & props designer, muralist',
  [
    'Director: Taylor Jack Nelson',
    'Assistant Muralist: Tyler Whited',
    'Lights: Aimee Findley Moore',
    'Sound: Kacey Spadafora',
    'Costumes: Ash Knowles',
    'Makeup: Christopher-Alan Pederson',
    'Photos: Laura Chapman',
  ],
  '2018',
  'Location: Provo, Utah, U.S.A.'
);
const CABARET_GALLERY = new Gallery(
  GALLERY_ENUM.CABARET,
  imageUris.CABARET_GALLERY,
  'Cabaret',
  'cabaret',
  'Utah Valley University',
  'assistant scenic & props designer',
  [
    'Director: Robert Moffat',
    'Scenic: Madeline Ashton',
    'Props: Madeline Ashton',
    'Lights: Emma Belnap',
    'Sound: Gavin Henry',
    'Costumes: Carolyn Urban',
    'Makeup: Shelby Gist',
    'Photos: Jeremy Hall',
  ],
  '2018',
  'Location: Orem, Utah, U.S.A.'
);
const NEXT_FALL_GALLERY = new Gallery(
  GALLERY_ENUM.NEXT_FALL,
  imageUris.NEXT_FALL_GALLERY,
  'Next Fall',
  'next-fall',
  'An Other Theater Company',
  'scenic designer, props designer',
  [
    'Director: Kacey Spadafora',
    'Lights: Paige Porter',
    'Sound: Kaecy Spadafora',
    'Costumes: Ash Knowles',
    'Photos: Laura Chapman',
  ],
  '2018',
  'Location: Provo, Utah, U.S.A.'
);
const AGAMEMNON_GALLERY = new Gallery(
  GALLERY_ENUM.AGAMEMNON,
  imageUris.AGAMEMNON_GALLERY,
  'Agamemnon',
  'agamemnon',
  'Utah Valley University',
  'scenic designer',
  [
    'Director: Christopher Clark',
    'Props: Aimee Moore',
    'Lights: Aaron Gubler',
    'Sound: Colin Skip Wilson',
    'Costumes: Mallory Goodman',
    'Photos: Deric Lambdin',
  ],
  '2018',
  'Orem, Utah, U.S.A.'
);
const TRIBES_GALLERY = new Gallery(
  GALLERY_ENUM.TRIBES,
  imageUris.TRIBES_GALLERY,
  'Tribes',
  'tribes',
  'Utah Valley University',
  'scenic designer',
  [
    'Director: Hayley Lambdin',
    'Lights: Aaron Gubler',
    'Sound: Gavin Henry',
    'Costumes: Molly Pack',
    'Photos: Deric Lambdin',
  ],
  '2018',
  'Orem, Utah, U.S.A.'
);
const FAT_PIG_GALLERY = new Gallery(
  GALLERY_ENUM.FAT_PIG,
  imageUris.FAT_PIG_GALLERY,
  'Fat Pig',
  'fat-pig',
  'An Other Theater Company',
  'scenic designer',
  [
    'Director: Morag Shepherd',
    'Lights: Paige Porter',
    'Sound: Paige Porter',
    'Costumes: Chris Lancaster',
    'Photos: Laura Chapman',
  ],
  '2018',
  'Provo, Utah, U.S.A.'
);
const UVU_GALLERY = new Gallery(
  GALLERY_ENUM.UVU,
  imageUris.UVU_GALLERY,
  'A Year with Frog & Toad',
  'a-year-with-frog-and-toad',
  'Utah Valley University',
  'assistant scenic designer',
  [
    'Director: Lisa Hall Hagen',
    'Scenic: Emma Belnap',
    'Props: Alicia Freeman',
    'Lights: Aaron Gubler',
    'Sound: Kevin Criman',
    'Costumes: Chris Lancaster',
    'Photos: Great Projects Photography',
  ],
  '2017',
  'Orem, Utah, U.S.A.'
);
const SUNDANCE_GALLERY = new Gallery(
  GALLERY_ENUM.SUNDANCE,
  imageUris.SUNDANCE_GALLERY,
  'Joseph and the Amazing Technicolor Dreamcoat',
  'joseph-and-the-amazing-technicolor-dreamcoat',
  'Sundance Summer Theatre',
  'scenic painter',
  [
    'Director: D. Terry Petrie',
    'Scenic: Stephen Purdy',
    'Lights: Matthew Taylor',
    'Sound: Matthew Kupferer',
    'Costumes: Nancy Cannon, Carla Summers'
  ],
  '2017',
  'Sundance, Utah, U.S.A.'
);
const RENAISSANCE_NOW_GALLERY = new Gallery(
  GALLERY_ENUM.RENAISSANCE_NOW,
  imageUris.RENAISSANCE_NOW_GALLERY,
  'The Taming of the Shrew',
  'the-taming-of-the-shrew',
  'Renaissance Now',
  'scenic designer, properties master',
  [
    'Director: Archelaus D. Crisanto',
    'Assistant Director: Sarah Butler',
    'Costumes: Amanda Louise Hellewell',
    'Photos: Bruce Miller, Janice Chan',
  ],
  '2017',
  'Provo, Utah, U.S.A.',
);
const BYU_GALLERY = new Gallery(
  GALLERY_ENUM.BYU,
  imageUris.BYU_GALLERY,
  'Hamlet',
  'hamlet',
  'Brigham Young University',
  'scenic designer',
  [
    'Director: Chris Hults',
    'Lights: Kalea Crapo',
    'Sound: Matthew Kupferer',
    'Costumes: Sarah Ziegler',
    'Photos: Matthew Kupferer',
  ],
  '2017',
  'Provo, Utah, U.S.A.'
);
const RENAISSANCE_FAIRE_GALLERY = new Gallery(
  GALLERY_ENUM.RENAISSANCE_FAIRE,
  imageUris.RENAISSANCE_FAIRE_GALLERY,
  'Utah Renaissance Faire',
  'utah-renaissance-faire',
  'Utah Renaissance Faire',
  'prop painter',
  [
    
  ],
  '2017, 2018',
  'Lehi, Utah, U.S.A.'
);
const ART_GALLERY = new Gallery(
  GALLERY_ENUM.ART,
  imageUris.ART_GALLERY,
  '',
  'art',
  '',
  '',
  [],
  '',
  '',
);

export const GALLERIES: GALLERY_ENUM[] = [
  GALLERY_ENUM.THE_DRAG,
  GALLERY_ENUM.NEXT_FALL,
  GALLERY_ENUM.AGAMEMNON,
  GALLERY_ENUM.TRIBES,
  GALLERY_ENUM.FAT_PIG,
  GALLERY_ENUM.UVU,
  GALLERY_ENUM.SUNDANCE,
  GALLERY_ENUM.RENAISSANCE_NOW,
  GALLERY_ENUM.BYU,
  GALLERY_ENUM.RENAISSANCE_FAIRE,
  GALLERY_ENUM.CABARET,
  GALLERY_ENUM.ART,
  GALLERY_ENUM.LARAMIE,
  GALLERY_ENUM.MRBURNS,
  GALLERY_ENUM.URINETOWN,
  GALLERY_ENUM.TAMINGOFTHESHREW,
];

export const SCENIC_GALLERY_KEYS: GALLERY_ENUM[] = [
  GALLERY_ENUM.URINETOWN,
  GALLERY_ENUM.TAMINGOFTHESHREW,
  GALLERY_ENUM.MRBURNS,
  GALLERY_ENUM.LARAMIE,
  GALLERY_ENUM.THE_DRAG,
  GALLERY_ENUM.NEXT_FALL,
  GALLERY_ENUM.AGAMEMNON,
  GALLERY_ENUM.TRIBES,
  GALLERY_ENUM.FAT_PIG,
  GALLERY_ENUM.UVU,
  GALLERY_ENUM.SUNDANCE,
  GALLERY_ENUM.RENAISSANCE_NOW,
  GALLERY_ENUM.BYU,
  GALLERY_ENUM.CABARET,
  GALLERY_ENUM.RENAISSANCE_FAIRE,
]

export const GALLERY_ENUM_MAP: {[key in GALLERY_ENUM]: Gallery} = {
  [GALLERY_ENUM.URINETOWN]: URINETOWN_GALLERY,
  [GALLERY_ENUM.TAMINGOFTHESHREW]: TAMINGOFTHESHREW_GALLERY,
  [GALLERY_ENUM.MRBURNS]: MRBURNS_GALLERY,
  [GALLERY_ENUM.LARAMIE]: LARAMIE_GALLERY,
  [GALLERY_ENUM.THE_DRAG]: THE_DRAG_GALLERY,
  [GALLERY_ENUM.CABARET]: CABARET_GALLERY,
  [GALLERY_ENUM.NEXT_FALL]: NEXT_FALL_GALLERY,
  [GALLERY_ENUM.AGAMEMNON]: AGAMEMNON_GALLERY,
  [GALLERY_ENUM.TRIBES]: TRIBES_GALLERY,
  [GALLERY_ENUM.FAT_PIG]: FAT_PIG_GALLERY,
  [GALLERY_ENUM.UVU]: UVU_GALLERY,
  [GALLERY_ENUM.SUNDANCE]: SUNDANCE_GALLERY,
  [GALLERY_ENUM.RENAISSANCE_NOW]: RENAISSANCE_NOW_GALLERY,
  [GALLERY_ENUM.BYU]: BYU_GALLERY,
  [GALLERY_ENUM.RENAISSANCE_FAIRE]: RENAISSANCE_FAIRE_GALLERY,
  [GALLERY_ENUM.ART]: ART_GALLERY,
};

export const GALLERY_PAGES: Gallery[] = [
  URINETOWN_GALLERY,
  TAMINGOFTHESHREW_GALLERY,
  MRBURNS_GALLERY,
  LARAMIE_GALLERY,
  THE_DRAG_GALLERY,
  CABARET_GALLERY,
  NEXT_FALL_GALLERY,
  AGAMEMNON_GALLERY,
  TRIBES_GALLERY,
  FAT_PIG_GALLERY,
  UVU_GALLERY,
  SUNDANCE_GALLERY,
  RENAISSANCE_NOW_GALLERY,
  BYU_GALLERY,
  RENAISSANCE_FAIRE_GALLERY,
  ART_GALLERY,
];

