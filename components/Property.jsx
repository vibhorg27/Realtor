import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text, Avatar} from '@chakra-ui/react';
import { Fabed, Fabath} from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

const Property = ({property: {coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalId}}) => (
    <Link href={`/property/${externalId}`} passHref>
        <Flex flexWrap='wrap' w="420px" p="5" paddingTop="0" justifyContent="flex-start" cursor= "pointer">
            <Box>
                <Image src= {coverPhoto ? coverPhoto.url : defaultImage} />
            </Box>
        </Flex>
    </Link>
);

export default Property;
