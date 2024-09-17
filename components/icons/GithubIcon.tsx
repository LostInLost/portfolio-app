import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';

export default function GithubIcon() {
    return (
        <div>
            <FontAwesomeIcon icon={faGithub} className='hover:scale-120' />
        </div>
    );
}
