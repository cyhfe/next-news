/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import Link from 'next/link'
export default function Header(){
  return (
    <div>
      <Link href="/">
        <a>what's next</a>
      </Link>
    </div>
  )
}