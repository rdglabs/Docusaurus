import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Automate Everything  ',
    Svg: require('@site/static/img/Automate.svg').default,
    description: (
      <>
        Automate everything, and enjoy the show
      </>
    ),
  },
  {
    title: 'Focused on IT',
    Svg: require('@site/static/img/IT.svg').default,
    description: (
      <>
        All things regarding Microsoft 365, Entra, Azure, Windows Server, linux, open source!
      </>
    ),
  },
  {
    title: 'Powered by Coffee',
    Svg: require('@site/static/img/coffee.svg').default,
    description: (
      <>
        Nothing beats a good cup of coffee to keep moving along. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
