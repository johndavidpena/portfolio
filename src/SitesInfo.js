import CafeImage from './images/cafeImage.jpg'
import MimasImage from './images/mimasImage.jpg'
import FeedinImage from './images/feedinImage.jpg'

const SitesInfo = [
  {
    id: 1,
    title: 'Cafe Racer',
    sub: 'Modern Commerce',
    tools: 'HTML, CSS, javascript',
    image: CafeImage,
    alt: 'The cafe racer homepage',
    link: 'https://nifty-ardinghelli-40a454.netlify.com/'
  },
  {
    id: 2,
    title: 'Mimas Music',
    sub: 'Interactive Music Education',
    tools: 'Node, Express, MongoDB',
    image: MimasImage,
    alt: 'The Mimas Music homepage',
    link: 'http://mimasmusic.com'
  },
  {
    id: 3,
    title: "Feedin' Time",
    sub: 'Mobile Web App',
    tools: 'React, Meteor, MongoDB',
    image: FeedinImage,
    alt: 'The Feedin Time homepage',
    link: 'http://dharmanure.com'
  }
];

export default SitesInfo;
