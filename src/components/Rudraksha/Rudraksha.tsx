"use client"
import { getAllProducts } from '@/services/products'
import Loader from '@/shared/Loader'
import { Accordion, AccordionItem, Checkbox, CheckboxGroup, Divider, Pagination } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { josefin } from '@/utils/font'

const Products = () => {
  const limit=12
  const [page,setPage]=useState(1)
  const pageRef=React.useRef<HTMLDivElement>(null)

  const {data:productsData,isLoading}=useQuery({
        queryKey:["products-page",page,limit],
        queryFn:()=>getAllProducts(page,limit)
    })

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    pageRef?.current?.scrollIntoView({behavior: 'smooth',block: 'start' });
    };

  if(isLoading) return <Loader/>

  return (
    <>
    <div ref={pageRef} className='w-full lg:px-16 px:4'>
          <div className='w-full h-full gap-8  lg:my-4 my-4 flex items-start justify-between'>
            <div className="w-[20%] h-screen mt-16">
              <Accordion 
                defaultSelectedKeys={["1"]} 
                className="w-full"
              >
                <AccordionItem 
                  key="1" 
                  aria-label="Sort Products" 
                  title="Sort Products"
                  classNames={{
                    title:`text-2xl text-primary font-semibold ${josefin.className}`
                  }}
                >
                  <CheckboxGroup className="[&_*]:text-black">
                    <Checkbox value="highest-lowest">By Price (Highest-Lowest)</Checkbox>
                    <Checkbox value="lowest-highest">By Price (Lowest-Highest)</Checkbox>
                    <Checkbox value="faces">By Faces</Checkbox>
                  </CheckboxGroup>
                </AccordionItem>
              </Accordion>
              
              <h1 className={`mt-8 mb-2 text-2xl text-primary font-semibold ${josefin.className}`}>
                Filter Products
              </h1>
              
              <Accordion className="[&_*]:text-black">
                <AccordionItem key="2" aria-label="Accordion 2" title="Price">
                  <CheckboxGroup className="[&_*]:text-black">
                    <Checkbox value="highest-lowest">$1200-$1500</Checkbox>
                    <Checkbox value="lowest-highest">$1500-$1700</Checkbox>
                    <Checkbox value="faces">$2000 and more</Checkbox>
                  </CheckboxGroup>
                </AccordionItem>
              </Accordion>
            </div>
            <Divider orientation='vertical' className='h-[85%]  bg-primary'/>
            <div className='w-[80%]'>
              <h1 className={`my-6 text-4xl text-primary font-semibold ${josefin.className}`}>Rudraksha Collection</h1>
              <div className=' grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-x-4 gap-y-4'>
                {productsData?.products?.map((item:any)=>{ //eslint-disable-line @typescript-eslint/no-explicit-any
                                return(
                                    <div className='' key={item._id}>
                                        <div className=' w-full bg-white flex flex-col shadow-sm'>
                                            <div className='h-[160px] w-full'>
                                                <Image src={item?.img?.[0]} alt='rud' height={1000} width={1000} className='object-cover w-full h-full'/>
                                            </div>
                                            <div className='px-4 py-4 flex items-center gap-2 justify-between'>
                                                <h1 className=' font-semibold'>{item.title}</h1>
                                                <div className='bg-primary text-sm rounded-2xl text-white px-4 py-1'>
                                                    <p>{item.size}</p>
                                                </div>
                                            </div>
                                                <Link href={`/rudraksha/${item._id}`} className='flex w-full items-center justify-center cursor-pointer'>
                                                    <h1 className='font-medium text-primary text-sm underline underline-offset-2 mb-4'>View Details</h1>
                                                </Link>
                                        </div>
                                    </div>
                                )
                            })}
              </div>
            </div>
          </div>
              {productsData?.totalPages > 1 && (
                          <div className="flex justify-center my-12">
                              <Pagination
                                  isCompact
                                  showControls
                                  initialPage={1}
                                  className='text-primary'
                                  total={productsData?.totalPages}
                                  page={page}
                                  onChange={handlePageChange}
                              />
                          </div>
                      )}
          
    </div>
    </>
  )
}

export default Products
