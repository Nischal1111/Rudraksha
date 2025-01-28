"use client"
import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, Input, Button } from "@nextui-org/react";
import { CiSearch } from "react-icons/ci";
import { useRouter } from 'next/navigation';

interface SearchModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onOpenChange }) => {
    const [searchQuery, setSearchQuery] = React.useState<string>("");
    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
            onOpenChange(false);
            setSearchQuery("");
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            size="2xl"
            backdrop='blur'
        >
            <ModalContent>
                {() => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            Search Products
                        </ModalHeader>
                        <ModalBody className="pb-6">
                            <form onSubmit={handleSearch} className="flex gap-2">
                                <Input
                                    autoFocus
                                    endContent={<CiSearch className="text-2xl text-default-400" />}
                                    label="Search"
                                    placeholder="Type to search..."
                                    variant="bordered"
                                    value={searchQuery}
                                    onChange={handleInputChange}
                                    className="flex-1"
                                />
                                <Button
                                    type="submit"
                                    className="bg-primary text-white self-end"
                                    isDisabled={!searchQuery.trim()}
                                >
                                    Search
                                </Button>
                            </form>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default SearchModal;