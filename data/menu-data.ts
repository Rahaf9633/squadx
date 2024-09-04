// type
type IMenuDataType = {
  id: number;
  title: string;
  link: string;
  sub_menu?: {
      title: string;
      link: string;
  }[];
}

const menu_data:IMenuDataType[] = [
  {
    id:1,
    title:'HOME',
    link:'/',
  },
  {
    id:2,
    title:'Tickets',
    link:'/shop-details',
    
  },
  {
    id:3,
    title:'RoadMap',
    link:'/road-map-area',
  },
 
  {
    id:5,
    title:'ABOUT',
    link:'/about',
  },
  {
    id:7,
    title:'FAQ',
    link:'/service-details',
  },
  {
    id:6,
    title:'CONTACT US',
    link:'/contact',
  },

  {
    id:8,
    title:'TERMS OF SERVICE',
    link:'/terms',
  },
  {
    id:9,
    title:'Pricavy Policy',
    link:'/privacy',
  },
  
 
]

export default menu_data;