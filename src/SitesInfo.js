import CafeImage from './images/cafeImage.jpg'
import FeedinImage from './images/feedinImage.png'
import DharmanureImage from './images/dharmanureImage.png';

const SitesInfo = [
  {
    id: 1,
    title: 'Dharmanure',
    sub: 'Headless CMS',
    tools: 'React, Gatsby, Contentful',
    image: DharmanureImage,
    alt: 'The dharmanure homepage',
    link: 'https://dharmanure.com'
  },
  {
    id: 2,
    title: 'Cafe Racer',
    sub: 'Modern Commerce Design',
    tools: 'HTML, CSS, javascript',
    image: CafeImage,
    alt: 'The cafe racer homepage',
    link: 'https://caferacer.netlify.com'
  },
  {
    id: 3,
    title: "Feedin' Time",
    sub: 'Mobile Web App',
    tools: 'React and Firebase',
    image: FeedinImage,
    alt: 'The Feedin Time homepage',
    link: 'https://feedintime.netlify.com/'
  }
];

export default SitesInfo;
