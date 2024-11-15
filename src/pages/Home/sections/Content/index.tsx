import React from 'react';
import Container from '@src/components/Container';
import css from './style.module.scss';
import image1 from '@src/assets/home/content/01.jpg';
import image2 from '@src/assets/home/content/02.jpg';
import image3 from '@src/assets/home/content/03.jpg';
import ContentBlock, { ContentBlock as TContentBlock } from '@src/pages/Home/components/ContentBlock';


const content: TContentBlock[] = [
  { tag: "get started", title: "What level of  hiker are you?", description: "Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? ", url: "/get-started", count: 1, image: image1, altImage: "get started" },
  { tag: "Hiking Essentials", title: "Picking the right Hiking Gear!", description: "The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.", url: "/hiking-essentials", count: 2, image: image2, altImage: "Hiking Essentials" },
  { tag: "where you go is the key", title: "Understand Your Map & Timing", description: "To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..", url: "/where-you-go-is-the-key", count: 3, image: image3, altImage: "where you go is the key" },
];

function Index() {
  return (
    <Container>
      <section className={ css.content }>
        {
         content.map(({ tag, title, description, url, count, image, altImage }: Readonly<TContentBlock>) =>
           <ContentBlock
             key={ tag }
             tag={ tag }
             title={ title }
             description={ description }
             url={ url }
             count={ count }
             image={ image }
             altImage={ altImage }
           />
         )
        }
      </section>
    </Container>
  );
}

export default Index;