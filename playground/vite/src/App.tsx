import { useTs, setLocale } from '@terai/react'

export default function App() {
  const { ts } = useTs()

  return (
    <div>
      <button onClick={() => setLocale('es')}>es</button>
      <button onClick={() => setLocale('en')}>en</button>
      <button onClick={() => setLocale('it')}>it</button>
      <p>{ts`From the endless list of translation libraries, why should you choose Terai?`}</p>

      <h2>{ts`Backstory`}</h2>

      <p>
        {ts`The world of business and technology is rapidly expanding, with global growth as a common objective for many projects.\n
        However, language barriers can be a significant roadblock to entering new markets.
        While English dominates the internet, it caters to only a quarter of the world's internet users.`}
      </p>

      <p>
        {ts`To truly win the trust of consumers in these diverse markets,
      products and services must not only "speak" their language but also provide a local look and feel.
      This goes beyond mere translation; it involves a comprehensive localization process
      that takes into account local expectations, currencies, legal requirements, and more.`}
      </p>

      <p>{ts`For companies with genuine global aspirations, embracing professional localization services powered by modern technology is not just an option; it's a necessity.`}</p>

      <h2>{ts`The Stagnation of Localization`}</h2>
      <p>{ts`The rapid evolution of the web over the past decade has transformed the way we build and deliver software. However, one area that has lagged behind is localization. Traditional localization processes often feel stuck in the past, relying on outdated methods that don't align with the agility and innovation seen in other aspects of software development.`}</p>
      <p>{ts`But it doesn't have to be this way. We're here to change that.`}</p>

      <h2>{ts`A New Approach to Localization`}</h2>
      <p>{ts`In 2023, we embarked on a journey to revolutionise localization. Our mission was born out of frustration with the complexities of managing translation systems for our own projects. We understood that there had to be a better way, and that's how Terai was born.`}</p>
      <p>{ts`Terai represents a modern approach to localization, utilizing cutting-edge technology and forward-thinking strategies to break free from the constraints of the past:`}</p>

      <ul>
        <li>{ts`Static Extraction: Terai employs static extraction to meticulously gather your project's messages, ensuring a precise and efficient localization process.`}</li>
        <li>{ts`Codegen: Terai automates the creation of a locale system, seamlessly structured around the extracted data, simplifying the management of translations.`}</li>
        <li>{ts`Performance: Terai is powered by a state-of-the-art tech stack, ensuring top-tier performance for your application.`}</li>
        <li>{ts`Developer Experience: Terai prioritizes a superb developer experience while offering a rich set of features such as code splitting, local cache support, and more.`}</li>
        <li>{ts`Flexibility: You have the freedom to choose the translator that best suits your preferences.`}</li>
        <li>{ts`Customization: Tailor your own implementation to perfectly align with your specific use-case, granting you full control over the localization process.`}</li>
      </ul>

      <p>{ts`Join us in reimagining localization and unlocking the full potential of your global expansion strategy. Welcome to the future of localization with Terai. 🌐🚀`}</p>
    </div>
  )
}
