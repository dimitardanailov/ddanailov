class SEO {
  constructor() {
    this.type = 'website'
    this.image = {
      path: 'https://ddanailov.dev/javascript-consultant.png',
      height: '2160',
      width: '3840',
    }
  }

  get title() {
    return this._title
  }

  set title(_title) {
    this._title = _title
  }

  get canonicalTag() {
    return this._canonicalTag
  }

  set canonicalTag(_canonicalTag) {
    this._canonicalTag = _canonicalTag
  }

  get description() {
    return this._description
  }

  set description(_description) {
    this._description = _description
  }

  get type() {
    return this._type
  }

  set type(_type) {
    this._type = _type
  }

  get image() {
    return this._image
  }

  set image({path, width, height}) {
    this._image = {
      path,
      height,
      width,
    }
  }

  setImagePath(path) {
    this.image = {
      path,
      width: this.image.width,
      height: this.image.height,
    }
  }
}

export default SEO
