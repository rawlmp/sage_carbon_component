import Icon from 'carbon-react/lib/components/icon'
import { GridContainer, GridItem } from 'carbon-react/lib/components/grid'
import Pod from 'carbon-react/lib/components/pod'
import PodManager from 'carbon-react/lib/components/pod/pod-manager.component'
import Button from 'carbon-react/lib/components/button'

import Title from '../../molecules/Title'
import Subtitle from '../../molecules/Subtitle'
import Links from '../../molecules/Links'
import Amount from '../../molecules/Amount'

const CustomPod = ({ task }) => {
  const { title, subtitle, links, amount } = task
  const { text: titleText } = title
  const { text: subtitleText, icon, author } = subtitle
  const { currency, amount: totalAmount } = amount

  const handleClick = () => {
    // console.info('Click')
  }

  return (
    <Pod padding='none' style={{ marginBottom: '10px' }}>
      <PodManager>
        <GridContainer gridGap='0' p='0'>
          <GridItem
            pt='20px'
            pb='15px'
            pl='15px'
            gridColumn='1 / 9'
            alignSelf='stretch'
            justifySelf='stretch'
          >
            <Title title={titleText} />
            <Subtitle icon={icon} subtitle={subtitleText} author={author} />
            <Links {...links} />
          </GridItem>
          <GridItem
            gridColumn='9 / 11'
            alignSelf='center'
            justifySelf='right'
            pr='2'
          >
            <Amount currency={currency} amount={totalAmount} />
          </GridItem>
          <GridItem
            gridColumn='11 / 12'
            alignSelf='center'
            justifySelf='center'
          >
            <Button buttonType='primary' onClick={() => handleClick()}>
              {' '}
              Continue{' '}
            </Button>
          </GridItem>
          <GridItem
            gridColumn='12 / 13'
            alignSelf='center'
            justifySelf='center'
          >
            <Icon type='ellipsis_vertical' />
          </GridItem>
        </GridContainer>
      </PodManager>
    </Pod>
  )
}

export default CustomPod
