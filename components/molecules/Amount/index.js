import Typography from 'carbon-react/lib/components/typography';

const Amount = ({ currency, amount }) => {
  const formatted_currency = new Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: currency,
  }).format(amount);
  return (
    <>
      <Typography color="blackOpacity75" variant="p" mb="0">
        Amount due
      </Typography>
      <Typography variant="p" mb="0" alignSelf="right">
        {formatted_currency}
      </Typography>{' '}
    </>
  );
};

export default Amount;
