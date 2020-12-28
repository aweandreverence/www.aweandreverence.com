const headers = ['Web and Frontend', 'Backend', 'Server'];
const items = [['JavaScript', 'CSS', 'HTML', 'NextJS', 'ReactJS', 'LESS CSS'], ['Python', 'Django', 'Linux', 'BASH and other Unix utilities'], ['MySQL', 'Redis', 'RabbitMQ']];
const SKILLS_LIST = [];
for(var i = 0; i < headers.length; i++) {
    var row = {};
    row.header = headers[i];
    row.items = items[i];
    SKILLS_LIST.push(row);
}

export default SKILLS_LIST;
