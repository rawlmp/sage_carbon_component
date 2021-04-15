import Icon from 'carbon-react/lib/components/icon';
import { GridContainer, GridItem } from 'carbon-react/lib/components/grid';
import Pod from 'carbon-react/lib/components/pod';
import PodManager from 'carbon-react/lib/components/pod/pod-manager.component';
import Button from 'carbon-react/lib/components/button';

import Title from '../../molecules/Title';
import Subtitle from '../../molecules/Subtitle';
import Links from '../../molecules/Links';
import Amount from '../../molecules/Amount';

const CustomPod = ({ task }) => {
  const { title, subtitle, links, amount } = task;
  const { text: title_text } = title;
  const { text: subtitle_text, icon, author } = subtitle;
  const { comments, files } = links;
  const { currency, amount: total_amount } = amount;

  return (
    <Pod padding="none" style={{ marginBottom: '10px' }}>
      <PodManager>
        <GridContainer gridGap="0" p="0">
          <GridItem
            pt="20px"
            pb="15px"
            pl="15px"
            gridColumn="1 / 9"
            alignSelf="stretch"
            justifySelf="stretch"
          >
            <Title title={title_text} />
            <Subtitle icon={icon} subtitle={subtitle_text} author={author} />
            <Links comments={comments} files={files} />
          </GridItem>
          <GridItem
            gridColumn="9 / 11"
            alignSelf="center"
            justifySelf="right"
            pr="2"
          >
            <Amount currency={currency} amount={total_amount} />
          </GridItem>
          <GridItem
            gridColumn="11 / 12"
            alignSelf="center"
            justifySelf="center"
          >
            <Button buttonType="primary"> Continue </Button>
          </GridItem>
          <GridItem
            gridColumn="12 / 13"
            alignSelf="center"
            justifySelf="center"
          >
            <Icon type="ellipsis_vertical" />
          </GridItem>
        </GridContainer>
      </PodManager>
    </Pod>
  );
};

export default CustomPod;
