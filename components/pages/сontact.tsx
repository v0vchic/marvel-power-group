'use client'

import * as React from 'react'
import { useState } from 'react'
import { Wrapper } from '@/components/layout/Wrapper'
import { Button } from '@/components/ui/Button'
import { PlugIcon } from '@/components/ui/icons/PlugIcon'
import { Input } from '@/components/ui/Input'

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const [isNameValid, setIsNameValid] = useState(false)
  const [isEmailValid, setIsEmailValid] = useState(false)

  const isFormValid = isNameValid && isEmailValid

  return (
    <section id="contact" className="relative bg-black min-h-196 text-primary">
      <Wrapper className="flex flex-col pt-24 pb-32">
        <div className="grid grid-cols-2 gap-32">
          <div>
            <h3>Contact</h3>
            <div className="w-25 h-1.5 bg-accent my-10" />
            <div className="font-bold text-[40px] leading-[42px]">
              <p>Email us here:</p>
              <a
                href="mailto:info@marvelpowergroup.com"
                className="text-accent border-b-2 border-accent"
              >
                info@marvelpowergroup.com
              </a>
            </div>
          </div>

          <div>
            {!isSubmitted
              ? (
                  <>
                    <p className="max-w-75 font-bold text-[40px] leading-[42px] mb-12">
                      Stay in the loop by getting on our mailing list
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-end">
                      <Input type="text" placeholder="NAME *" onValidityChange={setIsNameValid} required />
                      <Input type="email" placeholder="E-MAIL *" onValidityChange={setIsEmailValid} required />
                      <Button className="px-26 mt-4" icon={<PlugIcon />} type="submit" disabled={!isFormValid}>
                        SEND
                      </Button>
                    </form>
                  </>
                )
              : (
                  <div className="text-primary flex flex-col gap-12">
                    <p className="max-w-85 font-bold text-[40px] leading-12.5">
                      Thank you.
                      <br />
                      Your info has been
                      successfully sent
                    </p>
                    <p className="max-w-104 text-lg leading-6.5">
                      Your can contact us
                      {' '}
                      <a
                        href="mailto:info@marvelpowergroup.com"
                        className="text-accent border-b border-accent"
                      >
                        info@marvelpowergroup.com
                      </a>
                      {' '}
                      if you need additional assistance
                    </p>
                  </div>
                )}
          </div>
        </div>
      </Wrapper>

      <div className="absolute bottom-23 left-0 right-0">
        <div className="w-full grid grid-cols-6 items-end">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className={`w-px justify-self-end ${index === 2 ? 'h-25 bg-accent' : 'h-4 bg-primary'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
