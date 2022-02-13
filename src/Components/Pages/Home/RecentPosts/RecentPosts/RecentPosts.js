import React from 'react';
import RecentPost from '../RecentPost/RecentPost';

const RecentPosts = () => {
    return (
        <div className='py-20' data-aos="zoom-in">
            <div className='container mx-auto px-4 '>
                <h1 className='text-center text-3xl md:text-5xl -tracking-wider pt-14 font-Poppins font-medium'>RECENT POSTS</h1>
                <div className='flex text-center justify-center py-10 ml-3 space-x-2'>
                    <div className='bg-red-500 h-1 w-8'></div>
                    <div className='bg-red-300 h-1 w-4'></div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 py-14'>
                    <RecentPost />
                    <RecentPost />
                    <RecentPost />
                </div>
            </div>
        </div>
    );
};

export default RecentPosts;