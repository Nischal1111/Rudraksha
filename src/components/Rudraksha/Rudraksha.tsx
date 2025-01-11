"use client"
import React, { useState } from 'react';
import { getAllProducts } from '@/services/products';
import Loader from '@/shared/Loader';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { josefin } from '@/utils/font';
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Pagination,
  Chip,
  Slider,
  Divider,
} from '@nextui-org/react';
import {
  FiFilter,
  FiChevronDown,
  FiArrowRight,
  FiDollarSign,
} from 'react-icons/fi';

interface Product {
  _id: string;
  title: string;
  size: string;
  price: number;
  img: string[];
}

interface ProductsData {
  products: Product[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalCount: number;
  };
}

const Products: React.FC = () => {
  const limit = 9;
  const [page, setPage] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([1200, 2500]);
  const [sortKey, setSortKey] = useState<string>('featured');
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['All']);
  const pageRef = React.useRef<HTMLDivElement>(null);

  const { data: productsData, isLoading } = useQuery<ProductsData>({
    queryKey: ['products-page', page, limit],
    queryFn: () => getAllProducts(page, limit),
  });

  const handlePageChange = (newPage: number): void => {
    setPage(newPage);
    pageRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const toggleSidebar = (): void => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (isLoading) return <Loader />;

  const categories: string[] = ['All', 'Natural', 'Certified', "Collector's Edition"];

  return (
    <div ref={pageRef} className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Pattern */}
      <div className="bg-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')]"></div>
        <div className="max-w-7xl mx-auto px-4 py-16 relative">
          <h1 className={`text-4xl text-primary font-bold ${josefin.className}`}>
            Rudraksha Collection
          </h1>
          <p className="text-gray-600 mt-4 flex items-center gap-2 text-lg">
            Discover our sacred collection of carefully curated Rudraksha beads
          </p>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <div
            className={`md:w-1/4  p-6 rounded-lg ${
              isSidebarOpen ? 'fixed inset-0 z-50 md:relative' : 'hidden md:block'
            }`}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Filters</h3>
              <Button isIconOnly variant="light" className="md:hidden" onPress={toggleSidebar}>
                ×
              </Button>
            </div>

            <Divider className="my-4" />

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <FiDollarSign />
                  Price Range
                </h4>
                <Slider
                  label="Price Range"
                  step={100}
                  minValue={1000}
                  maxValue={3000}
                  defaultValue={priceRange}
                  formatOptions={{ style: 'currency', currency: 'USD' }}
                  className="max-w-md"
                  onChange={(value) => setPriceRange(value as [number, number])}
                />
              </div>

              <Divider />

              <div>
                <h4 className="text-lg font-semibold mb-4">Categories</h4>
                <div className="flex flex-col gap-2">
                  {categories.map((category) => (
                    <Chip
                      key={category}
                      variant={selectedCategories.includes(category) ? 'solid' : 'flat'}
                      color="primary"
                      className="cursor-pointer w-full justify-start"
                      onClick={() => {
                        if (category === 'All') {
                          setSelectedCategories(['All']);
                        } else {
                          const newCategories = selectedCategories.filter((c) => c !== 'All');
                          if (selectedCategories.includes(category)) {
                            setSelectedCategories(newCategories.filter((c) => c !== category));
                          } else {
                            setSelectedCategories([...newCategories, category]);
                          }
                        }
                      }}
                    >
                      {category}
                    </Chip>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:w-3/4">
            {/* Controls Bar */}
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

              <div className="flex items-center gap-4">
                <Dropdown>
                  <DropdownTrigger>
                    <Button  className='text-primary rounded-sm border border-primary bg-white' endContent={<FiChevronDown />}>
                      {sortKey === 'featured'
                        ? 'Sort by Featured'
                        : sortKey === 'price_asc'
                        ? 'Price: Low to High'
                        : 'Price: High to Low'}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Sort options"
                    onAction={(key) => setSortKey(key as string)}
                  >
                    <DropdownItem key="featured">Sort by Featured</DropdownItem>
                    <DropdownItem key="price_asc">Price: Low to High</DropdownItem>
                    <DropdownItem key="price_desc">Price: High to Low</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>

            {/* Regular Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productsData?.products?.map((item) => (
                <div key={item._id} className="group bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-64 w-full">
                    <Image
                      src={item.img[0]}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold">{item.title}</h4>
                        <Chip size="sm" color="primary" variant="flat" className="mt-2">
                          {item.size}
                        </Chip>
                      </div>
                    </div>
                    <Link
                      href={`/rudraksha/${item._id}`}
                      className="mt-4 inline-flex items-center text-primary hover:text-primary/80"
                    >
                      View Details
                      <FiArrowRight className="ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {productsData?.pagination &&
            (
                productsData?.pagination?.totalPages > 1 && (
              <div className="flex justify-center mt-12">
                <Pagination
                  total={productsData?.pagination?.totalPages}
                  page={page}
                  onChange={handlePageChange}
                  showControls
                  color="primary"
                  className="gap-2"
                />
              </div>
            )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;