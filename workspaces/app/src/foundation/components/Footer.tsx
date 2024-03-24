import {useSetAtom} from 'jotai';
import React, {Suspense} from 'react';
import styled from 'styled-components';

import {DialogContentAtom} from '../atoms/DialogContentAtom';
import {Color, Space} from '../styles/variables';

import {Box} from './Box';
import {Button} from './Button';
import {Flex} from './Flex';


const TermDialogContentLazy = React.lazy(() => import("./internal/TermDialogContent"));
const CompanyDialogContentLazy = React.lazy(() => import("./internal/CompanyDialogContent"));
const ContactyDialogContentLazy = React.lazy(() => import("./internal/ContactDialogContent"));
const QuestionDialogContentLazy = React.lazy(() => import("./internal/QuestionDialogContent"));
const OverviewDialogContentLazy = React.lazy(() => import("./internal/OverviewDialogContent"));

const _Button = styled(Button)`
  color: ${Color.MONO_A};
`;


export const Footer: React.FC = () => {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);


  const updateDialogContent = useSetAtom(DialogContentAtom);


  const handleRequestToTermDialogOpen = () => {

    updateDialogContent(
        <Suspense fallback={<div>Loading...</div>}>
          <TermDialogContentLazy/>
        </Suspense>,
    );
  };

  const handleRequestToContactDialogOpen = () => {
    updateDialogContent(
        <Suspense fallback={<div>Loading...</div>}>
          <ContactyDialogContentLazy/>
        </Suspense>,
    );
  };

  const handleRequestToQuestionDialogOpen = () => {
    updateDialogContent(
        <Suspense fallback={<div>Loading...</div>}>
          <QuestionDialogContentLazy/>
        </Suspense>,
    );
  };

  const handleRequestToCompanyDialogOpen = () => {
    updateDialogContent(
        <Suspense fallback={<div>Loading...</div>}>
          <CompanyDialogContentLazy/>
        </Suspense>,
    );
  };

  const handleRequestToOverviewDialogOpen = () => {
    updateDialogContent(
        <Suspense fallback={<div>Loading...</div>}>
          <OverviewDialogContentLazy/>
        </Suspense>
        ,
    );
  };

  return (
      <Box as="footer" backgroundColor={Color.Background} p={Space * 1}>
        <Flex align="flex-start" direction="column" gap={Space * 1} justify="flex-start">
          <img alt="Cyber TOON" src="/assets/cyber-toon.svg"/>
          <Flex align="start" direction="row" gap={Space * 1.5} justify="center">
            <_Button disabled={!isClient} onClick={handleRequestToTermDialogOpen}>
              利用規約
            </_Button>
            <_Button disabled={!isClient} onClick={handleRequestToContactDialogOpen}>
              お問い合わせ
            </_Button>
            <_Button disabled={!isClient} onClick={handleRequestToQuestionDialogOpen}>
              Q&A
            </_Button>
            <_Button disabled={!isClient} onClick={handleRequestToCompanyDialogOpen}>
              運営会社
            </_Button>
            <_Button disabled={!isClient} onClick={handleRequestToOverviewDialogOpen}>
              Cyber TOONとは
            </_Button>
          </Flex>
        </Flex>
      </Box>
  );
};
