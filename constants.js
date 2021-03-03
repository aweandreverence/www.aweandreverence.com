const SITE_TITLE = 'Awe & Reverence';

const PAGE_TITLES = {
    '/': 'Home',
    '/blog': 'Blog',
    '/about': 'About',
    '/apprenticeship': 'Apprenticeship',
};

const NAV_LINKS = [
    {
        name: 'Home',
        url: '/',
    },
    {
        name: 'Blog',
        url: '/blog',
    },
    {
        name: 'Maskil',
        url: 'https://maskil.church',
    },
    {
        name: 'About',
        url: '/about',
    },
    {
        name: 'Apprenticeship',
        url: '/apprenticeship',
    },
];

// --------------------------------------------------
// List of Skills
// --------------------------------------------------

const headers = ['Web and Frontend', 'Backend', 'Server'];

const items = [
    ['JavaScript', 'CSS', 'HTML', 'NextJS', 'ReactJS', 'LESS CSS'],
    ['Python', 'Django', 'Linux', 'BASH and other Unix utilities'],
    ['MySQL', 'Redis', 'RabbitMQ'],
];

const links = [
    [
        'https://www.javascript.com/',
        'https://developer.mozilla.org/en-US/docs/Web/CSS',
        'https://developer.mozilla.org/en-US/docs/Web/HTML',
        'https://nextjs.org/',
        'https://reactjs.org/',
        'http://lesscss.org/',
    ],
    [
        'https://www.python.org/',
        'https://www.djangoproject.com/',
        'https://www.linux.org/',
        null,
    ],
    [
        'https://www.mysql.com/',
        'https://redis.io/',
        'https://www.rabbitmq.com/',
    ],
];

const SKILLS = [];

for (var i = 0; i < headers.length; i++) {
    var col = {};
    col.header = headers[i];
    col.items = items[i];
    col.links = links[i];
    SKILLS.push(col);
}

export default SKILLS;

export { NAV_LINKS, PAGE_TITLES, SITE_TITLE };
