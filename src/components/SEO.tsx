import { Helmet } from 'react-helmet-async';

const SEOComponent = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Helmet>
      <title>Portafolio | {title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default SEOComponent;
