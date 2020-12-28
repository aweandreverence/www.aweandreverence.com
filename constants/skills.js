const headers = ['Web and Frontend', 'Backend', 'Server'];
const items = [['JavaScript', 'CSS', 'HTML', 'NextJS', 'ReactJS', 'LESS CSS'], ['Python', 'Django', 'Linux', 'BASH and other Unix utilities'], ['MySQL', 'Redis', 'RabbitMQ']];
const SKILLS = [];

for(var i = 0; i < headers.length; i++) {
    var col = {};
    col.header = headers[i];
    col.items = items[i];
    SKILLS.push(col);
}

export default SKILLS;
