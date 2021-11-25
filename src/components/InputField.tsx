import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react'
import { useField } from 'formik'

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string
  label: string
  children?: React.ReactNode
  labelSrOnly?: true | 'focusable'
  isRequired?: boolean
}

const InputField = ({
  label,
  labelSrOnly,
  isRequired,
  size: _,
  children,
  ...props
}: InputFieldProps) => {
  const [field, { error }] = useField(props)

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name} srOnly={labelSrOnly}>
        {label}
      </FormLabel>
      <InputGroup borderColor="gray.200">
        <InputLeftElement pointerEvents="none">{children}</InputLeftElement>
        <Input
          {...field}
          {...props}
          id={field.name}
          placeholder={props.placeholder}
          isRequired={isRequired}
        />
      </InputGroup>
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  )
}

export default InputField
