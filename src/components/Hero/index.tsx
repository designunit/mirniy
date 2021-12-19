import s from './index.module.css'
import { Button } from '../Button'
import { Title } from '../Title'
import React, { useContext } from 'react'
import { ConfigContext } from 'src/context/config'
import Image from 'next/image'
import { Flex } from '../Flex'
import { Section } from '../Section'
import alrosa from '../../../public/static/alrosa.svg'

export const Hero: React.FC<any> = ({ openModal }) => {

    return (
        <div className={s.container}>
            <Image
                src={'/static/bg.jpg'}
                layout='fill'
                objectFit='cover'
                priority
                loading='eager'
            />
            <div className={s.alrosa}>
                <Image
                    src={alrosa}
                    objectFit='cover'
                />
            </div>

            <div className={s.up}>
                <div className={s.h1}>
                    <Title>
                        <div>
                            {'Мирный'}
                        </div>
                    </Title>
                </div>

                <Flex
                    mobileReverse
                    className={s.text}
                >
                    <div className={s.description}>
                        <p>
                            Всем привет! 
                        </p>

                        <p>
                            Это команда развития города Мирный, сформированная при поддержке компании АЛРОСА. 
                        </p>
                        <p>
                            Мы хотим улучшить город Мирный и превратить его в один из самых комфортных северных городов на Земле.
                            Приглашаем вас принять участие в разработке концепции развития Мирного. 
                        </p>
                        <p>
                            Цель данного проекта — сформировать комплексное видение, на основе которого будет проводиться масштабная работа по улучшению качества городской среды.
                        </p>
                        <p>
                            Чем больше жителей предложат свои замечания и идеи по улучшению города, тем более детальной и «народной» получится наша концепция.
                        </p>
                        <p>
                            Очень ждём ваши ответы!
                        </p>
                    </div>
                    <Button
                        href={'https://mesto.io/OOPR6D0CAYYC73M2'}
                    >
                        Заполнить Карту идей
                    </Button>
                </Flex>
            </div>
        </div>
    )
}