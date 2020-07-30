class SEO {
  constructor() {
    this.type = 'website'
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
}

export default SEO
