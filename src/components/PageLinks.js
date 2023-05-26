import { pageLinks } from '../data'

{
  pageLinks.map((link) => {
    return (
      <li key={link.id}>
        <a href={link.href} className='nav-link'>
          {link.text}
        </a>
      </li>
    )
  })
}