import dynamic from 'next/dynamic'

import MainMobileLayout from '@ddanailov/layouts/Mobile/MainMobileLayout'

import PersonalStory from '@ddanailov/components/PersonalStory'
import OpenSourceProjects from '@ddanailov/components/OpenSourceProjects'
import Skills from '@ddanailov/components/Skills'

import Slogan from '@ddanailov/styled/Slogan'

const SocialIcons = dynamic(() => import('@ddanailov/components/SocialIcons'))

const AboutPageMobile = () => <>Mobile</>

export default MainMobileLayout(AboutPageMobile)
