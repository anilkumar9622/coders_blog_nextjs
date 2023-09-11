import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { IArticle } from '../types';
import { formatDate } from '../utils';

interface IPropType {
    article: IArticle;
}

const Blogcard = ({article}: IPropType) => {
  console.log(">>>>>>>>..", article.attributes.shortDescription);
  
  return (
    <div>
        <Link href="#" style={{textDecoration: 'none'}}>
            <h3 className='text-xl text-gray-600 font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary'
            >
                 {article.attributes.Title}
            </h3>
        </Link>
        <div className='flex items-center my-4'>
            <div className='rounded-lg overflow-hidden flex items-center justify-center mr-2'>
                <Image
                  // src={`${process.env.API_BASE_URL}${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`} alt='author'
                  src={`http://localhost:1337${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`} alt='author'
                  height = {40}
                  width = {40}   
                />
            </div>
            <span className='text-sm font-bold text-gray-600'>
                {article.attributes.author.data.attributes.firstname} {' '}
                {article.attributes.author.data.attributes.lastname} on
                &nbsp;
                <span className='text-gray-400'>
                     {formatDate(article.attributes.createdAt)}
                </span>
                </span>
            
        </div>
        <div className='text-gray-500'>
          {article.attributes?.shortDescription?.slice(0, 250)}
          {article.attributes?.shortDescription?.length > 250 ? "..." : ""} 
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat alias consequuntur fugit impedit maxime asperiores officiis totam fugiat odit ex, consectetur explicabo, delectus, quibusdam quae ullam debitis quam! Quae eaque ratione officiis dolorem, molestiae excepturi veniam, recusandae cupiditate dolores placeat nemo et voluptatem numquam. Aut, nesciunt. Delectus neque dolores dolorum odit laborum, velit, vitae quos non dicta quaerat officia sunt rem deserunt voluptates at perspiciatis distinctio eveniet sed quasi earum vero illo aut. Dolor, debitis minima consequuntur voluptatum corrupti nesciunt maiores eligendi quos! Iusto accusantium sed odit suscipit et dicta, ad maiores numquam perferendis, ipsa eius rerum in earum dolorum aut odio eveniet. Excepturi, sed, incidunt distinctio vero dolorum doloremque ducimus cupiditate nihil eum recusandae soluta modi iure est porro ea autem. Autem magni a repudiandae asperiores, nihil molestias, soluta nulla voluptatibus dolores nam praesentium sapiente temporibus laboriosam ad non quidem nobis voluptas hic blanditiis? Maiores numquam veniam vel repellendus, ab nostrum in quia perferendis vero doloremque magnam blanditiis ea ratione sunt magni porro distinctio totam corrupti sit nobis dolor omnis reprehenderit nulla sint. Dolorem, aliquid hic illo, commodi exercitationem provident totam atque rem perferendis accusantium sunt quae officia error illum excepturi? Sunt, sit. Maiores sequi doloribus at, excepturi atque quam ipsum, perspiciatis esse iure nesciunt nulla? Doloremque, provident! Ipsum, aspernatur perferendis maiores at nobis nostrum aliquam animi minima suscipit placeat eius eaque, dolore harum aliquid cupiditate velit rerum assumenda laudantium tempore quae perspiciatis accusantium. Explicabo minus velit voluptates provident nisi maxime voluptatem, quia culpa laudantium debitis quo autem aliquid odit commodi quod iure nostrum ducimus placeat veniam illo aut nihil! Tempore voluptates qui, ipsa sint, doloribus ex quae officiis facere harum quisquam dignissimos? Odit ut provident, possimus vitae dolorum repellendus nihil aut, itaque earum aperiam maiores eius perferendis pariatur. Possimus quis doloribus omnis aperiam incidunt non architecto corrupti voluptatibus. */}
          </div>
    </div>
  )
}

export default Blogcard;