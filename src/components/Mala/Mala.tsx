"use client"
import React, { useState } from 'react';
import {  getByCategory } from '@/services/products';
import Loader from '@/shared/Loader';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Pagination, Chip, Slider, CheckboxGroup, Checkbox, Accordion, AccordionItem } from '@nextui-org/react';
import { FiFilter, FiChevronDown, FiArrowRight } from 'react-icons/fi';
import { josefin } from '@/utils/font';

export interface Product {
  _id: string;
  title: string;
  size: string;
  price: number;
  img: string[];
  faces: string;
  country: string;
  weight: string;
  category:string
}

export interface ProductsData {
  products: Product[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalCount: number;
  };
}

const Mala = () => {
  const limit = 9;
  const [page, setPage] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [sortKey, setSortKey] = useState<string>('featured');
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const pageRef = React.useRef<HTMLDivElement>(null);

  const { data: productsData, isLoading } = useQuery<ProductsData>({
    queryKey: ['mala-products-page', page, limit],
    queryFn: () => getByCategory("Mala",page, limit),
  });

  const handlePageChange = (newPage: number): void => {
    setPage(newPage);
    pageRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const toggleSidebar = (): void => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (isLoading) return <Loader />;
  
  const countries = ['Nepal', 'Indonesia'];

  return (
    <div ref={pageRef} className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[500px] text-white">
        {/* Background Image */}
        <Image
          src="https://images.pexels.com/photos/6633942/pexels-photo-6633942.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Rudraksha Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <div className="max-w-3xl">
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${josefin.className}`}>
              Our Sacred Rudraksha Mala Collection
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8">
              Explore our curated collection of authentic Rudraksha beads, carefully sourced from sacred locations across Nepal, India, and Indonesia.
            </p>
          </div>
        </div>
      </div>

      {/* Main Products Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className={`md:w-1/4 bg-white rounded-xl shadow-md p-6 h-fit ${isSidebarOpen ? 'fixed inset-0 z-50 md:relative' : 'hidden md:block'}`}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Filters</h3>
              <Button isIconOnly variant="light" className="md:hidden" onPress={toggleSidebar}>
                ×
              </Button>
            </div>

            <Accordion 
              className="text-black"
              itemClasses={{
                title: "text-black font-medium",
                content: "text-black"
              }}
            >
              <AccordionItem
                key="price"
                aria-label="Price Range"
                title="Price Range"
              >
                <Slider
                  label="Price Range"
                  step={50}
                  minValue={0}
                  maxValue={1000}
                  defaultValue={priceRange}
                  formatOptions={{ style: 'currency', currency: 'USD' }}
                  className="max-w-md"
                  onChange={(value) => setPriceRange(value as [number, number])}
                />
              </AccordionItem>

              <AccordionItem
                key="origin"
                aria-label="Origin"
                title="Origin"
              >
                <CheckboxGroup 
                  value={selectedCountries} 
                  onChange={setSelectedCountries as any}  //eslint-disable-line @typescript-eslint/no-explicit-any
                  className="gap-1"
                  classNames={{
                    label: "text-black"
                  }}
                >
                  {countries.map((country) => (
                    <Checkbox key={country} value={country} classNames={{label: "text-black"}}>{country}</Checkbox>
                  ))}
                </CheckboxGroup>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Products Grid */}
          <div className="md:w-3/4">
            <div className="flex items-center justify-between mb-8">
              <Button
                variant="flat"
                color="primary"
                className="md:hidden"
                onPress={toggleSidebar}
                startContent={<FiFilter />}
              >
                Filters
              </Button>

              <div className="flex items-center justify-between w-full gap-4 ml-auto">
                <h1 className={`text-primary font-bold text-4xl ${josefin.className}`}>Our Rudraksha Mala Collection</h1>
                <Dropdown>
                  <DropdownTrigger>
                    <Button 
                      className="bg-white border border-primary text-primary rounded-lg hover:bg-primary/5" 
                      endContent={<FiChevronDown />}
                    >
                      {sortKey === 'featured'
                        ? 'Featured'
                        : sortKey === 'price_asc'
                        ? 'Price: Low to High'
                        : 'Price: High to Low'}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Sort options"
                    onAction={(key) => setSortKey(key as string)}
                  >
                    <DropdownItem key="featured">Featured</DropdownItem>
                    <DropdownItem key="price_asc">Price: Low to High</DropdownItem>
                    <DropdownItem key="price_desc">Price: High to Low</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productsData?.products.map((item) => (
                <div key={item._id} className="group bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={item.img[0]}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                        <div className="flex gap-2">
                          <Chip size="sm" variant="flat" className='text-white bg-primary'>{item.size}</Chip>
                          <Chip size="sm" variant="flat" className='text-white bg-purple-300'>{item.faces} Face</Chip>
                        </div>
                      </div>
                      <div className="text-xl font-bold text-gray-800">${item.price}</div>
                    </div>
                    <Link
                      href={`/rudraksha/${item._id}`}
                      className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                    >
                      View Details
                      <FiArrowRight className="ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {productsData?.pagination && productsData.pagination.totalPages > 1 && (
              <div className="flex justify-center mt-12">
                <Pagination
                  total={productsData.pagination.totalPages}
                  page={page}
                  onChange={handlePageChange}
                  showControls
                  color="primary"
                  className="gap-2"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mala;