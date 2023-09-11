import Link from 'next/link';
import React from 'react'
import { IArticle } from '../types';

interface IPropType {
    article: IArticle;
}
const BlogCardWithImage = ({ article }: IPropType) => {
  return (
    <div className="bg-gradient-to-r from-violet-500 to-violet-900 rounded-md flex items-center justify-between h-64">
      <Link href="#" style={{textDecoration:'none'}}>
          <span className="text-2xl w-2/3 text-white p-6 font-bold after:content-[''] after:bg-primary after:block after:w-16 after:h-1 after:rounded-md after:mt-2 after:mx-6 cursor-pointer">
           {article.attributes.Title}
          </span>
      </Link>
 <Link href="">  
<svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" 
// xmlns:xlink="http://www.w3.org/1999/xlink"
 x="0px" y="0px"
 viewBox="0 0 70 70" 
    //  style="enable-background:new 0 0 70 70;"
    //   xml:space="preserve"
     style={{width:'140px', height:'140px', paddingRight:"30px"}} >
<g id="Page-1">
	<g id="GitBook" transform="translate(-186.000000, -128.000000)">
		<path id="GitBook_logo_blue" style={{fill:'#3884FF'}} d="M217.505,179.83c1.129,0,2.048,0.919,2.048,2.047
			c0,1.129-0.919,2.047-2.048,2.047c-1.129,0-2.047-0.919-2.047-2.047C215.457,180.749,216.376,179.83,217.505,179.83
			 M249.659,167.149c-1.129,0-2.048-0.919-2.048-2.047c0-1.129,0.919-2.048,2.048-2.048c1.129,0,2.047,0.919,2.047,2.048
			C251.707,166.23,250.788,167.149,249.659,167.149 M249.659,158.761c-3.496,0-6.341,2.844-6.341,6.341
			c0,0.681,0.113,1.359,0.336,2.018l-20.946,11.15c-1.19-1.715-3.119-2.731-5.205-2.731c-2.417,0-4.62,1.383-5.686,3.544
			l-18.818-9.921c-1.988-1.045-3.476-4.32-3.318-7.3c0.082-1.555,0.619-2.761,1.437-3.227c0.519-0.295,1.144-0.269,1.807,0.078
			l0.126,0.066c4.985,2.627,21.304,11.222,21.991,11.541c1.06,0.49,1.65,0.689,3.456-0.167l33.732-17.543
			c0.494-0.187,1.071-0.66,1.071-1.38c0-0.998-1.032-1.391-1.035-1.391c-1.918-0.92-4.867-2.301-7.744-3.647
			c-6.148-2.879-13.116-6.141-16.176-7.744c-2.642-1.383-4.768-0.217-5.148,0.019l-0.737,0.365
			c-13.772,6.811-32.203,15.939-33.253,16.577c-1.879,1.143-3.043,3.421-3.193,6.249c-0.235,4.483,2.052,9.156,5.321,10.871
			l19.898,10.262c0.448,3.105,3.121,5.429,6.27,5.429c3.464,0,6.288-2.792,6.34-6.244l21.915-11.877
			c1.111,0.868,2.489,1.345,3.9,1.345c3.496,0,6.341-2.845,6.341-6.341S253.155,158.761,249.659,158.761"/>
	</g>
</g>
</svg></Link>   
        </div>
  )
}

export default BlogCardWithImage; 