'use client'

import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa'
import { Wrapper, Widget, Icon } from './styles';

export default function WhatsappWidget() {
  return (
    <Widget>
      <Link
        href='https://api.whatsapp.com/send/?phone=6281246529722'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Wrapper>
          <Icon>
            <FaWhatsapp />
          </Icon>
          <div>
            Reach us out
          </div>
        </Wrapper>
      </Link>
    </Widget>
  );
}
