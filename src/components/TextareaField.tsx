import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Textarea,
  useColorModeValue,
} from '@chakra-ui/react'
import { useField } from 'formik'

type TextareaFieldProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  name: string
  label: string
  labelSrOnly?: true | 'focusable'
  isRequired?: boolean
}

const TextareaField = ({
  label,
  labelSrOnly,
  isRequired,
  ...props
}: TextareaFieldProps) => {
  const [field, { error }] = useField(props)

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name} srOnly={labelSrOnly}>
        {label}
      </FormLabel>
      <Textarea
        {...field}
        {...props}
        id={field.name}
        placeholder={props.placeholder}
        isRequired={isRequired}
        borderColor="gray.200"
        _hover={{
          borderColor: useColorModeValue('gray.300', 'gray.600'),
        }}
      />
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  )
}

export default TextareaField
