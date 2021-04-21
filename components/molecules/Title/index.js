import Typography from 'carbon-react/lib/components/typography'
const Title = ({ title }) => {
  return (
    <Typography variant='h3' pb='1'>
      {title ?? 'No title'}
    </Typography>
  )
}

export default Title
