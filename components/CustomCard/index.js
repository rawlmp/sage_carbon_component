import Heading from 'carbon-react/lib/components/heading';
import Typography from 'carbon-react/lib/components/typography';
import Icon from 'carbon-react/lib/components/icon';
import Link from 'carbon-react/lib/components/link';
import Card from 'carbon-react/lib/components/card';
import CardRow from 'carbon-react/lib/components/card/card-row';
import CardFooter from 'carbon-react/lib/components/card/card-footer';
import CardColumn from 'carbon-react/lib/components/card/card-column';
import { GridContainer, GridItem } from 'carbon-react/lib/components/grid';
import Pod from 'carbon-react/lib/components/pod';
import PodManager from 'carbon-react/lib/components/pod/pod-manager.component';
import { Row, Column } from 'carbon-react/lib/components/row';
import Button from 'carbon-react/lib/components/button';

const CustomCard = () => {
  return (
    <Pod>
      <PodManager>
        <GridContainer gridGap="0" p="0">
          <GridItem
            py="40px"
            pl="20px"
            gridColumn="1 / 8"
            alignSelf="stretch"
            justifySelf="stretch"
          >
            <Row>
              <Column>
                <b>01 November 2021 to 30 November 2021</b>
              </Column>
            </Row>
            <Row>
              <Column>
                <Icon type="calendar" />
                Due in 35 days on 08 January 2022 · Started by Kyle Mayne
              </Column>
            </Row>
            <Row>
              <Column>
                <Link>2 comments</Link>
                <span> </span>
                <Link>1 File</Link>
              </Column>
            </Row>
          </GridItem>
          <GridItem gridColumn="8 / 10" alignSelf="center" justifySelf="center">
            <p>Hola</p>
          </GridItem>
          <GridItem
            gridColumn="10 / 12"
            alignSelf="center"
            justifySelf="center"
          >
            <Button key="basic"> Continue </Button>
          </GridItem>
          <GridItem
            gridColumn="12 / 13"
            alignSelf="center"
            justifySelf="stretch"
          >
            <Icon type="add" />
          </GridItem>
        </GridContainer>
      </PodManager>
    </Pod>
  );
};

export default CustomCard;
