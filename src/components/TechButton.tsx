import { Button, Link } from '@chakra-ui/react'

type TechButtonProps = {
  href: string
  text: string
}

const TechButton = ({ href, text }: TechButtonProps) => {
  return (
    <Link
      href={href}
      isExternal
      mx={1}
      mb={2}
      _hover={{ textDecoration: 'none' }}
    >
      <Button size="sm">{text}</Button>
    </Link>
  )
}

export default TechButton
