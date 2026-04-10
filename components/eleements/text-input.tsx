'use client'

import {useId, useState} from "react";

type TextInputProps = {
  label: string,
  required?: boolean,
  name?: string,
  type?: string
}

export function TextInput({label, required = false, name = '', type = 'text'}: TextInputProps) {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);
  const floated = focused || value.length > 0;

  const id = useId();

  const sharedProps = {
    name,
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setValue(e.target.value),
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    required,
    'aria-required': required,
    'aria-describedby': id,
  };

  return (
    <div className={'flex flex-col gap-1 bg-white relative'}>
      <label id={id} className={`w-full absolute left-2 transition-all duration-200 pointer-events-none
      ${floated ? 'top-1 text-xs text-[#888]' : `top-0 h-full flex flex-row ${type == 'textarea' ? 'pt-2' : 'items-center'} text-base`}`}
      htmlFor={name}>
        {label}{required && <span className={'text-red-500 ml-1'}>*</span>}
      </label>
      { type != 'textarea'
        ? <input className={'h-8 mt-4 outline-none p-2'} type={type} {...sharedProps} />
        : <textarea className={'mt-4 outline-none p-2'} rows={4} {...sharedProps} />
      }
    </div>
  )
}
