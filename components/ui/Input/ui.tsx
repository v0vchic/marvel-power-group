'use client'
import type { ChangeEvent, FC, FocusEvent } from 'react'
import {
  useEffect,
  useId,
  useState,
} from 'react'

interface InputProps {
  type?: string
  placeholder?: string
  required?: boolean
  onValidityChange?: (isValid: boolean) => void
  onValueChange?: (value: string) => void
}

export const Input: FC<InputProps> = ({
  type = 'text',
  placeholder = '',
  required = false,
  onValidityChange,
  onValueChange,
}) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const id = useId()
  const errorId = `${id}-error`

  const validate = (val: string) => {
    if (required && !val.trim()) {
      return 'This field is required'
    }

    if (type === 'email' && val) {
      const emailRegex = /^[^\s@]+@[^\s@][^\s.@]*\.[^\s@]+$/
      if (!emailRegex.test(val)) {
        return 'Please enter a valid email address'
      }
    }

    return ''
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setValue(val)
    onValueChange?.(val)
    const validationError = validate(val)
    setError(validationError)
  }

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const validationError = validate(e.target.value)
    setError(validationError)
  }

  useEffect(() => {
    const isValid = !error && (!required || value.trim() !== '')
    onValidityChange?.(isValid)
  }, [error, value, required, onValidityChange])

  return (
    <div className="w-full">
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={handleChange}
        onBlur={handleBlur}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={`w-full px-5 py-4 bg-primary text-black placeholder:text-black outline-none focus-visible:ring-4 focus-visible:ring-accent ${
          error ? 'ring-2 ring-red-500' : ''
        }`}
      />

      {error && (
        <p
          id={errorId}
          className="mt-2 text-sm text-red-500"
          aria-live="polite"
        >
          {error}
        </p>
      )}
    </div>
  )
}
