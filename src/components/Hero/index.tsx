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
                            Всем привет! Это команда развития города Мирный, сформированная при поддержке компании АЛРОСА. Мы хотим улучшить город Мирный и превратить его в самый кофортный северный город на Земле.
                        </p>
                        <p>
                            Приглашаем вас принять участие в разработке концепции пространственного развития Мирного. Цель данной концепции – сформировать комплексное видение ситуации на основе которого будет проводиться масштабная работа по улучшению качества городской среды. Чем больше жителей предложат своих идей по улучшению города – тем более детальной и реализуемой получится наша концепция.
                        </p>
                        <p>
                            Очень ждём ваших ответов!
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