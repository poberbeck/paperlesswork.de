import React from 'react';
import Image from 'next/image';
import { format } from 'date-fns';

interface Props {
    date: string;
}

const BlogPostAutor: React.FC<Props> = (props) => {
    const { date } = props;
    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-4">
            <div className="flex justify-center items-center gap-4">
                <div className="relative aspect-square h-16 rounded-full overflow-hidden">
                    <Image
                        layout="fill"
                        src={
                            'https://hub.paperlesswork.de/uploads/me_uid_61531491ef305_f9ed5795b9.png'
                        }
                        alt="Autor"
                    />
                </div>
                <div>
                    <p className="text-lg font-bold">Autor:</p>
                    <p className="text-gray-600">Pascal Oberbeck</p>
                </div>
            </div>
            <div>
                <p className="text-gray-600">
                    {format(new Date(date), 'dd.MM.yyyy')}
                </p>
            </div>
        </div>
    );
};

export default BlogPostAutor;
