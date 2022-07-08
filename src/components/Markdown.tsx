import { FC } from 'react'
import type * as types from 'types'

export type Props = { text: types.Markdown; className?: string } & types.StackbitFieldPath

export const Markdown: FC<Props> = (props) => {
  const { text, className, 'data-sb-field-path': fieldPath } = props

  return <div className={className} data-sb-field-path={fieldPath} dangerouslySetInnerHTML={{ __html: text.html }} />
}
