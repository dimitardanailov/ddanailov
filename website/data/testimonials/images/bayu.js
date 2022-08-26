const image =
  'data:image/webp;base64,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'

export default image
