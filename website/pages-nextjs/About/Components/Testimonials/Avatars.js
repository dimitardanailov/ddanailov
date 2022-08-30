import Avatar from '@about/Components/Avatar'

import {
  davidTarbay,
  heidi,
  henry,
  ivelin,
  mo,
  tsvetan,
  hristo,
  vladimir,
  bayu,
  fanny,
  antoan,
  annaMetelska,
  ajengPuspa,
  ashton,
  mikeValnev,
} from 'data/testimonials'

import noImageBase64Version from 'data/testimonials/images/noImage'

import Image from './Antoan/antoan.webp'

function PersonAvatar({href, src, title}) {
  return <Avatar href={href} src={src} title={title} />
}

export function HeidiAvatar() {
  return PersonAvatar({
    href: heidi.linkedin.profile,
    src: heidi.linkedin.image,
    title: heidi.title,
  })
}

export function HenryAvatar() {
  return PersonAvatar({
    href: henry.linkedin.profile,
    src: henry.linkedin.image,
    title: henry.title,
  })
}

export function IvelinAvatar() {
  return PersonAvatar({
    href: ivelin.linkedin.profile,
    src: ivelin.linkedin.image,
    title: ivelin.title,
  })
}

export function MoAvatar() {
  return PersonAvatar({
    href: mo.linkedin.profile,
    src: mo.linkedin.image,
    title: mo.linkedin.title,
  })
}

export function HristoAvatar() {
  return PersonAvatar({
    href: hristo.linkedin.profile,
    src: hristo.linkedin.image,
    title: hristo.title,
  })
}

export function TsvetanAvatar() {
  return PersonAvatar({
    href: tsvetan.linkedin.profile,
    src: tsvetan.linkedin.image,
    title: tsvetan.title,
  })
}

export function VladimirAvatar() {
  return PersonAvatar({
    href: vladimir.linkedin.profile,
    src: vladimir.linkedin.image,
    title: vladimir.title,
  })
}

export function BayuAvatar() {
  return PersonAvatar({
    href: bayu.linkedin.profile,
    src: bayu.linkedin.image,
    title: bayu.title,
  })
}

export function FannyAvatar() {
  return PersonAvatar({
    href: fanny.linkedin.profile,
    src: fanny.linkedin.image,
    title: fanny.title,
  })
}

export function AntoanAvatar() {
  return PersonAvatar({
    href: antoan.linkedin.profile,
    src: Image,
    title: antoan.title,
  })
}

export function DavidTarbayAvatar() {
  return PersonAvatar({
    href: davidTarbay.linkedin.profile,
    src: davidTarbay.linkedin.image,
    title: davidTarbay.title,
  })
}

export function AnnaMetelskaAvatar() {
  return PersonAvatar({
    href: annaMetelska.linkedin.profile,
    src: annaMetelska.linkedin.image,
    title: annaMetelska.title,
  })
}

export function AjengPuspaAvatar() {
  return PersonAvatar({
    href: ajengPuspa.linkedin.profile,
    src: ajengPuspa.linkedin.image,
    title: ajengPuspa.title,
  })
}

export function AshtonAvatar() {
  return PersonAvatar({
    href: ashton.externalLink,
    src: noImageBase64Version,
    title: ashton.title,
  })
}

export function MikeValnevAvatar() {
  return PersonAvatar({
    href: mikeValnev.linkedin.profile,
    src: mikeValnev.linkedin.image,
    title: mikeValnev.title,
  })
}
