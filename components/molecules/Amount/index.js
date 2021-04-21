import Typography from 'carbon-react/lib/components/typography'

const Amount = ({ currency, amount }) => {
  const formattedCurrency = new Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: currency ?? 'USD'
  }).format(amount)
  return (
    <>
      <Typography color='blackOpacity75' variant='p' mb='0'>
        Amount due
      </Typography>
      <Typography variant='p' mb='0' alignSelf='right'>
        {formattedCurrency}
      </Typography>{' '}
    </>
  )
}

export default Amount
