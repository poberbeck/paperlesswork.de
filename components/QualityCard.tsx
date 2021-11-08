import React from 'react';

interface Props {
    title: string;
    description: string;
    image: string;
    primay: boolean;
}

const QualityCard: React.FC<Props> = (props) => {
    const { title, description, image, primay } = props;

    const bgClasses = primay ? 'bg-gradient-to-br from-indigo-700 to-pink-700' : 'bg-white';
    const titleColorClasses = primay ? 'text-white' : 'text-indigo-700';
    const descriptionColorClasses = primay ? 'text-white' : 'text-black';

    return (
        <div className={bgClasses + ' shadow-md rounded-xl p-5 space-y-5'}>
            <h3 className={titleColorClasses + ' font-bold text-xl'}>{title}</h3>
            <p className={descriptionColorClasses}>{description}</p>
            <div className='flex justify-center items-end'>
                <img className='h-64' alt={title + ' Icon'} src={image} />
            </div>
        </div>
    );
};

export default QualityCard;
