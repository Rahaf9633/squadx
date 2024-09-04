// type 
type ISocial = {
  id: number;
  link: string;
  icon: string;
  title: string;
}

const social_data:ISocial[] = [

  {
    id:2,
    link:'https://twitter.com/squadxorg/',
    icon:'fab fa-twitter',
    title:'Twitter'
  },
  {
    id:3,
    link:'https://discord.gg/Szr3GBhjBD',
    icon:'fab fa-discord',
    title:'Linkedin'
  },
  {
    id:4,
    link:'https://www.youtube.com/@SquadXorg/',
    icon:'fab fa-youtube',
    title:'Youtube'
  },
]

export default social_data;