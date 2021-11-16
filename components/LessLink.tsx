import React from 'react';
import Link from 'next/link';

interface Props
    extends React.DetailedHTMLProps<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
    > {
    href: string;
    children: React.ReactChild | React.ReactChild[];
}

const LessLink: React.FC<Props> = (props) => {
    let { href, children, ...rest } = props;
    return (
        <Link href={href}>
            <a {...rest}>{children}</a>
        </Link>
    );
};

export default LessLink;
