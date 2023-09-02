import React from 'react'

function ProjectCard({style}) {
  return (
    <div style={style} className='w-[575px] h-[430px] bg-gray-800 rounded border border-[#444955]'>
         <img alt='' src='https://wallpapers.com/images/featured/4k-oaax18kaapkokaro.jpg' className='w-[100%] h-[55%] rounded border border-[#444955] opacity-50 hover:opacity-100 transition-opacity'/>
         
         <div className='w-[100%]'>

         <div className='flex items-center justify-between p-2'>
         <div style={{fontFamily:"barlow"}} className="text-white text-xl font-medium" > Project Name</div>
         <div className='flex gap-3'> 
         <img src='https://s3-alpha-sig.figma.com/img/fc94/24fc/c59726da082611b2632fc57b3c1810fa?Expires=1694390400&Signature=nCLluT9NTYHeoSkYYYp5Gkz3g74Reviy1KwoBGjuFgmCltKda2PDYQzh8emRoAm0j4b8wV4VWnn17C4xG5W9UhYjqhIJMOihJnR7e0ORLsqEwQyTeXxUKBQW3osO-bTIpeO~71o9QcwkK7vwBQIurg9qGApHhe8JwpMLS7OIOuDWJqn3kuhieViTFhA1L1sehWi7Vxu-jOgi5cMJ5k-cuJ8ipKeS~wnaH-l3ZNc0obZwxwrQmfS42lyhW46loNbO2HcgJyhg13VqVrfxJeED8J3tpt6wZbCPzGpcJU6fieBermTtwuPCaiRb382oERrVTQsLI7Q64rV-zTcu8MxtBQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='git' className='w-6 h-6 rounded hover:cursor-pointer hover:scale-125 transition-transform' />
        <img src='https://s3-alpha-sig.figma.com/img/1162/0996/08cdde5a0a7cdadf6961884f63d57228?Expires=1694390400&Signature=n5geHNs1m05PeAxkT80NgvjkHHQHPEsj~HjraEcqm2dmPXw8N6cEl5wsmbiFXjCS1P-UafXxweesEHvSg1-viC-RaLJSgqDCuZd2isE7pXh4VVzU78-BO3XXLWIhSa43WU1S2Nb1IWna-lpqVfTWGTGCXY8C13ZNhVcyDNzy6fcAhZ4Vs~~ANzK-OXBATcCqZM5lIxc8XG7nh~40UiAqJv5AeAgRN-M8-kEw6yenIjC475Gi07imy~qHf2dqihJMjsJ1zDeOyYHu7zF8M41EYfkl6OTXTPogu4scSLhvaODbvlKlOV-K~i14fqzqLmeJ6CCbEvb~fTIBivJGr2oGMA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='fig' className='w-6 h-6 rounded hover:cursor-pointer hover:scale-125 transition-transform' />
        <img src='https://s3-alpha-sig.figma.com/img/4e93/c09b/062eb958909278e9f6ce731fa65566a1?Expires=1694390400&Signature=EfST0jbwaPMTnULaKMQnu57SDZdMe9AaC9fUWSarGLnggqtu0CEpWC2-586CD2AJS3LjBKBQMIUEksOm8Um5K1Rtcxiebg4W~W2O8yNM1ZEzF-~aQcnlr~zxURQ5xspAwWsnXorQVDZyts~2xm8RsdD0qjkx7cxa-i0TU1Yj0rsQLjl4t1GoJtkiA9q~emSwmbvsmBFsn5VNKP9ZPHHgU45KmkzTMPBHszlfPh35q~13vV15hVnMMf4YfHynrDldfmPixqU8l1FCmiv2fhUdWsSqmFUsHVXjCOwzYQQUh2trSHVmo5tf0M67efTwQexkcwJt8pf510VsWvGhYoL~PA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='linkin' className='w-6 h-6 rounded hover:cursor-pointer hover:scale-125 transition-transform' />
        </div>
         </div>

         <div className="p-2 w-[564px] text-gray-400 text-base font-normal leading-snug tracking-tight">Lorem ipsum dolor sit amet consectetur. At duis suspendisse condimentum sed pulvinar pellentesque dui ipsum. Et tellus eget cras diam. Ullamcorper sed vitae eros neque non enim.</div>

         <div className='flex p-2'>

         <a href="#_" class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium rounded-full group">
         <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
         <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
         <span style={{fontFamily:"barlow"}} class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">Github 🔗</span>
         <span class="absolute inset-0 border-2 border-white rounded-full"></span>
         </a>

         </div>
         </div>

        </div>
  )
}

export default ProjectCard