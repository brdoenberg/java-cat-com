import LayoutContainer from "@/components/layouts/layout-container";
import {
  Card,
  PlainText
} from "@/components/blocks";
import {
  ProgressBar,
  QuoteBlock,
  StyledButton,
  TextAccordion,
  TextInput,
  TextHeader
} from "@/components/eleements";
import { FadeIn } from "@/components/effects";
import {
  BsFiletypeDocx,
  BsFiletypePdf
} from "react-icons/bs";

const progressValues = Array.from({length: 4}, () => 25 + Math.random() * 65);

export default function SingleBlogPage() {
  return (
    <main>
      <LayoutContainer fixedWidth className={'grid gap-4 lg:grid-cols-[350px_1px_1fr]'}>
        <div className={'order-3 lg:order-1 relative'}>
          <div className={'flex gap-4 flex-col top-4 sticky'}>
            <Card>
              <TextHeader level={6}>Get In Touch</TextHeader>
              <form className={'flex flex-col gap-4'}>
                <TextInput label={'Name'} required name={'name'} />
                <TextInput label={'Email'} required type={'email'} name={'email'} />
                <TextInput label={'Subject'} required name={'subject'} />
                <TextInput label={'Message'} required name={'message'} type={'textarea'} />
                <StyledButton>Submit</StyledButton>
              </form>
            </Card>
            <Card>
              <TextHeader level={6}>Download Now</TextHeader>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <StyledButton className={'w-40 mt-4'}><BsFiletypePdf className={'mr-2'} /> PDF</StyledButton>
              <StyledButton className={'w-40'}><BsFiletypeDocx className={'mr-2'} />DOCX</StyledButton>
            </Card>
          </div>
        </div>
        <div className={'hidden lg:block order-2 bg-[#aaa] my-4  w-px'}></div>
        <div className={'flex flex-col gap-4 order-1 lg:order-3'}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={'https://picsum.photos/800/600'} alt={'Hello World'} className={'w-full aspect-5/3 object-cover'} />
          <PlainText
            className={'flex flex-col gap-4'}
            html={
            '<h1>Hello World</h1>' +
            '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut libero tellus. Morbi vel enim ' +
              'turpis. Nam rhoncus elementum arcu, ut dictum diam consectetur at.' +
            '</p>' +
            '<blockquote>Cras gravida pellentesque mollis. Nulla euismod leo eu augue lacinia vestibulum. Sed justo ' +
              'lorem, tristique nec euismod id, vehicula ac lectus.</blockquote>'
          } />
          <TextHeader level={3}>Lorem ipsum dolor sit amet.</TextHeader>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut libero tellus. Morbi vel enim turpis.
            Nam rhoncus elementum arcu, ut dictum diam consectetur at. Sed facilisis odio ut velit pulvinar, vitae
            lacinia risus varius. Suspendisse tortor felis, lobortis eget neque eget, pretium maximus nisl. Sed eu dui
            sodales, porta odio nec, ultricies tortor. Ut egestas massa quis venenatis lobortis. Suspendisse potenti.
            Nunc non ligula tempus, dictum quam ac, tempor felis. </p>
          <p>Cras gravida pellentesque mollis. Nulla euismod leo eu augue lacinia vestibulum. Sed justo lorem,
            tristique nec euismod id, vehicula ac lectus. Nunc varius eleifend quam non porttitor. Nunc quis vulputate
            sapien. Fusce viverra consequat tellus vitae varius. Nunc laoreet justo nec nulla luctus interdum. Mauris
            eu felis vel urna eleifend sagittis. Phasellus consectetur dolor pretium, vulputate mauris eget, feugiat
            odio. </p>
          <div className={'flex flex-col gap-2'}>
            {Array.from({length: 4}).map((_, i) => (
            <ProgressBar title={'Progress'} key={i} progress={progressValues[i]} />
          ))}
          </div>
          <p>Cras gravida pellentesque mollis. Nulla euismod leo eu augue lacinia vestibulum. Sed justo lorem,
            tristique nec euismod id, vehicula ac lectus. Nunc varius eleifend quam non porttitor. Nunc quis vulputate
            sapien. Fusce viverra consequat tellus vitae varius. Nunc laoreet justo nec nulla luctus interdum. Mauris
            eu felis vel urna eleifend sagittis. Phasellus consectetur dolor pretium, vulputate mauris eget, feugiat
            odio. </p>
          <QuoteBlock>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut libero tellus. Morbi vel enim turpis.
            Nam rhoncus elementum arcu, ut dictum diam consectetur at. Sed facilisis odio ut velit pulvinar, vitae
            lacinia risus varius. Suspendisse tortor felis, lobortis eget neque eget, pretium maximus nisl. Sed eu dui
            sodales, porta odio nec, ultricies tortor. Ut egestas massa quis venenatis lobortis. Suspendisse potenti.
            Nunc non ligula tempus, dictum quam ac, tempor felis. </p>
          </QuoteBlock>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut libero tellus. Morbi vel enim turpis.
            Nam rhoncus elementum arcu, ut dictum diam consectetur at. Sed facilisis odio ut velit pulvinar, vitae
            lacinia risus varius. Suspendisse tortor felis, lobortis eget neque eget, pretium maximus nisl. Sed eu dui
            sodales, porta odio nec, ultricies tortor. Ut egestas massa quis venenatis lobortis. Suspendisse potenti.
            Nunc non ligula tempus, dictum quam ac, tempor felis. </p>
          <div className={'grid grid-cols-4 gap-4'}>
            <StyledButton>Button 1</StyledButton>
            <StyledButton>Button 2</StyledButton>
            <StyledButton>Button 3</StyledButton>
            <StyledButton>Button 4</StyledButton>
          </div>
          <hr className={'mt-4 m-2'}/>
          <FadeIn>
            <div className={'grid grid-cols-2 gap-4'}>
              <div className={'col-span-full flex flex-col gap-4'}>
                <TextHeader level={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TextHeader>
                <p>Cras gravida pellentesque mollis. Nulla euismod leo eu augue lacinia vestibulum. Sed justo lorem,
                  tristique nec euismod id, vehicula ac lectus. Nunc varius eleifend quam non porttitor. Nunc quis vulputate
                  sapien. Fusce viverra consequat tellus vitae varius. Nunc laoreet justo nec nulla luctus interdum. Mauris
                  eu felis vel urna eleifend sagittis. Phasellus consectetur dolor pretium, vulputate mauris eget, feugiat
                  odio. </p>
              </div>
              <div className={'flex flex-col gap-4'}>
                {Array.from({length: 3}).map((_, i) => (
                  <TextAccordion key={i} title={'Accordion'} open={i === 1}>
                    <p> Phasellus ut viverra neque. Donec condimentum mauris vitae lectus aliquet suscipit. Sed eget
                      aliquet neque. Pellentesque lobortis lorem ac ipsum imperdiet, quis imperdiet sem pretium. Curabitur
                      est libero, feugiat ac varius dictum, venenatis ac purus. Vestibulum tristique mauris diam, in
                      vulputate est fringilla a. Nam non libero in orci iaculis malesuada. Ut vitae nisi sem. </p>
                  </TextAccordion>
                ))}
              </div>
              <div className={'flex flex-col gap-4'}>
                {Array.from({length: 2}).map((_, i) => (
                  <TextAccordion key={i} title={'Accordion'}>
                    <p> Phasellus ut viverra neque. Donec condimentum mauris vitae lectus aliquet suscipit. Sed eget
                      aliquet neque. Pellentesque lobortis lorem ac ipsum imperdiet, quis imperdiet sem pretium. Curabitur
                      est libero, feugiat ac varius dictum, venenatis ac purus. Vestibulum tristique mauris diam, in
                      vulputate est fringilla a. Nam non libero in orci iaculis malesuada. Ut vitae nisi sem. </p>
                  </TextAccordion>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </LayoutContainer>
    </main>
  );
}
