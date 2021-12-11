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
            <Hero />
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