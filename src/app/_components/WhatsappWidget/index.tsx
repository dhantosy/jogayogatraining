'use client'

import { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { format } from 'date-fns'
import { HiChatBubbleLeftRight, HiMiniXCircle } from 'react-icons/hi2'
import { FaWhatsapp } from 'react-icons/fa6'
import { Wrapper, Widget, Icon, TabContent, TabList, TabWrapperInner, TabWrapperOuter, TabTitle, ImageWrapper, ChatTitle, ChatBody, ChatFooter, Chat, ChatBubble, ChatTime, Form } from './styles';
import FormField from './FormField';

export default function WhatsappWidget() {
  const [chatExpand, setChatExpand] = useState(false);
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTab1 = () => {
    setActiveTab('tab1');
  };
  const handleTab2 = () => {
    setActiveTab('tab2');
  };

  const handleWidgetClick = () => {
    setChatExpand(!chatExpand);
  };

  const Tab1 = () => {
    return (
      <Chat>
        <div>
          <ChatTitle>
            <ImageWrapper>
              <Image
                src='/assets/images/logo.png'
                alt=''
                sizes={`100vw, 33vw`}
                fill
                style={{ objectFit: 'cover' }}
                className='image'
              />
            </ImageWrapper>
            <div>
              <div className='name'>Audy</div>
              <div>Typically replies in a few hours</div>
            </div>
          </ChatTitle>
        </div>
        <ChatBody>
          <ChatBubble>
            <div>Hey there 👋</div>
            <div>I`m here to help, so let me know what`s up and I`ll be happy to answer your questions.</div>
            <ChatTime>{format(new Date(), 'HH:mm')}</ChatTime>
          </ChatBubble>
        </ChatBody>
        <ChatFooter>
          <Link
            href='https://api.whatsapp.com/send/?phone=6281246529722'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='button'>
              <Icon><FaWhatsapp /></Icon>
              <div>Start Chat</div>
            </div>
          </Link>
        </ChatFooter>
      </Chat>
    )
  }

  const Tab2 = () => {
    return (
      <Chat>
        <Form>
          <FormField />
        </Form>
      </Chat>
    )
  }

  return (
    <div>
      <TabWrapperOuter $active={chatExpand}>
        <TabWrapperInner className='tabs'>
          <TabList className='tab-link'>
            <TabTitle onClick={handleTab1}
              className={activeTab === 'tab1' ? 'active' : ''}>
              WhatsApp
            </TabTitle>
            <TabTitle
              onClick={handleTab2}
              className={activeTab === 'tab2' ? 'active' : ''}>
              Contact Form
            </TabTitle>
          </TabList>
          <TabContent className='outlet'>
            {activeTab === 'tab1' ? <Tab1 /> : <Tab2 />}
          </TabContent>
        </TabWrapperInner>
      </TabWrapperOuter>
      <Widget onClick={handleWidgetClick}>
        <Wrapper>
          {chatExpand ? <Icon><HiMiniXCircle /></Icon> : (
            <>
              <Icon>
                <HiChatBubbleLeftRight />
              </Icon>
              <div>
                Message Us
              </div>
            </>
          )}
        </Wrapper>
      </Widget>
    </div>
  );
}
