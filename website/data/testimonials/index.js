import dynamic from 'next/dynamic'

const loading = {
  loading: () => <p>Loading...</p>,
}

export const heidi = {
  name: 'Heidi Lund',
  linkedin: {
    profile: 'https://www.linkedin.com/in/heidilundproductmanager',
    image:
      'https://media-exp1.licdn.com/dms/image/C4E03AQHGevnu6Z8NZw/profile-displayphoto-shrink_200_200/0?e=1590624000&v=beta&t=X39amMwD-8dyLFsPSJSkjO55H6slKHW7viGqZWI24cw',
  },
  title:
    'Product Manager, Educational Software; Pragmatic Marketing Certified: Level VI',
  component: dynamic(import('data/testimonials/Heidi'), loading),
}

export const henry = {
  name: 'Henry Clough',
  linkedin: 'https://www.linkedin.com/in/henryclough/',
  title: 'Chairperson, Asian Absolute | Translation and Localisation Services',
}

export const ivelin = {
  name: 'Ivelin Ivanov',
  linkedin: {
    title: 'Company Owner',
    profile: 'https://www.linkedin.com/in/ivelinivanov158/',
    image:
      'https://media-exp1.licdn.com/dms/image/C4D03AQHNOZQoZHcutg/profile-displayphoto-shrink_800_800/0?e=1591228800&v=beta&t=4wE5W6N2dhPcYr3zr1HN2t2DvWVlcGu8S3sp5I-_1fA',
  },
}
