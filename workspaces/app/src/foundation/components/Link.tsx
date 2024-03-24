import {Link as ReactLink} from 'react-router-dom'

type Props = {
  children: React.ReactNode;
} & JSX.IntrinsicElements['a'];

export const Link: React.FC<Props> = ({children, href,}) => {
  return (
      <ReactLink to={href ?? '/'}>
        {children}
      </ReactLink>
  );
};
