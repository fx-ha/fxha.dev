import { Button, Link } from '@chakra-ui/react'

type TechButtonProps = {
  href: string
  children: React.ReactNode
}

const TechButton = ({ href, children }: TechButtonProps) => {
  return (
    <Link
      href={href}
      isExternal
      mx={1}
      mb={2}
      _hover={{ textDecoration: 'none' }}
    >
      <Button size="sm">{children}</Button>
    </Link>
  )
}

export default TechButton
