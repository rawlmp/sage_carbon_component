import Link from 'carbon-react/lib/components/link';
import VerticalDivider from 'carbon-react/lib/components/vertical-divider';

const Links = ({ comments, files }) => {
  const filesText = () => {
    if (files.length > 1) return `${files.length} files`;
    if (files.length == 1) return `1 file`;
    return `No files`;
  };
  const commentsText = () => {
    if (comments.length > 1) return `${comments.length} comments`;
    if (comments.length == 1) return `1 comment`;
    return `No comments`;
  };
  return (
    <>
      <Link>{commentsText()}</Link>
      <VerticalDivider displayInline px="1" tint={100} />
      <Link>{filesText()}</Link>
    </>
  );
};

export default Links;
