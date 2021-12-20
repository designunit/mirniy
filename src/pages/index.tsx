import { GetStaticProps, NextPage } from 'next'
import { Hero } from 'src/components/Hero'
import { ParallaxProvider } from 'react-scroll-parallax'
import { PageLayout } from 'src/components/PageLayout'
import React, { useContext, useState } from 'react'
import { ConfigContext } from 'src/context/config'
import { NextSeo } from 'next-seo'
import Error from 'next/error'
import { Modal } from 'src/components/Modal'
import { WhatIs } from 'src/components/WhatIs'
import Image from 'next/image'

interface PageProps {

}

const Index: NextPage<PageProps> = props => {

    return (
        <PageLayout
            openModal={() => null}
        >
            <NextSeo
                title={`Мирный`}
                openGraph={{
                    title: `Мирный`,
                    images: [
                        { url: '/static//bg.jpg' },
                    ],
                }}
            />
            <Hero
                titleText='Мирный'
                description={[
                    'Всем привет!',
                    'Это команда развития города Мирный, сформированная при поддержке компании АЛРОСА.',
                    'Мы хотим улучшить город Мирный и превратить его в один из самых комфортных северных городов на Земле.',
                    'Приглашаем вас принять участие в разработке концепции развития Мирного.',
                    'Цель данного проекта — сформировать комплексное видение, на основе которого будет проводиться масштабная работа по улучшению качества городской среды.',
                    'Чем больше жителей предложат свои замечания и идеи по улучшению города, тем более детальной и «народной» получится наша концепция.',
                    'Очень ждём ваши ответы!',
                ]}
            />
        </PageLayout>
    )
}


// export const getStaticProps: GetStaticProps = async (ctx) => {
//     return {
//         props: {

//         }
//     }
// }

export default Index