'use client'
import Image from 'next/image'
import React from 'react'
import profile from '@/public/profile.png'
import { FlipWords } from '../ui/flip-words';
import { Spotlight } from '../ui/spotlight';
import GithubIcon from '../icons/GithubIcon';
import { FloatingDock } from '../ui/floating-dock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { TextGenerateEffect } from '../ui/text-generate-effect';

export default function Hero() {
    const words = ['Full-stack Developer', 'Frontend Developer', 'Backend Developer', 'Database Management'];
    const links = [
        {
            title: "Github",
            icon: (
                <FontAwesomeIcon icon={faGithub} className='md:text-xl' />
            ),
            href: 'https://github.com/LostInLost'
        },
        {
            title: 'Instagram',
            icon: (
                <FontAwesomeIcon icon={faInstagram} className='md:text-xl' />
            ),
            href: 'https://www.instagram.com/afanhanan10'
        }
    ]
    return (
        <div className="min-h-[600px] flex max-md:flex-col max-md:flex-row-reverse items-center md:justify-between justify-center gap-5">
            <div className='md:text-4xl text-2xl font-normal text-neutral-600 dark:text-neutral-400 antialiased'>
                <Spotlight
                    className="md:top-20 top-[2rem]"
                    fill="white"
                />
                Affansyah Hanan Windharto
                <span className='block'>Sebagai <FlipWords words={words} duration={3000} /> </span>
                <span className="block md:text-xl text-lg text-white/80 font-thin">Siap berkontribusi penuh terhadap perusahaan Anda.</span>
            </div>
            <div className='z-40 relative'>
                <div className="z-50 absolute top-10 -left-10 bg-muted rounded p-1.5">
                    <TextGenerateEffect filter words='"Find the light way with the dark way."' className='text-sm' />
                </div>
                <Image src={profile} className='rounded-full z-40 outline outline-white outline-offset-4' loading='lazy' width={300} height={300} alt='Affansyah Hanan Windharto' />
                <div className="flex items-center justify-center h-[35rem] w-full absolute z-50 top-0 max-md:left-20">
                    <FloatingDock items={links} />
                </div>
            </div>
        </div>
    )
}
