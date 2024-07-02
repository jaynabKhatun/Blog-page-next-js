import Link from 'next/link';
import React from 'react';

const AboutContent = () => {
    return (
        <div>
            <Link href="/about/result">Results</Link>
            <br />
            <Link href="/about/resume">Resume</Link>
        </div>
    );
};

export default AboutContent;