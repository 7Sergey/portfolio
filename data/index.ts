export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Tech stack', link: '#tech' },
  { name: 'Experience', link: '#experience' },
];

export const gridItems = [
  {
    id: 1,
    title: 'I prioritize client collaboration, fostering open communication ',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    img: '/b1.svg',
    spareImg: '',
  },
  {
    id: 2,
    title: '',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },
  {
    id: 3,
    title: 'My tech stack',
    description: 'I constantly try to improve',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: '',
  },
  {
    id: 4,
    title: 'Tech enthusiast with a passion for development.',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },

  {
    id: 5,
    title: 'Currently building a JS Animation library',
    description: 'The Inside Scoop',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg',
  },
  {
    id: 6,
    title: 'Do you want to start a project together?',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
];

export const projects = [
  {
    id: 1,
    title: 'Book Library App',
    des: 'A book library management application that provides users with the ability to add, filter, delete and mark books as favorites.',
    img: '/books.PNG',
    iconLists: [
      '/react.svg',
      '/redux-icon.svg',
      '/typescript.svg',
      '/nodej.svg',
      // '/express.svg',
      '/sass.svg',
    ],
    link: 'https://github.com/7Sergey/Book-Library-App-TypeScript',
  },
  {
    id: 2,
    title: 'Mesto',
    des: 'Single page application. An application with functionality that allows you to change the name and description of a users profile, add new cards, put likes on cards and open a window with an enlarged image.',
    img: '/mesto.PNG',
    iconLists: ['/js.svg', '/html.svg', '/css.svg'],
    link: 'https://github.com/7Sergey/react-mesto-api-full-gha',
  },
  {
    id: 3,
    title: 'Russian travel',
    des: 'A one-page website about traveling across the country using HTML, CSS and CSS Grid Layout.',
    img: '/russian-travel.PNG',
    iconLists: ['/html.svg', '/css.svg'],
    link: 'https://github.com/7Sergey/russian-travel',
  },
  {
    id: 4,
    title: 'How To Learn',
    des: 'A one-page website based on the image from the brief, which contained detailed descriptions and illustrations with block sizes and indents. Used HTML, CSS, flexbox layout, positioning and advanced semantics of the HTML language',
    img: '/learn.PNG',
    iconLists: ['/html.svg', '/css.svg'],
    link: 'https://github.com/7Sergey/HowToLearn',
  },
];

export const experience = [
  {
    id: 1,
    title: 'Udemi',
    desc: 'React - The Complete Course on React, Redux and Redux Toolkit.',
    className: 'md:col-span-2',
    thumbnail: '/exp4.svg',
  },
  {
    id: 2,
    title: 'Frontend Engineer Intern',
    desc: 'Assisted in the development of a web-based platform using React.js, enhancing interactivity.',
    className: 'md:col-span-2',
    thumbnail: '/exp1.svg',
  },

  {
    id: 3,
    title: 'Yandex Practicum',
    desc: 'Frontend Developer сourse. HTML, CSS(flex, grid layout, BEM), JavaScript, React',
    className: 'md:col-span-2',
    thumbnail: '/exp2.svg',
  },

  {
    id: 4,
    title: 'Saint-Petersburg State University of Aerospace Instrumentation',
    desc: 'Institute of Aerospace Instruments and Systems. Computer Science and Computer Engineering',
    className: 'md:col-span-2',

    thumbnail: '/exp3.svg',
  },
];

export const socialMedia = [
  {
    id: 1,
    img: '/git.svg',
    link: 'https://github.com/7Sergey',
  },
  {
    id: 2,
    img: '/telegram.png',
    link: 'https://t.me/sergeyf7',
  },
  {
    id: 3,
    img: '/codewars.png',
    link: 'https://www.codewars.com/users/7Sergey',
  },
];

export const technologies = [
  {
    name: 'HTML 5',
    icon: './tech/html.png',
  },
  {
    name: 'CSS 3',
    icon: './tech/css.png',
  },
  // {
  //   name: 'Sass',
  //   icon: './sass.svg',
  // },
  {
    name: 'JavaScript',
    icon: './tech/javascript.png',
  },
  {
    name: 'TypeScript',
    icon: './tech/typescript.png',
  },
  {
    name: 'React JS',
    icon: './tech/reactjs.png',
  },
  {
    name: 'Redux Toolkit',
    icon: './tech/redux.png',
  },
  {
    name: 'Next',
    icon: './next.svg',
  },
  {
    name: 'Tailwind CSS',
    icon: './tech/tailwind.png',
  },
  {
    name: 'Node JS',
    icon: './tech/nodejs.png',
  },
  {
    name: 'MongoDB',
    icon: './tech/mongodb.png',
  },

  {
    name: 'git',
    icon: './tech/git.png',
  },
  {
    name: 'figma',
    icon: './tech/figma.png',
  },
];
