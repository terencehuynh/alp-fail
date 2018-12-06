import remark from 'remark'
import remark2react from 'remark-react'

import readme from '../../README.md'

const HEAD_REGEX = /<!--head-->([\s\S]*)<!--\/head-->/g
const letter = readme.replace(HEAD_REGEX, '')

export const LetterText = remark()
  .use(remark2react)
  .processSync(letter).contents
