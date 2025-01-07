"use client"
import { getAllProducts } from '@/services/products'
import Loader from '@/shared/Loader'
import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { josefin } from '@/utils/font'
import { 
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Pagination,
  Chip,
  Slider
} from '@nextui-org/react'
import { 
  FiFilter, 
  FiChevronDown, 
  FiArrowRight, 
  FiDollarSign,
  FiStar 
} from 'react-icons/fi'

const Products = () => {
  const limit = 12
  const [page, setPage] = useState(1)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [priceRange, setPriceRange] = useState([1200, 2500]) //eslint-disable-line @typescript-eslint/no-unused-vars
  const [sortKey, setSortKey] = useState("featured")
  const pageRef = React.useRef<HTMLDivElement>(null)

  const {data: productsData, isLoading} = useQuery({
    queryKey: ["products-page", page, limit],
    queryFn: () => getAllProducts(page, limit)
  })

  const handlePageChange = (newPage: number) => {
    setPage(newPage)
    pageRef?.current?.scrollIntoView({behavior: 'smooth', block: 'start'})
  }

  if(isLoading) return <Loader/>

  return (
    <div ref={pageRef} className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className={`text-4xl text-primary font-bold ${josefin.className}`}>
            Rudraksha Collection
          </h1>
          <p className="text-gray-600 mt-2 flex items-center gap-2">
            <FiStar className="text-primary" />
            Discover our sacred collection of carefully curated Rudraksha beads
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Controls Bar */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8">
          <Button 
            variant="flat"
            color="primary"
            className='rounded-sm px-8 text-black'
            onPress={() => setIsFilterOpen(!isFilterOpen)}
            startContent={<FiFilter />}
          >
            Filters
          </Button>
          
          <div className="flex items-center gap-4">
            <Dropdown>
              <DropdownTrigger>
                <Button 
                  variant="bordered"
                  className='rounded-sm px-8 text-black'
                  endContent={<FiChevronDown />}
                >
                  {sortKey === 'featured' ? 'Sort by Featured' : 
                   sortKey === 'price_asc' ? 'Price: Low to High' : 
                   'Price: High to Low'}
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
            
            <div className="hidden sm:flex items-center gap-2 text-gray-500">
              <span>{productsData?.products?.length} items</span>
            </div>
          </div>
        </div>

        {/* Filters Section */}
        {isFilterOpen && (
          <div className="bg-white shadow-lg rounded-lg mb-8 p-6">
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <FiDollarSign />
                  Price Range
                </h3>
                <Slider 
                  label="Price Range"
                  step={100}
                  minValue={1000}
                  maxValue={3000}
                  defaultValue={priceRange}
                  formatOptions={{ style: "currency", currency: "USD" }}
                  className="max-w-md"
                />
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {["All", "Natural", "Certified", "Collector's Edition"].map((category) => (
                    <Chip 
                      key={category}
                      variant="flat"
                      className="cursor-pointer hover:bg-primary/20"
                    >
                      {category}
                    </Chip>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productsData?.products?.map((item: any) => ( //eslint-disable-line @typescript-eslint/no-explicit-any
            <div 
              key={item._id} 
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src={item?.img?.[0]} 
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex flex-col items-start gap-2">
                <div className="flex items-start justify-between w-full">
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                  <Chip size="sm" color="primary" variant="flat">
                    {item.size}
                  </Chip>
                </div>
                <Link 
                  href={`/rudraksha/${item._id}`}
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  View Details 
                  <FiArrowRight className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {productsData?.totalPages > 1 && (
          <div className="flex justify-center mt-12">
            <Pagination
              total={productsData?.totalPages}
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
  )
}

export default Products