import { useEffect, useState } from "react";
import { Flex, Box, Text, Icon, Select, Input, Spinner, Button } from '@chakra-ui/react';
import { useRouter } from "next/router";
import { MdCancel } from 'react-icons/md';
import Image from "next/image";

import { filterData, getFilterValues } from "@/utils/filterData";
const SearchFilters =() => {
    const router = useRouter();
    const [filters, setFilters] = useState(filterData);

    const searchProperties = (filterValues) =>{
        const path = router.pathname;
        const { query } = router;

        const values = getFilterValues(filterValues);

        values.forEach((item) => {
            query[item.name] = item.value
        })

        router.push({ pathname: path, query})
    }
    return(
        <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">
            {filters.map((filter) => (
                <Box key={filter.queyName}>
                    <Select 
                        placeholder={filter.placeholder}
                        w="fit-content"
                        p="2"
                        onChange={(e) => searchProperties({[filter.queyName] : e.target.value})}>
                        
                        {filter?.items?.map((item) => (
                            <option value={item.value} hey={item.value}>{item.name}
                            </option>
                        ))}
                    </Select>

                </Box>
            ))}
        </Flex>
    )
};

export default SearchFilters;