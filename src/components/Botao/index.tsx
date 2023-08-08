import React from 'react';
import './style.scss';

interface PropsBotao{
  children: string
  type?: "button" | "submit" | "reset" | undefined
  onClick?: () => void
}

export default function Botao({children, type, onClick}:PropsBotao) {
  return (
    <button onClick={onClick} type={type} className='botao'>
        {children}
    </button>
  )
}
