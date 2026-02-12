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
    <section id="contact" className="relative bg-black desktop:min-h-196 text-primary anchor-offset">
      <Wrapper className="flex flex-col pt-14 tablet:pt-24 pb-17.5 tablet:pb-32">
        <div className="flex flex-col tablet:flex-row gap-11.5 lg:gap-32">
          <div>
            <h3>Contact</h3>

            <div className="w-16.5 h-1 mobile:w-25 mobile:h-1.5 bg-accent mt-9 mb-6 tablet:my-10" />

            <div className="font-bold text-contact">
              <p>Email us here:</p>
              <a
                href="mailto:info@marvelpowergroup.com"
                className="text-accent border-b-2 border-accent break-words"
              >
                info@marvelpowergroup.com
              </a>
            </div>
          </div>

          <div className="w-full">
            {!isSubmitted
              ? (
                  <div className="flex flex-col gap-6 tablet:gap-10">
                    <p className="max-w-75 font-bold text-contact">
                      Stay in the loop by getting on our mailing list
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 tablet:gap-4 items-end">
                      <Input type="text" placeholder="NAME *" onValidityChange={setIsNameValid} required />
                      <Input type="email" placeholder="E-MAIL *" onValidityChange={setIsEmailValid} required />
                      <Button className="px-17 tablet:px-18 desktop:px-26" icon={<PlugIcon />} type="submit" disabled={!isFormValid}>
                        SEND
                      </Button>
                    </form>
                  </div>
                )
              : (
                  <div className="text-primary flex flex-col gap-5 tablet:gap-12">
                    <p className="max-w-85 font-bold text-contact">
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
                        className="text-accent border-b border-accent break-words"
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

      <div className="absolute bottom-23 left-0 right-0 hidden desktop:block">
        <div className="w-full grid grid-cols-6 items-end">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={`divider-${i}`}
              className={`w-px justify-self-end ${i === 2 ? 'h-25 bg-accent' : 'h-4 bg-primary'
              }`}
            />
          ))}

        </div>
      </div>
    </section>
  )
}

export default Contact
