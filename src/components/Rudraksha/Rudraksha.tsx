"use client"
import React, { useState } from 'react';
import { getByCategory, getByFilter, getSpecialProduct } from '@/services/products';
import Loader from '@/shared/Loader';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Pagination, Chip, CheckboxGroup, Checkbox, Accordion, AccordionItem } from '@nextui-org/react';
import { FiFilter, FiArrowRight, FiX } from 'react-icons/fi';
import { josefin } from '@/utils/font';
import SharedTitle from '@/shared/SharedTitle/SharedTitle';
import { toast } from 'sonner';

export interface Product {
  _id: string;
  title: string;
  size: string;
  price: number;
  img: string[];
  faces: string;
  country: string;
  weight: string;
  category: string;
  description?: string;
}

export interface ProductsData {
  products: Product[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalCount: number;
  };
}

interface FilterState {
  category: string;
  value: string;
}

const Products = () => {
  // Constants
  const ITEMS_PER_PAGE = 9;
  
  // State Management
  const [page, setPage] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedFace, setSelectedFace] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [activeFilter, setActiveFilter] = useState<FilterState | null>(null);
  
  // Refs
  const pageRef = React.useRef<HTMLDivElement>(null);

  // Queries
  const { data: productsData, isLoading, error } = useQuery<ProductsData>({
    queryKey: ['products', page, ITEMS_PER_PAGE, activeFilter],
    queryFn: async () => {
      try {
        if (activeFilter) {
          return await getByFilter(activeFilter.category, activeFilter.value);
        }
        return await getByCategory("Beads", page, ITEMS_PER_PAGE);
      } catch (error) {
        toast.error("Failed to fetch products");
        throw error;
      }
    },
  });

  const { data: specialProducts, isLoading: specialLoading } = useQuery<ProductsData>({
    queryKey: ['special-products'],
    queryFn: async () => {
      try {
        return await getSpecialProduct();
      } catch (error) {
        toast.error("Failed to fetch special products");
        throw error;
      }
    },
  });

  // Filter Options
  const filterOptions = {
    faces: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'],
    sizes: ['small', 'medium', 'large'],
    countries: ['Nepal', 'Indonesia']
  };

  // Handlers
  const handlePageChange = (newPage: number): void => {
    setPage(newPage);
    pageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleFilterChange = (category: string, value: string) => {
    if (!value) {
      setActiveFilter(null);
      return;
    }

    setActiveFilter({
      category,
      value
    });
    setPage(1);
  };

  const clearFilters = () => {
    setSelectedFace("");
    setSelectedSize("");
    setSelectedCountry("");
    setActiveFilter(null);
    setPage(1);
  };

  if (isLoading || specialLoading) return <Loader />;
  if (error) return <div className="text-center py-10">Error loading products. Please try again later.</div>;

  return (
    <div ref={pageRef} className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[500px] text-white">
        <Image
          src="https://images.pexels.com/photos/9313444/pexels-photo-9313444.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Rudraksha Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <div className="max-w-3xl">
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${josefin.className}`}>
              Our Sacred Rudraksha Beads Collection
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8">
              Explore our curated collection of authentic Rudraksha beads, carefully sourced from sacred locations across Nepal, India, and Indonesia.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className={`md:w-1/4 bg-white rounded-xl shadow-md p-6 mt-20 h-fit
            ${isSidebarOpen ? 'fixed inset-0 z-50 md:relative' : 'hidden md:block'}`}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Filters</h3>
              <div className="flex gap-2">
                {activeFilter && (
                  <Button 
                    size="sm"
                    variant="light" 
                    color="danger"
                    onPress={clearFilters}
                  >
                    Clear All
                  </Button>
                )}
                <Button 
                  isIconOnly 
                  variant="light" 
                  className="md:hidden"
                  onPress={() => setIsSidebarOpen(false)}
                >
                  <FiX />
                </Button>
              </div>
            </div>

            <Accordion>
              {/* Faces Filter */}
              <AccordionItem key="faces" title="Faces" classNames={{
                    title:"!text-black"
                  }}>
                <CheckboxGroup
                  value={selectedFace ? [selectedFace] : []}
                  onChange={(value) => {
                    const newValue = value[0] || "";
                    setSelectedFace(newValue);
                    handleFilterChange('faces', newValue);
                  }}
                >
                  {filterOptions.faces.map((face) => (
                    <Checkbox key={face} value={face} classNames={{ label: "!text-black" }}>
                      {face} Face
                    </Checkbox>
                  ))}
                </CheckboxGroup>
              </AccordionItem>

              {/* Size Filter */}
              <AccordionItem key="size" title="Size" classNames={{
                    title:"!text-black"
                  }}>
                <CheckboxGroup
                  value={selectedSize ? [selectedSize] : []}
                  onChange={(value) => {
                    const newValue = value[0] || "";
                    setSelectedSize(newValue);
                    handleFilterChange('size', newValue);
                  }}
                >
                  {filterOptions.sizes.map((size) => (
                    <Checkbox key={size} value={size} classNames={{ label: "!text-black" }}>
                      {size.charAt(0).toUpperCase() + size.slice(1)}
                    </Checkbox>
                  ))}
                </CheckboxGroup>
              </AccordionItem>

              {/* Country Filter */}
              <AccordionItem key="country" title="Origin" classNames={{
                    title:"!text-black"
                  }}>
                <CheckboxGroup
                  value={selectedCountry ? [selectedCountry] : []}
                  onChange={(value) => {
                    const newValue = value[0] || "";
                    setSelectedCountry(newValue);
                    handleFilterChange('country', newValue);
                  }}
                >
                  {filterOptions.countries.map((country) => (
                    <Checkbox key={country} value={country} classNames={{ label: "!text-black" }}>
                      {country}
                    </Checkbox>
                  ))}
                </CheckboxGroup>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Products Grid */}
          <div className="md:w-3/4">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <Button
                variant="flat"
                className="md:hidden"
                onPress={() => setIsSidebarOpen(true)}
                startContent={<FiFilter />}
              >
                Filters
              </Button>
            </div>

            {/* Active Filters Display */}
            {activeFilter && (
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedFace && (
                  <Chip 
                    onClose={() => {
                      setSelectedFace("");
                      handleFilterChange('faces', "");
                    }}
                    variant="flat"
                    color="primary"
                  >
                    Face: {selectedFace}
                  </Chip>
                )}
                {selectedSize && (
                  <Chip 
                    onClose={() => {
                      setSelectedSize("");
                      handleFilterChange('size', "");
                    }}
                    variant="flat"
                    color="primary"
                  >
                    Size: {selectedSize}
                  </Chip>
                )}
                {selectedCountry && (
                  <Chip 
                    onClose={() => {
                      setSelectedCountry("");
                      handleFilterChange('country', "");
                    }}
                    variant="flat"
                    color="primary"
                  >
                    Country: {selectedCountry}
                  </Chip>
                )}
              </div>
            )}

            {/* Products Grid */}
            <div>
              <h1 className={`text-primary font-bold text-4xl mb-8 ${josefin.className}`}>Our Rudraksha Beads Collection</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {productsData?.products.map((product) => (
                  <div key={product._id} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-1 transition-all duration-300">
                    <Link
                        href={`/rudraksha/${product._id}`}
                      >

                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={product.img[0]}
                          alt={product.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      </Link>
                    <div className="px-6 py-2">
                        <div className='flex items-center justify-between gap-2'>
                          <h4 className="text-xl font-semibold mb-2">{product.title}</h4>
                          <div className="text-xl font-bold text-primary">${product.price}</div>
                        </div>

                          <div className="flex gap-2 mt-2">
                            <Chip size="sm" variant="flat" color="primary">{product.size}</Chip>
                            <Chip size="sm" variant="flat" color="secondary">{product.faces} Face</Chip>
                            <Chip size="sm" variant="flat" color="success">{product.country}</Chip>
                          </div>
                      <Link
                        href={`/rudraksha/${product._id}`}
                        className="inline-flex items-center mt-4 text-primary hover:text-primary/80 font-medium"
                      >
                        View Details
                        <FiArrowRight className="ml-2" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
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

      {/* Special Products Section */}
      {specialProducts?.products && specialProducts.products.length > 0 && (
        <div className="w-full px-4 md:px-16 mt-12 mb-16">
          <div className="mx-auto text-center mb-12">
            <SharedTitle title="Our Special Collection" />
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              Discover our carefully curated selection of premium Rudraksha beads, 
              handpicked for their exceptional quality and spiritual significance. 
              Each piece in this collection represents the finest examples of sacred craftsmanship.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialProducts.products.map((product) => (
              <div 
                key={product._id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative">
                  <div className="absolute top-4 right-4 z-10">
                    <Chip 
                      color="primary" 
                      variant="solid"
                      size="sm"
                      className="font-medium"
                    >
                      Special
                    </Chip>
                  </div>
                  <Link
                    href={`/rudraksha/${product._id}`}
                  >
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={product.img[0]}
                        alt={product.title}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  </Link>
                </div>
                
                <div className="p-6 text-center">
                  <h4 className="text-xl font-semibold mb-4">{product.title}</h4>
                  <div className="flex justify-center gap-2 mb-4">
                    <Chip size="sm" variant="flat" color="primary">{product.size}</Chip>
                    <Chip size="sm" variant="flat" color="secondary">{product.faces} Face</Chip>
                  </div>
                  <div className="text-2xl font-bold text-primary mb-4">
                    ${product.price}
                  </div>
                  <Link
                    href={`/rudraksha/${product._id}`}
                    className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
                  >
                    View Details
                    <FiArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;