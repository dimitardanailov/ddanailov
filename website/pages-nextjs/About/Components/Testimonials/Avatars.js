import Avatar from '@about/Components/Avatar'

import {
  heidi,
  henry,
  ivelin,
  mo,
  tsvetan,
  hristo,
  vladimir,
  bayu,
} from 'data/testimonials'

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
