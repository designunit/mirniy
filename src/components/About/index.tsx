import s from './styles.module.css'
import Image from 'next/image'
import React from 'react'
import { Article } from '../Article'
import { Button } from '../Button'
import { Section } from '../Section'
import { Title } from '../Title'
import Ratio from 'react-ratio'

export const About: React.FC = () => (
    <Section>
        <Title level={2} style={{ color: 'var(--color-blue)' }}>
            Концепция
        </Title>
        <div className={s.container}>
            <Ratio ratio={1}>
                <Image
                    src='/static/placeholder.jpg'
                    layout='fill'
                    objectFit='cover'
                />
            </Ratio>
            <div className={s.text}>
                <p>
                    В 2019 году жители Урая выбрали набережную реки Конды для участия во Всероссийском конкурсе лучших проектов создания комфортной городской среды в малых городах и исторических поселениях Министерства строительства РФ. Победители конкурса получают на реализацию от 50 до 100 миллионов. Урайцы участвовали в опросах и встречах, где
                    обсуждали задачи и свое видение развития территории.
                </p>
                <p>
                    В 2019 году жители Урая выбрали набережную реки Конды для участия во Всероссийском конкурсе лучших проектов создания комфортной городской среды в малых городах и исторических поселениях Министерства строительства РФ. Победители конкурса получают на реализацию от 50 до 100 миллионов. Урайцы участвовали в опросах и встречах, где обсуждали задачи и свое видение развития территории.
                </p>
                <p>
                    В 2019 году жители Урая выбрали набережную реки Конды для участия во Всероссийском конкурсе лучших проектов создания комфортной городской среды в малых городах
                </p>
                <Button
                    theme='red'
                    style={{
                        width: '100%',
                        marginTop: 'auto',
                    }}
                >
                    хочу помочь и порисовать на карте
                </Button>
            </div>
        </div>
    </Section>

)
