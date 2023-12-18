import { arrayOf, shape, string } from 'prop-types'
import cx from 'classnames'

import { useViewport } from 'hooks/useViewport'

import WhiteRectangle from 'components/WhiteRectangle'
import HeadingSection from 'components/HeadingSection'
import LinkCard from 'components/LinkCard'

import s from './Toolchain.module.scss'
import { aboutPageData } from 'stubs/aboutPageData'
import { Column } from 'components/Column'

type ToolchainProps = {
  className?: string
  data: typeof aboutPageData.toolchain
}

const Toolchain = ({ className, data: { title, description, content } }: ToolchainProps) => {
  const { isMobile } = useViewport()

  return (
    <div className={cx(s.root, className)}>
      <Column type="left" className={s.left}>
        <WhiteRectangle />
        <HeadingSection className={s.heading} title={title} />
        <div className={s.heroDescription}>
          <p>{description}</p>
        </div>
        {!isMobile && <WhiteRectangle />}
      </Column>
      <Column type="right" className={s.right}>
        {!isMobile && <WhiteRectangle />}
        <div className={s.content}>
          {content.map((el) => (
            <LinkCard
              key={el.id}
              className={s.linkCard}
              title={el.title}
              description={el.description}
              linkTo={el.link}
            />
          ))}
        </div>
        <WhiteRectangle />
      </Column>
    </div>
  )
}

export default Toolchain
