import remark from 'remark'
import remark2react from 'remark-react'
import { Paragraph, Link } from 'fannypack'

import readme from '../../README.md'

const HEAD_REGEX = /<!--head-->([\s\S]*)<!--\/head-->/g
const letter = readme.replace(HEAD_REGEX, '')

const options = {
  remarkReactComponents: {
    p: Paragraph,
    a: Link,
  },
}

export const LetterText = remark()
  .use(remark2react, options)
  .processSync(letter).contents
