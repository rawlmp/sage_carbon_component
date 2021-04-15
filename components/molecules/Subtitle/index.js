import Typography from 'carbon-react/lib/components/typography';
import Icon from 'carbon-react/lib/components/icon';

const Subtitle = ({ icon, subtitle, author }) => {
  return (
    <>
      <Typography variant="small" display="flex" pb="1">
        <Icon type={icon} color="blackOpacity55" />
        <Typography lineHeight="24px" color="blackOpacity55" variant="p">
          {subtitle} · Started by {author}
        </Typography>
      </Typography>
    </>
  );
};

export default Subtitle;
