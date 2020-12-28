import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import SKILLS from '../constants/skills.js'

function SKILLS_LIST({children}) {
    const cols = [];
    for (var i = 0; i < SKILLS.length; i++) {
        cols.push(
            <>
                <h4>{SKILLS[i].header}</h4>
                <ul>
                    {
                        SKILLS[i].items.map(item => (<li>{item}</li>))
                    }
                </ul>
            </>
        );
    }
    return (
        <div>
            <Row>
                {cols.map(col => (<Col>{col}</Col>))}
            </Row>
        </div>
    );
};
export default SKILLS_LIST;
