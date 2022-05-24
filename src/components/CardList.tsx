import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

export interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState('');

  const handleImage = (url: string) => {
    setSelectedImage(url);
    onOpen();
  };

  return (
    <>
      <SimpleGrid columns={3} spacing="40px">
        {cards &&
          cards.map((card, index) => (
            <Card
              key={index}
              data={card}
              viewImage={() => handleImage(card.url)}
            />
          ))}
      </SimpleGrid>

      <ModalViewImage
        isOpen={isOpen}
        onClose={onClose}
        imgUrl={selectedImage}
      />
    </>
  );
}
