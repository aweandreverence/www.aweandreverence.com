import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { SKILLS } from '@/config/skills.js';

export function SKILLS_LIST({ children }) {
    const cols = [];
    for (var i = 0; i < SKILLS.length; i++) {
        cols.push(
            <>
                <h4 key={`skill-${i}-header`}>{SKILLS[i].header}</h4>
                <ul>
                    {SKILLS[i].items.map((item, index) => (
                        <a
                            href={SKILLS[i].links[index]}
                            key={`link-${i}:${index}`}
                            target="_blank"
                        >
                            <li key={`skill-${i}:${index}`}>{item}</li>
                        </a>
                    ))}
                </ul>
            </>
        );
    }
    return (
        <div>
            <Row>
                {cols.map((col, index) => (
                    <Col key={`col-${index}`}>{col}</Col>
                ))}
            </Row>
        </div>
    );
}
